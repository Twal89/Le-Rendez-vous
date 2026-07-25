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

50:1
ar: قٓ ۚ وَٱلْقُرْءَانِ ٱلْمَجِيدِ
fr: Qaf. Par le Coran glorieux !

50:2
ar: بَلْ عَجِبُوٓا۟ أَن جَآءَهُم مُّنذِرٌۭ مِّنْهُمْ فَقَالَ ٱلْكَـٰفِرُونَ هَـٰذَا شَىْءٌ عَجِيبٌ
fr: Mais ils s'étonnent que l'un des leurs leur vint comme avertisseur; et les mécréants dirent: « Ceci est une chose étonnante.

50:3
ar: أَءِذَا مِتْنَا وَكُنَّا تُرَابًۭا ۖ ذَٰلِكَ رَجْعٌۢ بَعِيدٌۭ
fr: Quoi ! Quand nous serons morts et réduits en poussière... ? Ce serait revenir de loin ! »

50:4
ar: قَدْ عَلِمْنَا مَا تَنقُصُ ٱلْأَرْضُ مِنْهُمْ ۖ وَعِندَنَا كِتَـٰبٌ حَفِيظٌۢ
fr: Certes, Nous savons ce que la terre rongera d'eux [de leurs corps]; et Nous avons un Livre où tout est conservé.

50:5
ar: بَلْ كَذَّبُوا۟ بِٱلْحَقِّ لَمَّا جَآءَهُمْ فَهُمْ فِىٓ أَمْرٍۢ مَّرِيجٍ
fr: Plutôt, ils traitent de mensonge la vérité qui leur est venue: les voilà donc dans une situation confuse.

50:6
ar: أَفَلَمْ يَنظُرُوٓا۟ إِلَى ٱلسَّمَآءِ فَوْقَهُمْ كَيْفَ بَنَيْنَـٰهَا وَزَيَّنَّـٰهَا وَمَا لَهَا مِن فُرُوجٍۢ
fr: N'ont-ils donc pas observé le ciel au-dessus d'eux, comment Nous l'avons bâti et embelli; et comment il est sans fissures ?

50:7
ar: وَلَقَدْ خَلَقْنَا ٱلْإِنسَٰنَ وَنَعْلَمُ مَا تُوَسْوِسُ بِهِۦ نَفْسُهُۥ ۖ وَنَحْنُ أَقْرَبُ إِلَيْهِ مِنْ حَبْلِ ٱلْوَرِيدِ
fr: Nous avons créé l'être humain et Nous savons ce que son âme lui suggère : Nous sommes plus près de lui que sa veine jugulaire.

50:8
ar: تَبْصِرَةًۭ وَذِكْرَىٰ لِكُلِّ عَبْدٍۢ مُّنِيبٍۢ
fr: à titre d'appel à la clairvoyance et un rappel pour tout serviteur repentant.

50:9
ar: وَنَزَّلْنَا مِنَ ٱلسَّمَآءِ مَآءًۭ مُّبَـٰرَكًۭا فَأَنۢبَتْنَا بِهِۦ جَنَّـٰتٍۢ وَحَبَّ ٱلْحَصِيدِ
fr: Et Nous avons fait descendre du ciel une eau bénie, avec laquelle Nous avons fait pousser des jardins et le grain qu'on moissonne,

50:10
ar: وَٱلنَّخْلَ بَاسِقَـٰتٍۢ لَّهَا طَلْعٌۭ نَّضِيدٌۭ
fr: ainsi que les hauts palmiers aux régimes superposés,

