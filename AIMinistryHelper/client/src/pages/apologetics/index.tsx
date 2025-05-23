import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

export default function Apologetics() {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("realtime");
  const [query, setQuery] = useState("");
  const [showAddResourceDialog, setShowAddResourceDialog] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  
  // Sample apologetics categories
  const categories = [
    { id: "existence", name: "Existence of God", count: 24 },
    { id: "suffering", name: "Problem of Evil/Suffering", count: 18 },
    { id: "reliability", name: "Biblical Reliability", count: 22 },
    { id: "resurrection", name: "Resurrection of Jesus", count: 16 },
    { id: "science", name: "Science and Faith", count: 20 },
    { id: "morality", name: "Objective Morality", count: 15 },
    { id: "religions", name: "World Religions", count: 19 },
    { id: "trinity", name: "The Trinity", count: 12 },
  ];
  
  // Sample resources
  const resources = [
    {
      id: 1,
      title: "Evidence for the Resurrection",
      category: "Resurrection of Jesus",
      author: "William Lane Craig",
      type: "Article",
      summary: "A scholarly examination of historical evidence for the resurrection of Jesus Christ, addressing common objections and alternative theories.",
      keyPoints: [
        "Empty tomb is attested by multiple independent sources",
        "Post-resurrection appearances were witnessed by groups, not just individuals",
        "Early Christian proclamation began in Jerusalem, where the crucifixion occurred",
        "Transformation of the disciples into bold proclaimers despite threat of death"
      ]
    },
    {
      id: 2,
      title: "The Problem of Pain",
      category: "Problem of Evil/Suffering",
      author: "C.S. Lewis",
      type: "Book Summary",
      summary: "Lewis examines the question of why God allows suffering and pain in a world He created, offering a philosophical and theological framework for understanding suffering.",
      keyPoints: [
        "Human free will necessitates the possibility of evil choices",
        "Pain serves as a warning system in the physical world",
        "Suffering can lead to spiritual growth and dependence on God",
        "God's ultimate goodness is compatible with temporary suffering"
      ]
    },
    {
      id: 3,
      title: "The Kalam Cosmological Argument",
      category: "Existence of God",
      author: "William Lane Craig",
      type: "Argument",
      summary: "A philosophical argument for God's existence based on the beginning of the universe and the principle of causality.",
      keyPoints: [
        "Whatever begins to exist has a cause",
        "The universe began to exist (supported by Big Bang cosmology)",
        "Therefore, the universe has a cause",
        "This cause must be timeless, spaceless, immaterial, powerful, and personal"
      ]
    },
    {
      id: 4,
      title: "The Historical Reliability of the Gospels",
      category: "Biblical Reliability",
      author: "Craig Blomberg",
      type: "Book Summary",
      summary: "An examination of the historical reliability of the Gospel accounts, addressing common criticisms and demonstrating their trustworthiness.",
      keyPoints: [
        "Early dating of gospel manuscripts (within lifetime of eyewitnesses)",
        "Archaeological confirmations of names, places, and customs",
        "Internal consistency of accounts despite different perspectives",
        "Inclusion of embarrassing details unlikely in fictional accounts"
      ]
    },
    {
      id: 5,
      title: "The Moral Argument for God",
      category: "Objective Morality",
      author: "C.S. Lewis",
      type: "Argument",
      summary: "An argument for God's existence based on the reality of objective moral values and duties in the world.",
      keyPoints: [
        "If objective moral values exist, God exists",
        "Objective moral values do exist (moral relativism is self-defeating)",
        "Therefore, God exists",
        "Moral law requires a moral lawgiver"
      ]
    },
  ];
  
  // Sample real-time responses
  const realTimeResponses = {
    existence: {
      objection: "If God exists, why isn't there more evidence?",
      response: "This objection assumes that God, if He exists, would provide the kind and amount of evidence the objector demands. However, this assumption fails for several reasons:\n\n1. **Divine Hiddenness Has Purpose**: God may have morally sufficient reasons for not making His existence overwhelmingly obvious. For instance, a relationship with God requires free response and trust, which might be undermined by overwhelming evidence. As philosopher Blaise Pascal noted, God provides enough evidence for those willing to believe, but not so much as to compel those unwilling.\n\n2. **Evidence Is Sufficient**: There is actually substantial evidence for God's existence, including cosmological arguments from the universe's beginning, fine-tuning arguments from the precise calibration of physical constants, moral arguments from the existence of objective values, and historical evidence for the resurrection of Jesus. The issue may not be lack of evidence but the interpretation of evidence.\n\n3. **Divine Revelation**: God has revealed Himself through Scripture, through Christ, and through the internal witness of the Holy Spirit. These provide personal, experiential evidence that complements philosophical and scientific evidence.\n\n4. **Nature of Faith**: Biblical faith is not believing without evidence but trusting based on evidence. Hebrews 11:1 describes faith as 'the assurance of things hoped for, the conviction of things not seen'—indicating confidence based on evidence even of unseen realities.\n\nMany renowned philosophers and scientists throughout history have found the evidence for God compelling. The question might not be 'Why isn't there more evidence?' but 'Why do we interpret the existing evidence differently?'"
    },
    suffering: {
      objection: "How can a good God allow so much suffering in the world?",
      response: "The problem of suffering is perhaps the most significant emotional and intellectual obstacle to belief in God. Here's a thoughtful response:\n\n1. **Free Will Defense**: Much suffering results from human free choices. For God to create beings with genuine freedom means allowing them the possibility of making harmful choices. Without this freedom, human love and relationship with God would be meaningless.\n\n2. **Character Development**: Suffering often produces character growth, compassion, and moral development that couldn't occur otherwise. As Romans 5:3-5 suggests, suffering produces perseverance, character, and hope.\n\n3. **Limited Perspective**: Our temporal, finite perspective means we cannot see the full picture of how suffering might be redeemed in the broader context of God's purposes. Just as a child doesn't understand why a parent permits painful medical treatment, we may not grasp God's ultimate purposes.\n\n4. **The Cross of Christ**: Christianity uniquely offers a God who doesn't remain distant from suffering but enters into it. In Christ, God Himself experiences human suffering, demonstrating both His love and His understanding of our pain.\n\n5. **Ultimate Redemption**: Christianity promises that suffering is not the final word. Revelation 21:4 describes a future where God 'will wipe every tear from their eyes. There will be no more death or mourning or crying or pain.'\n\nWhile these responses don't eliminate the emotional weight of suffering, they provide a framework for understanding how suffering might be compatible with God's goodness and power."
    },
    reliability: {
      objection: "Hasn't the Bible been corrupted over time through countless translations?",
      response: "This common objection misunderstands both the transmission process of biblical texts and the nature of translation. Here's why the Bible's reliability stands up to scrutiny:\n\n1. **Manuscript Evidence**: We have over 5,800 Greek New Testament manuscripts, with the earliest fragments dating to within decades of the original writings. This vastly exceeds any other ancient document (Homer's Iliad has about 650 manuscripts with a 500-year gap to the earliest copy). The Old Testament's careful transmission is confirmed by the remarkable consistency between the Dead Sea Scrolls and medieval manuscripts.\n\n2. **Translation Process**: Modern translations aren't made as a chain (English from Latin from Greek from Hebrew) but directly from the best available ancient manuscripts. Scholars consult multiple manuscript families to establish the most accurate original text.\n\n3. **Textual Variations**: While textual variants exist among manuscripts, over 99% are minor spelling differences or word order variations that don't affect meaning. No major Christian doctrine depends on disputed passages.\n\n4. **Archaeological Confirmation**: Archaeological discoveries consistently confirm biblical historical details, including previously disputed references to people, places, and customs.\n\n5. **Scientific Scrutiny**: Biblical texts have been subjected to more rigorous scholarly analysis than any other ancient documents, yet their historical reliability has repeatedly been demonstrated.\n\nWhen people claim the Bible has been 'corrupted through translations,' they're often repeating a misconception rather than engaging with the substantial evidence for the Bible's reliable transmission and accurate translation."
    },
    resurrection: {
      objection: "Isn't it more reasonable to believe the disciples hallucinated or made up the resurrection?",
      response: "While naturalistic explanations for resurrection accounts might initially seem more plausible, they face significant historical and logical problems:\n\n1. **Group Hallucinations**: Psychologists recognize that hallucinations are individual experiences, not group phenomena. Yet 1 Corinthians 15 (written within 25 years of events) records appearances to groups, including 500 at once.\n\n2. **Empty Tomb**: Both hallucination and conspiracy theories fail to explain the empty tomb, which even hostile witnesses didn't deny. If authorities could have produced Jesus' body, Christianity would have been immediately disproven.\n\n3. **Transformed Disciples**: The disciples transformed from fearful deserters to bold proclaimers willing to die for their testimony. This dramatic change is difficult to explain if they knew their claims were false or based on subjective experiences.\n\n4. **Enemy Conversions**: Prominent skeptics like James (Jesus' brother) and Paul (persecutor of the church) became believers after claiming to see the risen Jesus. These conversions are difficult to attribute to wishful thinking or group pressure.\n\n5. **Cultural Context**: In Jewish thought, resurrection meant bodily resurrection, not spiritual survival. The disciples proclaimed precisely what they would not have imagined or expected.\n\n6. **Historical Emergence**: The church emerged in Jerusalem, precisely where verification or falsification of resurrection claims would have been easiest. This would be an unlikely choice for promoting a fabrication.\n\nWhen examining the total evidence, the resurrection stands as the most coherent explanation for the historical data, despite initial philosophical objections to miracles."
    },
    science: {
      objection: "Science has disproven God; we don't need that hypothesis anymore.",
      response: "The claim that science has disproven God reflects a fundamental misunderstanding of both science and theology:\n\n1. **Methodological Limitations**: Science, by definition, investigates natural causes through empirical observation. It's methodologically limited to natural explanations, making it incapable of either proving or disproving supernatural realities. As philosopher Alvin Plantinga notes, 'Science doesn't say there is no God, rather scientific *naturalism* says there is no God.'\n\n2. **Compatible Domains**: Science addresses questions of mechanism ('how'), while theology addresses questions of meaning and purpose ('why'). Many leading scientists—from Francis Collins (Human Genome Project) to John Polkinghorne (theoretical physics)—find science and faith deeply compatible.\n\n3. **Scientific Discoveries Supporting Theism**: Several scientific developments align well with theistic expectations, including:\n   - The universe's beginning from nothing (Big Bang cosmology)\n   - Fine-tuning of physical constants necessary for life\n   - The information-rich nature of DNA\n   - The emergence of consciousness\n\n4. **Historical Harmony**: Modern science emerged primarily from a Judeo-Christian worldview that expected an orderly, intelligible universe created by a rational God. Many foundational scientists (Newton, Faraday, Maxwell, etc.) were devout believers whose faith motivated their scientific pursuits.\n\n5. **Laplace's Context**: The 'God hypothesis' Laplace dismissed (when telling Napoleon he had 'no need of that hypothesis') referred specifically to God as an explanation for planetary perturbations, not God's existence altogether.\n\nRather than science disproving God, many find that deeper scientific understanding reveals a universe whose fundamental character—rationality, intelligibility, mathematical elegance—points toward a mind behind it all."
    }
  };
  
  const handleQuerySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsGenerating(true);
    
    // Simulate API call delay
    setTimeout(() => {
      setIsGenerating(false);
      
      toast({
        title: "Response generated",
        description: "Apologetic response has been generated based on your query.",
      });
    }, 1500);
  };
  
  const handleAddResource = () => {
    toast({
      title: "Resource added",
      description: "The apologetics resource has been added to your library.",
    });
    setShowAddResourceDialog(false);
  };
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-800 dark:text-white">Apologetics Assistant</h1>
        <p className="text-slate-600 dark:text-slate-300 mt-1">
          Tools and resources for defending the faith in real-time
        </p>
      </div>
      
      {/* Quick actions card */}
      <Card className="bg-slate-50 dark:bg-gray-800/50">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold text-slate-800 dark:text-white">Apologetics Assistant</h2>
              <p className="text-slate-600 dark:text-slate-300 mt-1">
                Access apologetics resources and generate real-time responses to objections
              </p>
            </div>
            <Button onClick={() => setShowAddResourceDialog(true)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Add Resource
            </Button>
          </div>
        </CardContent>
      </Card>
      
      {/* Main content with tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid grid-cols-3 md:w-[400px]">
          <TabsTrigger value="realtime">Real-Time Defense</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
          <TabsTrigger value="topics">Topics</TabsTrigger>
        </TabsList>
        
        {/* Real-Time Defense Tab */}
        <TabsContent value="realtime" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Real-Time Apologetics</CardTitle>
              <CardDescription>Generate responses to common objections to the Christian faith</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleQuerySubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select defaultValue="existence">
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="existence">Existence of God</SelectItem>
                      <SelectItem value="suffering">Problem of Evil/Suffering</SelectItem>
                      <SelectItem value="reliability">Biblical Reliability</SelectItem>
                      <SelectItem value="resurrection">Resurrection of Jesus</SelectItem>
                      <SelectItem value="science">Science and Faith</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="query">Objection or Question</Label>
                  <Textarea 
                    id="query" 
                    placeholder="Enter the objection or question you need to respond to..." 
                    className="min-h-[100px]"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="audience">Audience</Label>
                  <Select defaultValue="layperson">
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select audience type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="layperson">General Audience (Layperson)</SelectItem>
                      <SelectItem value="academic">Academic/Scholarly</SelectItem>
                      <SelectItem value="skeptic">Skeptical/Atheist</SelectItem>
                      <SelectItem value="youth">Youth/Student</SelectItem>
                      <SelectItem value="religious">Other Religious Background</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <Button type="submit" className="w-full" disabled={isGenerating}>
                  {isGenerating ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Generating Response...
                    </>
                  ) : (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      Generate Response
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Sample Response Display */}
          <Card>
            <CardHeader>
              <CardTitle>Sample Response</CardTitle>
              <CardDescription>Here's how to respond to the objection</CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg mb-4">
                <h3 className="text-lg font-medium text-slate-800 dark:text-white mb-1">Objection:</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  {realTimeResponses.science.objection}
                </p>
              </div>
              
              <h3 className="text-lg font-medium text-slate-800 dark:text-white mb-2">Response:</h3>
              <div className="whitespace-pre-line text-slate-600 dark:text-slate-300">
                {realTimeResponses.science.response}
              </div>
              
              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-700">
                <h4 className="font-medium text-slate-800 dark:text-white mb-2">Key Resources for Further Study:</h4>
                <ul className="text-slate-600 dark:text-slate-300">
                  <li>"God's Undertaker: Has Science Buried God?" by John Lennox</li>
                  <li>"The Language of God" by Francis Collins</li>
                  <li>"Where the Conflict Really Lies" by Alvin Plantinga</li>
                </ul>
              </div>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button variant="outline" className="flex-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
                Save Response
              </Button>
              <Button variant="outline" className="flex-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                </svg>
                Copy to Clipboard
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        {/* Resources Tab */}
        <TabsContent value="resources" className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium text-slate-800 dark:text-white">Apologetics Resources</h3>
            <div className="w-full max-w-xs">
              <Input placeholder="Search resources..." />
            </div>
          </div>
          
          {/* Resources List */}
          <div className="space-y-4">
            {resources.map(resource => (
              <Card key={resource.id}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{resource.title}</CardTitle>
                      <CardDescription>
                        {resource.author} • {resource.category} • {resource.type}
                      </CardDescription>
                    </div>
                    <div className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded-md text-xs font-medium text-slate-700 dark:text-slate-300">
                      {resource.type}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                    {resource.summary}
                  </p>
                  <div>
                    <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">KEY POINTS:</h4>
                    <ul className="list-disc pl-5 text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      {resource.keyPoints.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="flex gap-2 w-full">
                    <Button variant="outline" size="sm" className="flex-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      View Full Resource
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                      </svg>
                      Share
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        {/* Topics Tab */}
        <TabsContent value="topics" className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium text-slate-800 dark:text-white">Apologetics Topics</h3>
            <div className="w-full max-w-xs">
              <Input placeholder="Search topics..." />
            </div>
          </div>
          
          {/* Topics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map(category => (
              <Card key={category.id} className="relative overflow-hidden">
                <CardContent className="p-6">
                  <h4 className="font-medium text-slate-800 dark:text-white">{category.name}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{category.count} resources</p>
                  <Button variant="ghost" size="sm" className="absolute bottom-2 right-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Featured Topic */}
          <Card className="border-primary-100 dark:border-primary-800">
            <CardHeader>
              <CardTitle>Featured Topic: The Problem of Evil</CardTitle>
              <CardDescription>Understanding and responding to the most common objection to the Christian faith</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-slate-600 dark:text-slate-300">
                  The problem of evil and suffering is perhaps the most emotionally and intellectually challenging objection to the Christian faith. It asks: If God is all-good (omnibenevolent), all-knowing (omniscient), and all-powerful (omnipotent), how can evil and suffering exist?
                </p>
                
                <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                  <h4 className="font-medium text-slate-800 dark:text-white mb-2">Key Approaches:</h4>
                  <ul className="list-disc pl-5 text-slate-600 dark:text-slate-300 space-y-1">
                    <li><span className="font-medium">Free Will Defense</span>: God's desire for genuine love and relationship necessitates free beings who can choose evil</li>
                    <li><span className="font-medium">Soul-Making Theodicy</span>: Suffering creates the conditions for spiritual and moral growth</li>
                    <li><span className="font-medium">Greater Good Defense</span>: God permits some evils to accomplish greater goods we may not comprehend</li>
                    <li><span className="font-medium">The Cross</span>: Christianity uniquely offers a God who enters into and experiences suffering with us</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                  <h4 className="font-medium text-slate-800 dark:text-white mb-2">Key Scriptures:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2.5 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs font-medium">Romans 8:28</span>
                    <span className="px-2.5 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs font-medium">James 1:2-4</span>
                    <span className="px-2.5 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs font-medium">2 Corinthians 4:17</span>
                    <span className="px-2.5 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs font-medium">Romans 5:3-5</span>
                    <span className="px-2.5 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs font-medium">Job 38-42</span>
                  </div>
                </div>
                
                <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                  <h4 className="font-medium text-slate-800 dark:text-white mb-2">Key Resources:</h4>
                  <ul className="list-disc pl-5 text-slate-600 dark:text-slate-300 space-y-1">
                    <li>"The Problem of Pain" by C.S. Lewis</li>
                    <li>"Walking with God through Pain and Suffering" by Timothy Keller</li>
                    <li>"God, Freedom, and Evil" by Alvin Plantinga</li>
                    <li>"Where Was God on 9/11?" by John Blanchard</li>
                  </ul>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">View All Resources on this Topic</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
      
      {/* Add Resource Dialog */}
      <Dialog open={showAddResourceDialog} onOpenChange={setShowAddResourceDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add New Apologetics Resource</DialogTitle>
            <DialogDescription>
              Enter the resource details to add to your apologetics library.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="title">Resource Title</Label>
              <Input id="title" placeholder="Enter resource title" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="category">Category</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="existence">Existence of God</SelectItem>
                  <SelectItem value="suffering">Problem of Evil/Suffering</SelectItem>
                  <SelectItem value="reliability">Biblical Reliability</SelectItem>
                  <SelectItem value="resurrection">Resurrection of Jesus</SelectItem>
                  <SelectItem value="science">Science and Faith</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="author">Author</Label>
              <Input id="author" placeholder="Enter author name" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="type">Resource Type</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select resource type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="article">Article</SelectItem>
                  <SelectItem value="book">Book</SelectItem>
                  <SelectItem value="video">Video</SelectItem>
                  <SelectItem value="argument">Argument</SelectItem>
                  <SelectItem value="outline">Outline</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="summary">Summary</Label>
              <Textarea id="summary" placeholder="Enter resource summary" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="keypoints">Key Points (one per line)</Label>
              <Textarea id="keypoints" placeholder="Enter key points, one per line" />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" onClick={handleAddResource}>Add Resource</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}