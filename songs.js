// מילות השיר מעוז צור
const maozTzurLyrics = `
מָעוֹז צוּר יְשׁוּעָתִי לְךָ נָאֶה לְשַׁבֵּחַ.
תִּכּוֹן בֵּית תְּפִלָּתִי וְשָׁם תּוֹדָה נְזַבֵּחַ.
לְעֵת תָּכִין מַטְבֵּחַ מִצָּר הַמְנַבֵּחַ.
אָז אֶגְמֹר בְּשִׁיר מִזְמוֹר חֲנֻכַּת הַמִּזְבֵּחַ:

רָעוֹת שָׂבְעָה נַפְשִׁי בְּיָגוֹן כֹּחִי כָּלָה
חַיַּי מֵרְרוּ בְקֹשִׁי בְּשִׁעְבּוּד מַלְכוּת עֶגְלָה
וּבְיָדוֹ הַגְּדוֹלָה הוֹצִיא אֶת הַסְּגֻלָּה
חֵיל פַּרְעֹה וְכָל זַרְעוֹ יָרְדוּ כְּאֶבֶן בִּמְצוּלָה:

דְּבִיר קָדְשׁוֹ הֱבִיאַנִי וְגַם שָׁם לֹא שָׁקַטְתִּי
וּבָא נוֹגֵשׂ וְהִגְלַנִי כִּי זָרִים עָבַדְתִּי
וְיֵין רַעַל מָסַכְתִּי כִּמְעַט שֶׁעָבַרְתִּי
קֵץ בָּבֶל זְרֻבָּבֶל לְקֵץ ��ִׁבְעִים נוֹשַׁעְתִּי:

כְּרוֹת קוֹמַת בְּרוֹשׁ בִּקֵּשׁ אֲגָגִי בֶּן הַמְּדָתָא
וְנִהְיָתָה לוֹ לְפַח וּלְמוֹקֵשׁ וְגַאֲוָתוֹ נִשְׁבָּתָה
רֹאשׁ יְמִינִי נִשֵּׂאתָ וְאוֹיֵב שְׁמוֹ מָחִיתָ
רֹב בָּנָיו וְקִנְיָנָיו עַל הָעֵץ תָּלִיתָ:

יְוָנִים נִקְבְּצוּ עָלַי אֲזַי בִּימֵי חַשְׁמַנִּים
וּפָרְצוּ חוֹמוֹת מִגְדָּלַי וְטִמְּאוּ כָּל הַשְּׁמָנִים
וּמִנּוֹתַר קַנְקַנִּים נַעֲשָׂה נֵס לַשּׁוֹשַׁנִּים
בְּנֵי בִינָה יְמֵי שְׁמוֹנָה קָבְעוּ שִׁיר וּרְנָנִים:

חֲשׂוֹף זְרוֹעַ קָדְשֶׁךָ וְקָרֵב קֵץ הַיְשׁוּעָה
נְקֹם נִקְמַת עֲבָדֶיךָ מֵאֻמָּה הָרְשָׁעָה
כִּי אָרְכָה הַשָּׁעָה וְאֵין קֵץ לִימֵי הָרָעָה
דְּחֵה אַדְמוֹן בְּצֵל צַלְמוֹן הָקֵם לָנוּ רוֹעִים שִׁבְעָה:
`;

const songs = {
  maozTzur: {
    title: "מעוז צור",
    description: "השיר המסורתי להדלקת נרות",
    lyrics: maozTzurLyrics, // כבר קיים
  },
  banuChoshech: {
    title: "באנו חושך לגרש",
    description: "שיר שמח ואנרגטי לחנוכה",
    lyrics: [], // כאן תוכל להוסיף את המילים
  },
  chanukia: {
    title: "חנוכייה לי יש",
    description: "שיר ילדים מקסים לחג",
    lyrics: [], // כאן תוכל להוסיף את המילים
  },
  modernSong: {
    title: "שיר חנוכה מודרני",
    description: "שיר עכשווי המשלב מסורת",
    lyrics: [], // כאן תוכל להוסיף את המילים
  },
};

export default songs;
// פונקציה להצגת המודל
function showSongModal() {
  // יצירת אלמנטי המודל
  const modalHtml = `
    <div class="modal fade" id="songModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">מעוז צור ישועתי</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="song-content">
              <pre class="song-text">${maozTzurLyrics}</pre>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">סגור</button>
          </div>
        </div>
      </div>
    </div>
  `;

  // הוספת המודל לדף
  document.body.insertAdjacentHTML("beforeend", modalHtml);

  // הצגת המודל
  const modal = new bootstrap.Modal(document.getElementById("songModal"));
  modal.show();
}