50:11
ar: رِّزْقًۭا لِّلْعِبَادِ ۖ وَأَحْيَيْنَا بِهِۦ بَلْدَةًۭ مَّيْتًۭا ۚ كَذَٰلِكَ ٱلْخُرُوجُ
fr: comme subsistance pour les serviteurs. Et par elle (l'eau) Nous avons redonné la vie à une contrée morte. Ainsi se fera la résurrection.

50:12
ar: كَذَّبَتْ قَبْلَهُمْ قَوْمُ نُوحٍۢ وَأَصْحَـٰبُ ٱلرَّسِّ وَثَمُودُ
fr: Avant eux, le peuple de Nuh (Noé), les gens d'Ar-Rass et les Thamud crièrent au mensonge,

50:13
ar: وَعَادٌۭ وَفِرْعَوْنُ وَإِخْوَٰنُ لُوطٍۢ
fr: de même que les 'Ad et Fir'awn (Pharaon) et les frères de Lut (Loth),

50:14
ar: وَأَصْحَـٰبُ ٱلْأَيْكَةِ وَقَوْمُ تُبَّعٍۢ ۚ كُلٌّۭ كَذَّبَ ٱلرُّسُلَ فَحَقَّ وَعِيدِ
fr: et les gens d'Al-Aykah et le peuple de Tubba'. Tous traitèrent les Messagers de menteurs. C'est ainsi que Ma menace se justifia.

50:15
ar: أَفَعَيِينَا بِٱلْخَلْقِ ٱلْأَوَّلِ ۚ بَلْ هُمْ فِى لَبْسٍۢ مِّنْ خَلْقٍۢ جَدِيدٍۢ
fr: Quoi ? Avons-Nous été fatigué par la première création ? Mais ils sont dans la confusion [au sujet] d'une création nouvelle.

50:16
ar: وَلَقَدْ خَلَقْنَا ٱلْإِنسَـٰنَ وَنَعْلَمُ مَا تُوَسْوِسُ بِهِۦ نَفْسُهُۥ ۖ وَنَحْنُ أَقْرَبُ إِلَيْهِ مِنْ حَبْلِ ٱلْوَرِيدِ
fr: Nous avons effectivement créé l'homme et Nous savons ce que son âme lui suggère et Nous sommes plus près de lui que sa veine jugulaire

50:17
ar: إِذْ يَتَلَقَّى ٱلْمُتَلَقِّيَانِ عَنِ ٱلْيَمِينِ وَعَنِ ٱلشِّمَالِ قَعِيدٌۭ
fr: quand les deux recueillants, assis à droite et à gauche, recueillent.

50:18
ar: مَّا يَلْفِظُ مِن قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌۭ
fr: Il ne prononce pas une parole sans avoir auprès de lui un observateur prêt à l'inscrire.

50:19
ar: وَجَآءَتْ سَكْرَةُ ٱلْمَوْتِ بِٱلْحَقِّ ۖ ذَٰلِكَ مَا كُنتَ مِنْهُ تَحِيدُ
fr: L'agonie de la mort fait apparaître la vérité: « Voilà ce dont tu t'écartais. »

50:20
ar: وَنُفِخَ فِى ٱلصُّورِ ۚ ذَٰلِكَ يَوْمُ ٱلْوَعِيدِ
fr: Et l'on soufflera dans la Trompe: voilà le jour de la Menace.

50:21
ar: وَجَآءَتْ كُلُّ نَفْسٍۢ مَّعَهَا سَآئِقٌۭ وَشَهِيدٌۭ
fr: Alors chaque âme viendra accompagnée d'un conducteur et d'un témoin.

50:22
ar: لَّقَدْ كُنتَ فِى غَفْلَةٍۢ مِّنْ هَـٰذَا فَكَشَفْنَا عَنكَ غِطَآءَكَ فَبَصَرُكَ ٱلْيَوْمَ حَدِيدٌۭ
fr: « Tu restais indifférent à cela. Et bien, Nous ôtons ton voile; ta vue est perçante aujourd'hui. »

50:23
ar: وَقَالَ قَرِينُهُۥ هَـٰذَا مَا لَدَىَّ عَتِيدٌ
fr: Et son compagnon dira: « Voilà ce qui est avec moi, tout prêt ».

50:24
ar: أَلْقِيَا فِى جَهَنَّمَ كُلَّ كَفَّارٍ عَنِيدٍۢ
fr: « Vous deux, jetez dans l'Enfer tout mécréant endurci et rebelle,

50:25
ar: مَّنَّاعٍۢ لِّلْخَيْرِ مُعْتَدٍۢ مُّرِيبٍ
fr: acharné à empêcher le bien, transgresseur, douteur,

50:26
ar: ٱلَّذِى جَعَلَ مَعَ ٱللَّهِ إِلَـٰهًا ءَاخَرَ فَأَلْقِيَاهُ فِى ٱلْعَذَابِ ٱلشَّدِيدِ
fr: celui qui plaçait à côté d'Allah une autre divinité. Jetez-le donc dans le dur châtiment. »

50:27
ar: قَالَ قَرِينُهُۥ رَبَّنَا مَآ أَطْغَيْتُهُۥ وَلَـٰكِن كَانَ فِى ضَلَـٰلٍۭ بَعِيدٍۢ ۞
fr: Son camarade (le Diable) dira: « Seigneur, ce n'est pas moi qui l'ai fait transgresser; mais il était déjà dans un profond égarement. »

50:28
ar: قَالَ لَا تَخْتَصِمُوا۟ لَدَىَّ وَقَدْ قَدَّمْتُ إِلَيْكُم بِٱلْوَعِيدِ
fr: Alors [Allah] dira: « Ne vous disputez pas devant moi ! Alors que Je vous ai déjà fait part de la menace.

50:29
ar: مَا يُبَدَّلُ ٱلْقَوْلُ لَدَىَّ وَمَآ أَنَا۠ بِظَلَّـٰمٍۢ لِّلْعَبِيدِ
fr: Chez Moi, la parole ne change pas; et Je n'opprime nullement les serviteurs. »

50:30
ar: يَوْمَ نَقُولُ لِجَهَنَّمَ هَلِ ٱمْتَلَأْتِ وَتَقُولُ هَلْ مِن مَّزِيدٍۢ
fr: Le jour où Nous dirons à l'Enfer: « Es-tu rempli ? » Il dira: « Y en a-t-il encore ? »

50:31
ar: وَأُزْلِفَتِ ٱلْجَنَّةُ لِلْمُتَّقِينَ غَيْرَ بَعِيدٍ
fr: Le Paradis sera rapproché à proximité des pieux.

50:32
ar: هَـٰذَا مَا تُوعَدُونَ لِكُلِّ أَوَّابٍ حَفِيظٍۢ
fr: « Voilà ce qui vous a été promis, [ainsi qu'] à tout homme plein de repentir et respectueux [des prescriptions divines]

50:33
ar: مَّنْ خَشِىَ ٱلرَّحْمَـٰنَ بِٱلْغَيْبِ وَجَآءَ بِقَلْبٍۢ مُّنِيبٍ
fr: qui redoute le Tout Miséricordieux bien qu'il ne Le voit pas, et qui vient [vers Lui] avec un cœur porté à l'obéissance.

50:34
ar: ٱدْخُلُوهَا بِسَلَـٰمٍۢ ۖ ذَٰلِكَ يَوْمُ ٱلْخُلُودِ
fr: Entrez-y en toute sécurité. » Voilà le jour de l'éternité !

50:35
ar: لَهُم مَّا يَشَآءُونَ فِيهَا وَلَدَيْنَا مَزِيدٌۭ
fr: Il y aura là pour eux tout ce qu'ils voudront. Et auprès de Nous il y a davantage encore.

50:36
ar: وَكَمْ أَهْلَكْنَا قَبْلَهُم مِّن قَرْنٍ هُمْ أَشَدُّ مِنْهُم بَطْشًۭا فَنَقَّبُوا۟ فِى ٱلْبِلَـٰدِ هَلْ مِن مَّحِيصٍ
fr: Combien avons-Nous fait périr, avant eux, de générations bien plus fortes qu'eux. Ils avaient parcouru les contrées, cherchant [vainement] où fuir.

50:37
ar: إِنَّ فِى ذَٰلِكَ لَذِكْرَىٰ لِمَن كَانَ لَهُۥ قَلْبٌ أَوْ أَلْقَى ٱلسَّمْعَ وَهُوَ شَهِيدٌۭ
fr: Il y a bien là un rappel pour quiconque a un cœur, prête l'oreille tout en étant témoin.

50:38
ar: وَلَقَدْ خَلَقْنَا ٱلسَّمَـٰوَٰتِ وَٱلْأَرْضَ وَمَا بَيْنَهُمَا فِى سِتَّةِ أَيَّامٍۢ وَمَا مَسَّنَا مِن لُّغُوبٍۢ
fr: En effet Nous avons créé les cieux et la terre et ce qui existe entre eux en six jours, sans éprouver la moindre lassitude.

50:39
ar: فَٱصْبِرْ عَلَىٰ مَا يَقُولُونَ وَسَبِّحْ بِحَمْدِ رَبِّكَ قَبْلَ طُلُوعِ ٱلشَّمْسِ وَقَبْلَ ٱلْغُرُوبِ
fr: Endure donc ce qu'ils disent; et célèbre la louange de ton Seigneur avant le lever du soleil et avant [son] coucher;

50:40
ar: وَمِنَ ٱلَّيْلِ فَسَبِّحْهُ وَأَدْبَـٰرَ ٱلسُّجُودِ
fr: et célèbre Sa gloire, une partie de la nuit et à la suite des prosternations [prières].

50:41
ar: وَٱسْتَمِعْ يَوْمَ يُنَادِ ٱلْمُنَادِ مِن مَّكَانٍۢ قَرِيبٍۢ
fr: Et sois à l'écoute, le jour où le Crieur criera d'un endroit proche,

50:42
ar: يَوْمَ يَسْمَعُونَ ٱلصَّيْحَةَ بِٱلْحَقِّ ۚ ذَٰلِكَ يَوْمُ ٱلْخُرُوجِ
fr: le jour où ils entendront en toute vérité le Cri. Voilà le Jour de la Résurrection.

50:43
ar: إِنَّا نَحْنُ نُحْىِۦ وَنُمِيتُ وَإِلَيْنَا ٱلْمَصِيرُ
fr: C'est Nous qui donnons la vie et donnons la mort, et vers Nous sera la destination,

50:44
ar: يَوْمَ تَشَقَّقُ ٱلْأَرْضُ عَنْهُمْ سِرَاعًۭا ۚ ذَٰلِكَ حَشْرٌ عَلَيْنَا يَسِيرٌۭ
fr: le jour où la terre se fendra, les [rejetant] précipitamment. Ce sera un rassemblement facile pour Nous.

50:45
ar: نَّحْنُ أَعْلَمُ بِمَا يَقُولُونَ ۖ وَمَآ أَنتَ عَلَيْهِم بِجَبَّارٍۢ ۖ فَذَكِّرْ بِٱلْقُرْءَانِ مَن يَخَافُ وَعِيدِ  
fr: Nous savons mieux ce qu'ils disent. Tu n'as pas pour mission d'exercer sur eux une contrainte. Rappelle donc, par le Coran celui qui craint Ma menace.

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

# ---------- Sourate 20 · Ta-Ha ----------

20:1
ar: طه
fr: Ta Ha.

20:2
ar: مَآ أَنزَلْنَا عَلَيْكَ ٱلْقُرْءَانَ لِتَشْقَىٰٓ
fr: Nous n'avons point fait descendre sur toi le Coran pour que tu sois malheureux,

20:3
ar: إِلَّا تَذْكِرَةًۭ لِّمَن يَخْشَىٰ
fr: si ce n'est qu'un Rappel pour celui qui redoute (Allah),

20:4
ar: تَنزِيلًۭا مِّمَّنْ خَلَقَ ٱلْأَرْضَ وَٱلسَّمَـٰوَٰتِ ٱلْعُلَى
fr: (et comme) une révélation émanant de Celui qui a créé la terre et les cieux sublimes.


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
