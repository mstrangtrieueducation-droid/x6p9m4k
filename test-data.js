const IMG = "assets/test-images/";
const TOTAL_POINTS = 50;

const choice = (id, prompt, options, answer, explanation, image = "") => ({ id, type: "choice", prompt, options, answers: [answer], explanation, image, points: 1 });
const input = (id, prompt, answers, explanation, image = "") => ({ id, type: "input", prompt, answers, explanation, image, points: 1 });
const pictureChoice = (id, prompt, pictures, answer, explanation) => ({ id, type: "pictureChoice", prompt, pictures, answers: [answer], explanation, points: 1 });
const labelledPictures = (prefix, labels) => labels.map((label) => ({ value: label, image: `${IMG}${prefix}-${label}.png` }));

const sections = [
  { key: "A", label: "A", title: "Match the sentences to the pictures.", note: "Choose the picture label that matches each sentence. The letters a-d are picture labels only.", points: 4, questions: [
    pictureChoice("A1", "1. The timpani is loud.", labelledPictures("a", ["a", "b", "c", "d"]), "d", "Picture d shows the timpani, a set of large orchestral drums."),
    pictureChoice("A2", "2. I want to play the bassoon.", labelledPictures("a", ["a", "b", "c", "d"]), "c", "Picture c shows the bassoon, a long woodwind instrument."),
    pictureChoice("A3", "3. I love the sound of the trombone.", labelledPictures("a", ["a", "b", "c", "d"]), "b", "Picture b shows the trombone with its long slide."),
    pictureChoice("A4", "4. He's holding a baton.", labelledPictures("a", ["a", "b", "c", "d"]), "a", "Picture a shows a conductor's baton.")
  ]},
  { key: "B", label: "B", title: "Complete the sentences.", note: "Write the word that completes each sentence.", points: 4, questions: [
    input("B1", "1. A ___ is a large string instrument that you play with a bow.", ["cello"], "A cello is a large string instrument played with a bow."),
    input("B2", "2. An ___ travels into space.", ["astronaut"], "An astronaut is a person who travels into space."),
    input("B3", "3. A ___ studies science and carries out experiments.", ["scientist"], "A scientist studies scientific questions and conducts experiments."),
    input("B4", "4. We exercise and play sports in the ___.", ["gym", "gymnasium"], "A gym is a place where people exercise or play indoor sports.")
  ]},
  { key: "C", label: "C", title: "Unscramble the words and match.", note: "Write each job, then choose its definition label. The letters a-c are definition labels only.", points: 6, wordBank: ["a. the leader of a band or orchestra", "b. a person who takes care of bees", "c. a person who trains animals for shows"], questions: [
    { id: "C1", type: "paired", prompt: "1. e e b k e p e r", points: 2, parts: [
      { key: "word", label: "Unscrambled word", type: "input", answers: ["beekeeper", "bee keeper"], explanation: "Beekeeper is the correct word." },
      { key: "match", label: "Definition label", type: "choice", options: ["a", "b", "c"], answers: ["b"], explanation: "A beekeeper takes care of bees, so the definition label is b." }
    ]},
    { id: "C2", type: "paired", prompt: "2. c i r c u s  t r a i n e r", points: 2, parts: [
      { key: "word", label: "Unscrambled word", type: "input", answers: ["circus trainer", "circus-trainer"], explanation: "Circus trainer is the correct job expression." },
      { key: "match", label: "Definition label", type: "choice", options: ["a", "b", "c"], answers: ["c"], explanation: "A circus trainer trains animals for shows, so the definition label is c." }
    ]},
    { id: "C3", type: "paired", prompt: "3. c o n d u c t o r", points: 2, parts: [
      { key: "word", label: "Unscrambled word", type: "input", answers: ["conductor"], explanation: "Conductor is the correct word." },
      { key: "match", label: "Definition label", type: "choice", options: ["a", "b", "c"], answers: ["a"], explanation: "A conductor leads an orchestra or musical group, so the definition label is a." }
    ]}
  ]},
  { key: "D", label: "D", title: "Listen. Then circle the correct answer.", note: "Listen carefully for the comparison in each sentence.", points: 4, audio: "assets/audio-d.mp3", questions: [
    choice("D1", "1.", ["I prefer the orchestra.", "I prefer the band."], "I prefer the orchestra.", "The speaker says, “I prefer the orchestra.”"),
    choice("D2", "2.", ["The cello is quieter.", "The cello is louder."], "The cello is quieter.", "The comparison in the recording is quieter."),
    choice("D3", "3.", ["Lillian has the highest voice.", "Lillian has the lowest voice."], "Lillian has the highest voice.", "The recording says that no student has a higher voice than Lillian, so hers is the highest."),
    choice("D4", "4.", ["Rachel thinks the trombone is harder.", "Rachel thinks the trombone is easier."], "Rachel thinks the trombone is harder.", "Rachel describes the trombone as the harder instrument.")
  ]},
  { key: "E", label: "E", title: "Look and complete the sentences.", note: "Use the picture to write the correct comparative or superlative form.", points: 3, questions: [
    input("E1", "1. Juan is ___ the conductor.", ["taller than"], "Juan is taller than the conductor, so use the comparative form taller than.", IMG + "e-1.png"),
    input("E2", "2. Monica is ___ person in the orchestra.", ["the shortest"], "Monica is compared with everyone in the orchestra, so use the superlative form the shortest.", IMG + "e-2.png"),
    input("E3", "3. Ling is ___ student in the class.", ["the smartest"], "Ling has the highest result in the picture, so she is the smartest student in the class.", IMG + "e-3.png")
  ]},
  { key: "F", label: "F", title: "Complete the sentences.", note: "Use the correct comparative or superlative form of the word in parentheses.", points: 4, questions: [
    input("F1", "1. The tuba is ___ the trumpet. (big)", ["bigger than"], "The comparative form of big is bigger, followed by than."),
    input("F2", "2. That was ___ concert of the year. (amazing)", ["the most amazing"], "For a long adjective such as amazing, use the most to make the superlative."),
    input("F3", "3. The drums are ___ the flute. (loud)", ["louder than"], "The comparative form of loud is louder, followed by than."),
    input("F4", "4. His voice is ___ mine. (low)", ["lower than"], "The comparative form of low is lower, followed by than.")
  ]},
  { key: "G", label: "G", title: "Listen. Then circle True or False.", note: "Listen to each statement and decide whether it is true or false.", points: 4, audio: "assets/audio-g.mp3", questions: [
    choice("G1", "1.", ["T", "F"], "F", "Statement 1 is false according to the recording."),
    choice("G2", "2.", ["T", "F"], "T", "Statement 2 is true according to the recording."),
    choice("G3", "3.", ["T", "F"], "F", "Statement 3 is false according to the recording."),
    choice("G4", "4.", ["T", "F"], "T", "Statement 4 is true according to the recording.")
  ]},
  { key: "H", label: "H", title: "Complete the sentences.", note: "Write the music word that completes each meaning.", points: 5, questions: [
    input("H1", "1. Music that has been played for many years is ___ music.", ["traditional"], "Traditional music belongs to the customs and history of a community."),
    input("H2", "2. ___ are pipes of different lengths tied together and played by blowing across them.", ["panpipes", "pan pipes"], "Panpipes are made from several pipes of different lengths."),
    input("H3", "3. A ___ is a West African drum played with the hands.", ["djembe"], "A djembe is a hand-played drum from West Africa."),
    input("H4", "4. Wood, metal, and plastic are different kinds of ___.", ["material", "materials"], "Material means the substance that an object is made from; materials is also natural in this sentence."),
    input("H5", "5. When something moves quickly from side to side, it begins to ___.", ["vibrate"], "To vibrate means to move quickly backwards and forwards or from side to side.")
  ]},
  { key: "I", label: "I", title: "Complete the sentences and match them to the pictures.", note: "Write an instrument, then choose its picture label. The letters a-c are picture labels only.", points: 6, questions: [
    { id: "I1", type: "pictureWord", prompt: "1. It is made of wood and you blow into it.", pictures: labelledPictures("i", ["a", "b", "c"]), points: 2, parts: [
      { key: "picture", label: "Picture label", type: "pictureChoice", answers: ["a", "b"], explanation: "The official answer is picture a for flute. A clarinet in picture b also fits the general description, so both are accepted when paired with the correct instrument word." },
      { key: "word", label: "Instrument", type: "input", answers: ["flute", "clarinet"], explanation: "The official answer is flute. Clarinet is also scientifically valid because it is a woodwind instrument that is played by blowing, so it is accepted too." }
    ]},
    { id: "I2", type: "pictureWord", prompt: "2. It is a very large brass instrument with a low sound.", pictures: labelledPictures("i", ["a", "b", "c"]), points: 2, parts: [
      { key: "picture", label: "Picture label", type: "pictureChoice", answers: ["c"], explanation: "Picture c shows the tuba." },
      { key: "word", label: "Instrument", type: "input", answers: ["tuba"], explanation: "A tuba is a large brass instrument with a very low sound." }
    ]},
    { id: "I3", type: "pictureWord", prompt: "3. It is black, made of wood, and uses a reed.", pictures: labelledPictures("i", ["a", "b", "c"]), points: 2, parts: [
      { key: "picture", label: "Picture label", type: "pictureChoice", answers: ["b"], explanation: "Picture b shows the clarinet." },
      { key: "word", label: "Instrument", type: "input", answers: ["clarinet"], explanation: "A clarinet is usually black, is traditionally made of wood, and uses a single reed." }
    ]}
  ]},
  { key: "J", label: "J", title: "Write the words in the correct order.", note: "Use every word to make a complete sentence.", points: 3, questions: [
    input("J1", "1. not / the tuba / as big as / The clarinet / is", ["The clarinet is not as big as the tuba", "The clarinet is not as big as the tuba."], "Use subject + is not as + adjective + as + comparison noun."),
    input("J2", "2. not as long as / The flute / the didgeridoo / is", ["The flute is not as long as the didgeridoo", "The flute is not as long as the didgeridoo."], "The complete comparison is The flute is not as long as the didgeridoo."),
    input("J3", "3. as difficult as / The erhu / the violin / is", ["The erhu is as difficult as the violin", "The erhu is as difficult as the violin."], "Use as + adjective + as to show that the difficulty is equal.")
  ]},
  { key: "K", label: "K", title: "Look and complete the sentences.", note: "Use the best comparison phrase from the box. One phrase is not needed.", points: 4, wordBank: ["not as light as", "not as old as", "as big as", "as heavy as", "as tall as"], questions: [
    input("K1", "1. The erhu is ___ I am!", ["as big as"], "The picture compares the size of the erhu with the child, so as big as is the best phrase.", IMG + "k-1.png"),
    input("K2", "2. Frederick is ___ our music teacher.", ["as tall as"], "Frederick and the teacher are shown at the same height, so use as tall as.", IMG + "k-2.png"),
    input("K3", "3. The cello is ___ the violin.", ["not as light as"], "A cello is heavier than a violin, so it is not as light as the violin.", IMG + "k-3.png"),
    input("K4", "4. The drums are ___ the violin.", ["not as old as"], "The violin in the picture is older than the drums, so the drums are not as old as the violin.", IMG + "k-4.png")
  ]},
  { key: "L", label: "L", title: "Combine the sentences using as ... as or not as ... as.", note: "Write one complete comparison sentence without changing the meaning.", points: 3, questions: [
    input("L1", "1. The violin is beautiful. The erhu is equally beautiful.", ["The violin is as beautiful as the erhu", "The violin is as beautiful as the erhu.", "The erhu is as beautiful as the violin", "The erhu is as beautiful as the violin."], "Both instruments are equally beautiful, so either subject order is correct with as beautiful as."),
    input("L2", "2. This tuba is more expensive than this cello.", ["This cello is not as expensive as this tuba", "This cello is not as expensive as this tuba.", "This cello is not as expensive as the tuba", "This cello is not as expensive as the tuba."], "If the tuba is more expensive, the cello is not as expensive as the tuba."),
    input("L3", "3. The panpipes are light. The flute is equally light.", ["The panpipes are as light as the flute", "The panpipes are as light as the flute.", "The flute is as light as the panpipes", "The flute is as light as the panpipes."], "Both instruments are equally light, so either subject order is correct with as light as.")
  ]}
];
