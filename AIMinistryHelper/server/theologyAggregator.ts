import fetch from "node-fetch";
import OpenAI from "openai";

// Setup OpenAI client with your API key from environment
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export class TheologyAggregator {
  /**
   * Fetches a Bible verse using Bible-API.
   * @param reference - Bible reference, e.g. "John 3:16"
   */
  static async getBibleVerse(reference: string): Promise<string> {
    try {
      const response = await fetch(`https://bible-api.com/${encodeURIComponent(reference)}`);
      const data = await response.json();
      if (data.text) {
        return `Bible-API (${reference}):\n${data.text}`;
      }
      return `Bible-API: Verse not found for "${reference}".`;
    } catch (error) {
      return "Bible-API: Error fetching verse.";
    }
  }

  /**
   * Fetches topical Bible results from OpenBible.info.
   * @param topic - Topic or question, e.g. "forgiveness"
   */
  static getTopicalBibleAnswer(topic: string): string {
    return `Topical Bible results: https://www.openbible.info/topics/${encodeURIComponent(topic)}`;
  }

  /**
   * STEP Bible resource link.
   * @param query - Subject or passage to lookup
   */
  static getStepBibleResource(query: string): string {
    return `STEP Bible search: https://www.stepbible.org/?q=search&q=${encodeURIComponent(query)}`;
  }

  /**
   * Calls OpenAI to generate an apologetics answer to the question.
   */
  static async getOpenAIApologeticsAnswer(question: string): Promise<string> {
    try {
      const systemPrompt = 
        "You are an apologetics assistant. Given a question or objection to Christianity, write a clear, biblically grounded, and persuasive apologetics answer suitable for a thoughtful audience. Use Scripture and reasoning where appropriate, and respond in several paragraphs if needed.";

      const completion = await openai.chat.completions.create({
        model: "gpt-4", // Or "gpt-3.5-turbo" if you want a cheaper/faster model
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: question }
        ],
        max_tokens: 600,
        temperature: 0.7,
      });

      return completion.choices[0].message.content || "No answer generated.";
    } catch (error) {
      return "OpenAI: Error generating apologetics answer.";
    }
  }

  /**
   * Aggregates a full apologetics answer (AI + links).
   * @param query - User's question or Bible reference
   */
  static async getAggregatedAnswer(query: string): Promise<string[]> {
    const bibleRefPattern = /^[A-Za-z ]+\d+:\d+(-\d+)?$/;
    const isBibleRef = bibleRefPattern.test(query.trim());

    const results: string[] = [];

    // 1. Main apologetics answer (AI)
    results.push(await this.getOpenAIApologeticsAnswer(query));

    // 2. Optionally add Bible verse if the query looks like a reference
    if (isBibleRef) {
      results.push(await this.getBibleVerse(query));
    }

    // 3. Add topical and STEP Bible resource links
    results.push(this.getTopicalBibleAnswer(query));
    results.push(this.getStepBibleResource(query));
    return results;
  }
}
