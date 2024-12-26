const chanukahSources = {
  talmud: [
    {
      source: "מסכת שבת כא ע״ב",
      text: "מאי חנוכה? דתנו רבנן: בכ״ה בכסליו יומי דחנוכה תמניא אינון",
      translation: "מהי חנוכה? שנו חכמים: בכ״ה בכסלו מתחילים שמונת ימי החנוכה",
      explanation: "המקור התלמודי המרכזי המתאר את קביעת ימי החנוכה",
    },
    {
      source: "מסכת שבת כא ע״ב",
      text: "והדליקו ממנו שמונה ימים. לשנה אחרת קבעום ועשאום ימים טובים בהלל והודאה",
      translation:
        "והדליקו ממנו שמונה ימים. בשנה הבאה קבעו ימים אלו כימים טובים עם הלל והודאה",
      explanation: "המקור לקביעת ימי החנוכה כימי הלל והודאה",
    },
    {
      source: "מסכת שבת כא ע״ב - נס פך השמן",
      text: "כשנכנסו יוונים להיכל טמאו כל השמנים שבהיכל, וכשגברה מלכות בית חשמונאי ונצחום, בדקו ולא מצאו אלא פך אחד של שמן שהיה מונח בחותמו של כהן גדול",
      translation:
        "כשנכנסו היוונים להיכל טימאו את כל השמנים, וכשניצחו החשמונאים מצאו רק פך שמן אחד חתום בחותמת הכהן הגדול",
      explanation: "המקור המתאר את מציאת פך השמן הטהור",
    },
    {
      source: "מסכת שבת כא ע״ב - מהדרין מן המהדרין",
      text: "והמהדרין מן המהדרין, בית שמאי אומרים: יום ראשון מדליק שמונה, מכאן ואילך פוחת והולך; ובית הלל אומרים: יום ראשון מדליק אחת, מכאן ואילך מוסיף והולך",
      translation:
        "המהדרין מן המהדרין, לפי בית שמאי מתחילים בשמונה נרות ופוחתים, ולפי בית הלל מתחילים באחד ומוסיפים",
      explanation: "המחלוקת בין בית שמאי לבית הלל לגבי סדר הדלקת הנרות",
    },
  ],
  rambam: [
    {
      source: "משנה תורה, הלכות חנוכה",
      text: "מצות נר חנוכה מצוה חביבה היא עד מאד",
      translation: "מצוות נר חנוכה היא מצווה חביבה מאוד",
      explanation: "דברי הרמב״ם על חשיבות הדלקת נרות חנוכה",
    },
    {
      source: "משנה תורה, הלכות חנוכה פרק ד",
      text: "מצות נר חנוכה מצוה חביבה היא עד מאד, וצריך אדם להיזהר בה כדי להודיע הנס ולהוסיף בשבח האל והודיה לו על הניסים שעשה לנו",
      translation:
        "מצוות נר חנוכה היא מצווה חביבה מאוד, ויש להקפיד עליה כדי לפרסם את הנס ולהודות לה׳",
      explanation: "דברי הרמב״ם על חשיבות פרסום הנס",
    },
  ],
  halacha: [
    {
      source: "שולחן ערוך, אורח חיים תרע״א",
      text: "כמה נרות מדליק? בלילה הראשון מדליק אחד, מכאן ואילך מוסיף והולך",
      translation:
        "כמה נרות מדליקים? בלילה הראשון מדליק אחד, ומכאן ואילך מוסיף נר בכל לילה",
      explanation: "ההלכה הבסיסית של הדלקת נרות חנוכה",
    },
    {
      source: "שולחן ערוך, אורח חיים תרע״ב",
      text: "מדליקין נר חנוכה משתשקע החמה עד שתכלה רגל מן השוק",
      translation: "מדליקים נרות חנוכה מהשקיעה עד שאין אנשים ברחוב",
      explanation: "זמן הדלקת נרות חנוכה",
    },
    {
      source: "משנה ברורה, סימן תרע״א",
      text: "ונוהגין להחמיר שלא להשתמש לאורה אפילו תשמיש עראי כגון לעיין מעות או למנותן",
      translation:
        "נוהגים להחמיר שלא להשתמש לאור הנרות אפילו שימוש ארעי כמו לבדוק מטבעות",
      explanation: "האיסור להשתמש לאור נרות החנוכה",
    },
  ],
  zohar: [
    {
      source: "זוהר, פרשת בהעלותך",
      text: "בגין דאיהו רזא דאור הגנוז דאתברי ביומא קדמאה",
      translation: "משום שהוא סוד האור הגנוז שנברא ביום הראשון",
      explanation: "הקשר בין נרות חנוכה לאור הגנוז של הבריאה",
    },
  ],
  midrash: [
    {
      source: "פסיקתא רבתי, פרשה ב",
      text: "אמר הקב״ה: אם אתם מקיימים נרות חנוכה אני מראה לכם נרות של ציון",
      translation:
        "אמר הקב״ה: אם תקיימו מצוות נרות חנוכה, אראה לכם את נרות ציון",
      explanation: "הקשר בין נרות חנוכה לגאולה העתידית",
    },
  ],
};

function getRandomSource() {
  const categories = Object.keys(chanukahSources);
  const randomCategory =
    categories[Math.floor(Math.random() * categories.length)];
  const sources = chanukahSources[randomCategory];
  return sources[Math.floor(Math.random() * sources.length)];
}

function displayDailySource() {
  const source = getRandomSource();
  return {
    text: source.text,
    translation: source.translation,
    source: source.source,
    explanation: source.explanation,
  };
}