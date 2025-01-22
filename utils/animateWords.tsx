export const animateAllWordGroups = () => {
  // List of IDs that group our words
  const groupIds = ["word-1", "word-2", "word-3"];

  // This will hold info about each group:
  // {
  //   container: HTMLElement,
  //   words: HTMLElement[],
  //   letters: HTMLElement[][], // split letters for each .word
  //   currentIndex: number
  // }
  const groups: {
    container: HTMLElement;
    words: HTMLElement[];
    letters: HTMLElement[][];
    currentIndex: number;
  }[] = [];

  // Helper function to split a .word element into letter <span> elements
  const splitLetters = (word: HTMLElement) => {
    const content = word.innerText;

    word.innerText = "";

    const letters: HTMLElement[] = [];

    for (let i = 0; i < content.length; i++) {
      const letterSpan = document.createElement("span");

      letterSpan.className = "letter";
      letterSpan.innerText = content.charAt(i);
      word.appendChild(letterSpan);
      letters.push(letterSpan);
    }

    return letters;
  };

  // Initialize the groups array
  groupIds.forEach((id) => {
    const container = document.getElementById(id);

    if (!container) return;

    // Get all .word elements inside this group
    const words = Array.from(
      container.getElementsByClassName("word"),
    ) as HTMLElement[];

    // For each .word, split into letters
    const letters = words.map((wordEl) => splitLetters(wordEl));

    // Make the first .word visible
    words[0].style.opacity = "1";

    groups.push({
      container,
      words,
      letters,
      currentIndex: 0,
    });
  });

  // Animate a single word's letters out
  const animateLetterOut = (letters: HTMLElement[], i: number) => {
    setTimeout(() => {
      letters[i].className = "letter out";
    }, i * 90);
  };

  // Animate a single word's letters in
  const animateLetterIn = (letters: HTMLElement[], i: number) => {
    setTimeout(
      () => {
        letters[i].className = "letter in";
      },
      340 + i * 90,
    );
  };

  // Animate all groups in parallel
  const changeAllWords = () => {
    groups.forEach((group) => {
      const { words, letters, currentIndex } = group;

      // Current and next indices for this group
      const cw = letters[currentIndex];
      const nextIndex =
        currentIndex === words.length - 1 ? 0 : currentIndex + 1;
      const nw = letters[nextIndex];

      // Animate current word's letters out
      cw.forEach((_, i) => {
        animateLetterOut(cw, i);
      });

      // Animate next word's letters in
      nw.forEach((letter, i) => {
        letter.className = "letter behind"; // behind to position them
        // Ensure the next word is visible
        words[nextIndex].style.opacity = "1";
        animateLetterIn(nw, i);
      });

      // Update currentIndex for this group
      group.currentIndex = nextIndex;
    });
  };

  // Start the rotation
  changeAllWords();
  const intervalId = setInterval(changeAllWords, 4000);

  // Return a cleanup function if needed
  return () => {
    clearInterval(intervalId);
  };
};

export const animateWordChange = () => {
  let words = document.getElementsByClassName("word") as any;
  let wordArray: any = [];
  let currentWord = 0;

  words[currentWord].style.opacity = 1;

  const splitLetters = (word: any) => {
    let content = word.innerText;

    word.innerText = "";
    let letters = [];

    for (let i = 0; i < content.length; i++) {
      let letter = document.createElement("span");

      letter.className = "letter";
      letter.innerText = content.charAt(i);
      word.appendChild(letter);
      letters.push(letter);
    }
    wordArray.push(letters);
  };

  for (let i = 0; i < words.length; i++) {
    splitLetters(words[i]);
  }

  const animateLetterOut = (cw: any, i: any) => {
    setTimeout(function () {
      cw[i].className = "letter out";
    }, i * 90);
  };

  const animateLetterIn = (nw: any, i: any) => {
    setTimeout(
      function () {
        nw[i].className = "letter in";
      },
      340 + i * 90,
    );
  };

  const changeWord = () => {
    let cw = wordArray[currentWord];
    let nw =
      currentWord == words.length - 1
        ? wordArray[0]
        : wordArray[currentWord + 1];

    for (let i = 0; i < cw.length; i++) {
      animateLetterOut(cw, i);
    }

    for (let i = 0; i < nw.length; i++) {
      nw[i].className = "letter behind";
      nw[0].parentElement.style.opacity = 1;
      animateLetterIn(nw, i);
    }
    currentWord = currentWord == wordArray.length - 1 ? 0 : currentWord + 1;
  };

  changeWord();
  const intervalId = setInterval(changeWord, 4000);

  return () => {
    clearInterval(intervalId);
  };
};

