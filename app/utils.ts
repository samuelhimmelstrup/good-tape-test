/**
 * Shuffles an array in place using the Fisher-Yates algorithm,
 * ensuring that every permutation is equally likely.
 *
 * @param {Array} array The array to shuffle.
 * @returns {Array} The shuffled array.
 */
export const shuffleArray = (array: number[]): number[] => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Random index from 0 to i
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
}

export const mockTranscript = [
  {"timestamp": "00:00", "speaker": "Interviewer", "text": "Good morning, everyone. Today, we have the pleasure of talking with Dr. Samantha Reed, the leading AI researcher from the Massachusetts Institute of Technology. Dr. Reed, could you tell us about your latest project?"},
  {"timestamp": "00:24", "speaker": "Dr. Reed", "text": "Absolutely, and thank you for having me. My team and I at MIT have been working on an AI-driven project called \"NeuroLink\". This project, supported by the Gates Foundation, aims to bridge the gap in educational resources across various regions, starting with schools in Nairobi, Kenya."},
  {"timestamp": "00:41", "speaker": "Interviewer", "text": "That sounds fascinating, Dr. Reed. How do you envision the impact of NeuroLink in these communities?"},
  {"timestamp": "01:12", "speaker": "Dr. Reed", "text": "We believe NeuroLink will significantly enhance learning outcomes by providing personalized learning experiences. Our pilot program in Nairobi has already shown promising results, with students engaging more actively in subjects like Mathematics and Science. We're collaborating with local educators and organizations, including the Nairobi School Initiative, to tailor the content."},
  {"timestamp": "01:56", "speaker": "Interviewer", "text": "Speaking of collaboration, I understand you recently spoke at the Global Tech Symposium in San Francisco. Could you share some insights from your experience there?"},
  {"timestamp": "02:15", "speaker": "Dr. Reed", "text": "The symposium was an incredible platform for sharing ideas with some of the brightest minds from around the globe, including innovators from Silicon Valley startups and established tech giants like Google and Microsoft. One key takeaway was the unanimous agreement on the importance of ethical AI development, emphasizing transparency and fairness."},
  {"timestamp": "02:32", "speaker": "Interviewer", "text": "With such a global focus, are there any particular challenges you face?"},
  {"timestamp": "03:49", "speaker": "Dr. Reed", "text": "One of our main challenges is the digital divide. While we're making strides in cities like Nairobi, access to technology remains a barrier in rural areas. Additionally, aligning our project with the educational policies of different countries, including the United States and Kenya, requires a nuanced approach."},
  {"timestamp": "04:11", "speaker": "Interviewer", "text": "Dr. Reed, it's clear your work is set to make a significant impact. Thank you for sharing your insights with us today."},
  {"timestamp": "04:27", "speaker": "Dr. Reed", "text": "Thank you for having me. It's an exciting time for AI and education, and I'm grateful to contribute to this positive change."}
]
