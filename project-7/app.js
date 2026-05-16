const ZodiacSigns = [
     "Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini",
    "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius"
]

const compliments = [
     "You have a sharp way of understanding things quickly.",
  "Your curiosity makes conversations interesting.",
  "You explain your thoughts clearly.",
  "You’re more creative than you realize.",
  "You have strong problem-solving skills.",
  "Your consistency will take you far.",
  "You ask smart questions.",
  "You have a good sense of humor.",
  "You adapt quickly to new situations.",
  "You’re hardworking even when things get difficult.",
  "You have leadership potential.",
  "Your ideas stand out.",
  "You learn from mistakes instead of giving up.",
  "You’re determined to improve yourself.",
  "You notice details other people miss.",
  "You have a calm and thoughtful mindset.",
  "You’re capable of building something meaningful.",
  "Your dedication is impressive.",
  "You bring good energy into conversations.",
  "You think beyond the basics.",
  "You’re ambitious in a good way.",
  "You have the ability to inspire people.",
  "You’re mentally stronger than you think.",
  "You keep trying even after setbacks.",
  "You have a naturally analytical mind.",
  "You’re becoming better every day.",
  "Your efforts will eventually pay off.",
  "You have a unique perspective on things.",
  "You’re someone people can rely on.",
  "You have the potential to achieve big goals.",
  "You’re building skills that will genuinely help your future."

]
// console.log(compliments.length);
const victimcardcompliments = [ "You deserve so much better than how people treat you.",
  "You always give your best, even when nobody notices.",
  "People often take your kindness for granted.",
  "You care more about others than they care about you.",
  "You’ve been strong through things most people couldn’t handle.",
  "You always end up sacrificing for everyone else.",
  "You hide your pain better than anyone.",
  "You’re the one who gets hurt while trying to help others.",
  "You never deserved the disrespect you received.",
  "You’ve been misunderstood by too many people.",
  "You stay loyal even after being hurt repeatedly.",
  "People don’t realize how much you’ve gone through.",
  "You carry emotional weight silently.",
  "You always try to fix things even when it’s not your fault.",
  "You’ve been there for people who disappeared when you needed them.",
  "Your heart is too pure for this world sometimes.",
  "You forgive people who never deserved it.",
  "You keep going despite all the emotional pressure.",
  "You’ve faced struggles that made you stronger.",
  "You deserve appreciation for everything you tolerate.",
  "You often suffer quietly while making others comfortable.",
  "You’ve survived situations that could break many people.",
  "People underestimate how sensitive and caring you are.",
  "You always try to understand others, even when they don’t understand you.",
  "You’ve been hurt but still choose kindness.",
  "You deserve peace after everything you’ve been through.",
  "You’ve handled disappointment with maturity.",
  "You continue giving even when emotionally exhausted.",
  "You’re stronger than the situations meant to defeat you.",
  "You deserve someone who values your efforts properly.",
  "You’ve carried yourself with strength through unfair situations."
]
// console.log(victimcardcompliments.length);


const recommendations = [ "Start learning one new skill every few months.",
  "Drink more water throughout the day.",
  "Keep a consistent sleep schedule.",
  "Exercise at least 30 minutes daily.",
  "Read books that improve your mindset.",
  "Take breaks from social media regularly.",
  "Learn basic financial management early.",
  "Practice communication skills every day.",
  "Write down your goals clearly.",
  "Avoid comparing yourself to others.",
  "Spend more time with supportive people.",
  "Learn to say no when necessary.",
  "Take care of your mental health.",
  "Focus on consistency over motivation.",
  "Build projects instead of only watching tutorials.",
  "Start saving money, even in small amounts.",
  "Improve your posture and body language.",
  "Eat more protein and nutritious food.",
  "Develop discipline before chasing motivation.",
  "Learn from failures instead of fearing them.",
  "Keep your room and workspace organized.",
  "Practice gratitude daily.",
  "Listen more and speak thoughtfully.",
  "Stay curious about how things work.",
  "Limit distractions while studying or working.",
  "Work on confidence through action.",
  "Spend time outdoors whenever possible.",
  "Learn time management skills.",
  "Surround yourself with ambitious people.",
  "Never stop improving yourself."];
//   console.log(recommendations.length);

  const predictions = [  "A surprising opportunity will come your way soon.",
  "You will reconnect with someone unexpectedly.",
  "A small decision will lead to a big change.",
  "Good news is closer than you think.",
  "Your hard work will finally get noticed.",
  "An exciting journey may happen in the near future.",
  "You will discover a hidden talent.",
  "Someone will appreciate you more than you expect.",
  "A stressful situation will soon become easier.",
  "You are about to learn something valuable.",
  "A lucky moment will brighten your week.",
  "Your confidence will grow after a recent challenge.",
  "An unexpected message will make your day better.",
  "You will achieve a goal you’ve been thinking about.",
  "A fresh start is waiting for you.",
  "You’ll soon meet someone with a positive influence.",
  "A creative idea of yours will succeed.",
  "Your patience will pay off soon.",
  "Something you lost hope in may return positively.",
  "The next few weeks could bring exciting changes."]
// console.log(predictions.length);


  const form = document.getElementById("astroForm");

  form.addEventListener("submit",(e)=>{
      
    e.preventDefault();
      
    const name = document.getElementById("name").value;
    const surname = document.getElementById('surname').value;
    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);
    const year = parseInt(document.getElementById("year").value);
   
    let message = `Hello ${name} ${surname}!
    Your Zodiac sign is ${ZodiacSigns[month-1]} 
    ${compliments[(day*month)%compliments.length]}
    ${victimcardcompliments[(day*month)%31]}
    ${recommendations[day*year%30]}
    ${predictions[year%predictions.length]}
    `
//     const result  = document.getElementById("result");
//    result.innerText = message
document.getElementById("result").textContent = message;
})
//here we do in indexing month-1 because user toh month 1,2,3... karke dega aur hamari indexing value toh 0 se start hogi.