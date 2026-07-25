/* =====================================================================
   TES VERSETS
   ---------------------------------------------------------------------
   Un bloc par verset, une ligne vide entre deux blocs :

       50:37
       ar: le texte arabe collé depuis ta source
       fr: la traduction française

   Règles :
   - la première ligne du bloc est la référence  sourate:verset
   - « ar: » et « fr: » sont obligatoires, dans cet ordre
   - un texte long peut continuer sur les lignes suivantes
   - une ligne qui commence par #  est une note, elle est ignorée
   - apostrophes, guillemets, tirets : aucun problème, c'est du texte brut
   - ne touche pas au tout premier ligne ci-dessous ni au dernier point-virgule

   Le nom de la sourate est trouvé automatiquement à partir de son numéro.
   Au chargement, l'appli signale en haut de l'écran tout bloc mal formé.
   ===================================================================== */

window.VERSETS = `

# ---------- Sourate 1 · Al-Fātiḥa ----------

1:1
ar: بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
fr: Au nom d'Allah, le Tout Miséricordieux, le Très Miséricordieux.

1:2
ar: ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَٰلَمِينَ
fr: Louange à Allah, Seigneur des mondes.

1:3
ar: ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
fr: Le Tout Miséricordieux, le Très Miséricordieux.

1:4
ar: مَٰلِكِ يَوْمِ ٱلدِّينِ
fr: Maître du Jour de la rétribution.

1:5
ar: إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ
fr: C'est Toi que nous adorons, et c'est Toi dont nous implorons le secours.

1:6
ar: ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ
fr: Guide-nous sur le chemin droit,

1:7
ar: صِرَٰطَ ٱلَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ ٱلْمَغْضُوبِ عَلَيْهِمْ وَلَا ٱلضَّآلِّينَ
fr: le chemin de ceux que Tu as comblés de bienfaits, non pas de ceux qui ont encouru Ta colère, ni des égarés.


# ---------- Sourate 50 · Qāf ----------

50:16
ar: وَلَقَدْ خَلَقْنَا ٱلْإِنسَٰنَ وَنَعْلَمُ مَا تُوَسْوِسُ بِهِۦ نَفْسُهُۥ ۖ وَنَحْنُ أَقْرَبُ إِلَيْهِ مِنْ حَبْلِ ٱلْوَرِيدِ
fr: Nous avons créé l'être humain et Nous savons ce que son âme lui suggère : Nous sommes plus près de lui que sa veine jugulaire.

50:37
ar: إِنَّ فِى ذَٰلِكَ لَذِكْرَىٰ لِمَن كَانَ لَهُۥ قَلْبٌ أَوْ أَلْقَى ٱلسَّمْعَ وَهُوَ شَهِيدٌ
fr: Il y a bien là un rappel pour quiconque a un cœur, prête l'oreille tout en étant témoin.

50:45
ar: نَّحْنُ أَعْلَمُ بِمَا يَقُولُونَ ۖ وَمَآ أَنتَ عَلَيْهِم بِجَبَّارٍ ۖ فَذَكِّرْ بِٱلْقُرْءَانِ مَن يَخَافُ وَعِيدِ
fr: Nous savons mieux ce qu'ils disent. Tu n'as pas pour mission d'exercer sur eux une contrainte. Rappelle donc, par le Coran, celui qui craint Ma menace.


# ---------- Sourate 112 · Al-Ikhlāṣ ----------

112:1
ar: قُلْ هُوَ ٱللَّهُ أَحَدٌ
fr: Dis : « Lui, Allah, est Un.

112:2
ar: ٱللَّهُ ٱلصَّمَدُ
fr: Allah, l'Absolu, dont tout dépend et qui ne dépend de rien.

112:3
ar: لَمْ يَلِدْ وَلَمْ يُولَدْ
fr: Il n'a pas engendré et n'a pas été engendré,

112:4
ar: وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ
fr: et nul n'est son égal. »


# ---------- Sourate 113 · Al-Falaq ----------

113:1
ar: قُلْ أَعُوذُ بِرَبِّ ٱلْفَلَقِ
fr: Dis : « Je cherche protection auprès du Seigneur de l'aube naissante,

113:2
ar: مِن شَرِّ مَا خَلَقَ
fr: contre le mal de ce qu'Il a créé,

113:3
ar: وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ
fr: contre le mal de l'obscurité quand elle s'installe,

113:4
ar: وَمِن شَرِّ ٱلنَّفَّٰثَٰتِ فِى ٱلْعُقَدِ
fr: contre le mal de celles qui soufflent sur les nœuds,

113:5
ar: وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ
fr: et contre le mal de l'envieux quand il envie. »


# ---------- Sourate 114 · An-Nās ----------

114:1
ar: قُلْ أَعُوذُ بِرَبِّ ٱلنَّاسِ
fr: Dis : « Je cherche protection auprès du Seigneur des hommes,

114:2
ar: مَلِكِ ٱلنَّاسِ
fr: le Souverain des hommes,

114:3
ar: إِلَٰهِ ٱلنَّاسِ
fr: le Dieu des hommes,

114:4
ar: مِن شَرِّ ٱلْوَسْوَاسِ ٱلْخَنَّاسِ
fr: contre le mal de celui qui souffle le doute puis se dérobe,

114:5
ar: ٱلَّذِى يُوَسْوِسُ فِى صُدُورِ ٱلنَّاسِ
fr: celui qui souffle le doute dans les poitrines des hommes,

114:6
ar: مِنَ ٱلْجِنَّةِ وَٱلنَّاسِ
fr: qu'il soit d'entre les djinns ou les hommes. »

`;
