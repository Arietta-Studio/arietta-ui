import { LLMMessage } from '@arietta-studio/ui';

export const data: LLMMessage[] = [
  {
    content: `| **Quantization Level** | **Minimum GPU VRAM** (Inference) | **Minimum GPU VRAM** (Efficient Parameter Fine-tuning) |\n| -------------- | ------------------------- | --------------------------------- |\n| FP16 (No Quantization) | 13 GB                     | 14 GB                             |\n| INT8           | 8 GB                      | 9 GB                              |\n| INT4           | 6 GB                      | 7 GB                              |\n\nCould you explain what FP16, INT8, and INT4 mean?`,
    role: 'user',
  },
  {
    content: `FP16, INT8, and INT4 are three common precision levels used in quantization technology. They are methods to reduce the computational and memory requirements of a model, thus speeding up inference and efficient parameter fine-tuning processes.\n\nFP16 denotes using half-precision floating-point numbers (16 bits) for model parameters and activations, which can halve the memory usage and computational amount compared to single-precision floating-point numbers (32 bits), but might result in some loss of precision.\n\nINT8 denotes using 8-bit integers for model parameters and activations, which can further reduce memory usage and computational amount compared to FP16, but requires quantization training and the process of quantized inference.\n\nINT4 denotes using 4-bit integers for model parameters and activations, which can further reduce memory usage and computational amount compared to INT8, but requires more complex quantization training and the process of quantized inference, with a more noticeable decrease in precision.`,
    role: 'assistant',
  },
  {
    content: `Comparison\tChinese LLaMA\tChinese Alpaca\nTraining method\tTraditional CLM (Trained on general corpora)\tInstruction-based Fine-tuning (Trained on instructional data)\n\nWhat do CLM and instruction-based fine-tuning mean?`,
    role: 'user',
  },
  {
    content: `CLM stands for Continual Language Model, referring to language models trained on large-scale general corpora. These models often use the Transformer architecture and learn the statistical regularities and semantic representations of language through unsupervised learning by predicting the next word. CLMs can be used for various natural language processing tasks such as text generation, machine translation, language understanding, etc.\n\nInstruction-based Fine-tuning is a method of fine-tuning on instructional data. In this method, the model is initially trained on large-scale general corpora and then fine-tuned on specific domain instructional data to adapt to the particular needs of that domain. Instructional data usually consists of corpora from specific fields such as medicine, law, finance, etc. Instruction-based fine-tuning can improve the model's performance in specific domains while retaining the model's language representation ability on general corpora.`,
    role: 'assistant',
  },
  {
    content: 'What does SOTA mean?',
    role: 'user',
  },
  {
    content: `SOTA stands for State-Of-The-Art, meaning "the most advanced technology" or "the highest level of technology". In various fields, SOTA refers to the current best technology or method, usually indicating the highest performance metrics achieved in a certain task or problem. In fields like machine learning, natural language processing, computer vision, etc., SOTA is a very important indicator, representing the highest level and technological progress of that field. The continuous update and improvement of SOTA reflect the technological development and research progress in that field.`,
    role: 'assistant',
  },
  {
    content: `Since the FastChat (Vicuna) repository doesn’t yet support GPTQ-quantized models, I have integrated the GPTQ-for-LLaMa repository into this fork to run a GPTQ-quantized model. Why should we use the GPTQ-quantized version of the Vicuna model? By using the GPTQ-quantized version, we can reduce the VRAM requirement from 28 GB to about 10 GB, which allows us to run the Vicuna-13B model on a single consumer GPU. Another advantage is the ~3x speedup during inference when using the quantized model version. Any disadvantages? Yes, the quantized model is slightly less precise and therefore performs slightly worse than the full precision model. However, it is the quantization of the model that allows many of us to use the model at all. The following figure from the GPTQ paper shows that, especially for larger language models, the qualitative degradation due to the application of quantization is small:\n\nCould you explain what is GPTQ`,
    role: 'user',
  },
  {
    content: `GPTQ stands for GPT-Quantized, which is a version of the GPT model using quantization technology. GPTQ employs fixed-point numbers to represent model parameters and activations, reducing the model's computational and memory requirements compared to floating-point numbers, thus enhancing the model's inference speed and efficiency. Additionally, GPTQ utilizes quantization techniques and optimization strategies like symmetric quantization, nonlinear quantization, dynamic range adjustment, etc., to ensure the model maintains high accuracy and performance after quantization.\n\nIn the mentioned reference, the advantages of applying GPTQ to the Vicuna model include reducing the VRAM requirement from 28 GB to about 10 GB, allowing the Vicuna-13B model to run on a single consumer GPU, and a ~3x speedup in inference speed using the quantized model version. However, the downside is that the quantized model is slightly less precise, possibly performing slightly worse than the full precision model. Nevertheless, for larger language models, the quality degradation due to quantization is minor, making GPTQ a balanced approach between the model's accuracy and efficiency.`,
    role: 'assistant',
  },
];