export const animateWordChange2 = () => {
  let words = document.getElementsByClassName("word2") as any;
  let wordArray: any = [];
  let currentWord = 0;

  words[currentWord].style.opacity = 1;

  const splitLetters = (word: any) => {
    let content = word.innerText;

    word.innerText = "";
    let letters = [];

    for (let i = 0; i < content.length; i++) {
      let letter = document.createElement("span");

      letter.className = "letter";
      letter.innerText = content.charAt(i);
      word.appendChild(letter);
      letters.push(letter);
    }
    wordArray.push(letters);
  };

  for (let i = 0; i < words.length; i++) {
    splitLetters(words[i]);
  }

  const animateLetterOut = (cw: any, i: any) => {
    setTimeout(function () {
      cw[i].className = "letter out";
    }, i * 90);
  };

  const animateLetterIn = (nw: any, i: any) => {
    setTimeout(
      function () {
        nw[i].className = "letter in";
      },
      340 + i * 90,
    );
  };

  const changeWord = () => {
    let cw = wordArray[currentWord];
    let nw =
      currentWord == words.length - 1
        ? wordArray[0]
        : wordArray[currentWord + 1];

    for (let i = 0; i < cw.length; i++) {
      animateLetterOut(cw, i);
    }

    for (let i = 0; i < nw.length; i++) {
      nw[i].className = "letter behind";
      nw[0].parentElement.style.opacity = 1;
      animateLetterIn(nw, i);
    }
    currentWord = currentWord == wordArray.length - 1 ? 0 : currentWord + 1;
  };

  changeWord();
  const intervalId = setInterval(changeWord, 5000);

  return () => {
    clearInterval(intervalId);
  };
};

export const animateWordChange3 = () => {
  let words = document.getElementsByClassName("word3") as any;
  let wordArray: any = [];
  let currentWord = 0;

  words[currentWord].style.opacity = 1;

  const splitLetters = (word: any) => {
    let content = word.innerText;

    word.innerText = "";
    let letters = [];

    for (let i = 0; i < content.length; i++) {
      let letter = document.createElement("span");

      letter.className = "letter";
      letter.innerText = content.charAt(i);
      word.appendChild(letter);
      letters.push(letter);
    }
    wordArray.push(letters);
  };

  for (let i = 0; i < words.length; i++) {
    splitLetters(words[i]);
  }

  const animateLetterOut = (cw: any, i: any) => {
    setTimeout(function () {
      cw[i].className = "letter out";
    }, i * 90);
  };

  const animateLetterIn = (nw: any, i: any) => {
    setTimeout(
      function () {
        nw[i].className = "letter in";
      },
      340 + i * 90,
    );
  };

  const changeWord = () => {
    let cw = wordArray[currentWord];
    let nw =
      currentWord == words.length - 1
        ? wordArray[0]
        : wordArray[currentWord + 1];

    for (let i = 0; i < cw.length; i++) {
      animateLetterOut(cw, i);
    }

    for (let i = 0; i < nw.length; i++) {
      nw[i].className = "letter behind";
      nw[0].parentElement.style.opacity = 1;
      animateLetterIn(nw, i);
    }
    currentWord = currentWord == wordArray.length - 1 ? 0 : currentWord + 1;
  };

  changeWord();
  const intervalId = setInterval(changeWord, 6000);

  return () => {
    clearInterval(intervalId);
  };
};
