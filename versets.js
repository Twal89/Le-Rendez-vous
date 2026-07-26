/* =====================================================================
   TES VERSETS
   ---------------------------------------------------------------------
   Un bloc par verset, une ligne vide entre deux blocs :

       50:37
       ar: le texte arabe collé depuis ta source
       fr: la traduction française
       ph: la phonétique

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
ph: Bismi Allāhi Ar-Raĥmāni Ar-Raĥīmi

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
ar: قَالَ قَرِينُهُۥ رَبَّنَا مَآ أَطْغَيْتُهُۥ وَلَـٰكِن كَانَ فِى ضَلَـٰلٍۭ بَعِيدٍۢ
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

# ---------- Sourate 18 · Al-Kahf ----------

18:1
ar: ٱلْحَمْدُ لِلَّهِ ٱلَّذِىٓ أَنزَلَ عَلَىٰ عَبْدِهِ ٱلْكِتَٰبَ وَلَمْ يَجْعَل لَّهُۥ عِوَجَا ۜ
fr: Louange à Allah qui a fait descendre sur Son serviteur (Muhammad), le Livre, et n'y a point introduit de tortuosité (ambiguité) !
ph: Al-Ĥamdu Lillāhi Al-Ladhī 'Anzala `Alá `Abdihi Al-Kitāba Wa Lam Yaj`al Llahu `Iwajā

18:2
ar: قَيِّمًۭا لِّيُنذِرَ بَأْسًۭا شَدِيدًۭا مِّن لَّدُنْهُ وَيُبَشِّرَ ٱلْمُؤْمِنِينَ ٱلَّذِينَ يَعْمَلُونَ ٱلصَّٰلِحَٰتِ أَنَّ لَهُمْ أَجْرًا حَسَنًۭا
fr: [Un Livre] d'une parfaite droiture pour avertir d'une sévère punition venant de Sa part et pour annoncer aux croyants qui font de bonnes œuvres qu'il y aura pour eux une belle récompense.
ph: Qayyimāan Liyundhira Ba'sāan Shadīdāan Min Ladunhu Wa Yubashira Al-Mu'uminīna Al-Ladhīna Ya`malūna Aş-Şāliĥāti 'Anna Lahum 'Ajrāan Ĥasanāan

18:3
ar: مَّٰكِثِينَ فِيهِ أَبَدًۭا
fr: où ils demeureront éternellement,
ph: Mākithīna Fīhi 'Abadāan

18:4
ar: وَيُنذِرَ ٱلَّذِينَ قَالُوا۟ ٱتَّخَذَ ٱللَّهُ وَلَدًۭا
fr: et pour avertir ceux qui disent: « Allah S'est attribué un enfant. »
ph: Wa Yundhira Al-Ladhīna Qālū Attakhadha Allāhu Waladāan

18:5
ar: مَّا لَهُم بِهِۦ مِنْ عِلْمٍۢ وَلَا لِءَابَآئِهِمْ ۚ كَبُرَتْ كَلِمَةًۭ تَخْرُجُ مِنْ أَفْوَٰهِهِمْ ۚ إِن يَقُولُونَ إِلَّا كَذِبًۭا
fr: Ni eux ni leurs ancêtres n'en savent rien. Quelle monstrueuse parole que celle qui sort de leurs bouches ! Ce qu'ils disent n'est que mensonge.
ph: Mmā Lahum Bihi Min `Ilmin Wa Lā Li'ābā'ihim Kaburat Kalimatan Takhruju Min 'Afwāhihim 'In Yaqūlūna 'Illā Kadhibāan

18:6
ar: فَلَعَلَّكَ بَٰخِعٌۭ نَّفْسَكَ عَلَىٰٓ ءَاثَٰرِهِمْ إِن لَّمْ يُؤْمِنُوا۟ بِهَٰذَا ٱلْحَدِيثِ أَسَفًا
fr: Tu vas peut-être te consumer de chagrin parce qu'ils se détournent de toi et ne croient pas en ce discours !
ph: Fala`allaka Bākhi`un Nafsaka `Alá 'Āthārihim 'In Lam Yu'uminū Bihadhā Al-Ĥadīthi 'Asafāan

18:7
ar: إِنَّا جَعَلْنَا مَا عَلَى ٱلْأَرْضِ زِينَةًۭ لَّهَا لِنَبْلُوَهُمْ أَيُّهُمْ أَحْسَنُ عَمَلًۭا
fr: Nous avons placé ce qu'il y a sur la terre pour l'embellir, afin d'éprouver (les hommes et afin de savoir) qui d'entre eux sont les meilleurs dans leurs actions.
ph: 'Innā Ja`alnā Mā `Alá Al-'Arđi Zīnatan Lahā Linabluwahum 'Ayyuhum 'Aĥsanu `Amalāan

18:8
ar: وَإِنَّا لَجَٰعِلُونَ مَا عَلَيْهَا صَعِيدًۭا جُرُزًا
fr: Puis, Nous allons sûrement transformer sa surface en un sol aride.
ph: Wa 'Innā Lajā`ilūna Mā `Alayhā Şa`īdāan Juruzāan

18:9
ar: أَمْ حَسِبْتَ أَنَّ أَصْحَٰبَ ٱلْكَهْفِ وَٱلرَّقِيمِ كَانُوا۟ مِنْ ءَايَٰتِنَا عَجَبًا
fr: Penses-tu que les gens de la Caverne et d'ar-Raqiim ont constitué une chose extraordinaire d'entre Nos prodiges ?
ph: 'Am Ĥasibta 'Anna 'Aşĥāba Al-Kahfi Wa Ar-Raqīmi Kānū Min 'Āyātinā `Ajabāan

18:10
ar: إِذْ أَوَى ٱلْفِتْيَةُ إِلَى ٱلْكَهْفِ فَقَالُوا۟ رَبَّنَآ ءَاتِنَا مِن لَّدُنكَ رَحْمَةًۭ وَهَيِّئْ لَنَا مِنْ أَمْرِنَا رَشَدًۭا
fr: Quand les jeunes gens se furent réfugiés dans la caverne, ils dirent: « Ô notre Seigneur, donne-nous de Ta part une miséricorde; et assure nous la droiture dans tout ce qui nous concerne. »
ph: 'Idh 'Awá Al-Fityatu 'Ilá Al-Kahfi Faqālū Rabbanā 'Ātinā Min Ladunka Raĥmatan Wa Hayyi' Lanā Min 'Amrinā Rashadāan

18:11
ar: فَضَرَبْنَا عَلَىٰٓ ءَاذَانِهِمْ فِى ٱلْكَهْفِ سِنِينَ عَدَدًۭا
fr: Alors, Nous avons assourdi leurs oreilles, dans la caverne pendant de nombreuses années.
ph: Fađarabnā `Alá 'Ādhānihim Fī Al-Kahfi Sinīna `Adadāan

18:12
ar: ثُمَّ بَعَثْنَٰهُمْ لِنَعْلَمَ أَىُّ ٱلْحِزْبَيْنِ أَحْصَىٰ لِمَا لَبِثُوٓا۟ أَمَدًۭا
fr: Ensuite, Nous les avons ressuscités, afin de savoir lequel des deux groupes saurait le mieux calculer la durée exacte de leur séjour.
ph: Thumma Ba`athnāhum Lina`lama 'Ayyu Al-Ĥizbayni 'Aĥşá Limā Labithū 'Amadāan

18:13
ar: نَّحْنُ نَقُصُّ عَلَيْكَ نَبَأَهُم بِٱلْحَقِّ ۚ إِنَّهُمْ فِتْيَةٌ ءَامَنُوا۟ بِرَبِّهِمْ وَزِدْنَٰهُمْ هُدًۭى
fr: Nous allons te raconter leur récit en toute vérité. Ce sont des jeunes gens qui croyaient en leur Seigneur; et Nous leur avons accordé les plus grands moyens de se diriger [dans la bonne voie].
ph: Naĥnu Naquşşu `Alayka Naba'ahum Bil-Ĥaqqi 'Innahum Fityatun 'Āmanū Birabbihim Wa Zidnāhum Hudáan

18:14
ar: وَرَبَطْنَا عَلَىٰ قُلُوبِهِمْ إِذْ قَامُوا۟ فَقَالُوا۟ رَبُّنَا رَبُّ ٱلسَّمَٰوَٰتِ وَٱلْأَرْضِ لَن نَّدْعُوَا۟ مِن دُونِهِۦٓ إِلَٰهًۭا ۖ لَّقَدْ قُلْنَآ إِذًۭا شَطَطًا
fr: Nous avons fortifié leurs cœurs lorsqu'ils s'étaient levés pour dire: « Notre Seigneur est le Seigneur des cieux et de la terre: jamais nous n'invoquerons de divinité en dehors de Lui, sans quoi, nous transgresserions dans nos paroles.
ph: Wa Rabaţnā `Alá Qulūbihim 'Idh Qāmū Faqālū Rabbunā Rabbu As-Samāwāti Wa Al-'Arđi Lan Nad`uwa Min Dūnihi 'Ilahāan Laqad Qulnā 'Idhāan Shaţaţāan

18:15
ar: هَٰٓؤُلَآءِ قَوْمُنَا ٱتَّخَذُوا۟ مِن دُونِهِۦٓ ءَالِهَةًۭ ۖ لَّوْلَا يَأْتُونَ عَلَيْهِم بِسُلْطَٰنٍۭ بَيِّنٍۢ ۖ فَمَنْ أَظْلَمُ مِمَّنِ ٱفْتَرَىٰ عَلَى ٱللَّهِ كَذِبًۭا
fr: Voilà que nos concitoyens ont adopté en dehors de Lui des divinités. Que n'apportent-ils sur elles une preuve évidente ? Quel pire injuste, donc que celui qui invente un mensonge contre Allah ?
ph: Hā'ulā' Qawmunā Attakhadhū Min Dūnihi 'Ālihatan Lawlā Ya'tūna `Alayhim Bisulţānin Bayyinin Faman 'Ažlamu Mimmani Aftará `Alá Allāhi Kadhibāan

18:16
ar: وَإِذِ ٱعْتَزَلْتُمُوهُمْ وَمَا يَعْبُدُونَ إِلَّا ٱللَّهَ فَأْوُۥٓا۟ إِلَى ٱلْكَهْفِ يَنشُرْ لَكُمْ رَبُّكُم مِّن رَّحْمَتِهِۦ وَيُهَيِّئْ لَكُم مِّنْ أَمْرِكُم مِّرْفَقًۭا
fr: Et quand vous vous serez séparés d'eux et de ce qu'ils adorent en dehors d'Allah, réfugiez-vous donc dans la caverne: votre Seigneur répandra de Sa miséricorde sur vous et disposera pour vous un adoucissement à votre sort.
ph: Wa 'Idh A`tazaltumūhum Wa Mā Ya`budūna 'Illā Allāha Fa'wū 'Ilá Al-Kahfi Yanshur Lakum Rabbukum Min Raĥmatihi Wa Yuhayyi' Lakum Min 'Amrikum Mirfaqāan

18:17
ar: ۞ وَتَرَى ٱلشَّمْسَ إِذَا طَلَعَت تَّزَٰوَرُ عَن كَهْفِهِمْ ذَاتَ ٱلْيَمِينِ وَإِذَا غَرَبَت تَّقْرِضُهُمْ ذَاتَ ٱلشِّمَالِ وَهُمْ فِى فَجْوَةٍۢ مِّنْهُ ۚ ذَٰلِكَ مِنْ ءَايَٰتِ ٱللَّهِ ۗ مَن يَهْدِ ٱللَّهُ فَهُوَ ٱلْمُهْتَدِ ۖ وَمَن يُضْلِلْ فَلَن تَجِدَ لَهُۥ وَلِيًّۭا مُّرْشِدًۭا
fr: Tu aurais vu le soleil, quand il se lève, s'écarter de leur caverne vers la droite, et quand il se couche, passer à leur gauche, tandis qu'eux-mêmes sont là dans une partie spacieuse (de la caverne)... Cela est une des merveilles d'Allah. Celui qu'Allah guide, c'est lui le bien-guidé. Et quiconque Il égare, tu ne trouveras alors pour lui aucun allié pour le mettre sur la bonne voie.
ph: Wa Tará Ash-Shamsa 'Idhā Ţala`at Tazāwaru `An Kahfihim Dhāta Al-Yamīni Wa 'Idhā Gharabat Taqriđuhum Dhāta Ash-Shimāli Wa Hum Fī Fajwatin Minhu Dhālika Min 'Āyāti Allāhi Man Yahdi Allāhu Fahuwa Al-Muhtadi Wa Man Yuđlil Falan Tajida Lahu Walīyāan Murshidāan

18:18
ar: وَتَحْسَبُهُمْ أَيْقَاظًۭا وَهُمْ رُقُودٌۭ ۚ وَنُقَلِّبُهُمْ ذَاتَ ٱلْيَمِينِ وَذَاتَ ٱلشِّمَالِ ۖ وَكَلْبُهُم بَٰسِطٌۭ ذِرَاعَيْهِ بِٱلْوَصِيدِ ۚ لَوِ ٱطَّلَعْتَ عَلَيْهِمْ لَوَلَّيْتَ مِنْهُمْ فِرَارًۭا وَلَمُلِئْتَ مِنْهُمْ رُعْبًۭا
fr: Et tu les aurais cru éveillés, alors qu'ils dorment. Et Nous les tournons sur le côté droit et sur le côté gauche, tandis que leur chien est à l'entrée, pattes étendues. Si tu les avais aperçus, certes tu leur aurais tourné le dos en fuyant; et tu aurais été assurément rempli d'effroi devant eux.
ph: Wa Taĥsabuhum 'Ayqāžāan Wa Hum Ruqūdun Wa Nuqallibuhum Dhāta Al-Yamīni Wa Dhāta Ash-Shimāli Wa Kalbuhum Bāsiţun Dhirā`ayhi Bil-Waşīdi Lawi Aţţala`ta `Alayhim Lawallayta Minhum Firārāan Wa Lamuli'ta Minhum Ru`bāan

18:19
ar: وَكَذَٰلِكَ بَعَثْنَٰهُمْ لِيَتَسَآءَلُوا۟ بَيْنَهُمْ ۚ قَالَ قَآئِلٌۭ مِّنْهُمْ كَمْ لَبِثْتُمْ ۖ قَالُوا۟ لَبِثْنَا يَوْمًا أَوْ بَعْضَ يَوْمٍۢ ۚ قَالُوا۟ رَبُّكُمْ أَعْلَمُ بِمَا لَبِثْتُمْ فَٱبْعَثُوٓا۟ أَحَدَكُم بِوَرِقِكُمْ هَٰذِهِۦٓ إِلَى ٱلْمَدِينَةِ فَلْيَنظُرْ أَيُّهَآ أَزْكَىٰ طَعَامًۭا فَلْيَأْتِكُم بِرِزْقٍۢ مِّنْهُ وَلْيَتَلَطَّفْ وَلَا يُشْعِرَنَّ بِكُمْ أَحَدًا
fr: Et c'est ainsi que Nous les ressuscitâmes, afin qu'ils s'interrogent entre eux. L'un parmi eux dit: « Combien de temps avez-vous demeuré là ? » Ils dirent: « Nous avons demeuré un jour ou une partie d'un jour. » D'autres dirent: « Votre Seigneur sait mieux combien [de temps] vous y avez demeuré. Envoyez donc l'un de vous à la ville avec votre argent que voici, pour qu'il voie quel aliment est le plus pur et qu'il vous en apporte de quoi vous nourrir. Qu'il agisse avec tact; et qu'il ne donne l'éveil à personne sur vous.
ph: Wa Kadhalika Ba`athnāhum Liyatasā'alū Baynahum Qāla Qā'ilun Minhum Kam Labithtum Qālū Labithnā Yawmāan 'Aw Ba`đa Yawmin Qālū Rabbukum 'A`lamu Bimā Labithtum Fāb`athū 'Aĥadakum Biwariqikum Hadhihi 'Ilá Al-Madīnati Falyanžur 'Ayyuhā 'Azká Ţa`āmāan Falya'tikum Birizqin Minhu Wa Līatalaţţaf Wa Lā Yush`iranna Bikum 'Aĥadāan

18:20
ar: إِنَّهُمْ إِن يَظْهَرُوا۟ عَلَيْكُمْ يَرْجُمُوكُمْ أَوْ يُعِيدُوكُمْ فِى مِلَّتِهِمْ وَلَن تُفْلِحُوٓا۟ إِذًا أَبَدًۭا
fr: Si jamais ils vous attrapent, ils vous lapideront ou vous feront retourner à leur religion, et vous ne réussirez alors plus jamais. »
ph: 'Innahum 'In Yažharū `Alaykum Yarjumūkum 'Aw Yu`īdūkum Fī Millatihim Wa Lan Tufliĥū 'Idhāan 'Abadāan

18:21
ar: وَكَذَٰلِكَ أَعْثَرْنَا عَلَيْهِمْ لِيَعْلَمُوٓا۟ أَنَّ وَعْدَ ٱللَّهِ حَقٌّۭ وَأَنَّ ٱلسَّاعَةَ لَا رَيْبَ فِيهَآ إِذْ يَتَنَٰزَعُونَ بَيْنَهُمْ أَمْرَهُمْ ۖ فَقَالُوا۟ ٱبْنُوا۟ عَلَيْهِم بُنْيَٰنًۭا ۖ رَّبُّهُمْ أَعْلَمُ بِهِمْ ۚ قَالَ ٱلَّذِينَ غَلَبُوا۟ عَلَىٰٓ أَمْرِهِمْ لَنَتَّخِذَنَّ عَلَيْهِم مَّسْجِدًۭا
fr: Et c'est ainsi que Nous fîmes qu'ils furent découverts, afin qu'ils [les gens de la cité] sachent que la promesse d'Allah est vérité et qu'il n'y ait point de doute au sujet de l'Heure. Aussi se disputèrent-ils à leur sujet et déclarèrent-ils: « Construisez sur eux un édifice. Leur Seigneur les connaît mieux. » Mais ceux qui l'emportèrent [dans la discussion] dirent: « Elevons sur eux un sanctuaire ».
ph: Wa Kadhalika 'A`tharnā `Alayhim Liya`lamū 'Anna Wa`da Allāhi Ĥaqqun Wa 'Anna As-Sā`ata Lā Rayba Fīhā 'Idh Yatanāza`ūna Baynahum 'Amrahum Faqālū Abnū `Alayhim Bunyānāan Rabbuhum 'A`lamu Bihim Qāla Al-Ladhīna Ghalabū `Alá 'Amrihim Lanattakhidhanna `Alayhim Masjidāan

18:22
ar: سَيَقُولُونَ ثَلَٰثَةٌۭ رَّابِعُهُمْ كَلْبُهُمْ وَيَقُولُونَ خَمْسَةٌۭ سَادِسُهُمْ كَلْبُهُمْ رَجْمًۢا بِٱلْغَيْبِ ۖ وَيَقُولُونَ سَبْعَةٌۭ وَثَامِنُهُمْ كَلْبُهُمْ ۚ قُل رَّبِّىٓ أَعْلَمُ بِعِدَّتِهِم مَّا يَعْلَمُهُمْ إِلَّا قَلِيلٌۭ ۗ فَلَا تُمَارِ فِيهِمْ إِلَّا مِرَآءًۭ ظَٰهِرًۭا وَلَا تَسْتَفْتِ فِيهِم مِّنْهُمْ أَحَدًۭا
fr: Ils diront: « ils étaient trois et le quatrième était leur chien. » Et ils diront en conjecturant sur leur mystère qu'ils étaient cinq, le sixième étant leur chien et ils diront: « sept, le huitième étant leur chien. » Dis: « Mon Seigneur connaît mieux leur nombre. Il n'en est que peu qui le savent. » Ne discute à leur sujet que d'une façon apparente et ne consulte personne en ce qui les concerne.
ph: Sayaqūlūna Thalāthatun Rābi`uhum Kalbuhum Wa Yaqūlūna Khamsatun Sādisuhum Kalbuhum Rajmāan Bil-Ghaybi Wa Yaqūlūna Sab`atun Wa Thāminuhum Kalbuhum Qul Rabbī 'A`lamu Bi`iddatihim Mā Ya`lamuhum 'Illā Qalīlun Falā Tumāri Fīhim 'Illā Mirā'an Žāhirāan Wa Lā Tastafti Fīhim Minhum 'Aĥadāan

18:23
ar: وَلَا تَقُولَنَّ لِشَا۟ىْءٍ إِنِّى فَاعِلٌۭ ذَٰلِكَ غَدًا
fr: Et ne dis jamais, à propos d'une chose: « Je la ferai sûrement demain »,
ph: Wa Lā Taqūlanna Lishay'in 'Innī Fā`ilun Dhālika Ghadāan

18:24
ar: إِلَّآ أَن يَشَآءَ ٱللَّهُ ۚ وَٱذْكُر رَّبَّكَ إِذَا نَسِيتَ وَقُلْ عَسَىٰٓ أَن يَهْدِيَنِ رَبِّى لِأَقْرَبَ مِنْ هَٰذَا رَشَدًۭا
fr: sans ajouter: « Si Allah le veut », et invoque ton Seigneur quand tu oublies et dis: « Je souhaite que mon Seigneur me guide et me mène plus près de ce qui est correct. »
ph: 'Illā 'An Yashā'a Allāhu Wa Adhkur Rabbaka 'Idhā Nasīta Wa Qul `Asá 'An Yahdiyani Rabbī Li'qraba Min Hādhā Rashadāan

18:25
ar: وَلَبِثُوا۟ فِى كَهْفِهِمْ ثَلَٰثَ مِا۟ئَةٍۢ سِنِينَ وَٱزْدَادُوا۟ تِسْعًۭا
fr: Or, ils demeurèrent dans leur caverne trois cents ans et en ajoutèrent neuf (années).
ph: Wa Labithū Fī Kahfihim Thalātha Miā'atin Sinīna Wa Azdādū Tis`āan

18:26
ar: قُلِ ٱللَّهُ أَعْلَمُ بِمَا لَبِثُوا۟ ۖ لَهُۥ غَيْبُ ٱلسَّمَٰوَٰتِ وَٱلْأَرْضِ ۖ أَبْصِرْ بِهِۦ وَأَسْمِعْ ۚ مَا لَهُم مِّن دُونِهِۦ مِن وَلِىٍّۢ وَلَا يُشْرِكُ فِى حُكْمِهِۦٓ أَحَدًۭا
fr: Dis: « Allah sait mieux combien de temps ils demeurèrent là. A Lui appartient l'Inconnaissable des cieux et de la terre. Comme Il est Voyant et Audient ! Ils n'ont aucun allié en dehors de Lui et Il n'associe personne à Son commandement.
ph: Quli Allāhu 'A`lamu Bimā Labithū Lahu Ghaybu As-Samāwāti Wa Al-'Arđi 'Abşir Bihi Wa 'Asmi` Mā Lahum Min Dūnihi Min Wa Līyin Wa Lā Yushriku Fī Ĥukmihi 'Aĥadāan

18:27
ar: وَٱتْلُ مَآ أُوحِىَ إِلَيْكَ مِن كِتَابِ رَبِّكَ ۖ لَا مُبَدِّلَ لِكَلِمَٰتِهِۦ وَلَن تَجِدَ مِن دُونِهِۦ مُلْتَحَدًۭا
fr: Et récite ce qui t'a été révélé du Livre de ton Seigneur. Nul ne peut changer Ses paroles. Et tu ne trouveras, en dehors de Lui, aucun refuge.
ph: Wa Atlu Mā 'Ūĥiya 'Ilayka Min Kitābi Rabbika Lā Mubaddila Likalimātihi Wa Lan Tajida Min Dūnihi Multaĥadāan

18:28
ar: وَٱصْبِرْ نَفْسَكَ مَعَ ٱلَّذِينَ يَدْعُونَ رَبَّهُم بِٱلْغَدَوٰةِ وَٱلْعَشِىِّ يُرِيدُونَ وَجْهَهُۥ ۖ وَلَا تَعْدُ عَيْنَاكَ عَنْهُمْ تُرِيدُ زِينَةَ ٱلْحَيَوٰةِ ٱلدُّنْيَا ۖ وَلَا تُطِعْ مَنْ أَغْفَلْنَا قَلْبَهُۥ عَن ذِكْرِنَا وَٱتَّبَعَ هَوَىٰهُ وَكَانَ أَمْرُهُۥ فُرُطًۭا
fr: Fais preuve de patience [en restant] avec ceux qui invoquent leur Seigneur matin et soir, désirant Sa Face. Et que tes yeux ne se détachent point d'eux, en cherchant (le faux) brillant de la vie sur terre. Et n'obéis pas à celui dont Nous avons rendu le cœur inattentif à Notre Rappel, qui poursuit sa passion et dont le comportement est outrancier.
ph: Wa Aşbir Nafsaka Ma`a Al-Ladhīna Yad`ūna Rabbahum Bil-Ghadāati Wa Al-`Ashīyi Yurīdūna Wajhahu Wa Lā Ta`du `Aynāka `Anhum Turīdu Zīnata Al-Ĥayāati Ad-Dunyā Wa Lā Tuţi` Man 'Aghfalnā Qalbahu `An Dhikrinā Wa Attaba`a Hawāhu Wa Kāna 'Amruhu Furuţāan

18:29
ar: وَقُلِ ٱلْحَقُّ مِن رَّبِّكُمْ ۖ فَمَن شَآءَ فَلْيُؤْمِن وَمَن شَآءَ فَلْيَكْفُرْ ۚ إِنَّآ أَعْتَدْنَا لِلظَّٰلِمِينَ نَارًا أَحَاطَ بِهِمْ سُرَادِقُهَا ۚ وَإِن يَسْتَغِيثُوا۟ يُغَاثُوا۟ بِمَآءٍۢ كَٱلْمُهْلِ يَشْوِى ٱلْوُجُوهَ ۚ بِئْسَ ٱلشَّرَابُ وَسَآءَتْ مُرْتَفَقًا
fr: Et dis: « La vérité émane de votre Seigneur. » Quiconque le veut, qu'il croie, quiconque le veut qu'il mécroie. » Nous avons préparé pour les injustes un Feu dont les flammes les cernent. Et s'ils implorent à boire on les abreuvera d'une eau comme du métal fondu brûlant les visages. Quelle mauvaise boisson et quelle détestable demeure !
ph: Wa Quli Al-Ĥaqqu Min Rabbikum Faman Shā'a Falyu'umin Wa Man Shā'a Falyakfur 'Innā 'A`tadnā Lilžžālimīna Nārāan 'Aĥāţa Bihim Surādiquhā Wa 'In Yastaghīthū Yughāthū Bimā'in Kālmuhli Yashwī Al-Wujūha Bi'sa Ash-Sharābu Wa Sā'at Murtafaqāan

18:30
ar: إِنَّ ٱلَّذِينَ ءَامَنُوا۟ وَعَمِلُوا۟ ٱلصَّٰلِحَٰتِ إِنَّا لَا نُضِيعُ أَجْرَ مَنْ أَحْسَنَ عَمَلًا
fr: Ceux qui croient et font de bonnes œuvres... vraiment Nous ne laissons pas perdre la récompense de celui qui fait le bien.
ph: 'Inna Al-Ladhīna 'Āmanū Wa `Amilū Aş-Şāliĥāti 'Innā Lā Nuđī`u 'Ajra Man 'Aĥsana `Amalāan

18:31
ar: أُو۟لَٰٓئِكَ لَهُمْ جَنَّٰتُ عَدْنٍۢ تَجْرِى مِن تَحْتِهِمُ ٱلْأَنْهَٰرُ يُحَلَّوْنَ فِيهَا مِنْ أَسَاوِرَ مِن ذَهَبٍۢ وَيَلْبَسُونَ ثِيَابًا خُضْرًۭا مِّن سُندُسٍۢ وَإِسْتَبْرَقٍۢ مُّتَّكِـِٔينَ فِيهَا عَلَى ٱلْأَرَآئِكِ ۚ نِعْمَ ٱلثَّوَابُ وَحَسُنَتْ مُرْتَفَقًۭا
fr: Voilà ceux qui auront les jardins du séjour (éternel) sous lesquels coulent les ruisseaux. Ils y seront parés de bracelets d'or et se vêtiront d'habits verts de soie fine et de brocart, accoudés sur des divans (bien ornés). Quelle bonne récompense et quelle belle demeure !
ph: 'Ūlā'ika Lahum Jannātu `Adnin Tajrī Min Taĥtihimu Al-'Anhāru Yuĥallawna Fīhā Min 'Asāwira Min Dhahabin Wa Yalbasūna Thiyābāan Khuđrāan Min Sundusin Wa 'Istabraqin Muttaki'īna Fīhā `Alá Al-'Arā'iki Ni`ma Ath-Thawābu Wa Ĥasunat Murtafaqāan

18:32
ar: ۞ وَٱضْرِبْ لَهُم مَّثَلًۭا رَّجُلَيْنِ جَعَلْنَا لِأَحَدِهِمَا جَنَّتَيْنِ مِنْ أَعْنَٰبٍۢ وَحَفَفْنَٰهُمَا بِنَخْلٍۢ وَجَعَلْنَا بَيْنَهُمَا زَرْعًۭا
fr: Donne-leur l'exemple de deux hommes: à l'un d'eux Nous avons assigné deux jardins de vignes que Nous avons entourés de palmiers et Nous avons mis entre les deux jardins des champs cultivés.
ph: Wa Ađrib Lahum Mathalāan Rajulayni Ja`alnā Li'ĥadihimā Jannatayni Min 'A`nābin Wa Ĥafafnāhumā Binakhlin Wa Ja`alnā Baynahumā Zar`āan

18:33
ar: كِلْتَا ٱلْجَنَّتَيْنِ ءَاتَتْ أُكُلَهَا وَلَمْ تَظْلِم مِّنْهُ شَيْـًۭٔا ۚ وَفَجَّرْنَا خِلَٰلَهُمَا نَهَرًۭا
fr: Les deux jardins produisaient leur récolte sans jamais manquer. Et Nous avons fait jaillir entre eux un ruisseau.
ph: Kiltā Al-Jannatayni 'Ātat 'Ukulahā Wa Lam Tažlim Minhu Shay'āan Wa Fajjarnā Khilālahumā Naharāan

18:34
ar: وَكَانَ لَهُۥ ثَمَرٌۭ فَقَالَ لِصَٰحِبِهِۦ وَهُوَ يُحَاوِرُهُۥٓ أَنَا۠ أَكْثَرُ مِنكَ مَالًۭا وَأَعَزُّ نَفَرًۭا
fr: Et il avait des fruits et dit alors à son compagnon avec qui il conversait: « Je possède plus de biens que toi, et je suis plus puissant que toi grâce à mon clan. »
ph: Wa Kāna Lahu Thamarun Faqāla Lişāĥibihi Wa Huwa Yuĥāwiruhu 'Anā 'Aktharu Minka Mālāan Wa 'A`azzu Nafarāan

18:35
ar: وَدَخَلَ جَنَّتَهُۥ وَهُوَ ظَالِمٌۭ لِّنَفْسِهِۦ قَالَ مَآ أَظُنُّ أَن تَبِيدَ هَٰذِهِۦٓ أَبَدًۭا
fr: Il entra dans son jardin coupable envers lui-même [par sa mécréance]; il dit: « Je ne pense pas que ceci puisse jamais périr,
ph: Wa Dakhala Jannatahu Wa Huwa Žālimun Linafsihi Qāla Mā 'Ažunnu 'An Tabīda Hadhihi 'Abadāan

18:36
ar: وَمَآ أَظُنُّ ٱلسَّاعَةَ قَآئِمَةًۭ وَلَئِن رُّدِدتُّ إِلَىٰ رَبِّى لَأَجِدَنَّ خَيْرًۭا مِّنْهَا مُنقَلَبًۭا
fr: et je ne pense pas que l'Heure viendra. Et si on me ramène vers mon Seigneur, je trouverai certes meilleur lieu de retour que ce jardin.
ph: Wa Mā 'Ažunnu As-Sā`ata Qā'imatan Wa La'in Rudidtu 'Ilá Rabbī La'ajidanna Khayrāan Minhā Munqalabāan

18:37
ar: قَالَ لَهُۥ صَاحِبُهُۥ وَهُوَ يُحَاوِرُهُۥٓ أَكَفَرْتَ بِٱلَّذِى خَلَقَكَ مِن تُرَابٍۢ ثُمَّ مِن نُّطْفَةٍۢ ثُمَّ سَوَّىٰكَ رَجُلًۭا
fr: Son compagnon lui dit, tout en conversant avec lui: « Serais-tu mécréant envers Celui qui t'a créé de terre, puis de sperme et enfin t'a façonné en homme ?
ph: Qāla Lahu Şāĥibuhu Wa Huwa Yuĥāwiruhu 'Akafarta Bial-Ladhī Khalaqaka Min Turābin Thumma Min Nuţfatin Thumma Sawwāka Rajulāan

18:38
ar: لَّٰكِنَّا۠ هُوَ ٱللَّهُ رَبِّى وَلَآ أُشْرِكُ بِرَبِّىٓ أَحَدًۭا
fr: Quant à moi, c'est Allah qui est mon Seigneur; et je n'associe personne à mon Seigneur.
ph: Lakinnā Huwa Allāhu Rabbī Wa Lā 'Ushriku Birabbī 'Aĥadāan

18:39
ar: وَلَوْلَآ إِذْ دَخَلْتَ جَنَّتَكَ قُلْتَ مَا شَآءَ ٱللَّهُ لَا قُوَّةَ إِلَّا بِٱللَّهِ ۚ إِن تَرَنِ أَنَا۠ أَقَلَّ مِنكَ مَالًۭا وَوَلَدًۭا
fr: En entrant dans ton jardin, que ne dis-tu: « Telle est la volonté (et la grâce) d'Allah ! Il n'y a de puissance que par Allah. » Si tu me vois moins pourvu que toi en biens et en enfants,
ph: Wa Lawlā 'Idh Dakhalta Jannataka Qulta Mā Shā'a Allāhu Lā Qūwata 'Illā Billāhi 'In Tarani 'Anā 'Aqalla Minka Mālāan Wa Waladāan

18:40
ar: فَعَسَىٰ رَبِّىٓ أَن يُؤْتِيَنِ خَيْرًۭا مِّن جَنَّتِكَ وَيُرْسِلَ عَلَيْهَا حُسْبَانًۭا مِّنَ ٱلسَّمَآءِ فَتُصْبِحَ صَعِيدًۭا زَلَقًا
fr: il se peut que mon Seigneur, bientôt, me donne quelque chose de meilleur que ton jardin, qu'Il envoie sur [ce dernier], du ciel, quelque calamité, et que son sol devienne glissant,
ph: Fa`asá Rabbī 'An Yu'utiyanī Khayrāan Min Jannatika Wa Yursila `Alayhā Ĥusbānāan Mina As-Samā'i Fatuşbiĥa Şa`īdāan Zalaqāan

18:41
ar: أَوْ يُصْبِحَ مَآؤُهَا غَوْرًۭا فَلَن تَسْتَطِيعَ لَهُۥ طَلَبًۭا
fr: ou que son eau tarisse de sorte que tu ne puisses plus la retrouver. »
ph: 'Aw Yuşbiĥa Mā'uuhā Ghawrāan Falan Tastaţī`a Lahu Ţalabāan

18:42
ar: وَأُحِيطَ بِثَمَرِهِۦ فَأَصْبَحَ يُقَلِّبُ كَفَّيْهِ عَلَىٰ مَآ أَنفَقَ فِيهَا وَهِىَ خَاوِيَةٌ عَلَىٰ عُرُوشِهَا وَيَقُولُ يَٰلَيْتَنِى لَمْ أُشْرِكْ بِرَبِّىٓ أَحَدًۭا
fr: Et sa récolte fut détruite et il se mit alors à se tordre les deux mains à cause de ce qu'il y avait dépensé, cependant que ses treilles étaient complètement ravagées. Et il disait: « Que je souhaite n'avoir associé personne à mon Seigneur ! »
ph: Wa 'Uĥīţa Bithamarihi Fa'aşbaĥa Yuqallibu Kaffayhi `Alá Mā 'Anfaqa Fīhā Wa Hiya Khāwiyatun `Alá `Urūshihā Wa Yaqūlu Yā Laytanī Lam 'Ushrik Birabbī 'Aĥadāan

18:43
ar: وَلَمْ تَكُن لَّهُۥ فِئَةٌۭ يَنصُرُونَهُۥ مِن دُونِ ٱللَّهِ وَمَا كَانَ مُنتَصِرًا
fr: Il n'eut aucun groupe de gens pour le secourir contre (la punition) d'Allah. Et il ne put se secourir lui-même.
ph: Wa Lam Takun Lahu Fi'atun Yanşurūnahu Min Dūni Allāhi Wa Mā Kāna Muntaşirāan

18:44
ar: هُنَالِكَ ٱلْوَلَٰيَةُ لِلَّهِ ٱلْحَقِّ ۚ هُوَ خَيْرٌۭ ثَوَابًۭا وَخَيْرٌ عُقْبًۭا
fr: En l'occurrence, la souveraine protection appartient à Allah, le Vrai. Il accorde la meilleure récompense et le meilleur résultat.
ph: Hunālika Al-Walāyatu Lillāhi Al-Ĥaqqi Huwa Khayrun Thawābāan Wa Khayrun `Uqbāan

18:45
ar: وَٱضْرِبْ لَهُم مَّثَلَ ٱلْحَيَوٰةِ ٱلدُّنْيَا كَمَآءٍ أَنزَلْنَٰهُ مِنَ ٱلسَّمَآءِ فَٱخْتَلَطَ بِهِۦ نَبَاتُ ٱلْأَرْضِ فَأَصْبَحَ هَشِيمًۭا تَذْرُوهُ ٱلرِّيَٰحُ ۗ وَكَانَ ٱللَّهُ عَلَىٰ كُلِّ شَىْءٍۢ مُّقْتَدِرًا
fr: Et propose-leur l'exemple de la vie ici-bas. Elle est semblable à une eau que Nous faisons descendre du ciel; la végétation de la terre se mélange à elle. Puis elle devient de l'herbe desséchée que les vents dispersent. Allah est certes Puissant en toutes choses !
ph: Wa Ađrib Lahum Mathala Al-Ĥayāati Ad-Dunyā Kamā'in 'Anzalnāhu Mina As-Samā'i Fākhtalaţa Bihi Nabātu Al-'Arđi Fa'aşbaĥa Hashīmāan Tadhrūhu Ar-Riyāĥu Wa Kāna Allāhu `Alá Kulli Shay'in Muqtadirāan

18:46
ar: ٱلْمَالُ وَٱلْبَنُونَ زِينَةُ ٱلْحَيَوٰةِ ٱلدُّنْيَا ۖ وَٱلْبَٰقِيَٰتُ ٱلصَّٰلِحَٰتُ خَيْرٌ عِندَ رَبِّكَ ثَوَابًۭا وَخَيْرٌ أَمَلًۭا
fr: Les biens et les enfants sont l'ornement de la vie de ce monde. Cependant, les bonnes œuvres qui persistent ont auprès de ton Seigneur une meilleure récompense et [suscitent] une belle espérance.
ph: Al-Mālu Wa Al-Banūna Zīnatu Al-Ĥayāati Ad-Dunyā Wa Al-Bāqiyātu Aş-Şāliĥātu Khayrun `Inda Rabbika Thawābāan Wa Khayrun 'Amalāan

18:47
ar: وَيَوْمَ نُسَيِّرُ ٱلْجِبَالَ وَتَرَى ٱلْأَرْضَ بَارِزَةًۭ وَحَشَرْنَٰهُمْ فَلَمْ نُغَادِرْ مِنْهُمْ أَحَدًۭا
fr: Le jour où Nous ferons marcher les montagnes et où tu verras la terre nivelée (comme une plaine) et Nous les rassemblerons sans en omettre un seul.
ph: Wa Yawma Nusayyiru Al-Jibāla Wa Tará Al-'Arđa Bārizatan Wa Ĥasharnāhum Falam Nughādir Minhum 'Aĥadāan

18:48
ar: وَعُرِضُوا۟ عَلَىٰ رَبِّكَ صَفًّۭا لَّقَدْ جِئْتُمُونَا كَمَا خَلَقْنَٰكُمْ أَوَّلَ مَرَّةٍۭ ۚ بَلْ زَعَمْتُمْ أَلَّن نَّجْعَلَ لَكُم مَّوْعِدًۭا
fr: Et ils seront présentés en rangs devant ton Seigneur. « Vous voilà venus à Nous comme Nous vous avons créés la première fois. Pourtant vous prétendiez que Nous ne remplirions pas Nos promesses. »
ph: Wa `Uriđū `Alá Rabbika Şaffāan Laqad Ji'tumūnā Kamā Khalaqnākum 'Awwala Marratin Bal Za`amtum 'Allan Naj`ala Lakum Maw`idāan

18:49
ar: وَوُضِعَ ٱلْكِتَٰبُ فَتَرَى ٱلْمُجْرِمِينَ مُشْفِقِينَ مِمَّا فِيهِ وَيَقُولُونَ يَٰوَيْلَتَنَا مَالِ هَٰذَا ٱلْكِتَٰبِ لَا يُغَادِرُ صَغِيرَةًۭ وَلَا كَبِيرَةً إِلَّآ أَحْصَىٰهَا ۚ وَوَجَدُوا۟ مَا عَمِلُوا۟ حَاضِرًۭا ۗ وَلَا يَظْلِمُ رَبُّكَ أَحَدًۭا
fr: Et on déposera le livre (de chacun). Alors tu verras les criminels, effrayés à cause de ce qu'il y a dedans, dire: « Malheur à nous, qu'a donc ce livre à n'omettre de mentionner ni péché véniel ni péché capital ? » Et ils trouveront devant eux tout ce qu'ils ont œuvré. Et ton Seigneur ne fait du tort à personne.
ph: Wa Wuđi`a Al-Kitābu Fatará Al-Mujrimīna Mushfiqīna Mimmā Fīhi Wa Yaqūlūna Yā Waylatanā Māli Hādhā Al-Kitābi Lā Yughādiru Şaghīratan Wa Lā Kabīratan 'Illā 'Aĥşāhā Wa Wajadū Mā `Amilū Ĥāđirāan Wa Lā Yažlimu Rabbuka 'Aĥadāan

18:50
ar: وَإِذْ قُلْنَا لِلْمَلَٰٓئِكَةِ ٱسْجُدُوا۟ لِءَادَمَ فَسَجَدُوٓا۟ إِلَّآ إِبْلِيسَ كَانَ مِنَ ٱلْجِنِّ فَفَسَقَ عَنْ أَمْرِ رَبِّهِۦٓ ۗ أَفَتَتَّخِذُونَهُۥ وَذُرِّيَّتَهُۥٓ أَوْلِيَآءَ مِن دُونِى وَهُمْ لَكُمْ عَدُوٌّۢ ۚ بِئْسَ لِلظَّٰلِمِينَ بَدَلًۭا
fr: Et lorsque nous dîmes aux Anges: « Prosternez-vous devant Adam », ils se prosternèrent, excepté Iblis [Satan] qui était du nombre des djinns et qui se révolta contre le commandement de son Seigneur. Allez-vous cependant le prendre, ainsi que sa descendance, pour alliés en dehors de Moi, alors qu'ils vous sont ennemis ? Quel mauvais échange pour les injustes !
ph: Wa 'Idh Qulnā Lilmalā'ikati Asjudū Li'dama Fasajadū 'Illā 'Iblīsa Kāna Mina Al-Jinni Fafasaqa `An 'Amri Rabbihi 'Afatattakhidhūnahu Wa Dhurrīyatahu 'Awliyā'a Min Dūnī Wa Hum Lakum `Adūwun Bi'sa Lilžžālimīna Badalāan

18:51
ar: ۞ مَّآ أَشْهَدتُّهُمْ خَلْقَ ٱلسَّمَٰوَٰتِ وَٱلْأَرْضِ وَلَا خَلْقَ أَنفُسِهِمْ وَمَا كُنتُ مُتَّخِذَ ٱلْمُضِلِّينَ عَضُدًۭا
fr: Je ne les ai pas pris comme témoins de la création des cieux et de la terre, ni de la création de leurs propres personnes. Et Je n'ai pas pris comme aides ceux qui égarent.
ph: Mā 'Ash/hadtuhum Khalqa As-Samāwāti Wa Al-'Arđi Wa Lā Khalqa 'Anfusihim Wa Mā Kuntu Muttakhidha Al-Muđillīna `Ađudāan

18:52
ar: وَيَوْمَ يَقُولُ نَادُوا۟ شُرَكَآءِىَ ٱلَّذِينَ زَعَمْتُمْ فَدَعَوْهُمْ فَلَمْ يَسْتَجِيبُوا۟ لَهُمْ وَجَعَلْنَا بَيْنَهُم مَّوْبِقًۭا
fr: Et le jour où Il dira: « Appelez ceux que vous prétendiez être Mes associés. » Ils les invoqueront; mais eux ne leur répondront pas, Nous aurons placé entre eux une vallée de perdition.
ph: Wa Yawma Yaqūlu Nādū Shurakā'iya Al-Ladhīna Za`amtum Fada`awhum Falam Yastajībū Lahum Wa Ja`alnā Baynahum Mawbiqāan

18:53
ar: وَرَءَا ٱلْمُجْرِمُونَ ٱلنَّارَ فَظَنُّوٓا۟ أَنَّهُم مُّوَاقِعُوهَا وَلَمْ يَجِدُوا۟ عَنْهَا مَصْرِفًۭا
fr: Et les criminels verront le Feu. Ils seront alors convaincus qu'ils y tomberont et n'en trouveront pas d'échappatoire.
ph: Wa Ra'á Al-Mujrimūna An-Nāra Fažannū 'Annahum Muwāqi`ūhā Wa Lam Yajidū `Anhā Maşrifāan

18:54
ar: وَلَقَدْ صَرَّفْنَا فِى هَٰذَا ٱلْقُرْءَانِ لِلنَّاسِ مِن كُلِّ مَثَلٍۢ ۚ وَكَانَ ٱلْإِنسَٰنُ أَكْثَرَ شَىْءٍۢ جَدَلًۭا
fr: Et assurément, Nous avons déployé pour les gens, dans ce Coran, toutes sortes d'exemples. L'homme cependant, est de tous les êtres le plus grand disputeur.
ph: Wa Laqad Şarrafnā Fī Hādhā Al-Qur'āni Lilnnāsi Min Kulli Mathalin Wa Kāna Al-'Insānu 'Akthara Shay'in Jadalāan

18:55
ar: وَمَا مَنَعَ ٱلنَّاسَ أَن يُؤْمِنُوٓا۟ إِذْ جَآءَهُمُ ٱلْهُدَىٰ وَيَسْتَغْفِرُوا۟ رَبَّهُمْ إِلَّآ أَن تَأْتِيَهُمْ سُنَّةُ ٱلْأَوَّلِينَ أَوْ يَأْتِيَهُمُ ٱلْعَذَابُ قُبُلًۭا
fr: Qu'est-ce qui a donc empêché les gens de croire, lorsque le guide leur est venu, ainsi que de demander pardon à leur Seigneur, si ce n'est qu'ils veulent subir le sort des Anciens, ou se trouver face à face avec le châtiment.
ph: Wa Mā Mana`a An-Nāsa 'An Yu'uminū 'Idh Jā'ahumu Al-Hudá Wa Yastaghfirū Rabbahum 'Illā 'An Ta'tiyahum Sunnatu Al-'Awwalīna 'Aw Ya'tiyahumu Al-`Adhābu Qubulāan

18:56
ar: وَمَا نُرْسِلُ ٱلْمُرْسَلِينَ إِلَّا مُبَشِّرِينَ وَمُنذِرِينَ ۚ وَيُجَٰدِلُ ٱلَّذِينَ كَفَرُوا۟ بِٱلْبَٰطِلِ لِيُدْحِضُوا۟ بِهِ ٱلْحَقَّ ۖ وَٱتَّخَذُوٓا۟ ءَايَٰتِى وَمَآ أُنذِرُوا۟ هُزُوًۭا
fr: Et Nous n'envoyons des messagers que pour annoncer la bonne nouvelle et avertir. Et ceux qui ont mécru disputent avec de faux arguments, afin d'infirmer la vérité et prennent en raillerie Mes versets (le Coran) ainsi que ce (châtiment) dont on les a avertis.
ph: Wa Mā Nursilu Al-Mursalīna 'Illā Mubashirīna Wa Mundhirīna Wa Yujādilu Al-Ladhīna Kafarū Bil-Bāţili Liyudĥiđū Bihi Al-Ĥaqqa Wa Attakhadhū 'Āyātī Wa Mā 'Undhirū Huzūan

18:57
ar: وَمَنْ أَظْلَمُ مِمَّن ذُكِّرَ بِـَٔايَٰتِ رَبِّهِۦ فَأَعْرَضَ عَنْهَا وَنَسِىَ مَا قَدَّمَتْ يَدَاهُ ۚ إِنَّا جَعَلْنَا عَلَىٰ قُلُوبِهِمْ أَكِنَّةً أَن يَفْقَهُوهُ وَفِىٓ ءَاذَانِهِمْ وَقْرًۭا ۖ وَإِن تَدْعُهُمْ إِلَى ٱلْهُدَىٰ فَلَن يَهْتَدُوٓا۟ إِذًا أَبَدًۭا
fr: Quel pire injuste que celui à qui on a rappelé les versets de son Seigneur et qui en détourna le dos en oubliant ce que ses deux mains ont commis ? Nous avons placé des voiles sur leurs cœurs, de sorte qu'ils ne comprennent pas (le Coran), et mis une lourdeur dans leurs oreilles. Même si tu les appelles vers la bonne voie, jamais ils ne pourront donc se guider.
ph: Wa Man 'Ažlamu Mimman Dhukkira Bi'āyāti Rabbihi Fa'a`rađa `Anhā Wa Nasiya Mā Qaddamat Yadāhu 'Innā Ja`alnā `Alá Qulūbihim 'Akinnatan 'An Yafqahūhu Wa Fī 'Ādhānihim Waqrāan Wa 'In Tad`uhum 'Ilá Al-Hudá Falan Yahtadū 'Idhāan 'Abadāan

18:58
ar: وَرَبُّكَ ٱلْغَفُورُ ذُو ٱلرَّحْمَةِ ۖ لَوْ يُؤَاخِذُهُم بِمَا كَسَبُوا۟ لَعَجَّلَ لَهُمُ ٱلْعَذَابَ ۚ بَل لَّهُم مَّوْعِدٌۭ لَّن يَجِدُوا۟ مِن دُونِهِۦ مَوْئِلًۭا
fr: Et ton Seigneur est le Pardonneur, le Détenteur de la miséricorde. S'Il s'en prenait à eux pour ce qu'ils ont acquis, Il leur hâterait certes le châtiment. Mais il y a pour eux un terme fixé (pour l'accomplissement des menaces) contre lequel ils ne trouveront aucun refuge.
ph: Wa Rabbuka Al-Ghafūru Dhū Ar-Raĥmati Law Yu'uākhidhuhum Bimā Kasabū La`ajjala Lahumu Al-`Adhāba Bal Lahum Maw`idun Lan Yajidū Min Dūnihi Maw'ilāan

18:59
ar: وَتِلْكَ ٱلْقُرَىٰٓ أَهْلَكْنَٰهُمْ لَمَّا ظَلَمُوا۟ وَجَعَلْنَا لِمَهْلِكِهِم مَّوْعِدًۭا
fr: Et voilà les villes que Nous avons fait périr quand leurs peuples commirent des injustices et Nous avons fixé un rendez-vous pour leur destruction.
ph: Wa Tilka Al-Qurá 'Ahlaknāhum Lammā Žalamū Wa Ja`alnā Limahlikihim Maw`idāan

18:60
ar: وَإِذْ قَالَ مُوسَىٰ لِفَتَىٰهُ لَآ أَبْرَحُ حَتَّىٰٓ أَبْلُغَ مَجْمَعَ ٱلْبَحْرَيْنِ أَوْ أَمْضِىَ حُقُبًۭا
fr: (Rappelle-toi) quand Musa (Moïse) dit à son valet: « Je n'arrêterai pas avant d'avoir atteint le confluent des deux mers, dussé-je marcher de longues années. »
ph: Wa 'Idh Qāla Mūsá Lifatāhu Lā 'Abraĥu Ĥattá 'Ablugha Majma`a Al-Baĥrayni 'Aw 'Amđiya Ĥuqubāan

18:61
ar: فَلَمَّا بَلَغَا مَجْمَعَ بَيْنِهِمَا نَسِيَا حُوتَهُمَا فَٱتَّخَذَ سَبِيلَهُۥ فِى ٱلْبَحْرِ سَرَبًۭا
fr: Puis, lorsque tous deux eurent atteint le confluent, Ils oublièrent leur poisson qui prit alors librement son chemin dans la mer.
ph: Falammā Balaghā Majma`a Baynihimā Nasiyā Ĥūtahumā Fa Attakhadha Sabīlahu Fī Al-Baĥri Sarabāan

18:62
ar: فَلَمَّا جَاوَزَا قَالَ لِفَتَىٰهُ ءَاتِنَا غَدَآءَنَا لَقَدْ لَقِينَا مِن سَفَرِنَا هَٰذَا نَصَبًۭا
fr: Puis, lorsque tous deux eurent dépassé [cet endroit,] il dit à son valet: « Apporte-nous notre déjeuner: nous avons rencontré de la fatigue dans notre présent voyage. »
ph: Falammā Jāwazā Qāla Lifatāhu 'Ātinā Ghadā'anā Laqad Laqīnā Min Safarinā Hādhā Naşabāan

18:63
ar: قَالَ أَرَءَيْتَ إِذْ أَوَيْنَآ إِلَى ٱلصَّخْرَةِ فَإِنِّى نَسِيتُ ٱلْحُوتَ وَمَآ أَنسَىٰنِيهُ إِلَّا ٱلشَّيْطَٰنُ أَنْ أَذْكُرَهُۥ ۚ وَٱتَّخَذَ سَبِيلَهُۥ فِى ٱلْبَحْرِ عَجَبًۭا
fr: [Le valet lui] dit: « Quand nous avons pris refuge près du rocher, vois-tu, j'ai oublié le poisson -le Diable seul m'a fait oublier de (te) le rappeler -et il a curieusement pris son chemin dans la mer. »
ph: Qāla 'Ara'ayta 'Idh 'Awaynā 'Ilá Aş-Şakhrati Fa'innī Nasītu Al-Ĥūta Wa Mā 'Ansānīhu 'Illā Ash-Shayţānu 'An 'Adhkurahu Wa Attakhadha Sabīlahu Fī Al-Baĥri `Ajabāan

18:64
ar: قَالَ ذَٰلِكَ مَا كُنَّا نَبْغِ ۚ فَٱرْتَدَّا عَلَىٰٓ ءَاثَارِهِمَا قَصَصًۭا
fr: [Musa (Moïse)] dit: « Voilà ce que nous cherchions. » Puis, ils retournèrent sur leurs pas, suivant leurs traces.
ph: Qāla Dhālika Mā Kunnā Nabghi Fārtaddā `Alá 'Āthārihimā Qaşaşāan

18:65
ar: فَوَجَدَا عَبْدًۭا مِّنْ عِبَادِنَآ ءَاتَيْنَٰهُ رَحْمَةًۭ مِّنْ عِندِنَا وَعَلَّمْنَٰهُ مِن لَّدُنَّا عِلْمًۭا
fr: Ils trouvèrent l'un de Nos serviteurs à qui Nous avions donné une grâce, de Notre part, et à qui Nous avions enseigné une science émanant de Nous.
ph: Fawajadā `Abdāan Min `Ibādinā 'Ātaynāhu Raĥmatan Min `Indinā Wa `Allamnāhu Min Ladunnā `Ilmāan

18:66
ar: قَالَ لَهُۥ مُوسَىٰ هَلْ أَتَّبِعُكَ عَلَىٰٓ أَن تُعَلِّمَنِ مِمَّا عُلِّمْتَ رُشْدًۭا
fr: Musa (Moïse) lui dit: « Puis-je te suivre, à la condition que tu m'apprennes de ce qu'on t'a appris concernant une bonne direction ? »
ph: Qāla Lahu Mūsá Hal 'Attabi`uka `Alá 'An Tu`allimani Mimmā `Ullimta Rushdāan

18:67
ar: قَالَ إِنَّكَ لَن تَسْتَطِيعَ مَعِىَ صَبْرًۭا
fr: [L'autre] dit: « Vraiment, tu ne pourras jamais être patient avec moi.
ph: Qāla 'Innaka Lan Tastaţī`a Ma`iya Şabrāan

18:68
ar: وَكَيْفَ تَصْبِرُ عَلَىٰ مَا لَمْ تُحِطْ بِهِۦ خُبْرًۭا
fr: Comment endurerais-tu sur des choses que tu n'embrasses pas par ta connaissance ? »
ph: Wa Kayfa Taşbiru `Alá Mā Lam Tuĥiţ Bihi Khubrāan

18:69
ar: قَالَ سَتَجِدُنِىٓ إِن شَآءَ ٱللَّهُ صَابِرًۭا وَلَآ أَعْصِى لَكَ أَمْرًۭا
fr: [Musa (Moïse)] lui dit: « Si Allah veut, tu me trouveras patient; et je ne désobéirai à aucun de tes ordres. »
ph: Qāla Satajidunī 'In Shā'a Allāhu Şābirāan Wa Lā 'A`şī Laka 'Amrāan

18:70
ar: قَالَ فَإِنِ ٱتَّبَعْتَنِى فَلَا تَسْـَٔلْنِى عَن شَىْءٍ حَتَّىٰٓ أُحْدِثَ لَكَ مِنْهُ ذِكْرًۭا
fr: « Si tu me suis, dit [l'autre,] ne m'interroge sur rien tant que je ne t'en aurai pas fait mention. »
ph: Qāla Fa'ini Attaba`tanī Falā Tas'alnī `An Shay'in Ĥattá 'Uĥditha Laka Minhu Dhikrāan

18:71
ar: فَٱنطَلَقَا حَتَّىٰٓ إِذَا رَكِبَا فِى ٱلسَّفِينَةِ خَرَقَهَا ۖ قَالَ أَخَرَقْتَهَا لِتُغْرِقَ أَهْلَهَا لَقَدْ جِئْتَ شَيْـًٔا إِمْرًۭا
fr: Alors les deux partirent. Et après qu'ils furent montés sur un bateau, l'homme y fit une brèche. [Musa (Moïse)] lui dit: « Est-ce pour noyer ses occupants que tu l'as ébréché ? Tu as commis, certes, une chose monstrueuse ! »
ph: Fānţalaqā Ĥattá 'Idhā Rakibā Fī As-Safīnati Kharaqahā Qāla 'Akharaqtahā Litughriqa 'Ahlahā Laqad Ji'ta Shay'āan 'Imrāan

18:72
ar: قَالَ أَلَمْ أَقُلْ إِنَّكَ لَن تَسْتَطِيعَ مَعِىَ صَبْرًۭا
fr: [L'autre] répondit: « N'ai-je pas dit que tu ne pourrais pas garder patience en ma compagnie ? »
ph: Qāla 'Alam 'Aqul 'Innaka Lan Tastaţī`a Ma`iya Şabrāan

18:73
ar: قَالَ لَا تُؤَاخِذْنِى بِمَا نَسِيتُ وَلَا تُرْهِقْنِى مِنْ أَمْرِى عُسْرًۭا
fr: « Ne t'en prends pas à moi, dit [Musa (Moïse),] pour un oubli de ma part; et ne m'impose pas de grande difficulté dans mon affaire ».
ph: Qāla Lā Tu'uākhidhnī Bimā Nasītu Wa Lā Turhiqnī Min 'Amrī `Usrāan

18:74
ar: فَٱنطَلَقَا حَتَّىٰٓ إِذَا لَقِيَا غُلَٰمًۭا فَقَتَلَهُۥ قَالَ أَقَتَلْتَ نَفْسًۭا زَكِيَّةًۢ بِغَيْرِ نَفْسٍۢ لَّقَدْ جِئْتَ شَيْـًۭٔا نُّكْرًۭا
fr: Puis ils partirent tous deux; et quand ils eurent rencontré un enfant, [l'homme] le tua. Alors [Musa (Moïse)] lui dit: « As-tu tué un être innocent, qui n'a tué personne ? Tu as commis certes, une chose affreuse ! »
ph: Fānţalaqā Ĥattá 'Idhā Laqiyā Ghulāmāan Faqatalahu Qāla 'Aqatalta Nafsāan Zakīyatan Bighayri Nafsin Laqad Ji'ta Shay'āan Nukrāan

18:75
ar: ۞ قَالَ أَلَمْ أَقُل لَّكَ إِنَّكَ لَن تَسْتَطِيعَ مَعِىَ صَبْرًۭا
fr: [L'autre] lui dit: « Ne t'ai je pas dit que tu ne pourrais pas garder patience en ma compagnie ? »
ph: Qāla 'Alam 'Aqul Laka 'Innaka Lan Tastaţī`a Ma`iya Şabrāan

18:76
ar: قَالَ إِن سَأَلْتُكَ عَن شَىْءٍۭ بَعْدَهَا فَلَا تُصَٰحِبْنِى ۖ قَدْ بَلَغْتَ مِن لَّدُنِّى عُذْرًۭا
fr: « Si, après cela, je t'interroge sur quoi que ce soit, dit [Musa (Moïse)], alors ne m'accompagne plus. Tu seras alors excusé de te séparer de moi. »
ph: Qāla 'In Sa'altuka `An Shay'in Ba`dahā Falā Tuşāĥibnī Qad Balaghta Min Ladunnī `Udhrāan

18:77
ar: فَٱنطَلَقَا حَتَّىٰٓ إِذَآ أَتَيَآ أَهْلَ قَرْيَةٍ ٱسْتَطْعَمَآ أَهْلَهَا فَأَبَوْا۟ أَن يُضَيِّفُوهُمَا فَوَجَدَا فِيهَا جِدَارًۭا يُرِيدُ أَن يَنقَضَّ فَأَقَامَهُۥ ۖ قَالَ لَوْ شِئْتَ لَتَّخَذْتَ عَلَيْهِ أَجْرًۭا
fr: Ils partirent donc tous deux; et quand ils furent arrivés à un village habité, ils demandèrent à manger à ses habitants; mais ceux-ci refusèrent de leur donner l'hospitalité. Ensuite, ils y trouvèrent un mur sur le point de s'écrouler. L'homme le redressa. Alors [Musa (Moïse)] lui dit: « Si tu voulais, tu aurais bien pu réclamer pour cela un salaire. »
ph: Fānţalaqā Ĥattá 'Idhā 'Atayā 'Ahla Qaryatin Astaţ`amā 'Ahlahā Fa'abaw 'An Yuđayyifūhumā Fawajadā Fīhā Jidārāan Yurīdu 'An Yanqađđa Fa'aqāmahu Qāla Law Shi'ta Lāttakhadhta `Alayhi 'Ajrāan

18:78
ar: قَالَ هَٰذَا فِرَاقُ بَيْنِى وَبَيْنِكَ ۚ سَأُنَبِّئُكَ بِتَأْوِيلِ مَا لَمْ تَسْتَطِع عَّلَيْهِ صَبْرًا
fr: « Ceci [marque] la séparation entre toi et moi, dit [l'homme,] je vais t'apprendre l'interprétation de ce que tu n'as pu supporter avec patience.
ph: Qāla Hādhā Firāqu Baynī Wa Baynika Sa'unabbi'uka Bita'wīli Mā Lam Tastaţi` `Alayhi Şabrāan

18:79
ar: أَمَّا ٱلسَّفِينَةُ فَكَانَتْ لِمَسَٰكِينَ يَعْمَلُونَ فِى ٱلْبَحْرِ فَأَرَدتُّ أَنْ أَعِيبَهَا وَكَانَ وَرَآءَهُم مَّلِكٌۭ يَأْخُذُ كُلَّ سَفِينَةٍ غَصْبًۭا
fr: Pour ce qui est du bateau, il appartenait à des pauvres gens qui travaillaient en mer. Je voulais donc le rendre défectueux, car il y avait derrière eux un roi qui saisissait de force tout bateau.
ph: 'Ammā As-Safīnatu Fakānat Limasākīna Ya`malūna Fī Al-Baĥri Fa'aradtu 'An 'A`ībahā Wa Kāna Warā'ahum Malikun Ya'khudhu Kulla Safīnatin Ghaşbāan

18:80
ar: وَأَمَّا ٱلْغُلَٰمُ فَكَانَ أَبَوَاهُ مُؤْمِنَيْنِ فَخَشِينَآ أَن يُرْهِقَهُمَا طُغْيَٰنًۭا وَكُفْرًۭا
fr: Quant au garçon, ses père et mère étaient des croyants; nous avons craint qu'il ne leur imposât la rébellion et la mécréance.
ph: Wa 'Ammā Al-Ghulāmu Fakāna 'Abawāhu Mu'uminayni Fakhashīnā 'An Yurhiqahumā Ţughyānāan Wa Kufrāan

18:81
ar: فَأَرَدْنَآ أَن يُبْدِلَهُمَا رَبُّهُمَا خَيْرًۭا مِّنْهُ زَكَوٰةًۭ وَأَقْرَبَ رُحْمًۭا
fr: Nous avons donc voulu que leur Seigneur leur accordât en échange un autre plus pur et plus affectueux.
ph: Fa'aradnā 'An Yubdilahumā Rabbuhumā Khayrāan Minhu Zakāatan Wa 'Aqraba Ruĥmāan

18:82
ar: وَأَمَّا ٱلْجِدَارُ فَكَانَ لِغُلَٰمَيْنِ يَتِيمَيْنِ فِى ٱلْمَدِينَةِ وَكَانَ تَحْتَهُۥ كَنزٌۭ لَّهُمَا وَكَانَ أَبُوهُمَا صَٰلِحًۭا فَأَرَادَ رَبُّكَ أَن يَبْلُغَآ أَشُدَّهُمَا وَيَسْتَخْرِجَا كَنزَهُمَا رَحْمَةًۭ مِّن رَّبِّكَ ۚ وَمَا فَعَلْتُهُۥ عَنْ أَمْرِى ۚ ذَٰلِكَ تَأْوِيلُ مَا لَمْ تَسْطِع عَّلَيْهِ صَبْرًۭا
fr: Et quant au mur, il appartenait à deux garçons orphelins de la ville, et il y avait dessous un trésor à eux; et leur père était un homme vertueux. Ton Seigneur a donc voulu que tous deux atteignent leur maturité et qu'ils extraient, [eux-mêmes] leur trésor, par une miséricorde de ton Seigneur. Je ne l'ai d'ailleurs pas fait de mon propre chef. Voilà l'interprétation de ce que tu n'as pas pu endurer avec patience. »
ph: Wa 'Ammā Al-Jidāru Fakāna Lighulāmayni Yatīmayni Fī Al-Madīnati Wa Kāna Taĥtahu Kanzun Lahumā Wa Kāna 'Abūhumā Şāliĥāan Fa'arāda Rabbuka 'An Yablughā 'Ashuddahumā Wa Yastakhrijā Kanzahumā Raĥmatan Min Rabbika Wa Mā Fa`altuhu `An 'Amrī Dhālika Ta'wīlu Mā Lam Tasţi` `Alayhi Şabrāan

18:83
ar: وَيَسْـَٔلُونَكَ عَن ذِى ٱلْقَرْنَيْنِ ۖ قُلْ سَأَتْلُوا۟ عَلَيْكُم مِّنْهُ ذِكْرًا
fr: Et ils t'interrogent sur Dhul-Qarnayn. Dis: « Je vais vous en citer quelque fait mémorable. »
ph: Wa Yas'alūnaka `An Dhī Al-Qarnayni Qul Sa'atlū `Alaykum Minhu Dhikrāan

18:84
ar: إِنَّا مَكَّنَّا لَهُۥ فِى ٱلْأَرْضِ وَءَاتَيْنَٰهُ مِن كُلِّ شَىْءٍۢ سَبَبًۭا
fr: Vraiment, Nous avons affermi sa puissance sur terre, et Nous lui avons donné libre voie à toute chose.
ph: 'Innā Makkannā Lahu Fī Al-'Arđi Wa 'Ātaynāhu Min Kulli Shay'in Sababāan

18:85
ar: فَأَتْبَعَ سَبَبًا
fr: Il suivit donc une voie.
ph: Fa'atba`a Sababāan

18:86
ar: حَتَّىٰٓ إِذَا بَلَغَ مَغْرِبَ ٱلشَّمْسِ وَجَدَهَا تَغْرُبُ فِى عَيْنٍ حَمِئَةٍۢ وَوَجَدَ عِندَهَا قَوْمًۭا ۗ قُلْنَا يَٰذَا ٱلْقَرْنَيْنِ إِمَّآ أَن تُعَذِّبَ وَإِمَّآ أَن تَتَّخِذَ فِيهِمْ حُسْنًۭا
fr: Et quand il eut atteint le Couchant, il trouva que le soleil se couchait dans une source boueuse, et, auprès d'elle il trouva une peuplade [impie]. Nous dîmes: « Ô Dhul-Qarnayn ! Ou tu les châties, ou tu uses de bienveillance à leur égard. »
ph: Ĥattá 'Idhā Balagha Maghriba Ash-Shamsi Wajadahā Taghrubu Fī `Aynin Ĥami'atin Wa Wajada `Indahā Qawmāan Qulnā Yā Dhā Al-Qarnayni 'Immā 'An Tu`adhiba Wa 'Immā 'An Tattakhidha Fīhim Ĥusnāan

18:87
ar: قَالَ أَمَّا مَن ظَلَمَ فَسَوْفَ نُعَذِّبُهُۥ ثُمَّ يُرَدُّ إِلَىٰ رَبِّهِۦ فَيُعَذِّبُهُۥ عَذَابًۭا نُّكْرًۭا
fr: Il dit: « Quant à celui qui est injuste, nous le châtierons; ensuite il sera ramené vers son Seigneur qui le punira d'un châtiment terrible.
ph: Qāla 'Ammā Man Žalama Fasawfa Nu`adhibuhu Thumma Yuraddu 'Ilá Rabbihi Fayu`adhibuhu `Adhābāan Nukrāan

18:88
ar: وَأَمَّا مَنْ ءَامَنَ وَعَمِلَ صَٰلِحًۭا فَلَهُۥ جَزَآءً ٱلْحُسْنَىٰ ۖ وَسَنَقُولُ لَهُۥ مِنْ أَمْرِنَا يُسْرًۭا
fr: Et quant à celui qui croit et fait bonne œuvre, il aura, en retour, la plus belle récompense. Et nous lui donnerons des ordres faciles à exécuter. »
ph: Wa 'Ammā Man 'Āmana Wa `Amila Şāliĥāan Falahu Jazā'an Al-Ĥusná Wa Sanaqūlu Lahu Min 'Amrinā Yusrāan

18:89
ar: ثُمَّ أَتْبَعَ سَبَبًا
fr: Puis, il suivit (une autre) voie.
ph: Thumma 'Atba`a Sababāan

18:90
ar: حَتَّىٰٓ إِذَا بَلَغَ مَطْلِعَ ٱلشَّمْسِ وَجَدَهَا تَطْلُعُ عَلَىٰ قَوْمٍۢ لَّمْ نَجْعَل لَّهُم مِّن دُونِهَا سِتْرًۭا
fr: Et quand il eut atteint le Levant, il trouva que le soleil se levait sur une peuplade à laquelle Nous n'avions pas donné de voile pour s'en protéger.
ph: Ĥattá 'Idhā Balagha Maţli`a Ash-Shamsi Wajadahā Taţlu`u `Alá Qawmin Lam Naj`al Lahum Min Dūnihā Sitrāan

18:91
ar: كَذَٰلِكَ وَقَدْ أَحَطْنَا بِمَا لَدَيْهِ خُبْرًۭا
fr: Il en fut ainsi et Nous embrassons de Notre Science ce qu'il détenait.
ph: Kadhālika Wa Qad 'Aĥaţnā Bimā Ladayhi Khubrāan

18:92
ar: ثُمَّ أَتْبَعَ سَبَبًا
fr: Puis, il suivit (une autre) voie.
ph: Thumma 'Atba`a Sababāan

18:93
ar: حَتَّىٰٓ إِذَا بَلَغَ بَيْنَ ٱلسَّدَّيْنِ وَجَدَ مِن دُونِهِمَا قَوْمًۭا لَّا يَكَادُونَ يَفْقَهُونَ قَوْلًۭا
fr: Et quand il eut atteint un endroit situé entre les Deux Barrières (montagnes), il trouva derrière elles une peuplade qui ne comprenait presque aucun langage.
ph: Ĥattá 'Idhā Balagha Bayna As-Saddayni Wajada Min Dūnihimā Qawmāan Lā Yakādūna Yafqahūna Qawlāan

18:94
ar: قَالُوا۟ يَٰذَا ٱلْقَرْنَيْنِ إِنَّ يَأْجُوجَ وَمَأْجُوجَ مُفْسِدُونَ فِى ٱلْأَرْضِ فَهَلْ نَجْعَلُ لَكَ خَرْجًا عَلَىٰٓ أَن تَجْعَلَ بَيْنَنَا وَبَيْنَهُمْ سَدًّۭا
fr: Ils dirent: « Ô Dhul-Qarnayn, les Yaʾjuj (Gog) et les Maʾjuj (Magog) commettent du désordre sur terre. Est-ce que nous pourrons t'accorder un tribut pour construire une barrière entre eux et nous ? »
ph: Qālū Yā Dhā Al-Qarnayni 'Inna Ya'jūja Wa Ma'jūja Mufsidūna Fī Al-'Arđi Fahal Naj`alu Laka Kharjāan `Alá 'An Taj`ala Baynanā Wa Baynahum Saddāan

18:95
ar: قَالَ مَا مَكَّنِّى فِيهِ رَبِّى خَيْرٌۭ فَأَعِينُونِى بِقُوَّةٍ أَجْعَلْ بَيْنَكُمْ وَبَيْنَهُمْ رَدْمًا
fr: Il dit: « Ce que Mon Seigneur m'a conféré vaut mieux (que vos dons). Aidez-moi donc avec votre force et je construirai un remblai entre vous et eux.
ph: Qāla Mā Makkannī Fīhi Rabbī Khayrun Fa'a`īnūnī Biqūwatin 'Aj`al Baynakum Wa Baynahum Radmāan

18:96
ar: ءَاتُونِى زُبَرَ ٱلْحَدِيدِ ۖ حَتَّىٰٓ إِذَا سَاوَىٰ بَيْنَ ٱلصَّدَفَيْنِ قَالَ ٱنفُخُوا۟ ۖ حَتَّىٰٓ إِذَا جَعَلَهُۥ نَارًۭا قَالَ ءَاتُونِىٓ أُفْرِغْ عَلَيْهِ قِطْرًۭا
fr: Apportez-moi des blocs de fer. » Puis, lorsqu'il en eut comblé l'espace entre les deux montagnes, il dit: « Soufflez ! » Puis, lorsqu'il l'eut rendu une fournaise, il dit: « Apportez-moi du cuivre fondu, que je le déverse dessus. »
ph: 'Ātūnī Zubara Al-Ĥadīdi Ĥattá 'Idhā Sāwá Bayna Aş-Şadafayni Qāla Anfukhū Ĥattá 'Idhā Ja`alahu Nārāan Qāla 'Ātūnī 'Ufrigh `Alayhi Qiţrāan

18:97
ar: فَمَا ٱسْطَٰعُوٓا۟ أَن يَظْهَرُوهُ وَمَا ٱسْتَطَٰعُوا۟ لَهُۥ نَقْبًۭا
fr: Ainsi, ils ne purent guère l'escalader ni l'ébrécher non plus.
ph: Famā Asţā`ū 'An Yažharūhu Wa Mā Astaţā`ū Lahu Naqbāan

18:98
ar: قَالَ هَٰذَا رَحْمَةٌۭ مِّن رَّبِّى ۖ فَإِذَا جَآءَ وَعْدُ رَبِّى جَعَلَهُۥ دَكَّآءَ ۖ وَكَانَ وَعْدُ رَبِّى حَقًّۭا
fr: Il dit: « C'est une miséricorde de la part de mon Seigneur. Mais, lorsque la promesse de mon Seigneur viendra, Il le nivellera. Et la promesse de mon Seigneur est vérité. »
ph: Qāla Hādhā Raĥmatun Min Rabbī Fa'idhā Jā'a Wa`du Rabbī Ja`alahu Dakkā'a Wa Kāna Wa`du Rabbī Ĥaqqāan

18:99
ar: ۞ وَتَرَكْنَا بَعْضَهُمْ يَوْمَئِذٍۢ يَمُوجُ فِى بَعْضٍۢ ۖ وَنُفِخَ فِى ٱلصُّورِ فَجَمَعْنَٰهُمْ جَمْعًۭا
fr: Nous les laisserons, ce jour-là, déferler comme les flots les uns sur les autres, et on soufflera dans la Trompe et Nous les rassemblerons tous.
ph: Wa Taraknā Ba`đahum Yawma'idhin Yamūju Fī Ba`đin Wa Nufikha Fī Aş-Şūri Fajama`nāhum Jam`āan

18:100
ar: وَعَرَضْنَا جَهَنَّمَ يَوْمَئِذٍۢ لِّلْكَٰفِرِينَ عَرْضًا
fr: Et ce jour-là Nous présenterons de près l'Enfer aux mécréants,
ph: Wa `Arađnā Jahannama Yawma'idhin Lilkāfirīna `Arđāan

18:101
ar: ٱلَّذِينَ كَانَتْ أَعْيُنُهُمْ فِى غِطَآءٍ عَن ذِكْرِى وَكَانُوا۟ لَا يَسْتَطِيعُونَ سَمْعًا
fr: dont les yeux étaient couverts d'un voile qui les empêchait de penser à Moi, et ils ne pouvaient rien entendre non plus.
ph: Al-Ladhīna Kānat 'A`yunuhum Fī Ghiţā'in `An Dhikrī Wa Kānū Lā Yastaţī`ūna Sam`āan

18:102
ar: أَفَحَسِبَ ٱلَّذِينَ كَفَرُوٓا۟ أَن يَتَّخِذُوا۟ عِبَادِى مِن دُونِىٓ أَوْلِيَآءَ ۚ إِنَّآ أَعْتَدْنَا جَهَنَّمَ لِلْكَٰفِرِينَ نُزُلًۭا
fr: Ceux qui ont mécru, comptent-ils donc pouvoir prendre, pour alliés, Mes serviteurs en dehors de Moi ? Nous avons préparé l'Enfer comme résidence pour les mécréants.
ph: 'Afaĥasiba Al-Ladhīna Kafarū 'An Yattakhidhū `Ibādī Min Dūnī 'Awliyā'a 'Innā 'A`tadnā Jahannama Lilkāfirīna Nuzulāan

18:103
ar: قُلْ هَلْ نُنَبِّئُكُم بِٱلْأَخْسَرِينَ أَعْمَٰلًا
fr: Dis: « Voulez-vous que Nous vous apprenions lesquels sont les plus grands perdants, en œuvres ?
ph: Qul Hal Nunabbi'ukum Bil-'Akhsarīna 'A`mālāan

18:104
ar: ٱلَّذِينَ ضَلَّ سَعْيُهُمْ فِى ٱلْحَيَوٰةِ ٱلدُّنْيَا وَهُمْ يَحْسَبُونَ أَنَّهُمْ يُحْسِنُونَ صُنْعًا
fr: Ceux dont l'effort, dans la vie présente, s'est égaré, alors qu'ils s'imaginent faire le bien.
ph: Al-Ladhīna Đalla Sa`yuhum Fī Al-Ĥayāati Ad-Dunyā Wa Hum Yaĥsabūna 'Annahum Yuĥsinūna Şun`āan

18:105
ar: أُو۟لَٰٓئِكَ ٱلَّذِينَ كَفَرُوا۟ بِـَٔايَٰتِ رَبِّهِمْ وَلِقَآئِهِۦ فَحَبِطَتْ أَعْمَٰلُهُمْ فَلَا نُقِيمُ لَهُمْ يَوْمَ ٱلْقِيَٰمَةِ وَزْنًۭا
fr: Ceux-là qui ont nié les signes de leur Seigneur, ainsi que Sa rencontre. Leurs actions sont donc vaines. » Nous ne leur assignerons pas de poids au Jour de la Résurrection.
ph: 'Ūla'ika Al-Ladhīna Kafarū Bi'āyāti Rabbihim Wa Liqā'ihi Faĥabiţat 'A`māluhum Falā Nuqīmu Lahum Yawma Al-Qiyāmati Waznāan

18:106
ar: ذَٰلِكَ جَزَآؤُهُمْ جَهَنَّمُ بِمَا كَفَرُوا۟ وَٱتَّخَذُوٓا۟ ءَايَٰتِى وَرُسُلِى هُزُوًا
fr: C'est que leur rétribution sera l'Enfer, pour avoir mécru et pris en raillerie Mes signes (enseignements) et Mes messagers.
ph: Dhālika Jazā'uuhum Jahannamu Bimā Kafarū Wa Attakhadhū 'Āyātī Wa Rusulī Huzūan

18:107
ar: إِنَّ ٱلَّذِينَ ءَامَنُوا۟ وَعَمِلُوا۟ ٱلصَّٰلِحَٰتِ كَانَتْ لَهُمْ جَنَّٰتُ ٱلْفِرْدَوْسِ نُزُلًا
fr: Ceux qui croient et font de bonnes œuvres auront pour résidence les Jardins du: « Firdaws, » (Paradis),
ph: 'Inna Al-Ladhīna 'Āmanū Wa `Amilū Aş-Şāliĥāti Kānat Lahum Jannātu Al-Firdawsi Nuzulāan

18:108
ar: خَٰلِدِينَ فِيهَا لَا يَبْغُونَ عَنْهَا حِوَلًۭا
fr: où ils demeureront éternellement, sans désirer aucun changement.
ph: Khālidīna Fīhā Lā Yabghūna `Anhā Ĥiwalāan

18:109
ar: قُل لَّوْ كَانَ ٱلْبَحْرُ مِدَادًۭا لِّكَلِمَٰتِ رَبِّى لَنَفِدَ ٱلْبَحْرُ قَبْلَ أَن تَنفَدَ كَلِمَٰتُ رَبِّى وَلَوْ جِئْنَا بِمِثْلِهِۦ مَدَدًۭا
fr: Dis: « Si la mer était une encre [pour écrire] les paroles de mon Seigneur, certes la mer s'épuiserait avant que ne soient épuisées les paroles de mon Seigneur, quand même Nous lui apporterions son équivalent comme renfort. »
ph: Qul Law Kāna Al-Baĥru Midādāan Likalimāti Rabbī Lanafida Al-Baĥru Qabla 'An Tanfada Kalimātu Rabbī Wa Law Ji'nā Bimithlihi Madadāan

18:110
ar: قُلْ إِنَّمَآ أَنَا۠ بَشَرٌۭ مِّثْلُكُمْ يُوحَىٰٓ إِلَىَّ أَنَّمَآ إِلَٰهُكُمْ إِلَٰهٌۭ وَٰحِدٌۭ ۖ فَمَن كَانَ يَرْجُوا۟ لِقَآءَ رَبِّهِۦ فَلْيَعْمَلْ عَمَلًۭا صَٰلِحًۭا وَلَا يُشْرِكْ بِعِبَادَةِ رَبِّهِۦٓ أَحَدًۢا
fr: Dis: « Je suis en fait un être humain comme vous. Il m'a été révélé que votre Dieu est un Dieu unique ! Quiconque, donc, espère rencontrer son Seigneur, qu'il fasse de bonnes actions et qu'il n'associe dans son adoration aucun autre à son Seigneur. »
ph: Qul 'Innamā 'Anā Basharun Mithlukum Yūĥá 'Ilayya 'Annamā 'Ilahukum 'Ilahun Wāĥidun Faman Kāna Yarjū Liqā'a Rabbihi Falya`mal `Amalāan Şāliĥāan Wa Lā Yushrik Bi`ibādati Rabbihi 'Aĥadāan 

# ---------- Sourate 20 · Ta-Ha ----------

20:1
ar: طه
fr: Ta Ha.
ph: Ţāhā

20:2
ar: مَآ أَنزَلْنَا عَلَيْكَ ٱلْقُرْءَانَ لِتَشْقَىٰٓ
fr: Nous n'avons point fait descendre sur toi le Coran pour que tu sois malheureux,
ph: Mā 'Anzalnā `Alayka Al-Qur'āna Litashqá

20:3
ar: إِلَّا تَذْكِرَةًۭ لِّمَن يَخْشَىٰ
fr: si ce n'est qu'un Rappel pour celui qui redoute (Allah),
ph: 'Illā Tadhkiratan Liman Yakhshá

20:4
ar: تَنزِيلًۭا مِّمَّنْ خَلَقَ ٱلْأَرْضَ وَٱلسَّمَٰوَٰتِ ٱلْعُلَى
fr: (et comme) une révélation émanant de Celui qui a créé la terre et les cieux sublimes.
ph: Tanzīlāan Mimman Khalaqa Al-'Arđa Wa As-Samāwāti Al-`Ulā

20:5
ar: ٱلرَّحْمَٰنُ عَلَى ٱلْعَرْشِ ٱسْتَوَىٰ
fr: Le Tout Miséricordieux S'est établi: « Istawa »sur le Trône.
ph: Ar-Raĥmānu `Alá Al-`Arshi Astawá

20:6
ar: لَهُۥ مَا فِى ٱلسَّمَٰوَٰتِ وَمَا فِى ٱلْأَرْضِ وَمَا بَيْنَهُمَا وَمَا تَحْتَ ٱلثَّرَىٰ
fr: À Lui appartient ce qui est dans les cieux, sur la terre, ce qui est entre eux et ce qui est sous le sol humide.
ph: Lahu Mā Fī As-Samāwāti Wa Mā Fī Al-'Arđi Wa Mā Baynahumā Wa Mā Taĥta Ath-Thará

20:7
ar: وَإِن تَجْهَرْ بِٱلْقَوْلِ فَإِنَّهُۥ يَعْلَمُ ٱلسِّرَّ وَأَخْفَى
fr: Et si tu élèves la voix, Il connaît certes les secrets, même les plus cachés.
ph: Wa 'In Tajhar Bil-Qawli Fa'innahu Ya`lamu As-Sirra Wa 'Akhfá

20:8
ar: ٱللَّهُ لَآ إِلَٰهَ إِلَّا هُوَ ۖ لَهُ ٱلْأَسْمَآءُ ٱلْحُسْنَىٰ
fr: Allah ! Point de divinité que Lui ! Il possède les noms les plus beaux.
ph: Allāhu Lā 'Ilāha 'Illā Huwa Lahu Al-'Asmā'u Al-Ĥusná

20:9
ar: وَهَلْ أَتَىٰكَ حَدِيثُ مُوسَىٰٓ
fr: Le récit de Musa (Moïse) t'est-il parvenu ?
ph: Wa Hal 'Atāka Ĥadīthu Mūsá

20:10
ar: إِذْ رَءَا نَارًۭا فَقَالَ لِأَهْلِهِ ٱمْكُثُوٓا۟ إِنِّىٓ ءَانَسْتُ نَارًۭا لَّعَلِّىٓ ءَاتِيكُم مِّنْهَا بِقَبَسٍ أَوْ أَجِدُ عَلَى ٱلنَّارِ هُدًۭى
fr: Lorsqu'il vit du feu, il dit à sa famille: « Restez ici ! Je vois du feu de loin; peut-être vous en apporterai-je un tison, ou trouverai-je auprès du feu de quoi me guider ».
ph: 'Idh Ra'á Nārāan Faqāla Li'hlihi Amkuthū 'Innī 'Ānastu Nārāan La`allī 'Ātīkum Minhā Biqabasin 'Aw 'Ajidu `Alá An-Nāri Hudáan

20:11
ar: فَلَمَّآ أَتَىٰهَا نُودِىَ يَٰمُوسَىٰٓ
fr: Puis, lorsqu'il y arriva, il fut interpellé: « Musa (Moïse) !
ph: Falammā 'Atāhā Nūdī Yā Mūsá

20:12
ar: إِنِّىٓ أَنَا۠ رَبُّكَ فَٱخْلَعْ نَعْلَيْكَ ۖ إِنَّكَ بِٱلْوَادِ ٱلْمُقَدَّسِ طُوًۭى
fr: Je suis ton Seigneur. Enlève tes sandales: car tu es dans la vallée sacrée, Tuwâ.
ph: 'Innī 'Anā Rabbuka Fākhla` Na`layka 'Innaka Bil-Wādi Al-Muqaddasi Ţūáan

20:13
ar: وَأَنَا ٱخْتَرْتُكَ فَٱسْتَمِعْ لِمَا يُوحَىٰٓ
fr: Moi, Je t'ai choisi ; écoute donc ce qui va être révélé.
ph: Wa 'Anā Akhtartuka Fāstami` Limā Yūĥá

20:14
ar: إِنَّنِىٓ أَنَا ٱللَّهُ لَآ إِلَٰهَ إِلَّآ أَنَا۠ فَٱعْبُدْنِى وَأَقِمِ ٱلصَّلَوٰةَ لِذِكْرِىٓ
fr: Certes, c'est Moi Allah: point de divinité que Moi. Adore-Moi donc et accomplis la Salat pour te souvenir de Moi.
ph: 'Innanī 'Anā Allāhu Lā 'Ilāha 'Illā 'Anā Fā`budnī Wa 'Aqimi Aş-Şalāata Lidhikrī

20:15
ar: إِنَّ ٱلسَّاعَةَ ءَاتِيَةٌ أَكَادُ أُخْفِيهَا لِتُجْزَىٰ كُلُّ نَفْسٍۭ بِمَا تَسْعَىٰ
fr: L'Heure va certes arriver. Je la cache à peine, pour que chaque âme soit rétribuée selon ses efforts.
ph: 'Inna As-Sā`ata 'Ātiyatun 'Akādu 'Ukhfīhā Litujzá Kullu Nafsin Bimā Tas`á

20:16
ar: فَلَا يَصُدَّنَّكَ عَنْهَا مَن لَّا يُؤْمِنُ بِهَا وَٱتَّبَعَ هَوَىٰهُ فَتَرْدَىٰ
fr: Que celui qui n'y croit pas et qui suit sa propre passion ne t'en détourne pas. Sinon tu périras.
ph: Falā Yaşuddannaka `Anhā Man Lā Yu'uminu Bihā Wa Attaba`a Hawāhu Fatardá

20:17
ar: وَمَا تِلْكَ بِيَمِينِكَ يَٰمُوسَىٰ
fr: Et qu'est-ce qu'il y a dans ta main droite, Ô Musa (Moïse) ? »
ph: Wa Mā Tilka Biyamīnika Yā Mūsá

20:18
ar: قَالَ هِىَ عَصَاىَ أَتَوَكَّؤُا۟ عَلَيْهَا وَأَهُشُّ بِهَا عَلَىٰ غَنَمِى وَلِىَ فِيهَا مَـَٔارِبُ أُخْرَىٰ
fr: Il dit: « C'est mon bâton sur lequel je m'appuie, qui me sert à effeuiller (les arbres) pour mes moutons et j'en fais d'autres usages. »
ph: Qāla Hiya `Aşāya 'Atawakka'u `Alayhā Wa 'Ahushu Bihā `Alá Ghanamī Wa Liya Fīhā Ma'āribu 'Ukhrá

20:19
ar: قَالَ أَلْقِهَا يَٰمُوسَىٰ
fr: [Allah lui] dit: « Jette-le, Ô Musa (Moïse). »
ph: Qāla 'Alqihā Yā Mūsá

20:20
ar: فَأَلْقَىٰهَا فَإِذَا هِىَ حَيَّةٌۭ تَسْعَىٰ
fr: Il le jeta: et le voici un serpent qui rampait.
ph: Fa'alqāhā Fa'idhā Hiya Ĥayyatun Tas`á

20:21
ar: قَالَ خُذْهَا وَلَا تَخَفْ ۖ سَنُعِيدُهَا سِيرَتَهَا ٱلْأُولَىٰ
fr: [Allah] dit: « Saisis-le et ne crains rien: Nous le ramènerons à son premier état.
ph: Qāla Khudh/hā Wa Lā Takhaf Sanu`īduhā Sīratahā Al-'Ūlá

20:22
ar: وَٱضْمُمْ يَدَكَ إِلَىٰ جَنَاحِكَ تَخْرُجْ بَيْضَآءَ مِنْ غَيْرِ سُوٓءٍ ءَايَةً أُخْرَىٰ
fr: Et serre ta main sous ton aisselle: elle en sortira blanche sans aucun mal, et ce sera là un autre prodige,
ph: Wa Ađmum Yadaka 'Ilá Janāĥika Takhruj Bayđā'a Min Ghayri Sū'in 'Āyatan 'Ukhrá

20:23
ar: لِنُرِيَكَ مِنْ ءَايَٰتِنَا ٱلْكُبْرَى
fr: afin que Nous te fassions voir de Nos prodiges les plus importants.
ph: Linuriyaka Min 'Āyātinā Al-Kubrá

20:24
ar: ٱذْهَبْ إِلَىٰ فِرْعَوْنَ إِنَّهُۥ طَغَىٰ
fr: Rends-toi auprès de Fir'awn (Pharaon) car il a outrepassé toute limite.
ph: Adh/hab 'Ilá Fir`awna 'Innahu Ţaghá

20:25
ar: قَالَ رَبِّ ٱشْرَحْ لِى صَدْرِى
fr: [Musa (Moïse)] dit: « Seigneur, ouvre-moi ma poitrine,
ph: Qāla Rabbi Ashraĥ Lī Şadrī

20:26
ar: وَيَسِّرْ لِىٓ أَمْرِى
fr: et facilite ma mission,
ph: Wa Yassir Lī 'Amrī

20:27
ar: وَٱحْلُلْ عُقْدَةًۭ مِّن لِّسَانِى
fr: et dénoue un nœud en ma langue,
ph: Wa Aĥlul `Uqdatan Min Lisānī

20:28
ar: يَفْقَهُوا۟ قَوْلِى
fr: afin qu'ils comprennent mes paroles,
ph: Yafqahū Qawlī

20:29
ar: وَٱجْعَل لِّى وَزِيرًۭا مِّنْ أَهْلِى
fr: et assigne-moi un assistant de ma famille:
ph: Wa Aj`al Lī Wazīrāan Min 'Ahlī

20:30
ar: هَٰرُونَ أَخِى
fr: Harun (Aaron), mon frère,
ph: Hārūna 'Akhī

20:31
ar: ٱشْدُدْ بِهِۦٓ أَزْرِى
fr: accrois par lui ma force !
ph: Ashdud Bihi 'Azrī

20:32
ar: وَأَشْرِكْهُ فِىٓ أَمْرِى
fr: et associe-le à ma mission,
ph: Wa 'Ashrik/hu Fī 'Amrī

20:33
ar: كَىْ نُسَبِّحَكَ كَثِيرًۭا
fr: afin que nous Te glorifions beaucoup,
ph: Kay Nusabbiĥaka Kathīrāan

20:34
ar: وَنَذْكُرَكَ كَثِيرًا
fr: et que nous T'invoquions beaucoup.
ph: Wa Nadhkuraka Kathīrāan

20:35
ar: إِنَّكَ كُنتَ بِنَا بَصِيرًۭا
fr: Et Toi, certes, Tu es Très Clairvoyant sur nous. »
ph: 'Innaka Kunta Binā Başīrāan

20:36
ar: قَالَ قَدْ أُوتِيتَ سُؤْلَكَ يَٰمُوسَىٰ
fr: [Allah] dit: « Ta demande est exaucée, Ô Musa (Moïse).
ph: Qāla Qad 'Ūtīta Su'ulaka Yā Mūsá

20:37
ar: وَلَقَدْ مَنَنَّا عَلَيْكَ مَرَّةً أُخْرَىٰٓ
fr: Et Nous t'avons déjà favorisé une première fois
ph: Wa Laqad Manannā `Alayka Marratan 'Ukhrá

20:38
ar: إِذْ أَوْحَيْنَآ إِلَىٰٓ أُمِّكَ مَا يُوحَىٰٓ
fr: lorsque Nous révélâmes à ta mère ce qui fut révélé:
ph: 'Idh 'Awĥaynā 'Ilá 'Ummika Mā Yūĥá

20:39
ar: أَنِ ٱقْذِفِيهِ فِى ٱلتَّابُوتِ فَٱقْذِفِيهِ فِى ٱلْيَمِّ فَلْيُلْقِهِ ٱلْيَمُّ بِٱلسَّاحِلِ يَأْخُذْهُ عَدُوٌّۭ لِّى وَعَدُوٌّۭ لَّهُۥ ۚ وَأَلْقَيْتُ عَلَيْكَ مَحَبَّةًۭ مِّنِّى وَلِتُصْنَعَ عَلَىٰ عَيْنِىٓ
fr: « Mets-le dans le coffret, puis jette celui-ci dans les flots pour qu'ensuite le fleuve le lance sur la rive; un ennemi à Moi et à lui le prendra. » Et J'ai répandu sur toi une affection de Ma part, afin que tu sois élevé sous Mon œil.
ph: 'Ani Aqdhifīhi Fī At-Tābūti Fāqdhifīhi Fī Al-Yammi Falyulqihi Al-Yammu Bis-Sāĥili Ya'khudh/hu `Adūwun Lī Wa`adūwun Lahu Wa 'Alqaytu `Alayka Maĥabbatan Minnī Wa Lituşna`a `Alá `Ayni

20:40
ar: إِذْ تَمْشِىٓ أُخْتُكَ فَتَقُولُ هَلْ أَدُلُّكُمْ عَلَىٰ مَن يَكْفُلُهُۥ ۖ فَرَجَعْنَٰكَ إِلَىٰٓ أُمِّكَ كَىْ تَقَرَّ عَيْنُهَا وَلَا تَحْزَنَ ۚ وَقَتَلْتَ نَفْسًۭا فَنَجَّيْنَٰكَ مِنَ ٱلْغَمِّ وَفَتَنَّٰكَ فُتُونًۭا ۚ فَلَبِثْتَ سِنِينَ فِىٓ أَهْلِ مَدْيَنَ ثُمَّ جِئْتَ عَلَىٰ قَدَرٍۢ يَٰمُوسَىٰ
fr: Et voilà que ta sœur (te suivait en) marchant et disait: « Puis-je vous indiquer quelqu'un qui se chargera de lui ? » Ainsi, Nous te rapportâmes à ta mère afin que son œil se réjouisse et qu'elle ne s'afflige plus. Tu tuas ensuite 
un individu; Nous te sauvâmes des craintes qui t'oppressaient; et Nous t'imposâmes plusieurs épreuves. Puis tu demeuras des années durant chez les habitants de Madyan. Ensuite tu es venu, Ô Musa (Moïse), conformément à un décret.
ph: 'Idh Tamshī 'Ukhtuka Fataqūlu Hal 'Adullukum `Alá Man Yakfuluhu Faraja`nāka 'Ilá 'Ummika Kay Taqarra `Aynuhā Wa Lā Taĥzana Wa Qatalta Nafsāan Fanajjaynāka Mina Al-Ghammi Wa Fatannāka Futūnāan Falabithta Sinīna Fī 'Ahli Madyana Thumma Ji'ta `Alá Qadarin Yā Mūsá

20:41
ar: وَٱصْطَنَعْتُكَ لِنَفْسِى
fr: Et je t'ai assigné à Moi-Même.
ph: Wa Aşţana`tuka Linafsī

20:42
ar: ٱذْهَبْ أَنتَ وَأَخُوكَ بِـَٔايَٰتِى وَلَا تَنِيَا فِى ذِكْرِى
fr: Pars, toi et ton frère, avec Mes prodiges; et ne négligez pas de M'invoquer.
ph: Adh/hab 'Anta Wa 'Akhūka Bi'āyātī Wa Lā Taniyā Fī Dhikrī

20:43
ar: ٱذْهَبَآ إِلَىٰ فِرْعَوْنَ إِنَّهُۥ طَغَىٰ
fr: Allez vers Fir'awn (Pharaon): il s'est vraiment rebellé.
ph: Adh/habā 'Ilá Fir`awna 'Innahu Ţaghá

20:44
ar: فَقُولَا لَهُۥ قَوْلًۭا لَّيِّنًۭا لَّعَلَّهُۥ يَتَذَكَّرُ أَوْ يَخْشَىٰ
fr: Puis, parlez-lui gentiment. Peut-être se rappellera-t-il ou [Me] craindra-t-il ?
ph: Faqūlā Lahu Qawlāan Layyināan La`allahu Yatadhakkaru 'Aw Yakhshá

20:45
ar: قَالَا رَبَّنَآ إِنَّنَا نَخَافُ أَن يَفْرُطَ عَلَيْنَآ أَوْ أَن يَطْغَىٰ
fr: Ils dirent: « Ô notre Seigneur, nous craignons qu'il ne nous maltraite indûment, ou qu'il dépasse les limites. »
ph: Qālā Rabbanā 'Innanā Nakhāfu 'An Yafruţa `Alaynā 'Aw 'An Yaţghá

20:46
ar: قَالَ لَا تَخَافَآ ۖ إِنَّنِى مَعَكُمَآ أَسْمَعُ وَأَرَىٰ
fr: Il dit: « Ne craignez rien. Je suis avec vous: J'entends et Je vois.
ph: Qāla Lā Takhāfā 'Innanī Ma`akumā 'Asma`u Wa 'Ará

20:47
ar: فَأْتِيَاهُ فَقُولَآ إِنَّا رَسُولَا رَبِّكَ فَأَرْسِلْ مَعَنَا بَنِىٓ إِسْرَٰٓءِيلَ وَلَا تُعَذِّبْهُمْ ۖ قَدْ جِئْنَٰكَ بِـَٔايَةٍۢ مِّن رَّبِّكَ ۖ وَٱلسَّلَٰمُ عَلَىٰ مَنِ ٱتَّبَعَ ٱلْهُدَىٰٓ
fr: Allez donc chez lui; puis, dites-lui: « Nous sommes tous deux, les messagers de ton Seigneur. Envoie donc les enfants d'Israʾil (Israël) en notre compagnie et ne les châtie plus. Nous sommes venus à toi avec une preuve de la part de ton Seigneur. Et que la paix soit sur quiconque suit le droit chemin !
ph: Fa'tiyāhu Faqūlā 'Innā Rasūlā Rabbika Fa'arsil Ma`anā Banī 'Isrā'īla Wa Lā Tu`adhibhum Qad Ji'nāka Bi'āyatin Min Rabbika Wa As-Salāmu `Alá Mani Attaba`a Al-Hudá

20:48
ar: إِنَّا قَدْ أُوحِىَ إِلَيْنَآ أَنَّ ٱلْعَذَابَ عَلَىٰ مَن كَذَّبَ وَتَوَلَّىٰ
fr: Il nous a été révélé que le châtiment est pour celui qui refuse d'avoir foi et qui tourne le dos. »
ph: 'Innā Qad 'Ūĥiya 'Ilaynā 'Anna Al-`Adhāba `Alá Man Kadhaba Wa Tawallá

20:49
ar: قَالَ فَمَن رَّبُّكُمَا يَٰمُوسَىٰ
fr: Alors [Pharaon] dit: « Qui donc est votre Seigneur, Ô Musa (Moïse) ? »
ph: Qāla Faman Rabbukumā Yā Mūsá

20:50
ar: قَالَ رَبُّنَا ٱلَّذِىٓ أَعْطَىٰ كُلَّ شَىْءٍ خَلْقَهُۥ ثُمَّ هَدَىٰ
fr: « Notre Seigneur, dit Musa (Moïse), est Celui qui a donné à chaque chose sa propre nature puis l'a dirigée. »
ph: Qāla Rabbunā Al-Ladhī 'A`ţá Kulla Shay'in Khalqahu Thumma Hadá

20:51
ar: قَالَ فَمَا بَالُ ٱلْقُرُونِ ٱلْأُولَىٰ
fr: « Qu'en est-il donc des générations anciennes ? » dit Fir'awn (Pharaon).
ph: Qāla Famā Bālu Al-Qurūni Al-'Ūlá

20:52
ar: قَالَ عِلْمُهَا عِندَ رَبِّى فِى كِتَٰبٍۢ ۖ لَّا يَضِلُّ رَبِّى وَلَا يَنسَى
fr: Musa (Moïse) dit: « La connaissance de leur sort est auprès de mon Seigneur, dans un livre. Mon Seigneur [ne commet] ni erreur ni oubli.
ph: Qāla `Ilmuhā `Inda Rabbī Fī Kitābin Lā Yađillu Rabbī Wa Lā Yansá

20:53
ar: ٱلَّذِى جَعَلَ لَكُمُ ٱلْأَرْضَ مَهْدًۭا وَسَلَكَ لَكُمْ فِيهَا سُبُلًۭا وَأَنزَلَ مِنَ ٱلسَّمَآءِ مَآءًۭ فَأَخْرَجْنَا بِهِۦٓ أَزْوَٰجًۭا مِّن نَّبَاتٍۢ شَتَّىٰ
fr: C'est Lui qui vous a assigné la terre comme berceau et vous y a tracé des chemins; et qui du ciel a fait descendre de l'eau avec laquelle Nous faisons germer des couples de plantes de toutes sortes. »
ph: Al-Ladhī Ja`ala Lakumu Al-'Arđa Mahdāan Wa Salaka Lakum Fīhā Subulāan Wa 'Anzala Mina As-Samā'i Mā'an Fa'akhrajnā Bihi 'Azwājāan Min Nabātin Shattá

20:54
ar: كُلُوا۟ وَٱرْعَوْا۟ أَنْعَٰمَكُمْ ۗ إِنَّ فِى ذَٰلِكَ لَءَايَٰتٍۢ لِّأُو۟لِى ٱلنُّهَىٰ
fr: « Mangez et faites paître votre bétail. » Voilà bien là des signes pour les doués d'intelligence.
ph: Kulū Wa Ar`aw 'An`āmakum 'Inna Fī Dhālika La'āyātin Li'wlī An-Nuhá

20:55
ar: ۞ مِنْهَا خَلَقْنَٰكُمْ وَفِيهَا نُعِيدُكُمْ وَمِنْهَا نُخْرِجُكُمْ تَارَةً أُخْرَىٰ
fr: C'est d'elle (la terre) que Nous vous avons créés, et en elle Nous vous retournerons, et d'elle Nous vous ferons sortir une fois encore.
ph: Minhā Khalaqnākum Wa Fīhā Nu`īdukum Wa Minhā Nukhrijukum Tāratan 'Ukhrá

20:56
ar: وَلَقَدْ أَرَيْنَٰهُ ءَايَٰتِنَا كُلَّهَا فَكَذَّبَ وَأَبَىٰ
fr: Certes Nous lui avons montré tous Nos prodiges; mais il les a démentis et a refusé (de croire).
ph: Wa Laqad 'Araynāhu 'Āyātinā Kullahā Fakadhaba Wa 'Abá

20:57
ar: قَالَ أَجِئْتَنَا لِتُخْرِجَنَا مِنْ أَرْضِنَا بِسِحْرِكَ يَٰمُوسَىٰ
fr: Il dit: « Es-tu venu à nous, Ô Musa (Moïse), pour nous faire sortir de notre terre par ta magie ?
ph: Qāla 'Aji'tanā Litukhrijanā Min 'Arđinā Bisiĥrika Yā Mūsá

20:58
ar: فَلَنَأْتِيَنَّكَ بِسِحْرٍۢ مِّثْلِهِۦ فَٱجْعَلْ بَيْنَنَا وَبَيْنَكَ مَوْعِدًۭا لَّا نُخْلِفُهُۥ نَحْنُ وَلَآ أَنتَ مَكَانًۭا سُوًۭى
fr: Nous t'apporterons assurément une magie semblable. Fixe entre nous et toi un rendez-vous auquel ni nous ni toi ne manquerons, dans un lieu convenable. »
ph: Falana'tiyannaka Bisiĥrin Mithlihi Fāj`al Baynanā Wa Baynaka Maw`idāan Lā Nukhlifuhu Naĥnu Wa Lā 'Anta Makānāan Sūáan

20:59
ar: قَالَ مَوْعِدُكُمْ يَوْمُ ٱلزِّينَةِ وَأَن يُحْشَرَ ٱلنَّاسُ ضُحًۭى
fr: Alors Musa (Moïse) dit: « Votre rendez-vous, c'est le jour de la fête. Et que les gens se rassemblent dans la matinée ».
ph: Qāla Maw`idukum Yawmu Az-Zīnati Wa 'An Yuĥshara An-Nāsu Đuĥáan

20:60
ar: فَتَوَلَّىٰ فِرْعَوْنُ فَجَمَعَ كَيْدَهُۥ ثُمَّ أَتَىٰ
fr: Fir'awn (Pharaon), donc, se retira. Ensuite il rassembla sa ruse puis vint (au rendez-vous).
ph: Fatawallá Fir`awnu Fajama`a Kaydahu Thumma 'Atá

20:61
ar: قَالَ لَهُم مُّوسَىٰ وَيْلَكُمْ لَا تَفْتَرُوا۟ عَلَى ٱللَّهِ كَذِبًۭا فَيُسْحِتَكُم بِعَذَابٍۢ ۖ وَقَدْ خَابَ مَنِ ٱفْتَرَىٰ
fr: Musa (Moïse) leur dit: « Malheur à vous ! Ne forgez pas de mensonge contre Allah: sinon par un châtiment Il vous anéantira. Celui qui forge (un mensonge) est perdu. »
ph: Qāla Lahum Mūsá Waylakum Lā Taftarū `Alá Allāhi Kadhibāan Fayusĥitakum Bi`adhābin Wa Qad Khāba Mani Aftará

20:62
ar: فَتَنَٰزَعُوٓا۟ أَمْرَهُم بَيْنَهُمْ وَأَسَرُّوا۟ ٱلنَّجْوَىٰ
fr: Là-dessus, ils se mirent à disputer entre eux de leur affaire et tinrent secrètes leurs discussions.
ph: Fatanāza`ū 'Amrahum Baynahum Wa 'Asarrū An-Najwá

20:63
ar: قَالُوٓا۟ إِنْ هَٰذَٰنِ لَسَٰحِرَٰنِ يُرِيدَانِ أَن يُخْرِجَاكُم مِّنْ أَرْضِكُم بِسِحْرِهِمَا وَيَذْهَبَا بِطَرِيقَتِكُمُ ٱلْمُثْلَىٰ
fr: Ils dirent: « Voici deux magiciens qui, par leur magie, veulent vous faire abandonner votre terre et emporter votre doctrine idéale.
ph: Qālū 'In Hadhāni Lasāĥirāni Yurīdāni 'An Yukhrijākum Min 'Arđikum Bisiĥrihimā Wa Yadh/habā Biţarīqatikumu Al-Muthlá

20:64
ar: فَأَجْمِعُوا۟ كَيْدَكُمْ ثُمَّ ٱئْتُوا۟ صَفًّۭا ۚ وَقَدْ أَفْلَحَ ٱلْيَوْمَ مَنِ ٱسْتَعْلَىٰ
fr: Rassemblez donc votre ruse puis venez en rangs serrés. Et celui qui aura le dessus aujourd'hui aura réussi. »
ph: Fa'ajmi`ū Kaydakum Thumma A'tū Şaffāan Wa Qad 'Aflaĥa Al-Yawma Mani Asta`lá

20:65
ar: قَالُوا۟ يَٰمُوسَىٰٓ إِمَّآ أَن تُلْقِىَ وَإِمَّآ أَن نَّكُونَ أَوَّلَ مَنْ أَلْقَىٰ
fr: Ils dirent: « Ô Musa (Moïse), ou tu jettes, [le premier ton bâton] ou que nous soyons les premiers à jeter ? »
ph: Qālū Yā Mūsá 'Immā 'An Tulqiya Wa 'Immā 'An Nakūna 'Awwala Man 'Alqá

20:66
ar: قَالَ بَلْ أَلْقُوا۟ ۖ فَإِذَا حِبَالُهُمْ وَعِصِيُّهُمْ يُخَيَّلُ إِلَيْهِ مِن سِحْرِهِمْ أَنَّهَا تَسْعَىٰ
fr: Il dit: « Jetez plutôt. » Et voilà que leurs cordes et leurs bâtons lui parurent ramper par l'effet de leur magie.
ph: Qāla Bal 'Alqū Fa'idhā Ĥibāluhum Wa `Işīyuhum Yukhayyalu 'Ilayhi Min Siĥrihim 'Annahā Tas`á

20:67
ar: فَأَوْجَسَ فِى نَفْسِهِۦ خِيفَةًۭ مُّوسَىٰ
fr: Musa (Moïse) ressentit quelque peur en lui-même.
ph: Fa'awjasa Fī Nafsihi Khīfatan Mūsá

20:68
ar: قُلْنَا لَا تَخَفْ إِنَّكَ أَنتَ ٱلْأَعْلَىٰ
fr: Nous lui dîmes: « N'aie pas peur, c'est toi qui auras le dessus.
ph: Qulnā Lā Takhaf 'Innaka 'Anta Al-'A`lá

20:69
ar: وَأَلْقِ مَا فِى يَمِينِكَ تَلْقَفْ مَا صَنَعُوٓا۟ ۖ إِنَّمَا صَنَعُوا۟ كَيْدُ سَٰحِرٍۢ ۖ وَلَا يُفْلِحُ ٱلسَّاحِرُ حَيْثُ أَتَىٰ
fr: Jette ce qu'il y a dans ta main droite; cela dévorera ce qu'ils ont fabriqué. Ce qu'ils ont fabriqué n'est qu'une ruse de magicien; et le magicien ne réussit pas, où qu'il soit. »
ph: Wa 'Alqi Mā Fī Yamīnika Talqaf Mā Şana`ū 'Innamā Şana`ū Kaydu Sāĥirin Wa Lā Yufliĥu As-Sāĥiru Ĥaythu 'Atá

20:70
ar: فَأُلْقِىَ ٱلسَّحَرَةُ سُجَّدًۭا قَالُوٓا۟ ءَامَنَّا بِرَبِّ هَٰرُونَ وَمُوسَىٰ
fr: Les magiciens se jetèrent prosternés, disant: « Nous avons foi en le Seigneur d'Harun (Aaron) et de Musa (Moïse). »
ph: Fa'ulqiya As-Saĥaratu Sujjadāan Qālū 'Āmannā Birabbi Hārūna Wa Mūsá

20:71
ar: قَالَ ءَامَنتُمْ لَهُۥ قَبْلَ أَنْ ءَاذَنَ لَكُمْ ۖ إِنَّهُۥ لَكَبِيرُكُمُ ٱلَّذِى عَلَّمَكُمُ ٱلسِّحْرَ ۖ فَلَأُقَطِّعَنَّ أَيْدِيَكُمْ وَأَرْجُلَكُم مِّنْ خِلَٰفٍۢ وَلَأُصَلِّبَنَّكُمْ فِى جُذُوعِ ٱلنَّخْلِ وَلَتَعْلَمُنَّ أَيُّنَآ أَشَدُّ عَذَابًۭا وَأَبْقَىٰ
fr: Alors Fir'awn (Pharaon) dit: « Avez-vous cru en lui avant que je ne vous y autorise ? C'est lui votre chef qui vous a enseigné la magie. Je vous ferai sûrement, couper mains et jambes opposées, et vous ferai crucifier aux troncs des palmiers, et vous saurez, avec certitude, qui de nous est plus fort en châtiment et qui est le plus durable. »
ph: Qāla 'Āmantum Lahu Qabla 'An 'Ādhana Lakum 'Innahu Lakabīrukumu Al-Ladhī `Allamakumu As-Siĥra Fala'uqaţţi`anna 'Aydiyakum Wa 'Arjulakum Min Khilāfin Wa La'uşallibannakum Fī Judhū`i An-Nakhli Wa Lata`lamunna 'Ayyunā 'Ashaddu `Adhābāan Wa 'Abqá

20:72
ar: قَالُوا۟ لَن نُّؤْثِرَكَ عَلَىٰ مَا جَآءَنَا مِنَ ٱلْبَيِّنَٰتِ وَٱلَّذِى فَطَرَنَا ۖ فَٱقْضِ مَآ أَنتَ قَاضٍ ۖ إِنَّمَا تَقْضِى هَٰذِهِ ٱلْحَيَوٰةَ ٱلدُّنْيَآ
fr: « Par celui qui nous a créés, dirent-ils, nous ne te préférerons jamais à ce qui nous est parvenu comme preuves évidentes. Décrète donc ce que tu as à décréter. Tes décrets ne touchent que cette présente vie.
ph: Qālū Lan Nu'uthiraka `Alá Mā Jā'anā Mina Al-Bayyināti Wa Al-Ladhī Faţaranā Fāqđi Mā 'Anta Qāđin 'Innamā Taqđī Hadhihi Al-Ĥayāata Ad-Dunyā

20:73
ar: إِنَّآ ءَامَنَّا بِرَبِّنَا لِيَغْفِرَ لَنَا خَطَٰيَٰنَا وَمَآ أَكْرَهْتَنَا عَلَيْهِ مِنَ ٱلسِّحْرِ ۗ وَٱللَّهُ خَيْرٌۭ وَأَبْقَىٰٓ
fr: Nous croyons en notre Seigneur, afin qu'Il nous pardonne nos fautes ainsi que la magie à laquelle tu nous as contraints. » Et Allah est meilleur et éternel.
ph: 'Innā 'Āmannā Birabbinā Liyaghfira Lanā Khaţāyānā Wa Mā 'Akrahtanā `Alayhi Mina As-Siĥri Wa Allāhu Khayrun Wa 'Abqá

20:74
ar: إِنَّهُۥ مَن يَأْتِ رَبَّهُۥ مُجْرِمًۭا فَإِنَّ لَهُۥ جَهَنَّمَ لَا يَمُوتُ فِيهَا وَلَا يَحْيَىٰ
fr: Quiconque vient en criminel à son Seigneur, aura certes l'Enfer où il ne meurt ni ne vit.
ph: 'Innahu Man Ya'ti Rabbahu Mujrimāan Fa'inna Lahu Jahannama Lā Yamūtu Fīhā Wa Lā Yaĥyā

20:75
ar: وَمَن يَأْتِهِۦ مُؤْمِنًۭا قَدْ عَمِلَ ٱلصَّٰلِحَٰتِ فَأُو۟لَٰٓئِكَ لَهُمُ ٱلدَّرَجَٰتُ ٱلْعُلَىٰ
fr: Et quiconque vient auprès de Lui en croyant, après avoir fait de bonnes œuvres, voilà donc ceux qui auront les plus hauts rangs,
ph: Wa Man Ya'tihi Mu'umināan Qad `Amila Aş-Şāliĥāti Fa'ūlā'ika Lahumu Ad-Darajātu Al-`Ulā

20:76
ar: جَنَّٰتُ عَدْنٍۢ تَجْرِى مِن تَحْتِهَا ٱلْأَنْهَٰرُ خَٰلِدِينَ فِيهَا ۚ وَذَٰلِكَ جَزَآءُ مَن تَزَكَّىٰ
fr: les jardins du séjour (éternel), sous lesquels coulent les ruisseaux, où ils demeureront éternellement. Et voilà la récompense de ceux qui se purifient [de la mécréance et des péchés].
ph: Jannātu `Adnin Tajrī Min Taĥtihā Al-'Anhāru Khālidīna Fīhā Wa Dhalika Jazā'u Man Tazakká

20:77
ar: وَلَقَدْ أَوْحَيْنَآ إِلَىٰ مُوسَىٰٓ أَنْ أَسْرِ بِعِبَادِى فَٱضْرِبْ لَهُمْ طَرِيقًۭا فِى ٱلْبَحْرِ يَبَسًۭا لَّا تَخَٰفُ دَرَكًۭا وَلَا تَخْشَىٰ
fr: Nous révélâmes à Musa (Moïse): « Pars la nuit, à la tête de Mes serviteurs, puis, trace-leur un passage à sec dans la mer: sans craindre une poursuite et sans éprouver aucune peur. »
ph: Wa Laqad 'Awĥaynā 'Ilá Mūsá 'An 'Asri Bi`ibādī Fāđrib Lahum Ţarīqāan Fī Al-Baĥri Yabasāan Lā Takhāfu Darakāan Wa Lā Takhshá

20:78
ar: فَأَتْبَعَهُمْ فِرْعَوْنُ بِجُنُودِهِۦ فَغَشِيَهُم مِّنَ ٱلْيَمِّ مَا غَشِيَهُمْ
fr: Fir'awn (Pharaon) les poursuivit avec ses armées. La mer les submergea bel et bien.
ph: Fa'atba`ahum Fir`awnu Bijunūdihi Faghashiyahum Mina Al-Yammi Mā Ghashiyahum

20:79
ar: وَأَضَلَّ فِرْعَوْنُ قَوْمَهُۥ وَمَا هَدَىٰ
fr: Fir'awn (Pharaon) égara ainsi son peuple et ne le mît pas sur le droit chemin.
ph: Wa 'Ađalla Fir`awnu Qawmahu Wa Mā Hadá

20:80
ar: يَٰبَنِىٓ إِسْرَٰٓءِيلَ قَدْ أَنجَيْنَٰكُم مِّنْ عَدُوِّكُمْ وَوَٰعَدْنَٰكُمْ جَانِبَ ٱلطُّورِ ٱلْأَيْمَنَ وَنَزَّلْنَا عَلَيْكُمُ ٱلْمَنَّ وَٱلسَّلْوَىٰ
fr: Ô enfants d'Israʾil (Israël), Nous vous avons déjà délivrés de votre ennemi, et Nous vous avons donné rendez-vous sur le flanc droit du Mont. Et Nous avons fait descendre sur vous la manne et les cailles.
ph: Yā Banī 'Isrā'īla Qad 'Anjaynākum Min `Adūwikum Wa Wā`adnākum Jāniba Aţ-Ţūri Al-'Aymana Wa Nazzalnā `Alaykumu Al-Manna Wa As-Salwá

20:81
ar: كُلُوا۟ مِن طَيِّبَٰتِ مَا رَزَقْنَٰكُمْ وَلَا تَطْغَوْا۟ فِيهِ فَيَحِلَّ عَلَيْكُمْ غَضَبِى ۖ وَمَن يَحْلِلْ عَلَيْهِ غَضَبِى فَقَدْ هَوَىٰ
fr: « Mangez des bonnes choses que Nous vous avons attribuées et ne vous montrez pas ingrats, sinon Ma colère s'abattra sur vous: et celui sur qui Ma colère s'abat, va sûrement vers l'abîme.
ph: Kulū Min Ţayyibāti Mā Razaqnākum Wa Lā Taţghaw Fīhi Fayaĥilla `Alaykum Ghađabī Wa Man Yaĥlil `Alayhi Ghađabī Faqad Hawá

20:82
ar: وَإِنِّى لَغَفَّارٌۭ لِّمَن تَابَ وَءَامَنَ وَعَمِلَ صَٰلِحًۭا ثُمَّ ٱهْتَدَىٰ
fr: Et je suis Grand Pardonneur à celui qui se repent, croit, fait bonne œuvre, puis se met sur le bon chemin. »
ph: Wa 'Innī Laghaffārun Liman Tāba Wa 'Āmana Wa `Amila Şāliĥāan Thumma Ahtadá

20:83
ar: ۞ وَمَآ أَعْجَلَكَ عَن قَوْمِكَ يَٰمُوسَىٰ
fr: « Pourquoi Musa (Moïse) t'es-tu hâté de quitter ton peuple ? »
ph: Wa Mā 'A`jalaka `An Qawmika Yā Mūsá

20:84
ar: قَالَ هُمْ أُو۟لَآءِ عَلَىٰٓ أَثَرِى وَعَجِلْتُ إِلَيْكَ رَبِّ لِتَرْضَىٰ
fr: Ils sont là sur mes traces, dit Musa (Moïse). Et je me suis hâté vers Toi, Seigneur, afin que Tu sois satisfait.
ph: Qāla Hum 'Ūlā'i `Alá 'Atharī Wa `Ajiltu 'Ilayka Rabbi Litarđá

20:85
ar: قَالَ فَإِنَّا قَدْ فَتَنَّا قَوْمَكَ مِنۢ بَعْدِكَ وَأَضَلَّهُمُ ٱلسَّامِرِىُّ
fr: Allah dit: « Nous avons mis ton peuple à l'épreuve après ton départ. Et le Sâmirî les a égarés ».
ph: Qāla Fa'innā Qad Fatannā Qawmaka Min Ba`dika Wa 'Ađallahumu As-Sāmirīyu

20:86
ar: فَرَجَعَ مُوسَىٰٓ إِلَىٰ قَوْمِهِۦ غَضْبَٰنَ أَسِفًۭا ۚ قَالَ يَٰقَوْمِ أَلَمْ يَعِدْكُمْ رَبُّكُمْ وَعْدًا حَسَنًا ۚ أَفَطَالَ عَلَيْكُمُ ٱلْعَهْدُ أَمْ أَرَدتُّمْ أَن يَحِلَّ عَلَيْكُمْ غَضَبٌۭ مِّن رَّبِّكُمْ فَأَخْلَفْتُم مَّوْعِدِى
fr: Musa (Moïse) retourna donc vers son peuple, courroucé et chagriné; il dit: « Ô mon peuple, votre Seigneur ne vous a-t-Il pas déjà fait une belle promesse ? L'alliance a-t-elle donc été trop longue pour vous ? Ou avez-vous désiré que la colère de votre Seigneur s'abatte sur vous, pour avoir trahi votre engagement envers moi ? »
ph: Faraja`a Mūsá 'Ilá Qawmihi Ghađbāna 'Asifāan Qāla Yā Qawmi 'Alam Ya`idkum Rabbukum Wa`dāan Ĥasanāan 'Afaţāla `Alaykumu Al-`Ahdu 'Am 'Aradtum 'An Yaĥilla `Alaykum Ghađabun Min Rabbikum Fa'akhlaftum Maw`idī

20:87
ar: قَالُوا۟ مَآ أَخْلَفْنَا مَوْعِدَكَ بِمَلْكِنَا وَلَٰكِنَّا حُمِّلْنَآ أَوْزَارًۭا مِّن زِينَةِ ٱلْقَوْمِ فَقَذَفْنَٰهَا فَكَذَٰلِكَ أَلْقَى ٱلسَّامِرِىُّ
fr: Ils dirent: « Ce n'est pas de notre propre gré que nous avons manqué à notre engagement envers toi. Mais nous fûmes chargés de fardeaux d'ornements du peuple (de Fir'awn (Pharaon)); nous les avons donc jetés (sur le feu) tout comme le Sâmirî les a lancés.
ph: Qālū Mā 'Akhlafnā Maw`idaka Bimalkinā Wa Lakinnā Ĥummilnā 'Awzārāan Min Zīnati Al-Qawmi Faqadhafnāhā Fakadhalika 'Alqá As-Sāmirīyu

20:88
ar: فَأَخْرَجَ لَهُمْ عِجْلًۭا جَسَدًۭا لَّهُۥ خُوَارٌۭ فَقَالُوا۟ هَٰذَآ إِلَٰهُكُمْ وَإِلَٰهُ مُوسَىٰ فَنَسِىَ
fr: Puis il en a fait sortir pour eux un veau, un corps à mugissement. Et ils ont dit: « C'est votre divinité et la divinité de Musa (Moïse); il a donc oublié » !
ph: Fa'akhraja Lahum `Ijlāan Jasadāan Lahu Khuwārun Faqālū Hādhā 'Ilahukum Wa 'Ilahu Mūsá Fanasiya

20:89
ar: أَفَلَا يَرَوْنَ أَلَّا يَرْجِعُ إِلَيْهِمْ قَوْلًۭا وَلَا يَمْلِكُ لَهُمْ ضَرًّۭا وَلَا نَفْعًۭا
fr: Quoi ! Ne voyaient-ils pas qu'il [le veau] ne leur rendait aucune parole et qu'il ne possédait aucun moyen de leur nuire ou de leur faire du bien ?
ph: 'Afalā Yarawna 'Allā Yarji`u 'Ilayhim Qawlāan Wa Lā Yamliku Lahum Đarrāan Wa Lā Naf`āan

20:90
ar: وَلَقَدْ قَالَ لَهُمْ هَٰرُونُ مِن قَبْلُ يَٰقَوْمِ إِنَّمَا فُتِنتُم بِهِۦ ۖ وَإِنَّ رَبَّكُمُ ٱلرَّحْمَٰنُ فَٱتَّبِعُونِى وَأَطِيعُوٓا۟ أَمْرِى
fr: Certes, Harun (Aaron) leur avait bien dit auparavant: « Ô mon peuple, vous êtes tombés dans la tentation (a cause du veau). Or, c'est le Tout Miséricordieux qui est vraiment votre Seigneur. Suivez-moi donc et obéissez à mon commandement. »
ph: Wa Laqad Qāla Lahum Hārūnu Min Qablu Yā Qawmi 'Innamā Futintum Bihi Wa 'Inna Rabbakumu Ar-Raĥmānu Fa Attabi`ūnī Wa 'Aţī`ū 'Amrī

20:91
ar: قَالُوا۟ لَن نَّبْرَحَ عَلَيْهِ عَٰكِفِينَ حَتَّىٰ يَرْجِعَ إِلَيْنَا مُوسَىٰ
fr: Ils dirent: « Nous continuerons à y être attachés, jusqu'à ce que Musa (Moïse) retourne vers nous. »
ph: Qālū Lan Nabraĥa `Alayhi `Ākifīna Ĥattá Yarji`a 'Ilaynā Mūsá

20:92
ar: قَالَ يَٰهَٰرُونُ مَا مَنَعَكَ إِذْ رَأَيْتَهُمْ ضَلُّوٓا۟
fr: Alors [Musa (Moïse)] dit: « Qu'est-ce qui t'a empêché, Harun (Aaron), quand tu les as vus s'égarer,
ph: Qāla Yā Hārūnu Mā Mana`aka 'Idh Ra'aytahum Đallū

20:93
ar: أَلَّا تَتَّبِعَنِ ۖ أَفَعَصَيْتَ أَمْرِى
fr: de me suivre ? As-tu donc désobéi à mon commandement ? »
ph: 'Allā Tattabi`anī 'Afa`aşayta 'Amrī

20:94
ar: قَالَ يَبْنَؤُمَّ لَا تَأْخُذْ بِلِحْيَتِى وَلَا بِرَأْسِىٓ ۖ إِنِّى خَشِيتُ أَن تَقُولَ فَرَّقْتَ بَيْنَ بَنِىٓ إِسْرَٰٓءِيلَ وَلَمْ تَرْقُبْ قَوْلِى
fr: [Harun (Aaron)] dit: « Ô fils de ma mère, ne me prends ni par la barbe ni par la tête. Je craignais que tu ne dises: « Tu as divisé les enfants d'Israʾil (Israël) et tu n'as pas observé mes ordres. »
ph: Qāla Yabna'uumma Lā Ta'khudh Biliĥyatī Wa Lā Bira'sī 'Innī Khashītu 'An Taqūla Farraqta Bayna Banī 'Isrā'īla Wa Lam Tarqub Qawlī

20:95
ar: قَالَ فَمَا خَطْبُكَ يَٰسَٰمِرِىُّ
fr: Alors [Musa (Moïse)] dit: « Quel a été ton dessein ? Ô Sâmirî ? »
ph: Qāla Famā Khaţbuka Yā Sāmirīyu

20:96
ar: قَالَ بَصُرْتُ بِمَا لَمْ يَبْصُرُوا۟ بِهِۦ فَقَبَضْتُ قَبْضَةًۭ مِّنْ أَثَرِ ٱلرَّسُولِ فَنَبَذْتُهَا وَكَذَٰلِكَ سَوَّلَتْ لِى نَفْسِى
fr: Il dit: « J'ai vu ce qu'ils n'ont pas vu: j'ai donc pris une poignée de la trace de l'Envoyé ; puis, je l'ai lancée. Voilà ce que mon âme m'a suggéré. »
ph: Qāla Başurtu Bimā Lam Yabşurū Bihi Faqabađtu Qabđatan Min 'Athari Ar-Rasūli Fanabadhtuhā Wa Kadhalika Sawwalat Lī Nafsī

20:97
ar: قَالَ فَٱذْهَبْ فَإِنَّ لَكَ فِى ٱلْحَيَوٰةِ أَن تَقُولَ لَا مِسَاسَ ۖ وَإِنَّ لَكَ مَوْعِدًۭا لَّن تُخْلَفَهُۥ ۖ وَٱنظُرْ إِلَىٰٓ إِلَٰهِكَ ٱلَّذِى ظَلْتَ عَلَيْهِ عَاكِفًۭا ۖ لَّنُحَرِّقَنَّهُۥ ثُمَّ لَنَنسِفَنَّهُۥ فِى ٱلْيَمِّ نَسْفًا
fr: « Va-t-en, dit [Musa (Moïse)]. Dans la vie, tu auras à dire (à tout le monde): « Ne me touchez pas ! » Et il y aura pour toi un rendez-vous que tu ne pourras manquer. Regarde ta divinité que tu as adorée avec assiduité. Nous la brûlerons certes, et ensuite, nous disperserons [sa cendre] dans les flots.
ph: Qāla Fādh/hab Fa'inna Laka Fī Al-Ĥayāati 'An Taqūla Lā Misāsa Wa 'Inna Laka Maw`idāan Lan Tukhlafahu Wa Anžur 'Ilá 'Ilahika Al-Ladhī Žalta `Alayhi `Ākifāan Lanuĥarriqannahu Thumma Lanansifannahu Fī Al-Yammi Nasfāan

20:98
ar: إِنَّمَآ إِلَٰهُكُمُ ٱللَّهُ ٱلَّذِى لَآ إِلَٰهَ إِلَّا هُوَ ۚ وَسِعَ كُلَّ شَىْءٍ عِلْمًۭا
fr: En vérité, votre seul Dieu est Allah en dehors de qui il n'y a point de divinité. De Sa science Il embrasse tout.
ph: 'Innamā 'Ilahukumu Allāhu Al-Ladhī Lā 'Ilāha 'Illā Huwa Wasi`a Kulla Shay'in `Ilmāan

20:99
ar: كَذَٰلِكَ نَقُصُّ عَلَيْكَ مِنْ أَنۢبَآءِ مَا قَدْ سَبَقَ ۚ وَقَدْ ءَاتَيْنَٰكَ مِن لَّدُنَّا ذِكْرًۭا
fr: C'est ainsi que Nous te racontons les récits de ce qui s'est passé. C'est bien un rappel de Notre part que Nous t'avons apporté.
ph: Kadhālika Naquşşu `Alayka Min 'Anbā'i Mā Qad Sabaqa Wa Qad 'Ātaynāka Min Ladunnā Dhikrāan

20:100
ar: مَّنْ أَعْرَضَ عَنْهُ فَإِنَّهُۥ يَحْمِلُ يَوْمَ ٱلْقِيَٰمَةِ وِزْرًا
fr: Quiconque s'en détourne (de ce Coran), portera au Jour de la Résurrection un fardeau;
ph: Man 'A`rađa `Anhu Fa'innahu Yaĥmilu Yawma Al-Qiyāmati Wizrāan

20:101
ar: خَٰلِدِينَ فِيهِ ۖ وَسَآءَ لَهُمْ يَوْمَ ٱلْقِيَٰمَةِ حِمْلًۭا
fr: ils resteront éternellement dans cet état, et quel mauvais fardeau pour eux au Jour de la Résurrection,
ph: Khālidīna Fīhi Wa Sā'a Lahum Yawma Al-Qiyāmati Ĥimlāan

20:102
ar: يَوْمَ يُنفَخُ فِى ٱلصُّورِ ۚ وَنَحْشُرُ ٱلْمُجْرِمِينَ يَوْمَئِذٍۢ زُرْقًۭا
fr: Le jour où l'on soufflera dans la Trompe, ce jour-là Nous rassemblerons les criminels tout bleus (de peur) !
ph: Yawma Yunfakhu Fī Aş-Şūri Wa Naĥshuru Al-Mujrimīna Yawma'idhin Zurqāan

20:103
ar: يَتَخَٰفَتُونَ بَيْنَهُمْ إِن لَّبِثْتُمْ إِلَّا عَشْرًۭا
fr: Ils chuchoteront entre eux: « Vous n'êtes restés là que dix [jours] ! »
ph: Yatakhāfatūna Baynahum 'In Labithtum 'Illā `Ashrāan

20:104
ar: نَّحْنُ أَعْلَمُ بِمَا يَقُولُونَ إِذْ يَقُولُ أَمْثَلُهُمْ طَرِيقَةً إِن لَّبِثْتُمْ إِلَّا يَوْمًۭا
fr: Nous connaissons parfaitement ce qu'ils diront lorsque l'un d'entre eux dont la conduite est exemplaire dira: « Vous n'êtes restés qu'un jour. »
ph: Naĥnu 'A`lamu Bimā Yaqūlūna 'Idh Yaqūlu 'Amthaluhum Ţarīqatan 'In Labithtum 'Illā Yawmāan

20:105
ar: وَيَسْـَٔلُونَكَ عَنِ ٱلْجِبَالِ فَقُلْ يَنسِفُهَا رَبِّى نَسْفًۭا
fr: Et ils t'interrogent au sujet des montagnes. Dis: « Mon Seigneur les dispersera comme la poussière,
ph: Wa Yas'alūnaka `Ani Al-Jibāli Faqul Yansifuhā Rabbī Nasfāan

20:106
ar: فَيَذَرُهَا قَاعًۭا صَفْصَفًۭا
fr: et les laissera comme une plaine dénudée
ph: Fayadharuhā Qā`āan Şafşafāan

20:107
ar: لَّا تَرَىٰ فِيهَا عِوَجًۭا وَلَآ أَمْتًۭا
fr: dans laquelle tu ne verras ni tortuosité, ni dépression.
ph: Lā Tará Fīhā `Iwajāan Wa Lā 'Amtāan

20:108
ar: يَوْمَئِذٍۢ يَتَّبِعُونَ ٱلدَّاعِىَ لَا عِوَجَ لَهُۥ ۖ وَخَشَعَتِ ٱلْأَصْوَاتُ لِلرَّحْمَٰنِ فَلَا تَسْمَعُ إِلَّا هَمْسًۭا
fr: Ce jour-là, ils suivront le Convocateur sans tortuosité ; et les voix baisseront devant le Tout Miséricordieux. Tu n'entendras alors qu'un chuchotement.
ph: Yawma'idhin Yattabi`ūna Ad-Dā`ī Lā `Iwaja Lahu Wa Khasha`ati Al-'Aşwātu Lilrraĥmani Falā Tasma`u 'Illā Hamsāan

20:109
ar: يَوْمَئِذٍۢ لَّا تَنفَعُ ٱلشَّفَٰعَةُ إِلَّا مَنْ أَذِنَ لَهُ ٱلرَّحْمَٰنُ وَرَضِىَ لَهُۥ قَوْلًۭا
fr: Ce jour-là, l'intercession ne profitera qu'à celui auquel le Tout Miséricordieux aura donné Sa permission et dont Il agréera la parole.
ph: Yawma'idhin Lā Tanfa`u Ash-Shafā`atu 'Illā Man 'Adhina Lahu Ar-Raĥmānu Wa Rađiya Lahu Qawlāan

20:110
ar: يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِهِۦ عِلْمًۭا
fr: Il connaît ce qui est devant eux et ce qui est derrière eux, alors qu'eux-mêmes ne Le cernent pas de leur science.
ph: Ya`lamu Mā Bayna 'Aydīhim Wa Mā Khalfahum Wa Lā Yuĥīţūna Bihi `Ilmāan

20:111
ar: ۞ وَعَنَتِ ٱلْوُجُوهُ لِلْحَىِّ ٱلْقَيُّومِ ۖ وَقَدْ خَابَ مَنْ حَمَلَ ظُلْمًۭا
fr: Et les visages s'humilieront devant Le Vivant, Celui qui subsiste par Lui-même: « al-Qayyûm », et malheureux sera celui qui [se présentera devant Lui] chargé d'une iniquité.
ph: Wa `Anati Al-Wujūhu Lilĥayyi Al-Qayyūmi Wa Qad Khāba Man Ĥamala Žulmāan

20:112
ar: وَمَن يَعْمَلْ مِنَ ٱلصَّٰلِحَٰتِ وَهُوَ مُؤْمِنٌۭ فَلَا يَخَافُ ظُلْمًۭا وَلَا هَضْمًۭا
fr: Et quiconque aura fait de bonnes œuvres tout en étant croyant, ne craindra ni injustice ni oppression.
ph: Wa Man Ya`mal Mina Aş-Şāliĥāti Wa Huwa Mu'uminun Falā Yakhāfu Žulmāan Wa Lā Hađmāan

20:113
ar: وَكَذَٰلِكَ أَنزَلْنَٰهُ قُرْءَانًا عَرَبِيًّۭا وَصَرَّفْنَا فِيهِ مِنَ ٱلْوَعِيدِ لَعَلَّهُمْ يَتَّقُونَ أَوْ يُحْدِثُ لَهُمْ ذِكْرًۭا
fr: C'est ainsi que nous l'avons fait descendre un Coran en [langue] arabe, et Nous y avons multiplié les menaces, afin qu'ils deviennent pieux ou qu'il les incite à s'exhorter ?
ph: Wa Kadhalika 'Anzalnāhu Qur'ānāan `Arabīyāan Wa Şarrafnā Fīhi Mina Al-Wa`īdi La`allahum Yattaqūna 'Aw Yuĥdithu Lahum Dhikrāan

20:114
ar: فَتَعَٰلَى ٱللَّهُ ٱلْمَلِكُ ٱلْحَقُّ ۗ وَلَا تَعْجَلْ بِٱلْقُرْءَانِ مِن قَبْلِ أَن يُقْضَىٰٓ إِلَيْكَ وَحْيُهُۥ ۖ وَقُل رَّبِّ زِدْنِى عِلْمًۭا
fr: Que soit exalté Allah, le Vrai Souverain ! Ne te hâte pas [de réciter] le Coran avant que ne te soit achevée sa révélation. Et dis: « Ô mon Seigneur, accroît mes connaissances ! »
ph: Fata`ālá Allāhu Al-Maliku Al-Ĥaqqu Wa Lā Ta`jal Bil-Qur'āni Min Qabli 'An Yuqđá 'Ilayka Waĥyuhu Wa Qul Rabbi Zidnī `Ilmāan

20:115
ar: وَلَقَدْ عَهِدْنَآ إِلَىٰٓ ءَادَمَ مِن قَبْلُ فَنَسِىَ وَلَمْ نَجِدْ لَهُۥ عَزْمًۭا
fr: En effet, Nous avons auparavant fait une recommandation à Adam; mais il oublia; et Nous n'avons pas trouvé chez lui de résolution ferme.
ph: Wa Laqad `Ahidnā 'Ilá 'Ādama Min Qablu Fanasiya Wa Lam Najid Lahu `Azmāan

20:116
ar: وَإِذْ قُلْنَا لِلْمَلَٰٓئِكَةِ ٱسْجُدُوا۟ لِءَادَمَ فَسَجَدُوٓا۟ إِلَّآ إِبْلِيسَ أَبَىٰ
fr: Et quand Nous dîmes aux Anges: « Prosternez-vous devant Adam », ils se prosternèrent, excepté Iblis qui refusa.
ph: Wa 'Idh Qulnā Lilmalā'ikati Asjudū Li'dama Fasajadū 'Illā 'Iblīsa 'Abá

20:117
ar: فَقُلْنَا يَٰٓـَٔادَمُ إِنَّ هَٰذَا عَدُوٌّۭ لَّكَ وَلِزَوْجِكَ فَلَا يُخْرِجَنَّكُمَا مِنَ ٱلْجَنَّةِ فَتَشْقَىٰٓ
fr: Alors Nous dîmes: « Ô Adam, celui-là est vraiment un ennemi pour toi et ton épouse. Prenez garde qu'il vous fasse sortir du Paradis, car alors tu seras malheureux.
ph: Faqulnā Yā 'Ādamu 'Inna Hādhā `Adūwun Laka Wa Lizawjika Falā Yukhrijannakumā Mina Al-Jannati Fatashqá

20:118
ar: إِنَّ لَكَ أَلَّا تَجُوعَ فِيهَا وَلَا تَعْرَىٰ
fr: Car tu n'y auras pas faim ni ne seras nu,
ph: 'Inna Laka 'Allā Tajū`a Fīhā Wa Lā Ta`rá

20:119
ar: وَأَنَّكَ لَا تَظْمَؤُا۟ فِيهَا وَلَا تَضْحَىٰ
fr: tu n'y auras pas soif ni ne seras frappé par l'ardeur du soleil. »
ph: Wa 'Annaka Lā Tažma'u Fīhā Wa Lā Tađĥá

20:120
ar: فَوَسْوَسَ إِلَيْهِ ٱلشَّيْطَٰنُ قَالَ يَٰٓـَٔادَمُ هَلْ أَدُلُّكَ عَلَىٰ شَجَرَةِ ٱلْخُلْدِ وَمُلْكٍۢ لَّا يَبْلَىٰ
fr: Puis le Diable le tenta en disant: « Ô Adam, t'indiquerai-je l'arbre de l'éternité et un royaume impérissable ? »
ph: Fawaswasa 'Ilayhi Ash-Shayţānu Qāla Yā 'Ādamu Hal 'Adulluka `Alá Shajarati Al-Khuldi Wa Mulkin Lā Yablá

20:121
ar: فَأَكَلَا مِنْهَا فَبَدَتْ لَهُمَا سَوْءَٰتُهُمَا وَطَفِقَا يَخْصِفَانِ عَلَيْهِمَا مِن وَرَقِ ٱلْجَنَّةِ ۚ وَعَصَىٰٓ ءَادَمُ رَبَّهُۥ فَغَوَىٰ
fr: Tous deux (Adam et Eve) en mangèrent. Alors leur apparut leur nudité. Ils se mirent à se couvrir avec des feuilles du paradis. Adam désobéit ainsi à son Seigneur et il s'égara.
ph: Fa'akalā Minhā Fabadat Lahumā Saw'ātuhumā Wa Ţafiqā Yakhşifāni `Alayhimā Min Waraqi Al-Jannati Wa `Aşá 'Ādamu Rabbahu Faghawá

20:122
ar: ثُمَّ ٱجْتَبَٰهُ رَبُّهُۥ فَتَابَ عَلَيْهِ وَهَدَىٰ
fr: Son Seigneur l'a ensuite élu, agréé son repentir et l'a guidé.
ph: Thumma Ajtabāhu Rabbuhu Fatāba `Alayhi Wa Hadá

20:123
ar: قَالَ ٱهْبِطَا مِنْهَا جَمِيعًۢا ۖ بَعْضُكُمْ لِبَعْضٍ عَدُوٌّۭ ۖ فَإِمَّا يَأْتِيَنَّكُم مِّنِّى هُدًۭى فَمَنِ ٱتَّبَعَ هُدَاىَ فَلَا يَضِلُّ وَلَا يَشْقَىٰ
fr: Il dit: « Descendez d'ici, (Adam et Eve), [vous serez] tous (avec vos descendants) ennemis les uns des autres. Puis, si jamais un guide vous vient de Ma part, quiconque suit Mon guide ne s'égarera ni ne sera malheureux.
ph: Qāla Ahbiţā Minhā Jamī`āan Ba`đukum Liba`đin `Adūwun Fa'immā Ya'tiyannakum Minnī Hudáan Famani Attaba`a Hudāya Falā Yađillu Wa Lā Yashqá

20:124
ar: وَمَنْ أَعْرَضَ عَن ذِكْرِى فَإِنَّ لَهُۥ مَعِيشَةًۭ ضَنكًۭا وَنَحْشُرُهُۥ يَوْمَ ٱلْقِيَٰمَةِ أَعْمَىٰ
fr: Et quiconque se détourne de Mon Rappel, mènera certes, une vie pleine de gêne, et le Jour de la Résurrection Nous l'amènerons aveugle au rassemblement ».
ph: Wa Man 'A`rađa `An Dhikrī Fa'inna Lahu Ma`īshatan Đankāan Wa Naĥshuruhu Yawma Al-Qiyāmati 'A`má

20:125
ar: قَالَ رَبِّ لِمَ حَشَرْتَنِىٓ أَعْمَىٰ وَقَدْ كُنتُ بَصِيرًۭا
fr: Il dira: « Ô mon Seigneur, pourquoi m'as-Tu amené aveugle alors qu'auparavant je voyais ? »
ph: Qāla Rabbi Lima Ĥashartanī 'A`má Wa Qad Kuntu Başīrāan

20:126
ar: قَالَ كَذَٰلِكَ أَتَتْكَ ءَايَٰتُنَا فَنَسِيتَهَا ۖ وَكَذَٰلِكَ ٱلْيَوْمَ تُنسَىٰ
fr: [Allah lui] dira: « De même que Nos Signes (enseignements) t'étaient venus et que tu les as oubliés, ainsi aujourd'hui tu es oublié. »
ph: Qāla Kadhālika 'Atatka 'Āyātunā Fanasītahā Wa Kadhalika Al-Yawma Tunsá

20:127
ar: وَكَذَٰلِكَ نَجْزِى مَنْ أَسْرَفَ وَلَمْ يُؤْمِنۢ بِـَٔايَٰتِ رَبِّهِۦ ۚ وَلَعَذَابُ ٱلْءَاخِرَةِ أَشَدُّ وَأَبْقَىٰٓ
fr: Ainsi sanctionnons-nous l'outrancier qui ne croit pas aux révélations de son Seigneur. Et certes, le châtiment de l'au-delà est plus sévère et plus durable.
ph: Wa Kadhalika Najzī Man 'Asrafa Wa Lam Yu'umin Bi'āyāti Rabbihi Wa La`adhābu Al-'Ākhirati 'Ashaddu Wa 'Abqá

20:128
ar: أَفَلَمْ يَهْدِ لَهُمْ كَمْ أَهْلَكْنَا قَبْلَهُم مِّنَ ٱلْقُرُونِ يَمْشُونَ فِى مَسَٰكِنِهِمْ ۗ إِنَّ فِى ذَٰلِكَ لَءَايَٰتٍۢ لِّأُو۟لِى ٱلنُّهَىٰ
fr: Cela ne leur a-t-il pas servi de direction, que Nous ayons fait périr avant eux tant de générations dans les demeures desquelles ils marchent maintenant ? Voilà bien là des leçons pour les doués d'intelligence !
ph: 'Afalam Yahdi Lahum Kam 'Ahlaknā Qablahum Mina Al-Qurūni Yamshūna Fī Masākinihim 'Inna Fī Dhālika La'āyātin Li'wlī An-Nuhá

20:129
ar: وَلَوْلَا كَلِمَةٌۭ سَبَقَتْ مِن رَّبِّكَ لَكَانَ لِزَامًۭا وَأَجَلٌۭ مُّسَمًّۭى
fr: N'eussent-été un décret préalable de ton Seigneur et aussi un terme déjà fixé, (leur châtiment) aurait été inévitable (et immédiat).
ph: Wa Lawlā Kalimatun Sabaqat Min Rabbika Lakāna Lizāmāan Wa 'Ajalun Musammáan

20:130
ar: فَٱصْبِرْ عَلَىٰ مَا يَقُولُونَ وَسَبِّحْ بِحَمْدِ رَبِّكَ قَبْلَ طُلُوعِ ٱلشَّمْسِ وَقَبْلَ غُرُوبِهَا ۖ وَمِنْ ءَانَآئِ ٱلَّيْلِ فَسَبِّحْ وَأَطْرَافَ ٱلنَّهَارِ لَعَلَّكَ تَرْضَىٰ
fr: Supporte patiemment ce qu'ils disent et célèbre Sa louange, avant le lever du soleil, avant son coucher et pendant la nuit; et exalte Sa Gloire aux extrémités du jour. Peut-être auras-tu satisfaction:
ph: Fāşbir `Alá Mā Yaqūlūna Wa Sabbiĥ Biĥamdi Rabbika Qabla Ţulū`i Ash-Shamsi Wa Qabla Ghurūbihā Wa Min 'Ānā'i Al-Layli Fasabbiĥ Wa 'Aţrāfa An-Nahāri La`allaka Tarđá

20:131
ar: وَلَا تَمُدَّنَّ عَيْنَيْكَ إِلَىٰ مَا مَتَّعْنَا بِهِۦٓ أَزْوَٰجًۭا مِّنْهُمْ زَهْرَةَ ٱلْحَيَوٰةِ ٱلدُّنْيَا لِنَفْتِنَهُمْ فِيهِ ۚ وَرِزْقُ رَبِّكَ خَيْرٌۭ وَأَبْقَىٰ
fr: Et ne tends point tes yeux vers ce dont Nous avons donné jouissance temporaire à certains groupes d'entre eux, comme décor de la vie présente, afin de les éprouver par cela. Ce qu'Allah fournit (au Paradis) est meilleur et plus durable.
ph: Wa Lā Tamuddanna `Aynayka 'Ilá Mā Matta`nā Bihi 'Azwājāan Minhum Zahrata Al-Ĥayāati Ad-Dunyā Linaftinahum Fīhi Wa Rizqu Rabbika Khayrun Wa 'Abqá

20:132
ar: وَأْمُرْ أَهْلَكَ بِٱلصَّلَوٰةِ وَٱصْطَبِرْ عَلَيْهَا ۖ لَا نَسْـَٔلُكَ رِزْقًۭا ۖ نَّحْنُ نَرْزُقُكَ ۗ وَٱلْعَٰقِبَةُ لِلتَّقْوَىٰ
fr: Et commande à ta famille la Salat, et fais-la avec persévérance. Nous ne te demandons point de nourriture: c'est à Nous de te nourrir. La bonne fin est réservée à la piété.
ph: Wa 'Mur 'Ahlaka Biş-Şalāati Wa Aşţabir `Alayhā Lā Nas'aluka Rizqāan Naĥnu Narzuquka Wa Al-`Āqibatu Lilttaqwá

20:133
ar: وَقَالُوا۟ لَوْلَا يَأْتِينَا بِـَٔايَةٍۢ مِّن رَّبِّهِۦٓ ۚ أَوَلَمْ تَأْتِهِم بَيِّنَةُ مَا فِى ٱلصُّحُفِ ٱلْأُولَىٰ
fr: Et ils disent: « Pourquoi ne nous apporte-t-il pas un miracle de son Seigneur ? La Preuve (le Coran) de ce que contiennent les Ecritures anciennes ne leur est-elle pas venue ?
ph: Wa Qālū Lawlā Ya'tīnā Bi'āyatin Min Rabbihi 'Awalam Ta'tihim Bayyinatu Mā Fī Aş-Şuĥufi Al-'Ūlá

20:134
ar: وَلَوْ أَنَّآ أَهْلَكْنَٰهُم بِعَذَابٍۢ مِّن قَبْلِهِۦ لَقَالُوا۟ رَبَّنَا لَوْلَآ أَرْسَلْتَ إِلَيْنَا رَسُولًۭا فَنَتَّبِعَ ءَايَٰتِكَ مِن قَبْلِ أَن نَّذِلَّ وَنَخْزَىٰ
fr: Et si Nous les avions fait périr par un châtiment avant lui [Muhammad], ils auraient certainement dit: « Ô notre Seigneur, pourquoi ne nous as-Tu pas envoyé de Messager ? Nous aurions alors suivi Tes enseignements avant d'avoir été humiliés et jetés dans l'ignominie. »
ph: Wa Law 'Annā 'Ahlaknāhum Bi`adhābin Min Qablihi Laqālū Rabbanā Lawlā 'Arsalta 'Ilaynā Rasūlāan Fanattabi`a 'Āyātika Min Qabli 'An Nadhilla Wa Nakhzá

20:135
ar: قُلْ كُلٌّۭ مُّتَرَبِّصٌۭ فَتَرَبَّصُوا۟ ۖ فَسَتَعْلَمُونَ مَنْ أَصْحَٰبُ ٱلصِّرَٰطِ ٱلسَّوِىِّ وَمَنِ ٱهْتَدَىٰ
fr: Dis: « Chacun attend. Attendez donc ! Vous saurez bientôt qui sont les gens du droit chemin et qui sont les bien-guidés. »
ph: Qul Kullun Mutarabbişun Fatarabbaşū Fasata`lamūna Man 'Aşĥābu Aş-Şirāţi As-Sawīyi Wa Mani Ahtadá

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
