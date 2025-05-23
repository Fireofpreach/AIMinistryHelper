import fetch from "node-fetch";

/**
 * TheologyAggregator provides methods to fetch biblical and theological information
 * from various free online resources.
 */
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
  static async getTopicalBibleAnswer(topic: string): Promise<string> {
    try {
      return `Topical Bible results for "${topic}": https://www.openbible.info/topics/${encodeURIComponent(topic)}`;
    } catch (error) {
      return "OpenBible.info: Error fetching topical results.";
    }
  }

  /**
   * Placeholder for STEP Bible API integration.
   * @param query - Subject or passage to lookup
   */
  static async getStepBibleResource(query: string): Promise<string> {
    return `Search STEP Bible for "${query}": https://www.stepbible.org/?q=search&q=${encodeURIComponent(query)}`;
  }

  /**
   * Aggregates answers from all sources for the given query.
   * @param query - User's question or Bible reference
   */
  static async getAggregatedAnswer(query: string): Promise<string[]> {
    // Try to detect if the query is a Bible reference (simple regex for book + chapter:verse)
    const bibleRefPattern = /^[A-Za-z ]+\d+:\d+(-\d+)?$/;
    const isBibleRef = bibleRefPattern.test(query.trim());

    const results: string[] = [];
    if (isBibleRef) {
      results.push(await this.getBibleVerse(query));
    }
    // Always add topical and STEP Bible resources
    results.push(await this.getTopicalBibleAnswer(query));
    results.push(await this.getStepBibleResource(query));
    return results;
  }
}
