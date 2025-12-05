import { Question, QuestionType } from './types';

export const questions: Question[] = [
  // --- Page 1 ---
  {
    id: 1,
    type: QuestionType.ORDERING,
    question: "What is the correct workflow when writing an article?",
    translation: {
      question: "撰写文章时的正确工作流程是什么？",
      options: [
        { id: 'A', text: "标题/摘要 -> 图表 -> 方法 -> 结论" },
        { id: 'B', text: "图表/表格 -> 方法/结果/讨论 -> 结论/引言 -> 标题/摘要/关键词" },
        { id: 'C', text: "引言 -> 方法 -> 结果 -> 讨论 -> 结论" },
        { id: 'D', text: "摘要 -> 标题 -> 引言 -> 方法 -> 结果" }
      ],
      explanation: "通常最好先从数据（图表/表格）开始，然后描述它们（方法/结果），进行讨论，最后撰写总结全文的引言和摘要。"
    },
    options: [
      { id: 'A', text: "Title/Abstract -> Figures -> Methods -> Conclusion" },
      { id: 'B', text: "Figures/Tables -> Methods/Results/Discussion -> Conclusion/Introduction -> Title/Abstract/Keywords", isCorrect: true },
      { id: 'C', text: "Introduction -> Methods -> Results -> Discussion -> Conclusion" },
      { id: 'D', text: "Abstract -> Title -> Introduction -> Methods -> Results" }
    ],
    explanation: "It is often best to start with the data (Figures/Tables), then describe them (Methods/Results), discuss them, and finally write the Introduction and Abstract which summarize the whole."
  },
  {
    id: 2,
    type: QuestionType.MCQ,
    question: "How do you determine the article types published in your journal?",
    translation: {
      question: "你如何确定期刊发表的文章类型？",
      options: [
        { id: 'A', text: "没关系：任何文章类型都应该被接受" },
        { id: 'B', text: "查看期刊的作者指南以及目标和范围" },
        { id: 'C', text: "查看上一期" }
      ],
      explanation: "务必查阅具体期刊的“作者指南”以了解其接受的文章类型。"
    },
    options: [
      { id: 'A', text: "It doesn’t matter: any article type should be admissible" },
      { id: 'B', text: "Check the journal guide for authors and aims and scope", isCorrect: true },
      { id: 'C', text: "Check the last issue" }
    ],
    explanation: "Always consult the specific journal's 'Guide for Authors' to understand what article types they accept."
  },
  {
    id: 3,
    type: QuestionType.MCQ,
    question: "A manuscript is submitted that seems interesting but is not an article type in scope. What do you do?",
    translation: {
      question: "收到的一篇稿件看起来很有趣，但文章类型不符合范围。你会怎么做？",
      options: [
        { id: 'A', text: "拒稿，超出范围" },
        { id: 'B', text: "送审，如果被接受就发表：文章类型越多越好" },
        { id: 'C', text: "作为超出范围拒稿，并建议转投合适的期刊" },
        { id: 'D', text: "要求作者将其修改为我们可发表的文章类型" }
      ],
      explanation: "提供转投建议可以将投稿保留在出版商的生态系统中，同时保持期刊范围的完整性。"
    },
    options: [
      { id: 'A', text: "Reject, out of scope" },
      { id: 'B', text: "Send for peer review and publish if accepted" },
      { id: 'C', text: "Reject as out of scope and offer transfer to an appropriate journal", isCorrect: true },
      { id: 'D', text: "Ask author(s) to revise as an article type we can publish" }
    ],
    explanation: "Offering a transfer preserves the submission within the publisher's ecosystem while maintaining scope integrity."
  },
  {
    id: 4,
    type: QuestionType.MCQ,
    question: "CiteScore evaluates how many years of articles and citations?",
    translation: {
      question: "CiteScore 评估多少年的文章和引用？",
      options: [
        { id: 'A', text: "1" },
        { id: 'B', text: "2" },
        { id: 'C', text: "3" },
        { id: 'D', text: "4" }
      ],
      explanation: "CiteScore 计算的是在4年期间发表的每篇文档收到的平均引用次数。"
    },
    options: [
      { id: 'A', text: "1" },
      { id: 'B', text: "2" },
      { id: 'C', text: "3" },
      { id: 'D', text: "4", isCorrect: true }
    ],
    explanation: "CiteScore calculates the average citations received per document published over a 4-year period."
  },
  {
    id: 5,
    type: QuestionType.MCQ,
    question: "You received an interesting submission with poor language. Authors provided a certificate of paid language service. Should you still ask them to rewrite?",
    translation: {
      question: "你收到了一份有趣的投稿，但语言很差。作者提供了付费语言服务的证明。你还应该要求他们重写吗？",
      options: [
        { id: 'A', text: "不，直接因超出范围拒稿，以免作者因浪费钱而难过" },
        { id: 'B', text: "不，应该给语言拒稿，让作者明白他们浪费了钱" },
        { id: 'C', text: "是，研究很有趣，所以我们应该给作者另一次机会" }
      ],
      explanation: "科学价值是首要的。如果研究有前景，无论是否有证书，都应给予作者提高可读性的机会。"
    },
    options: [
      { id: 'A', text: "No, reject out of scope to avoid upsetting authors" },
      { id: 'B', text: "No, give a language reject so they know they wasted money" },
      { id: 'C', text: "Yes, the research is interesting so we should be giving the authors another chance", isCorrect: true }
    ],
    explanation: "Scientific merit is priority. If the research is promising, authors should be given a chance to improve readability regardless of certificates."
  },
  {
    id: 6,
    type: QuestionType.MCQ,
    question: "Is it ok to consider a manuscript that was previously published in a native language at a local university press?",
    translation: {
      question: "如果稿件之前已用母语在当地大学出版社发表，可以考虑接受吗？",
      options: [
        { id: 'A', text: "不，这被视为一稿多投，稿件应被拒绝" },
        { id: 'B', text: "可以，只要不是直接翻译" },
        { id: 'C', text: "可以，如果研究非常重要" }
      ],
      explanation: "重新发表已经发表的作品（即使是另一种语言）构成一稿多投。"
    },
    options: [
      { id: 'A', text: "No, this is considered dual publication and the manuscript should be rejected", isCorrect: true },
      { id: 'B', text: "Yes, as long as it is not a direct translation" },
      { id: 'C', text: "Yes, if the research is very important" }
    ],
    explanation: "Republishing work already published (even in another language) constitutes dual publication."
  },

  // --- Page 2 ---
  {
    id: 7,
    type: QuestionType.MCQ,
    question: "An author investigates a herb's effect on digestion but also sells herbal medicines. Is this a Conflict of Interest (COI)?",
    translation: {
      question: "一位作者调查草药对消化的影响，但他同时也销售草药药物。这是利益冲突（COI）吗？",
      options: [
        { id: 'A', text: "是，这可以被视为利益冲突，且COI应明确声明" },
        { id: 'B', text: "是，论文应被拒绝" },
        { id: 'C', text: "不，作者不太可能获利" }
      ],
      explanation: "经济利益构成潜在的利益冲突。必须予以声明。"
    },
    options: [
      { id: 'A', text: "Yes, this can be considered and the COI should be declared clearly", isCorrect: true },
      { id: 'B', text: "Yes, and the paper should be rejected" },
      { id: 'C', text: "No, the author is unlikely to financially benefit" }
    ],
    explanation: "Financial interests constitute a potential conflict of interest. It must be declared."
  },
  {
    id: 8,
    type: QuestionType.MCQ,
    question: "Can a submission including mice experiments be considered if authors state ethics approval is not required in their home country?",
    translation: {
      question: "如果作者声明在其母国不需要伦理批准，包含小鼠实验的投稿可以被考虑吗？",
      options: [
        { id: 'A', text: "可以，如果该国没有伦理准则" },
        { id: 'B', text: "可以，如果作者居住在那里" },
        { id: 'C', text: "不，Elsevier 禁止发表未经伦理委员会批准的动物实验" }
      ],
      explanation: "国际期刊要求严格遵守动物福利伦理，无论当地法律如何。"
    },
    options: [
      { id: 'A', text: "Yes, if the country has no ethics guidelines" },
      { id: 'B', text: "Yes, if authors reside there" },
      { id: 'C', text: "No, Elsevier prohibits publication of animal experiments without ethics committee approval", isCorrect: true }
    ],
    explanation: "International journals require strict adherence to animal welfare ethics regardless of local laws."
  },
  {
    id: 9,
    type: QuestionType.MCQ,
    question: "Do authors need to provide proof of informed consent for experiments involving children?",
    translation: {
      question: "对于涉及儿童的实验，作者需要提供知情同意的证明吗？",
      options: [
        { id: 'A', text: "不，未成年人不能同意" },
        { id: 'B', text: "是，未成年人必须自己同意" },
        { id: 'C', text: "是，未成年人的知情同意需由其法定监护人提供" }
      ],
      explanation: "法定监护人必须为未成年人提供知情同意。"
    },
    options: [
      { id: 'A', text: "No, minors cannot consent" },
      { id: 'B', text: "Yes, minors must consent themselves" },
      { id: 'C', text: "Yes, informed consent of minors needs to be provided by their legal guardians", isCorrect: true }
    ],
    explanation: "Legal guardians must provide informed consent for minors."
  },
  {
    id: 10,
    type: QuestionType.TRUE_FALSE,
    question: "You have published a paper and since doing so have carried out further related research with new findings. Should you publish these findings?",
    translation: {
      question: "你已经发表了一篇论文，之后又进行了相关的进一步研究并有了新发现。你应该发表这些发现吗？",
      options: [
        { id: 'A', text: "是" },
        { id: 'B', text: "否" }
      ],
      explanation: "科学是迭代的；建立在以前工作基础上的新发现应该被发表。"
    },
    options: [
      { id: 'A', text: "Yes", isCorrect: true },
      { id: 'B', text: "No" }
    ],
    explanation: "Science is iterative; new findings building on previous work should be published."
  },
  {
    id: 11,
    type: QuestionType.TRUE_FALSE,
    question: "You plan to slice findings from one extensive experiment into multiple papers for multiple journals. Is this acceptable?",
    translation: {
      question: "你计划将一个广泛实验的发现分割成多篇论文投给多个期刊。这种做法可以接受吗？",
      options: [
        { id: 'A', text: "是" },
        { id: 'B', text: "否" }
      ],
      explanation: "这就是'香肠论文'（salami slicing），是不道德的，因为它人为地增加了出版数量。"
    },
    options: [
      { id: 'A', text: "Yes" },
      { id: 'B', text: "No", isCorrect: true }
    ],
    explanation: "This is 'salami slicing' and is unethical as it artificially inflates publication counts."
  },
  {
    id: 12,
    type: QuestionType.MCQ,
    question: "Which is a suitable keyword for an article on using solar cells to power vehicles?",
    translation: {
      question: "对于一篇关于利用太阳能电池驱动车辆的文章，哪个是合适的关键词？",
      options: [
        { id: 'A', text: "传统能源" },
        { id: 'B', text: "替代能源" },
        { id: 'C', text: "太阳能" },
        { id: 'D', text: "燃料" }
      ],
      explanation: "关键词应具体且标准。"
    },
    options: [
      { id: 'A', text: "Traditional energy sources" },
      { id: 'B', text: "Alternative energy sources" },
      { id: 'C', text: "Solar energy", isCorrect: true },
      { id: 'D', text: "Fuels" }
    ],
    explanation: "Keywords should be specific and standard."
  },
  {
    id: 13,
    type: QuestionType.TRUE_FALSE,
    question: "You reuse the Introduction section from your previous article. Is this acceptable?",
    translation: {
      question: "你重复使用了你之前文章的引言部分。这可以接受吗？",
      options: [
        { id: 'A', text: "是" },
        { id: 'B', text: "否" }
      ],
      explanation: "这是自我剽窃。你必须为新语境重写内容。"
    },
    options: [
      { id: 'A', text: "Yes" },
      { id: 'B', text: "No", isCorrect: true }
    ],
    explanation: "This is self-plagiarism. You must rewrite content for the new context."
  },

  // --- Page 3 ---
  {
    id: 14,
    type: QuestionType.MCQ,
    question: "Which guideline should you follow when writing the Results section?",
    translation: {
      question: "撰写结果部分时应遵循哪项准则？",
      options: [
        { id: 'A', text: "包含主要和次要重要性的数据" },
        { id: 'B', text: "使用子标题将相同类型的结果放在一起" },
        { id: 'C', text: "不要强调与先前发现不同的结果" }
      ],
      explanation: "子标题可以提高可读性和组织性。"
    },
    options: [
      { id: 'A', text: "Include data of primary and secondary importance" },
      { id: 'B', text: "Use sub-headings to keep results of the same type together", isCorrect: true },
      { id: 'C', text: "Do not highlight findings that differ from previous findings" }
    ],
    explanation: "Sub-headings improve readability and organization."
  },
  {
    id: 15,
    type: QuestionType.MCQ,
    question: "Which guideline should you follow when writing References?",
    translation: {
      question: "撰写参考文献时应遵循哪项准则？",
      options: [
        { id: 'A', text: "引用尽可能多的参考文献" },
        { id: 'B', text: "避免引用自己的工作" },
        { id: 'C', text: "确保你完全理解你引用的材料" }
      ],
      explanation: "始终核实来源是否支持你的主张。"
    },
    options: [
      { id: 'A', text: "Cite as many references as possible" },
      { id: 'B', text: "Avoid citations of your own work" },
      { id: 'C', text: "Ensure that you fully understand the material you are referencing", isCorrect: true }
    ],
    explanation: "Always verify the source supports your claim."
  },
  {
    id: 16,
    type: QuestionType.MCQ,
    question: "Who is responsible for checking the language quality used in a research paper?",
    translation: {
      question: "谁负责检查研究论文中使用的语言质量？",
      options: [
        { id: 'A', text: "期刊编辑" },
        { id: 'B', text: "作者" },
        { id: 'C', text: "出版商" }
      ],
      explanation: "作者对稿件负最终责任。"
    },
    options: [
      { id: 'A', text: "Journal editor" },
      { id: 'B', text: "Author", isCorrect: true },
      { id: 'C', text: "Publisher" }
    ],
    explanation: "The author is ultimately responsible for the manuscript."
  },
  {
    id: 17,
    type: QuestionType.MCQ,
    question: "Which sentence structure is acceptable for a scientific article?",
    translation: {
      question: "对于科学文章，哪种句子结构是可以接受的？",
      options: [
        { id: 'A', text: "It was found that... but they did not respond..." },
        { id: 'B', text: "It was found that... It was also found that..." },
        { id: 'C', text: "We found that the study subjects responded well to compound X... We also found that the response to compound Y was not consistent." }
      ],
      explanation: "主动语态（'We found'）通常更清晰。"
    },
    options: [
      { id: 'A', text: "It was found that... but they did not respond..." },
      { id: 'B', text: "It was found that... It was also found that..." },
      { id: 'C', text: "We found that the study subjects responded well to compound X... We also found that the response to compound Y was not consistent.", isCorrect: true }
    ],
    explanation: "Active voice ('We found') is often clearer."
  },
  {
    id: 18,
    type: QuestionType.MCQ,
    question: "Which of the following sentences represent good grammar for your manuscript?",
    translation: {
      question: "以下哪个句子代表了稿件的良好语法？",
      options: [
        { id: 'A', text: "We didn't find any correlation..." },
        { id: 'B', text: "The study subject's ECG pattern was within normal range." },
        { id: 'C', text: "The cholesterol levels were greatly reduced." },
        { id: 'D', text: "When we added an additional compound Z..." }
      ],
      explanation: "选项 B 语法精确且专业。"
    },
    options: [
      { id: 'A', text: "We didn't find any correlation..." },
      { id: 'B', text: "The study subject's ECG pattern was within normal range.", isCorrect: true },
      { id: 'C', text: "The cholesterol levels were greatly reduced." },
      { id: 'D', text: "When we added an additional compound Z..." }
    ],
    explanation: "Option B is grammatically precise and professional."
  },

  // --- Page 4 (Language Features) ---
  {
    id: 19,
    type: QuestionType.MCQ,
    question: "Identify the language feature: 'The vanadium-rich V1-xCx carbides appear dark in SEM images...'",
    translation: {
      question: "识别语言特征：'富钒的 V1-xCx 碳化物在 SEM 图像中显示为暗色...'",
      options: [
        { id: 'A', text: "正式性 (Formality)" },
        { id: 'B', text: "复杂性 (Complexity)" },
        { id: 'C', text: "精确性 (Precision)" },
        { id: 'D', text: "准确性 (Accuracy)" }
      ],
      explanation: "这句话准确地描述了视觉数据（SEM 图像）。"
    },
    options: [
      { id: 'A', text: "Formality" },
      { id: 'B', text: "Complexity" },
      { id: 'C', text: "Precision" },
      { id: 'D', text: "Accuracy", isCorrect: true }
    ],
    explanation: "This sentence accurately describes the visual data (SEM images)."
  },
  {
    id: 20,
    type: QuestionType.MCQ,
    question: "Identify the language feature: 'Austenitization treatment was performed at 1180 ℃ in a protective atmosphere (86% nitrogen...)'",
    translation: {
      question: "识别语言特征：'奥氏体化处理在 1180 ℃ 的保护气氛（86% 氮气...）中进行'",
      options: [
        { id: 'A', text: "正式性 (Formality)" },
        { id: 'B', text: "复杂性 (Complexity)" },
        { id: 'C', text: "精确性 (Precision)" },
        { id: 'D', text: "准确性 (Accuracy)" }
      ],
      explanation: "精确性体现在确切的温度和百分比组成上。"
    },
    options: [
      { id: 'A', text: "Formality" },
      { id: 'B', text: "Complexity" },
      { id: 'C', text: "Precision", isCorrect: true },
      { id: 'D', text: "Accuracy" }
    ],
    explanation: "Precision is shown by the exact temperature and percentage composition."
  },
  {
    id: 21,
    type: QuestionType.MCQ,
    question: "Identify the language feature: 'Phosphorus doping of the catalyst resulted in a significant improvement in its stability.'",
    translation: {
      question: "识别语言特征：'催化剂的磷掺杂导致其稳定性显著提高。'",
      options: [
        { id: 'A', text: "正式性 (Formality)" },
        { id: 'B', text: "复杂性 (Complexity)" },
        { id: 'C', text: "精确性 (Precision)" },
        { id: 'D', text: "准确性 (Accuracy)" }
      ],
      explanation: "通过名词化（'Phosphorus doping... resulted in improvement'）体现了复杂性。"
    },
    options: [
      { id: 'A', text: "Formality" },
      { id: 'B', text: "Complexity", isCorrect: true },
      { id: 'C', text: "Precision" },
      { id: 'D', text: "Accuracy" }
    ],
    explanation: "This shows complexity through nominalization ('Phosphorus doping... resulted in improvement')."
  },
  {
    id: 22,
    type: QuestionType.MCQ,
    question: "Identify the language feature: 'Therefore, the carbides do not provide protection for the matrix.'",
    translation: {
      question: "识别语言特征：'因此，碳化物不为基体提供保护。'",
      options: [
        { id: 'A', text: "正式性 (Formality)" },
        { id: 'B', text: "复杂性 (Complexity)" },
        { id: 'C', text: "精确性 (Precision)" },
        { id: 'D', text: "准确性 (Accuracy)" }
      ],
      explanation: "使用标准的过渡词如 'Therefore' 保持了正式性。"
    },
    options: [
      { id: 'A', text: "Formality", isCorrect: true },
      { id: 'B', text: "Complexity" },
      { id: 'C', text: "Precision" },
      { id: 'D', text: "Accuracy" }
    ],
    explanation: "Using standard transitions like 'Therefore' maintains formality."
  },

  // --- Page 5 ---
  {
    id: 23,
    type: QuestionType.MCQ,
    question: "Identify the language feature: 'Fig. 3 shows a cumulative frequency plot of all carbides as a function of diameter...'",
    translation: {
      question: "识别语言特征：'图3显示了所有碳化物随直径变化的累积频率图...'",
      options: [
        { id: 'A', text: "正式性 (Formality)" },
        { id: 'B', text: "复杂性 (Complexity)" },
        { id: 'C', text: "精确性 (Precision)" },
        { id: 'D', text: "准确性 (Accuracy)" }
      ],
      explanation: "带有从句的长难句通常在科学写作中展示复杂性。"
    },
    options: [
      { id: 'A', text: "Formality" },
      { id: 'B', text: "Complexity", isCorrect: true },
      { id: 'C', text: "Precision" },
      { id: 'D', text: "Accuracy" }
    ],
    explanation: "Long, dense sentences with subordinate clauses often demonstrate complexity in scientific writing."
  },
  {
    id: 24,
    type: QuestionType.MCQ,
    question: "Which of the following is NOT a tip for good academic writing?",
    translation: {
      question: "以下哪项不是优秀学术写作的建议？",
      options: [
        { id: 'A', text: "建立联系并确立清晰的方向感" },
        { id: 'B', text: "做读者的向导" },
        { id: 'C', text: "呈现结构良好的文章" },
        { id: 'D', text: "使用主动语态强调研究者的贡献" }
      ],
      explanation: "虽然主动语态很好，但学术写作通常更喜欢被动语态来强调研究对象（客观性），而不是研究者。"
    },
    options: [
      { id: 'A', text: "Make connections and establish a clear sense of direction." },
      { id: 'B', text: "Be your readers’ guide." },
      { id: 'C', text: "Present a well-structured essay." },
      { id: 'D', text: "Use active voice to highlight the researchers’ contribution.", isCorrect: true }
    ],
    explanation: "While active voice is good, academic writing often prefers passive voice to emphasize the *object* of study (objectivity) rather than the researcher."
  },
  {
    id: 25,
    type: QuestionType.MCQ,
    question: "In terms of punctuation, which understanding is NOT correct?",
    translation: {
      question: "关于标点符号，哪种理解是不正确的？",
      options: [
        { id: 'A', text: "标点符号旨在显示读者何处停顿呼吸" },
        { id: 'B', text: "标点符号旨在澄清语法结构" },
        { id: 'C', text: "标点符号与意义密切相关" }
      ],
      explanation: "标点符号关乎语法和意义，而非呼吸模式。"
    },
    options: [
      { id: 'A', text: "Punctuation aims to show where a reader pauses to take a breath.", isCorrect: true },
      { id: 'B', text: "Punctuation aims to clarify grammatical structure." },
      { id: 'C', text: "Punctuation is closely connected with meaning." }
    ],
    explanation: "Punctuation is about grammar and meaning, not breathing patterns."
  },
  {
    id: 26,
    type: QuestionType.MCQ,
    question: "_____ present a miniature of the whole paper.",
    translation: {
      question: "_____ 呈现了整篇论文的缩影。",
      options: [
        { id: 'A', text: "标题，关键词和作者" },
        { id: 'B', text: "标题，摘要和作者" },
        { id: 'C', text: "标题，关键词和摘要" },
        { id: 'D', text: "标题，摘要和引言" }
      ],
      explanation: "这些元素让读者能迅速掌握论文的全貌。"
    },
    options: [
      { id: 'A', text: "Title, key words and authors" },
      { id: 'B', text: "Title, abstract and authors" },
      { id: 'C', text: "Title, key words and abstract", isCorrect: true },
      { id: 'D', text: "Title, abstract and introduction" }
    ],
    explanation: "These elements allow a reader to quickly grasp the full scope of the paper."
  },
  {
    id: 27,
    type: QuestionType.MCQ,
    question: "What titles are recommended?",
    translation: {
      question: "推荐什么样的标题？",
      options: [
        { id: 'A', text: "客观且不言自明的标题" },
        { id: 'B', text: "信息丰富且客观的标题" },
        { id: 'C', text: "描述性且信息丰富的标题" },
        { id: 'D', text: "描述性且不言自明的标题" }
      ],
      explanation: "标题应描述内容并在不需要更多上下文的情况下解释自身。"
    },
    options: [
      { id: 'A', text: "Objective and self-explanatory titles." },
      { id: 'B', text: "Informative and objective titles." },
      { id: 'C', text: "Descriptive and informative titles." },
      { id: 'D', text: "Descriptive and self-explanatory titles.", isCorrect: true }
    ],
    explanation: "Titles should describe the content and explain themselves without needing further context."
  },

  // --- Page 6 ---
  {
    id: 28,
    type: QuestionType.MCQ,
    question: "Which of the following is NOT mentioned as a good scientific title feature?",
    translation: {
      question: "以下哪项未被提及为好的科学标题特征？",
      options: [
        { id: 'A', text: "它突出了研究论文的结构" },
        { id: 'B', text: "它具体但信息丰富" },
        { id: 'C', text: "通常在10-12个单词以内" },
        { id: 'D', text: "它使用描述性术语或短语" }
      ],
      explanation: "标题描述内容，而不是论文的结构。"
    },
    options: [
      { id: 'A', text: "It highlights the structure of a research paper.", isCorrect: true },
      { id: 'B', text: "It is specific but informative." },
      { id: 'C', text: "It is typically within 10-12 words." },
      { id: 'D', text: "It uses descriptive terms or phrases." }
    ],
    explanation: "Titles describe content, not the paper's structure."
  },
  {
    id: 29,
    type: QuestionType.ORDERING,
    question: "Identify the correct structure of this scientific abstract.",
    context: "A. The Ni SAs... (Results)\nB. Therefore, exploring... (Problem/Gap)\nC. The high voltage in oxygen... (Background)\nD. Experiments and density... (Details)\nE. This work offers a new concept... (Significance)\nF. Herein, we adopt... (Method)",
    translation: {
      question: "识别此科学摘要的正确结构。",
      context: "A. The Ni SAs... (结果)\nB. Therefore, exploring... (问题/差距)\nC. The high voltage in oxygen... (背景)\nD. Experiments and density... (细节)\nE. This work offers a new concept... (意义)\nF. Herein, we adopt... (方法)",
      options: [
        { id: '1', text: "A B C D E F" },
        { id: '2', text: "C B F A D E" },
        { id: '3', text: "F A D E C B" },
        { id: '4', text: "C F A B D E" }
      ],
      explanation: "标准流程：背景 (C) -> 差距 (B) -> 方法 (F) -> 结果 (A) -> 细节 (D) -> 意义 (E)。"
    },
    options: [
      { id: '1', text: "A B C D E F" },
      { id: '2', text: "C B F A D E", isCorrect: true },
      { id: '3', text: "F A D E C B" },
      { id: '4', text: "C F A B D E" }
    ],
    explanation: "Standard flow: Background (C) -> Gap (B) -> Method (F) -> Results (A) -> Details (D) -> Significance (E)."
  },
  {
    id: 30,
    type: QuestionType.MCQ,
    question: "Which of the following is NOT a scientific abstract characteristic?",
    translation: {
      question: "以下哪项不是科学摘要的特征？",
      options: [
        { id: 'A', text: "它是科学论文的概述" },
        { id: 'B', text: "它指出了论文的结构" },
        { id: 'C', text: "它将冗长的研究工作简化为基本要素" },
        { id: 'D', text: "通常设计为独立存在" }
      ],
      explanation: "摘要总结实质内容，而不是结构布局。"
    },
    options: [
      { id: 'A', text: "It is an overview of a scientific paper." },
      { id: 'B', text: "It indicates the structure of the paper.", isCorrect: true },
      { id: 'C', text: "It reduces long research work to essential elements." },
      { id: 'D', text: "It is usually designed to be standing alone." }
    ],
    explanation: "Abstracts summarize the substance, not the structural layout."
  },
  {
    id: 31,
    type: QuestionType.MCQ,
    question: "Which of the following is CORRECT regarding tense in abstracts?",
    translation: {
      question: "关于摘要中的时态，以下哪项是正确的？",
      options: [
        { id: 'A', text: "一般过去时常用于陈述背景信息" },
        { id: 'B', text: "现在完成时常用于提及研究重点" },
        { id: 'C', text: "一般过去时常用于描述方法" },
        { id: 'D', text: "现在完成时常用于表示结果" }
      ],
      explanation: "方法（你做了什么）通常用一般过去时描述。"
    },
    options: [
      { id: 'A', text: "Past simple tense is often used to state the background information." },
      { id: 'B', text: "Present perfect tense is often used to mention the focus of the study." },
      { id: 'C', text: "Past simple tense is often used to describe the methodology.", isCorrect: true },
      { id: 'D', text: "Present perfect tense is often used to indicate results." }
    ],
    explanation: "Methods (what you did) are usually described in simple past."
  },

  // --- Page 7 ---
  {
    id: 32,
    type: QuestionType.MCQ,
    question: "What questions can NOT introduce the background?",
    translation: {
      question: "哪些问题不能用来介绍背景？",
      options: [
        { id: 'A', text: "研究的目的是什么？" },
        { id: 'B', text: "研究的范围是什么？" },
        { id: 'C', text: "研究有什么意义？" },
        { id: 'D', text: "研究试图解决什么问题？" }
      ],
      explanation: "研究意义属于讨论/结论部分。"
    },
    options: [
      { id: 'A', text: "What is the purpose of the study?" },
      { id: 'B', text: "What is the scope of the study?" },
      { id: 'C', text: "What implication does the study have?", isCorrect: true },
      { id: 'D', text: "What problem is the study trying to solve?" }
    ],
    explanation: "Implications belong in Discussion/Conclusion."
  },
  {
    id: 33,
    type: QuestionType.ORDERING,
    question: "The introduction structure for the text below:",
    context: "A. Previous strategies... B. This work provides... C. Perovskite solar cells... D. Our results show... E. Herein, we introduce... F. However, the poor long-term stability...",
    translation: {
      question: "以下文本的引言结构：",
      context: "A. Previous strategies... B. This work provides... C. Perovskite solar cells... D. Our results show... E. Herein, we introduce... F. However, the poor long-term stability...",
      options: [
        { id: '1', text: "C F A E D B" },
        { id: '2', text: "A B C D E F" },
        { id: '3', text: "C A F E B D" }
      ],
      explanation: "宽泛背景 (C) -> 问题 (F) -> 之前的尝试 (A) -> 方法 (E) -> 细节/结果 (D/B)。"
    },
    options: [
      { id: '1', text: "C F A E D B", isCorrect: true },
      { id: '2', text: "A B C D E F" },
      { id: '3', text: "C A F E B D" }
    ],
    explanation: "Broad context (C) -> Problem (F) -> Previous attempts (A) -> Approach (E) -> Specifics/Results (D/B)."
  },
  {
    id: 34,
    type: QuestionType.MCQ,
    question: "The introduction aims to ________",
    translation: {
      question: "引言旨在 ________",
      options: [
        { id: 'A', text: "引导读者从一般主题进入特定领域" },
        { id: 'B', text: "展示研究是如何进行的" },
        { id: 'C', text: "解释研究人员的贡献" }
      ],
      explanation: "它将内容从广泛的背景漏斗式引导至具体研究。"
    },
    options: [
      { id: 'A', text: "lead readers from a general subject to a particular field.", isCorrect: true },
      { id: 'B', text: "show how the study was undertaken." },
      { id: 'C', text: "explain the contributions of the researchers." }
    ],
    explanation: "It funnels from broad context to the specific study."
  },
  {
    id: 35,
    type: QuestionType.MCQ,
    question: "Which will NOT appear in the Introduction?",
    translation: {
      question: "哪个不会出现在引言中？",
      options: [
        { id: 'A', text: "图表" },
        { id: 'B', text: "对主题重要性的解释" },
        { id: 'C', text: "作者试图回答的具体问题" }
      ],
      explanation: "数据视觉化属于结果部分。"
    },
    options: [
      { id: 'A', text: "The tables and the figures.", isCorrect: true },
      { id: 'B', text: "The explanation for the subject importance." },
      { id: 'C', text: "The background information of the subject." },
      { id: 'D', text: "The specific questions the author trying to answer." }
    ],
    explanation: "Data visuals belong in Results."
  },
  {
    id: 36,
    type: QuestionType.MCQ,
    question: "Which statement is CORRECT about abbreviations?",
    translation: {
      question: "关于缩写，哪种说法是正确的？",
      options: [
        { id: 'A', text: "建议使用缩写以节省空间" },
        { id: 'B', text: "避免使用专业术语" },
        { id: 'C', text: "在定义之前不使用缩写" }
      ],
      explanation: "首次使用时务必定义缩写。"
    },
    options: [
      { id: 'A', text: "Abbreviations are recommended for its space saving." },
      { id: 'B', text: "Specialized terms are avoided for its ambiguity." },
      { id: 'C', text: "Abbreviations aren’t used before they are defined.", isCorrect: true }
    ],
    explanation: "Always define an abbreviation upon its first use."
  },
  {
    id: 37,
    type: QuestionType.MCQ,
    question: "Which is NOT used to explain the new approach?",
    translation: {
      question: "哪个不是用来解释新方法的？",
      options: [
        { id: 'A', text: "作者的观点" },
        { id: 'B', text: "早期方法的弱点" },
        { id: 'C', text: "作者使用该方法的原因" }
      ],
      explanation: "解释新方法侧重于“你”做了什么，而不仅仅是批评旧方法。"
    },
    options: [
      { id: 'A', text: "The author's perspectives." },
      { id: 'B', text: "The weaknesses of the earlier approach.", isCorrect: true },
      { id: 'C', text: "The reasons for the author to use the approach." },
      { id: 'D', text: "The advantages of the approach." }
    ],
    explanation: "Explaining the new approach focuses on what YOU did, not just bashing old methods."
  },

  // --- Page 8 ---
  {
    id: 38,
    type: QuestionType.MCQ,
    question: "Which 'don't' is NOT mentioned?",
    translation: {
      question: "哪个“不要”未被提及？",
      options: [
        { id: 'A', text: "不要在文献综述中包含太多内容" },
        { id: 'B', text: "不要遗漏最相关的文献综述" },
        { id: 'C', text: "不要做出过于谦虚或保守的主张" }
      ],
      explanation: "在科学中，保守/谦虚通常是好的；模糊的主张是不好的。"
    },
    options: [
      { id: 'A', text: "Don't include too much in literature review." },
      { id: 'B', text: "Don't omit the most pertinent literature review." },
      { id: 'C', text: "Don't make too humble or conservative claims.", isCorrect: true },
      { id: 'D', text: "Don't use vague terminology." }
    ],
    explanation: "Being conservative/humble is usually good in science; vague claims are bad."
  },
  {
    id: 39,
    type: QuestionType.MCQ,
    question: "Which is NOT to evaluate the study importance?",
    translation: {
      question: "哪个不是用来评估研究重要性的？",
      options: [
        { id: 'A', text: "什么是研究空白？" },
        { id: 'B', text: "研究在理论上有什么意义？" },
        { id: 'C', text: "研究在实践中有什么意义？" }
      ],
      explanation: "“空白”定义了问题，而不是重要性/结果本身。"
    },
    options: [
      { id: 'A', text: "What is the research gap?", isCorrect: true },
      { id: 'B', text: "In what theoretical ways is the research significant?" },
      { id: 'C', text: "In what practical ways is the research significant?" },
      { id: 'D', text: "Why is it necessary to conduct the research?" }
    ],
    explanation: "The 'Gap' defines the problem, not the importance/outcome itself."
  },
  {
    id: 40,
    type: QuestionType.MCQ,
    question: "Which is NOT to inform readers about the study?",
    translation: {
      question: "哪个不是用来告知读者关于研究的信息？",
      options: [
        { id: 'A', text: "勾勒研究背景" },
        { id: 'B', text: "回顾最相关的文献" },
        { id: 'C', text: "呈现数值数据" }
      ],
      explanation: "数值数据的呈现属于结果部分，而不是引言/告知阶段。"
    },
    options: [
      { id: 'A', text: "Sketch out the study background." },
      { id: 'B', text: "Review the most pertinent literature." },
      { id: 'C', text: "Present the numerical data.", isCorrect: true },
      { id: 'D', text: "State the objectives and purposes of the study." }
    ],
    explanation: "Numerical data presentation is for Results, not the Introduction/Informing phase."
  },
  {
    id: 41,
    type: QuestionType.MCQ,
    question: "How to present the research problem clearly?",
    translation: {
      question: "如何清晰地呈现研究问题？",
      options: [
        { id: 'A', text: "呈现研究空白" },
        { id: 'B', text: "解释问题与现有研究的关系" },
        { id: 'C', text: "解释研究问题的意义" }
      ],
      explanation: "将问题与现有研究联系起来可以增加清晰度。"
    },
    options: [
      { id: 'A', text: "Present the research gaps." },
      { id: 'B', text: "Explain how the problems relate to existing studies.", isCorrect: true },
      { id: 'C', text: "Interpret the significance of the study problem." },
      { id: 'D', text: "Explain the significance to tackle the problems" }
    ],
    explanation: "Contextualizing the problem with existing studies adds clarity."
  },
  {
    id: 42,
    type: QuestionType.MCQ,
    question: "The Materials and Methods section aims to show_______",
    translation: {
      question: "材料与方法部分旨在展示_______",
      options: [
        { id: 'A', text: "研究是如何完成的" },
        { id: 'B', text: "研究遵循的具体程序" },
        { id: 'C', text: "研究数据是如何收集的" }
      ],
      explanation: "它给出了完成研究的“菜谱”。"
    },
    options: [
      { id: 'A', text: "how the research was completed.", isCorrect: true },
      { id: 'B', text: "what specific procedures the research follows." },
      { id: 'C', text: "how research data were collected." },
      { id: 'D', text: "what implication the research has." }
    ],
    explanation: "It gives the recipe for the research completion."
  },
  {
    id: 43,
    type: QuestionType.MCQ,
    question: "What could be found in Materials and Methods?",
    translation: {
      question: "在材料与方法中可以找到什么？",
      options: [
        { id: 'A', text: "技术/分析方法" },
        { id: 'B', text: "样品制备" },
        { id: 'C', text: "实验设计" },
        { id: 'D', text: "以上所有" }
      ],
      explanation: "所有这些细节对于可重复性都是必不可少的。"
    },
    options: [
      { id: 'A', text: "What techniques, analytical methods or approaches were adopted." },
      { id: 'B', text: "What samples were prepared and how they were prepared." },
      { id: 'C', text: "How the experiment was designed." },
      { id: 'D', text: "All the above.", isCorrect: true }
    ],
    explanation: "All these details are essential for reproducibility."
  },
  {
    id: 44,
    type: QuestionType.MCQ,
    question: "What can evaluate the competency of Methods and Materials?",
    translation: {
      question: "什么可以评估材料与方法的能力？",
      options: [
        { id: 'A', text: "实验设计了什么程序？" },
        { id: 'B', text: "实验设计能否产生有效发现？" },
        { id: 'C', text: "研究是在何时何地进行的？" }
      ],
      explanation: "核心能力在于方法是否足以回答研究问题。"
    },
    options: [
      { id: 'A', text: "What procedures does the experiment design?" },
      { id: 'B', text: "Can the experiment design generate valid findings?", isCorrect: true },
      { id: 'C', text: "Where and when was the study carried out?" },
      { id: 'D', text: "How the data were collected and analyzed?" }
    ],
    explanation: "The core competency is whether the methods are valid to answer the research question."
  },

  // --- Page 9 ---
  {
    id: 45,
    type: QuestionType.MCQ,
    question: "Important features of scientific writing include_______",
    translation: {
      question: "科学写作的重要特征包括_______",
      options: [
        { id: 'A', text: "准确性" },
        { id: 'B', text: "清晰性" },
        { id: 'C', text: "充分性" },
        { id: 'D', text: "以上所有" }
      ],
      explanation: "所有这些都是关键特征。"
    },
    options: [
      { id: 'A', text: "accuracy." },
      { id: 'B', text: "clarity." },
      { id: 'C', text: "adequacy." },
      { id: 'D', text: "All the above.", isCorrect: true }
    ],
    explanation: "All are key traits."
  },
  {
    id: 46,
    type: QuestionType.MCQ,
    question: "What will effective Materials & Methods inform readers of?",
    translation: {
      question: "有效的材料与方法将告知读者什么？",
      options: [
        { id: 'A', text: "实验材料和结果" },
        { id: 'B', text: "实验设计和程序" },
        { id: 'C', text: "实验讨论和结果" }
      ],
      explanation: "它侧重于设计和程序，而不是结果。"
    },
    options: [
      { id: 'A', text: "experimental materials and results" },
      { id: 'B', text: "experimental design and procedures.", isCorrect: true },
      { id: 'C', text: "experiment discussion and results" },
      { id: 'D', text: "experiment importance and gap." }
    ],
    explanation: "It focuses on design and procedures, not results."
  },
  {
    id: 47,
    type: QuestionType.MCQ,
    question: "The experiment procedures should be described _______",
    translation: {
      question: "实验程序应该被描述为_______",
      options: [
        { id: 'A', text: "详细且顺序的细节" },
        { id: 'B', text: "充分且简洁的细节" },
        { id: 'C', text: "顺序且简洁的细节" }
      ],
      explanation: "平衡是关键：细节足以重复，但也要简洁易读。"
    },
    options: [
      { id: 'A', text: "in detailed and sequential detail." },
      { id: 'B', text: "in adequate and succinct detail.", isCorrect: true },
      { id: 'C', text: "in sequential and succinct detail." },
      { id: 'D', text: "in adequate and detailed detail." }
    ],
    explanation: "Balance is key: enough detail to replicate, but succinct enough to read."
  },
  {
    id: 48,
    type: QuestionType.MCQ,
    question: "The mechanical behavior was investigated ______ in-situ micro-tensile tests.",
    translation: {
      question: "机械行为是通过原位微拉伸测试研究的。",
      options: [
        { id: 'A', text: "by" },
        { id: 'B', text: "from" },
        { id: 'C', text: "on" }
      ],
      explanation: "通过（by）[方法]进行研究。"
    },
    options: [
      { id: 'A', text: "by", isCorrect: true },
      { id: 'B', text: "from" },
      { id: 'C', text: "on" }
    ],
    explanation: "Investigated 'by' [method]."
  },
  {
    id: 49,
    type: QuestionType.MCQ,
    question: "The chemical compositions obtained ______ EDX data are shown...",
    translation: {
      question: "从 EDX 数据获得的化学成分显示...",
      options: [
        { id: 'A', text: "by" },
        { id: 'B', text: "from" },
        { id: 'C', text: "at" }
      ],
      explanation: "从（from）[来源]获得。"
    },
    options: [
      { id: 'A', text: "by" },
      { id: 'B', text: "from", isCorrect: true },
      { id: 'C', text: "at" }
    ],
    explanation: "Obtained 'from' [source]."
  },
  {
    id: 50,
    type: QuestionType.MCQ,
    question: "Size determined to be 6.25mm ______ the longest axis.",
    translation: {
      question: "尺寸确定为最长轴 6.25mm。",
      options: [
        { id: 'A', text: "for" },
        { id: 'B', text: "in" },
        { id: 'C', text: "of" }
      ],
      explanation: "针对（for）特定维度的测量。"
    },
    options: [
      { id: 'A', text: "for", isCorrect: true },
      { id: 'B', text: "in" },
      { id: 'C', text: "of" }
    ],
    explanation: "Measurement 'for' a specific dimension."
  },
  {
    id: 51,
    type: QuestionType.MCQ,
    question: "Relative densities were ______ 1.56% and 2.13%.",
    translation: {
      question: "相对密度在 1.56% 和 2.13% 之间。",
      options: [
        { id: 'A', text: "between" },
        { id: 'B', text: "among" },
        { id: 'C', text: "of" }
      ],
      explanation: "在 X 和 Y 之间（between）。"
    },
    options: [
      { id: 'A', text: "between", isCorrect: true },
      { id: 'B', text: "among" },
      { id: 'C', text: "of" }
    ],
    explanation: "Range 'between' X and Y."
  },
  {
    id: 52,
    type: QuestionType.MCQ,
    question: "The phase constitutions ______ these ashes were investigated.",
    translation: {
      question: "这些灰烬的相组成被研究了。",
      options: [
        { id: 'A', text: "for" },
        { id: 'B', text: "of" },
        { id: 'C', text: "in" }
      ],
      explanation: "[主体]的（of）组成。"
    },
    options: [
      { id: 'A', text: "for" },
      { id: 'B', text: "of", isCorrect: true },
      { id: 'C', text: "in" }
    ],
    explanation: "Constitutions 'of' [subject]."
  },
  {
    id: 53,
    type: QuestionType.MCQ,
    question: "Spectra were measured ______ the wavelength range...",
    translation: {
      question: "光谱是在波长范围内测量的...",
      options: [
        { id: 'A', text: "at" },
        { id: 'B', text: "on" },
        { id: 'C', text: "in" }
      ],
      explanation: "在（in）一个范围内测量。"
    },
    options: [
      { id: 'A', text: "at" },
      { id: 'B', text: "on" },
      { id: 'C', text: "in", isCorrect: true }
    ],
    explanation: "Measured 'in' a range."
  },
  {
    id: 54,
    type: QuestionType.MCQ,
    question: "Deposited ______ room temperature ______ the substrates.",
    translation: {
      question: "在室温下沉积在基底上。",
      options: [
        { id: 'A', text: "at / on" },
        { id: 'B', text: "in / at" },
        { id: 'C', text: "on / in" }
      ],
      explanation: "在（at）温度，在（on）表面。"
    },
    options: [
      { id: 'A', text: "at / on", isCorrect: true },
      { id: 'B', text: "in / at" },
      { id: 'C', text: "on / in" }
    ],
    explanation: "'At' a temperature, 'on' a surface."
  },
  {
    id: 55,
    type: QuestionType.MCQ,
    question: "The Methods and Materials is usually written_______",
    translation: {
      question: "材料与方法通常是用_______写的。",
      options: [
        { id: 'A', text: "一般现在时" },
        { id: 'B', text: "一般过去时" },
        { id: 'C', text: "将来时" }
      ],
      explanation: "它描述了过去做了什么。"
    },
    options: [
      { id: 'A', text: "with simple present tense." },
      { id: 'B', text: "with simple past tense.", isCorrect: true },
      { id: 'C', text: "with simple past tense." }, // Correction in rendering logic if dup
      { id: 'D', text: "with past perfect tense." }
    ],
    explanation: "It describes what was done in the past."
  },
  {
    id: 56,
    type: QuestionType.MCQ,
    question: "The passive voice is used to _______",
    translation: {
      question: "被动语态用于_______",
      options: [
        { id: 'A', text: "展示客观性" },
        { id: 'B', text: "展示亮点" },
        { id: 'C', text: "展示主观性" }
      ],
      explanation: "被动语态移除行为者（'我'）以关注动作/对象。"
    },
    options: [
      { id: 'A', text: "display objectivity.", isCorrect: true },
      { id: 'B', text: "display highlight." },
      { id: 'C', text: "show subjectivity." },
      { id: 'D', text: "show seriousness." }
    ],
    explanation: "Passive voice removes the actor ('I') to focus on the action/object."
  },

  // --- Page 10 ---
  {
    id: 57,
    type: QuestionType.MCQ,
    question: "Previous methodology should _______",
    translation: {
      question: "先前的方法学应该_______",
      options: [
        { id: 'A', text: "被非常详细地描述" },
        { id: 'B', text: "通过引用指出" },
        { id: 'C', text: "简明扼要地呈现" }
      ],
      explanation: "如果是标准的或已发表的，只需引用即可。"
    },
    options: [
      { id: 'A', text: "be described in considerable detail." },
      { id: 'B', text: "be indicated by a reference.", isCorrect: true },
      { id: 'C', text: "be highlighted in detail." },
      { id: 'D', text: "be presented concisely" }
    ],
    explanation: "If it's standard or published, just cite it."
  },
  {
    id: 58,
    type: QuestionType.MCQ,
    question: "Procedures should be presented for readers to _______ the study.",
    translation: {
      question: "呈现程序是为了让读者_______这项研究。",
      options: [
        { id: 'A', text: "结果" },
        { id: 'B', text: "复制" },
        { id: 'C', text: "证明" }
      ],
      explanation: "可复制性是金标准。"
    },
    options: [
      { id: 'A', text: "result" },
      { id: 'B', text: "replicate", isCorrect: true },
      { id: 'C', text: "justify" },
      { id: 'D', text: "take" }
    ],
    explanation: "Replicability is the gold standard."
  },
  {
    id: 59,
    type: QuestionType.MCQ,
    question: "The _______ of the procedures should be saved for the Discussion section.",
    translation: {
      question: "程序的_______应留到讨论部分。",
      options: [
        { id: 'A', text: "理由/正当性" },
        { id: 'B', text: "方式" },
        { id: 'C', text: "结果" }
      ],
      explanation: "不要在方法中证明“为什么”做这一步，只说做了“什么”。“为什么”以后讨论。"
    },
    options: [
      { id: 'A', text: "justification", isCorrect: true },
      { id: 'B', text: "way" },
      { id: 'C', text: "result" },
      { id: 'D', text: "problem" }
    ],
    explanation: "Don't justify 'why' you did a step in Methods, just say 'what' you did. Discuss 'why' later."
  },
  {
    id: 60,
    type: QuestionType.MCQ,
    question: "Don’t put _______ of the study in the Materials and Methods section.",
    translation: {
      question: "不要把研究的_______放在材料与方法部分。",
      options: [
        { id: 'A', text: "前言" },
        { id: 'B', text: "结果" },
        { id: 'C', text: "任何东西" }
      ],
      explanation: "保持方法部分纯粹；还不要放结果。"
    },
    options: [
      { id: 'A', text: "forward" },
      { id: 'B', text: "up" },
      { id: 'C', text: "results", isCorrect: true },
      { id: 'D', text: "anything" }
    ],
    explanation: "Keep Methods pure; no results yet."
  },
  {
    id: 61,
    type: QuestionType.MCQ,
    question: "It is unnecessary to describe basic procedures in great _______.",
    translation: {
      question: "没必要非常_______地描述基本程序。",
      options: [
        { id: 'A', text: "力量" },
        { id: 'B', text: "结构" },
        { id: 'C', text: "细节" }
      ],
      explanation: "通用程序不需要解释。"
    },
    options: [
      { id: 'A', text: "power" },
      { id: 'B', text: "structure" },
      { id: 'C', text: "challenge" },
      { id: 'D', text: "detail", isCorrect: true }
    ],
    explanation: "Common procedures need no explanation."
  },
  {
    id: 62,
    type: QuestionType.TRUE_FALSE,
    question: "It is necessary to list the chemical and physical properties of all samples.",
    translation: {
      question: "有必要列出所有样品的化学和物理性质。",
      options: [
        { id: 'A', text: "对" },
        { id: 'B', text: "错" }
      ],
      explanation: "只需列出相关的性质。"
    },
    options: [
      { id: 'A', text: "True" },
      { id: 'B', text: "False", isCorrect: true }
    ],
    explanation: "Only relevant properties."
  },
  {
    id: 63,
    type: QuestionType.TRUE_FALSE,
    question: "The Materials and Methods section is usually straightforward and inclusive of necessary details.",
    translation: {
      question: "材料与方法部分通常是直截了当的，并包含必要的细节。",
      options: [
        { id: 'A', text: "对" },
        { id: 'B', text: "错" }
      ],
      explanation: "直接且完整。"
    },
    options: [
      { id: 'A', text: "True", isCorrect: true },
      { id: 'B', text: "False" }
    ],
    explanation: "Direct and complete."
  },
  {
    id: 64,
    type: QuestionType.TRUE_FALSE,
    question: "The Materials and Methods section should conform to the requirements of your target journal.",
    translation: {
      question: "材料与方法部分应符合目标期刊的要求。",
      options: [
        { id: 'A', text: "对" },
        { id: 'B', text: "错" }
      ],
      explanation: "始终遵循作者指南。"
    },
    options: [
      { id: 'A', text: "True", isCorrect: true },
      { id: 'B', text: "False" }
    ],
    explanation: "Always follow the Guide for Authors."
  },
  {
    id: 65,
    type: QuestionType.TRUE_FALSE,
    question: "It is wise to present the Materials and Methods section in a logical and chronological order.",
    translation: {
      question: "按逻辑和时间顺序呈现材料与方法部分是明智的。",
      options: [
        { id: 'A', text: "对" },
        { id: 'B', text: "错" }
      ],
      explanation: "有助于读者跟随过程。"
    },
    options: [
      { id: 'A', text: "True", isCorrect: true },
      { id: 'B', text: "False" }
    ],
    explanation: "Helps reader follow the process."
  },

  // --- Page 11 ---
  {
    id: 66,
    type: QuestionType.MCQ,
    question: "Where does 'The strengths and limitations of the study' belong?",
    translation: {
      question: "“研究的优势和局限性”属于哪里？",
      options: [
        { id: 'A', text: "结果" },
        { id: 'B', text: "讨论" }
      ],
      explanation: "评估属于讨论部分。"
    },
    options: [
      { id: 'A', text: "RESULTS" },
      { id: 'B', text: "DISCUSSION", isCorrect: true }
    ],
    explanation: "Evaluation belongs in Discussion."
  },
  {
    id: 67,
    type: QuestionType.MCQ,
    question: "Where does 'Representative data' belong?",
    translation: {
      question: "“代表性数据”属于哪里？",
      options: [
        { id: 'A', text: "结果" },
        { id: 'B', text: "讨论" }
      ],
      explanation: "数据属于结果部分。"
    },
    options: [
      { id: 'A', text: "RESULTS", isCorrect: true },
      { id: 'B', text: "DISCUSSION" }
    ],
    explanation: "Data belongs in Results."
  },
  {
    id: 68,
    type: QuestionType.MCQ,
    question: "Where does 'The wider implications of the study' belong?",
    translation: {
      question: "“研究的更广泛意义”属于哪里？",
      options: [
        { id: 'A', text: "结果" },
        { id: 'B', text: "讨论" }
      ],
      explanation: "意义属于讨论部分。"
    },
    options: [
      { id: 'A', text: "RESULTS" },
      { id: 'B', text: "DISCUSSION", isCorrect: true }
    ],
    explanation: "Implications belong in Discussion."
  },
  {
    id: 69,
    type: QuestionType.MCQ,
    question: "Where does 'Addressing the hypothesis' belong?",
    translation: {
      question: "“回应假设”属于哪里？",
      options: [
        { id: 'A', text: "结果" },
        { id: 'B', text: "讨论" }
      ],
      explanation: "回答研究问题在讨论中进行。"
    },
    options: [
      { id: 'A', text: "RESULTS" },
      { id: 'B', text: "DISCUSSION", isCorrect: true }
    ],
    explanation: "Answering the research question happens in Discussion."
  },
  {
    id: 70,
    type: QuestionType.MCQ,
    question: "Where does 'Interesting data that may be of importance in future studies' belong?",
    translation: {
      question: "“可能对未来研究有重要意义的有趣数据”属于哪里？",
      options: [
        { id: 'A', text: "结果" },
        { id: 'B', text: "讨论" }
      ],
      explanation: "数据本身在结果中；关于未来研究的讨论在讨论中，但该条目说的是“有趣数据”，所以是结果。"
    },
    options: [
      { id: 'A', text: "RESULTS", isCorrect: true },
      { id: 'B', text: "DISCUSSION" }
    ],
    explanation: "The data itself is in Results; the talk about future studies is Discussion, but the item says 'Interesting data', so it is Results."
  },
  {
    id: 71,
    type: QuestionType.MCQ,
    question: "Where is the figure caption located?",
    translation: {
      question: "图片标题位于何处？",
      options: [
        { id: 'A', text: "图片下方" },
        { id: 'B', text: "图片上方" }
      ],
      explanation: "标准惯例：图片标题在下方。"
    },
    options: [
      { id: 'A', text: "Below the figure", isCorrect: true },
      { id: 'B', text: "Above the figure" }
    ],
    explanation: "Standard convention: Figure captions below."
  },
  {
    id: 72,
    type: QuestionType.MCQ,
    question: "Where is the table caption located?",
    translation: {
      question: "表格标题位于何处？",
      options: [
        { id: 'A', text: "表格下方" },
        { id: 'B', text: "表格上方" }
      ],
      explanation: "标准惯例：表格标题在上方。"
    },
    options: [
      { id: 'A', text: "Below the table" },
      { id: 'B', text: "Above the table", isCorrect: true }
    ],
    explanation: "Standard convention: Table captions above."
  },
  {
    id: 73,
    type: QuestionType.MCQ,
    question: "The tables and figures should be constructed to deliver a _______.",
    translation: {
      question: "图表的构建应为了传达_______。",
      options: [
        { id: 'A', text: "主要数据" },
        { id: 'B', text: "逻辑叙述" },
        { id: 'C', text: "时间顺序" }
      ],
      explanation: "它们应该讲述一个故事（逻辑），而不仅仅是堆砌数据。"
    },
    options: [
      { id: 'A', text: "main data" },
      { id: 'B', text: "logical account", isCorrect: true },
      { id: 'C', text: "chronological order" },
      { id: 'D', text: "significance and implication" }
    ],
    explanation: "They should tell a story (logic) not just dump data."
  },
  {
    id: 74,
    type: QuestionType.MCQ,
    question: "The Results _______ collected from the study.",
    translation: {
      question: "结果_______从研究中收集的数据。",
      options: [
        { id: 'A', text: "意义和含义" },
        { id: 'B', text: "描述主要数据" },
        { id: 'C', text: "分开展示" }
      ],
      explanation: "结果描述数据。"
    },
    options: [
      { id: 'A', text: "significance and implication" },
      { id: 'B', text: "describe main data", isCorrect: true },
      { id: 'C', text: "separate presentation" },
      { id: 'D', text: "logical account" }
    ],
    explanation: "Results describe the data."
  },
  {
    id: 75,
    type: QuestionType.TRUE_FALSE,
    question: "The Discussion aims to explain the implication of the main findings.",
    translation: {
      question: "讨论旨在解释主要发现的含义。",
      options: [
        { id: 'A', text: "对" },
        { id: 'B', text: "错" }
      ],
      explanation: "那是它的主要目的。"
    },
    options: [
      { id: 'A', text: "True", isCorrect: true },
      { id: 'B', text: "False" }
    ],
    explanation: "That is its main purpose."
  },
  {
    id: 76,
    type: QuestionType.TRUE_FALSE,
    question: "The MAIN function of Discussion is to make suggestions for future study.",
    translation: {
      question: "讨论的主要功能是为未来的研究提出建议。",
      options: [
        { id: 'A', text: "对" },
        { id: 'B', text: "错" }
      ],
      explanation: "这是一个功能，但不是主要功能（主要功能是解释结果）。"
    },
    options: [
      { id: 'A', text: "True" },
      { id: 'B', text: "False", isCorrect: true }
    ],
    explanation: "It is A function, but not the MAIN function (which is interpreting results)."
  },
  {
    id: 77,
    type: QuestionType.TRUE_FALSE,
    question: "The limitations of the research findings should be avoided in Discussion.",
    translation: {
      question: "讨论中应避免提及研究结果的局限性。",
      options: [
        { id: 'A', text: "对" },
        { id: 'B', text: "错" }
      ],
      explanation: "诚实讨论局限性可以增加可信度。"
    },
    options: [
      { id: 'A', text: "True" },
      { id: 'B', text: "False", isCorrect: true }
    ],
    explanation: "Honest discussion of limitations adds credibility."
  },

  // --- Page 12 ---
  {
    id: 78,
    type: QuestionType.TRUE_FALSE,
    question: "Considerations of future study directions might be expected in the Discussion.",
    translation: {
      question: "在讨论中可能会有对未来研究方向的考虑。",
      options: [
        { id: 'A', text: "对" },
        { id: 'B', text: "错" }
      ],
      explanation: "通常在最后。"
    },
    options: [
      { id: 'A', text: "True", isCorrect: true },
      { id: 'B', text: "False" }
    ],
    explanation: "Often at the very end."
  },
  {
    id: 79,
    type: QuestionType.TRUE_FALSE,
    question: "Wider implications, if there are any, should be presented at the end of Discussion.",
    translation: {
      question: "如果有更广泛的意义，应在讨论的最后提出。",
      options: [
        { id: 'A', text: "对" },
        { id: 'B', text: "错" }
      ],
      explanation: "这是讨论的“结论”部分。"
    },
    options: [
      { id: 'A', text: "True", isCorrect: true },
      { id: 'B', text: "False" }
    ],
    explanation: "This is the 'Conclusion' part of the Discussion."
  },
  {
    id: 80,
    type: QuestionType.ORDERING,
    question: "Order the sentences to form a coherent paragraph:",
    context: "A. Figure 6 shows... B. These can be directly compared... C. Clearly, the theoretical results... D. Furthermore... E. As in the experiment... F. We conclude...",
    translation: {
      question: "将句子排序以形成连贯的段落：",
      context: "A. Figure 6 shows... B. These can be directly compared... C. Clearly, the theoretical results... D. Furthermore... E. As in the experiment... F. We conclude...",
      options: [
        { id: '1', text: "A B E D C F" },
        { id: '2', text: "F A B C D E" },
        { id: '3', text: "A C D B E F" }
      ],
      explanation: "描述 (A) -> 比较 (B/E) -> 进一步比较 (D) -> 分析 (C) -> 结论 (F)。"
    },
    options: [
      { id: '1', text: "A B E D C F", isCorrect: true },
      { id: '2', text: "F A B C D E" },
      { id: '3', text: "A C D B E F" }
    ],
    explanation: "Description (A) -> Comparison (B/E) -> Further Comparison (D) -> Analysis (C) -> Conclusion (F)."
  },
  {
    id: 81,
    type: QuestionType.MCQ,
    question: "The Results and Discussion should keep a steady focus and be concise and _______.",
    translation: {
      question: "结果与讨论应保持稳定的焦点，简洁且_______。",
      options: [
        { id: 'A', text: "活跃" },
        { id: 'B', text: "信息丰富" },
        { id: 'C', text: "明亮" }
      ],
      explanation: "内容信息丰富是关键。"
    },
    options: [
      { id: 'A', text: "active" },
      { id: 'B', text: "energetic" },
      { id: 'C', text: "informative", isCorrect: true },
      { id: 'D', text: "bright" }
    ],
    explanation: "Informative content is key."
  },
  {
    id: 82,
    type: QuestionType.MCQ,
    question: "The Discussion can be used to acknowledge _______ or any alternative explanations.",
    translation: {
      question: "讨论可用于承认_______或任何替代解释。",
      options: [
        { id: 'A', text: "结果" },
        { id: 'B', text: "局限性" },
        { id: 'C', text: "机会" }
      ],
      explanation: "承认局限性至关重要。"
    },
    options: [
      { id: 'A', text: "results" },
      { id: 'B', text: "functions" },
      { id: 'C', text: "opportunities" },
      { id: 'D', text: "limitations", isCorrect: true }
    ],
    explanation: "Acknowledging limitations is crucial."
  },
  {
    id: 83,
    type: QuestionType.MCQ,
    question: "Reference to the results from tables should be presented in the _______ tense.",
    translation: {
      question: "提到表格中的结果时应使用_______时态。",
      options: [
        { id: 'A', text: "现在" },
        { id: 'B', text: "处理" },
        { id: 'C', text: "描述" }
      ],
      explanation: "当文本提到表格时（“表1显示”），使用一般现在时。"
    },
    options: [
      { id: 'A', text: "present", isCorrect: true },
      { id: 'B', text: "processed" },
      { id: 'C', text: "descriptive" },
      { id: 'D', text: "subjective" }
    ],
    explanation: "When the text refers to the table ('Table 1 shows'), use present tense."
  },

  // --- Page 13 ---
  {
    id: 84,
    type: QuestionType.MCQ,
    question: "Keep Results and Discussion scientific and leave _______ feelings out of it.",
    translation: {
      question: "保持结果和讨论的科学性，摒弃_______情感。",
      options: [
        { id: 'A', text: "描述性" },
        { id: 'B', text: "主观" },
        { id: 'C', text: "处理过的" }
      ],
      explanation: "客观性至关重要。"
    },
    options: [
      { id: 'A', text: "descriptive" },
      { id: 'B', text: "assume" },
      { id: 'C', text: "subjective", isCorrect: true },
      { id: 'D', text: "processed" }
    ],
    explanation: "Objectivity is paramount."
  },
  {
    id: 85,
    type: QuestionType.MCQ,
    question: "The controlled experiment is to eliminate the need to _______ anything.",
    translation: {
      question: "对照实验是为了消除_______任何东西的需要。",
      options: [
        { id: 'A', text: "描述" },
        { id: 'B', text: "假设" },
        { id: 'C', text: "主观" }
      ],
      explanation: "实验提供证据，所以你不必假设。"
    },
    options: [
      { id: 'A', text: "descriptive" },
      { id: 'B', text: "assume", isCorrect: true },
      { id: 'C', text: "subjective" },
      { id: 'D', text: "processed" }
    ],
    explanation: "Experiments provide evidence so you don't have to assume."
  },
  {
    id: 86,
    type: QuestionType.MCQ,
    question: "The Results should be _______ while the Discussion should be interpretive.",
    translation: {
      question: "结果应该是_______，而讨论应该是解释性的。",
      options: [
        { id: 'A', text: "处理过的" },
        { id: 'B', text: "描述性的" },
        { id: 'C', text: "主观的" }
      ],
      explanation: "结果进行描述；讨论进行解释。"
    },
    options: [
      { id: 'A', text: "processed" },
      { id: 'B', text: "assume" },
      { id: 'C', text: "descriptive", isCorrect: true },
      { id: 'D', text: "subjective" }
    ],
    explanation: "Results describe; Discussion interprets."
  },
  {
    id: 87,
    type: QuestionType.TRUE_FALSE,
    question: "The Results outline should follow the order of major topics the research focuses on.",
    translation: {
      question: "结果大纲应遵循研究关注的主要主题的顺序。",
      options: [
        { id: 'A', text: "对" },
        { id: 'B', text: "错" }
      ],
      explanation: "符合研究重点的逻辑流程。"
    },
    options: [
      { id: 'A', text: "True", isCorrect: true },
      { id: 'B', text: "False" }
    ],
    explanation: "Logical flow matching the research focus."
  },
  {
    id: 88,
    type: QuestionType.TRUE_FALSE,
    question: "The raw data should all be collected and presented in the Results.",
    translation: {
      question: "原始数据应全部收集并呈现在结果中。",
      options: [
        { id: 'A', text: "对" },
        { id: 'B', text: "错" }
      ],
      explanation: "只呈现总结/分析后的数据。原始数据放在附录中。"
    },
    options: [
      { id: 'A', text: "True" },
      { id: 'B', text: "False", isCorrect: true }
    ],
    explanation: "Summarized/analyzed data only. Raw data goes in Appendix."
  },
  {
    id: 89,
    type: QuestionType.TRUE_FALSE,
    question: "The table or figure captions should be as specific and informative as possible.",
    translation: {
      question: "表格或图片标题应尽可能具体和信息丰富。",
      options: [
        { id: 'A', text: "对" },
        { id: 'B', text: "错" }
      ],
      explanation: "它们应该是独立的。"
    },
    options: [
      { id: 'A', text: "True", isCorrect: true },
      { id: 'B', text: "False" }
    ],
    explanation: "They should be self-contained."
  },
  {
    id: 90,
    type: QuestionType.TRUE_FALSE,
    question: "Tables or Figures should be presented before they are mentioned in the text.",
    translation: {
      question: "表格或图片应在文中提到之前呈现。",
      options: [
        { id: 'A', text: "对" },
        { id: 'B', text: "错" }
      ],
      explanation: "先提到，再展示。"
    },
    options: [
      { id: 'A', text: "True" },
      { id: 'B', text: "False", isCorrect: true }
    ],
    explanation: "Mention first, then show."
  },
  {
    id: 91,
    type: QuestionType.TRUE_FALSE,
    question: "A simple explanation of the data in Results is acceptable.",
    translation: {
      question: "在结果中对数据进行简单解释是可以接受的。",
      options: [
        { id: 'A', text: "对" },
        { id: 'B', text: "错" }
      ],
      explanation: "你可以简要解释数据是什么，但暂不要深入解读。"
    },
    options: [
      { id: 'A', text: "True", isCorrect: true },
      { id: 'B', text: "False" }
    ],
    explanation: "You can briefly explain what the data IS, but don't interpret it deeply yet."
  },
  {
    id: 92,
    type: QuestionType.TRUE_FALSE,
    question: "Reiteration of the results is an important part of the Discussion.",
    translation: {
      question: "重申结果是讨论的重要部分。",
      options: [
        { id: 'A', text: "对" },
        { id: 'B', text: "错" }
      ],
      explanation: "不要只是重复结果；要解释它们。"
    },
    options: [
      { id: 'A', text: "True" },
      { id: 'B', text: "False", isCorrect: true }
    ],
    explanation: "Don't just repeat results; interpret them."
  },

  // --- Page 14 ---
  {
    id: 93,
    type: QuestionType.TRUE_FALSE,
    question: "Both strengths and weaknesses of the study should be interpreted in Discussion.",
    translation: {
      question: "研究的优势和劣势都应在讨论中解读。",
      options: [
        { id: 'A', text: "对" },
        { id: 'B', text: "错" }
      ],
      explanation: "平衡的观点。"
    },
    options: [
      { id: 'A', text: "True", isCorrect: true },
      { id: 'B', text: "False" }
    ],
    explanation: "Balanced view."
  },
  {
    id: 94,
    type: QuestionType.TRUE_FALSE,
    question: "Possible future research directions should be indicated at the beginning of Discussion.",
    translation: {
      question: "可能的未来研究方向应在讨论的开头指出。",
      options: [
        { id: 'A', text: "对" },
        { id: 'B', text: "错" }
      ],
      explanation: "通常在结尾。"
    },
    options: [
      { id: 'A', text: "True" },
      { id: 'B', text: "False", isCorrect: true }
    ],
    explanation: "Usually at the end."
  },
  {
    id: 95,
    type: QuestionType.MCQ,
    question: "Label the statement: 'Overall, this study suggests that captive gorillas are slightly... influenced by auditory environment.'",
    translation: {
      question: "标记该语句：'总体而言，这项研究表明圈养大猩猩受到听觉环境的轻微...影响。'",
      options: [
        { id: 'A', text: "主要结果的陈述" },
        { id: 'B', text: "局限性" },
        { id: 'C', text: "建议" }
      ],
      explanation: "主要发现的总结。"
    },
    options: [
      { id: 'A', text: "Statements of main results", isCorrect: true },
      { id: 'B', text: "Limitations of the current experiment" },
      { id: 'C', text: "Recommendations for further research" },
      { id: 'D', text: "Implications of the main results" }
    ],
    explanation: "Summary of main finding."
  },
  {
    id: 96,
    type: QuestionType.MCQ,
    question: "Label the statement: 'It must be borne in mind that this study was only conducted on a small group...'",
    translation: {
      question: "标记该语句：'必须记住，这项研究仅在一小群...上进行'",
      options: [
        { id: 'A', text: "主要结果的陈述" },
        { id: 'B', text: "局限性" },
        { id: 'C', text: "建议" }
      ],
      explanation: "承认样本量的限制。"
    },
    options: [
      { id: 'A', text: "Statements of main results" },
      { id: 'B', text: "Limitations of the current experiment", isCorrect: true },
      { id: 'C', text: "Recommendations for further research" },
      { id: 'D', text: "Implications of the main results" }
    ],
    explanation: "Acknowledging sample size limits."
  },
  {
    id: 97,
    type: QuestionType.MCQ,
    question: "Label the statement: 'Further research is hence needed...'",
    translation: {
      question: "标记该语句：'因此需要进一步的研究...'",
      options: [
        { id: 'A', text: "主要结果的陈述" },
        { id: 'B', text: "局限性" },
        { id: 'C', text: "建议" }
      ],
      explanation: "建议未来的工作。"
    },
    options: [
      { id: 'A', text: "Statements of main results" },
      { id: 'B', text: "Limitations of the current experiment" },
      { id: 'C', text: "Recommendations for further research", isCorrect: true },
      { id: 'D', text: "Implications of the main results" }
    ],
    explanation: "Suggesting future work."
  },
  {
    id: 98,
    type: QuestionType.MCQ,
    question: "Label the statement: 'The research also points to the potential value of certain types of auditory stimulation...'",
    translation: {
      question: "标记该语句：'该研究还指出了某些类型的听觉刺激的潜在价值...'",
      options: [
        { id: 'A', text: "主要结果的陈述" },
        { id: 'B', text: "主要结果的含义" },
        { id: 'C', text: "局限性" }
      ],
      explanation: "讨论价值/应用。"
    },
    options: [
      { id: 'A', text: "Statements of main results" },
      { id: 'B', text: "Implications of the main results", isCorrect: true },
      { id: 'C', text: "Limitations of the current experiment" },
      { id: 'D', text: "Recommendations for further research" }
    ],
    explanation: "Discussing value/application."
  },
  {
    id: 99,
    type: QuestionType.ORDERING,
    question: "Order these sentences from a Discussion section:",
    context: "A. The analytical methodologies... B. While a great number... C. The critical effect... D. In addition... E. Thus, the findings... F. Our results reveal...",
    translation: {
      question: "将讨论部分的这些句子排序：",
      context: "A. The analytical methodologies... B. While a great number... C. The critical effect... D. In addition... E. Thus, the findings... F. Our results reveal...",
      options: [
        { id: '1', text: "C F B E A D" },
        { id: '2', text: "A B C D E F" },
        { id: '3', text: "F C A B E D" }
      ],
      explanation: "主要发现 (C/F) -> 语境/比较 (B) -> 含义 (E) -> 更广泛的影响 (A/D)。"
    },
    options: [
      { id: '1', text: "C F B E A D", isCorrect: true },
      { id: '2', text: "A B C D E F" },
      { id: '3', text: "F C A B E D" }
    ],
    explanation: "Main finding (C/F) -> Context/Comparison (B) -> Implication (E) -> Broader impact (A/D)."
  },

  // --- Page 15 ---
  {
    id: 100,
    type: QuestionType.MCQ,
    question: "What is the full name of SCI?",
    translation: {
      question: "SCI 的全称是什么？",
      options: [
        { id: 'A', text: "科学引文索引" },
        { id: 'B', text: "科学传播接口" },
        { id: 'C', text: "系统引文索引" }
      ],
      explanation: "Clarivate 拥有的特定索引。"
    },
    options: [
      { id: 'A', text: "Science Citation Index", isCorrect: true },
      { id: 'B', text: "Scientific Communication Interface" },
      { id: 'C', text: "Systematic Citation Index" }
    ],
    explanation: "A specific index owned by Clarivate."
  },
  {
    id: 101,
    type: QuestionType.MCQ,
    question: "What are the types of SCI literature?",
    translation: {
      question: "SCI 文献的类型有哪些？",
      options: [
        { id: 'A', text: "文章，评论，通讯，信件，评论" },
        { id: 'B', text: "博客，新闻，文章，论文" },
        { id: 'C', text: "书籍，摘要，海报，幻灯片" }
      ],
      explanation: "标准学术格式。"
    },
    options: [
      { id: 'A', text: "Article, Review, Communication, Letters, Comment", isCorrect: true },
      { id: 'B', text: "Blog, News, Article, Thesis" },
      { id: 'C', text: "Book, Abstract, Poster, Slide" }
    ],
    explanation: "Standard academic formats."
  },
  {
    id: 102,
    type: QuestionType.MCQ,
    question: "Which of the following contains the four features of scientific language?",
    translation: {
      question: "以下哪项包含科学语言的四个特征？",
      options: [
        { id: 'A', text: "正式性，复杂性，精确性，准确性" },
        { id: 'B', text: "主观性，创造性，模糊性，流畅性" },
        { id: 'C', text: "简洁，机智，幽默，讽刺" }
      ],
      explanation: "科学语言是正式的、复杂的（词汇上）、精确的和准确的。"
    },
    options: [
      { id: 'A', text: "Formality, Complexity, Precision, Accuracy", isCorrect: true },
      { id: 'B', text: "Subjectivity, Creativity, Ambiguity, Flow" },
      { id: 'C', text: "Brevity, Wit, Humor, Sarcasm" }
    ],
    explanation: "Scientific language is Formal, Complex (lexically), Precise, and Accurate."
  }
];