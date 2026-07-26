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
ph: Al-Ĥamdu Lillāhi Rabbi Al-`Ālamīna

1:3
ar: ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
fr: Le Tout Miséricordieux, le Très Miséricordieux.
ph: Ar-Raĥmāni Ar-Raĥīmi

1:4
ar: مَٰلِكِ يَوْمِ ٱلدِّينِ
fr: Maître du Jour de la rétribution.
ph: Māliki Yawmi Ad-Dīni

1:5
ar: إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ
fr: C'est Toi que nous adorons, et c'est Toi dont nous implorons le secours.
ph: 'Īyāka Na`budu Wa 'Īyāka Nasta`īnu

1:6
ar: ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ
fr: Guide-nous sur le chemin droit,
ph: Ihdinā Aş-Şirāţa Al-Mustaqīma

1:7
ar: صِرَٰطَ ٱلَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ ٱلْمَغْضُوبِ عَلَيْهِمْ وَلَا ٱلضَّآلِّينَ
fr: le chemin de ceux que Tu as comblés de bienfaits, non pas de ceux qui ont encouru Ta colère, ni des égarés.
ph: Şirāţa Al-Ladhīna 'An`amta `Alayhim Ghayri Al-Maghđūbi `Alayhim Wa Lā Ađ-Đāllīna

# ---------- Sourate 2 · Al-Baqara ----------

2:1
ar: الٓمٓ
fr: Alif, Lam, Mim.
ph: 'Alif-Lām-Mīm

2:2
ar: ذَٰلِكَ ٱلْكِتَٰبُ لَا رَيْبَ ۛ فِيهِ ۛ هُدًۭى لِّلْمُتَّقِينَ
fr: C'est le Livre au sujet duquel il n'y a aucun doute, c'est un guide pour les pieux,
ph: Dhālika Al-Kitābu Lā Rayba Fīhi Hudáan Lilmuttaqīna

2:3
ar: ٱلَّذِينَ يُؤْمِنُونَ بِٱلْغَيْبِ وَيُقِيمُونَ ٱلصَّلَوٰةَ وَمِمَّا رَزَقْنَٰهُمْ يُنفِقُونَ
fr: qui croient à l'invisible et accomplissent la Salat et dépensent (dans l'obéissance à Allah), de ce que Nous leur avons attribué,
ph: Al-Ladhīna Yu'uminūna Bil-Ghaybi Wa Yuqīmūna Aş-Şalāata Wa Mimmā Razaqnāhum Yunfiqūna

2:4
ar: وَٱلَّذِينَ يُؤْمِنُونَ بِمَآ أُنزِلَ إِلَيْكَ وَمَآ أُنزِلَ مِن قَبْلِكَ وَبِٱلْءَاخِرَةِ هُمْ يُوقِنُونَ
fr: Ceux qui croient à ce qui t'a été descendu (révélé) et à ce qui a été descendu avant toi et qui croient fermement à la vie future.
ph: Wa Al-Ladhīna Yu'uminūna Bimā 'Unzila 'Ilayka Wa Mā 'Unzila Min Qablika Wa Bil-'Ākhirati Hum Yūqinūna

2:5
ar: أُو۟لَٰٓئِكَ عَلَىٰ هُدًۭى مِّن رَّبِّهِمْ ۖ وَأُو۟لَٰٓئِكَ هُمُ ٱلْمُفْلِحُونَ
fr: Ceux-là sont sur le bon chemin de leur Seigneur, et ce sont eux qui réussissent (dans cette vie et dans la vie future).
ph: 'Ūlā'ika `Alá Hudáan Min Rabbihim Wa 'Ūlā'ika Humu Al-Mufliĥūna

2:6
ar: إِنَّ ٱلَّذِينَ كَفَرُوا۟ سَوَآءٌ عَلَيْهِمْ ءَأَنذَرْتَهُمْ أَمْ لَمْ تُنذِرْهُمْ لَا يُؤْمِنُونَ
fr: Certes les infidèles ne croient pas, cela leur est égal, que tu les avertisses ou non: ils ne croiront jamais.
ph: 'Inna Al-Ladhīna Kafarū Sawā'un `Alayhim 'A 'Andhartahum 'Am Lam Tundhirhum Lā Yu'uminūna

2:7
ar: خَتَمَ ٱللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ ۖ وَعَلَىٰٓ أَبْصَٰرِهِمْ غِشَٰوَةٌۭ ۖ وَلَهُمْ عَذَابٌ عَظِيمٌۭ
fr: Allah a scellé leurs cœurs et leurs oreilles; et un voile épais leur couvre la vue; et pour eux il y aura un grand châtiment.
ph: Khatama Allāhu `Alá Qulūbihim Wa `Alá Sam`ihim Wa `Alá 'Abşārihim Ghishāwatun Wa Lahum `Adhābun `Ažīmun

2:8
ar: وَمِنَ ٱلنَّاسِ مَن يَقُولُ ءَامَنَّا بِٱللَّهِ وَبِٱلْيَوْمِ ٱلْءَاخِرِ وَمَا هُم بِمُؤْمِنِينَ
fr: Parmi les gens, il y a ceux qui disent: « Nous croyons en Allah et au Jour dernier ! » tandis qu'en fait, ils n'y croient pas.
ph: Wa Mina An-Nāsi Man Yaqūlu 'Āmannā Billāhi Wa Bil-Yawmi Al-'Ākhiri Wa Mā Hum Bimu'uminīna

2:9
ar: يُخَٰدِعُونَ ٱللَّهَ وَٱلَّذِينَ ءَامَنُوا۟ وَمَا يَخْدَعُونَ إِلَّآ أَنفُسَهُمْ وَمَا يَشْعُرُونَ
fr: Ils cherchent à tromper Allah et les croyants; mais ils ne trompent qu'eux-mêmes, et ils ne s'en rendent pas compte.
ph: Yukhādi`ūna Allāha Wa Al-Ladhīna 'Āmanū Wa Mā Yakhda`ūna 'Illā 'Anfusahum Wa Mā Yash`urūna

2:10
ar: فِى قُلُوبِهِم مَّرَضٌۭ فَزَادَهُمُ ٱللَّهُ مَرَضًۭا ۖ وَلَهُمْ عَذَابٌ أَلِيمٌۢ بِمَا كَانُوا۟ يَكْذِبُونَ
fr: Il y a dans leurs cœurs une maladie (de doute et d'hypocrisie), et Allah laisse croître leur maladie. Ils auront un châtiment douloureux, pour avoir menti.
ph: Fī Qulūbihim Marađun Fazādahumu Allāhu Marađāan Wa Lahum `Adhābun 'Alīmun Bimā Kānū Yakdhibūna

2:11
ar: وَإِذَا قِيلَ لَهُمْ لَا تُفْسِدُوا۟ فِى ٱلْأَرْضِ قَالُوٓا۟ إِنَّمَا نَحْنُ مُصْلِحُونَ
fr: Et quand on leur dit: « Ne semez pas la corruption sur la terre », ils disent: « Au contraire nous ne sommes que des réformateurs ! »
ph: Wa 'Idhā Qīla Lahum Lā Tufsidū Fī Al-'Arđi Qālū 'Innamā Naĥnu Muşliĥūna

2:12
ar: أَلَآ إِنَّهُمْ هُمُ ٱلْمُفْسِدُونَ وَلَٰكِن لَّا يَشْعُرُونَ
fr: Certes, ce sont eux les véritables corrupteurs, mais ils ne s'en rendent pas compte.
ph: 'Alā 'Innahum Humu Al-Mufsidūna Wa Lakin Lā Yash`urūna

2:13
ar: وَإِذَا قِيلَ لَهُمْ ءَامِنُوا۟ كَمَآ ءَامَنَ ٱلنَّاسُ قَالُوٓا۟ أَنُؤْمِنُ كَمَآ ءَامَنَ ٱلسُّفَهَآءُ ۗ أَلَآ إِنَّهُمْ هُمُ ٱلسُّفَهَآءُ وَلَٰكِن لَّا يَعْلَمُونَ
fr: Et quand on leur dit: « Croyez comme les gens ont cru », ils disent: « Croirons-nous comme ont cru les faibles d'esprit ? » Certes, ce sont eux les véritables faibles d'esprit, mais ils ne le savent pas.
ph: Wa 'Idhā Qīla Lahum 'Āminū Kamā 'Āmana An-Nāsu Qālū 'Anu'uminu Kamā 'Āmana As-Sufahā'u 'Alā 'Innahum Humu As-Sufahā'u Wa Lakin Lā Ya`lamūna

2:14
ar: وَإِذَا لَقُوا۟ ٱلَّذِينَ ءَامَنُوا۟ قَالُوٓا۟ ءَامَنَّا وَإِذَا خَلَوْا۟ إِلَىٰ شَيَٰطِينِهِمْ قَالُوٓا۟ إِنَّا مَعَكُمْ إِنَّمَا نَحْنُ مُسْتَهْزِءُونَ
fr: Quand ils rencontrent ceux qui ont cru, ils disent: « Nous croyons » mais quand ils se trouvent seuls avec leurs diables, ils disent: « Nous sommes avec vous; en effet nous ne faisions que nous moquer (d'eux). »
ph: Wa 'Idhā Laqū Al-Ladhīna 'Āmanū Qālū 'Āmannā Wa 'Idhā Khalaw 'Ilá Shayāţīnihim Qālū 'Innā Ma`akum 'Innamā Naĥnu Mustahzi'ūna

2:15
ar: ٱللَّهُ يَسْتَهْزِئُ بِهِمْ وَيَمُدُّهُمْ فِى طُغْيَٰنِهِمْ يَعْمَهُونَ
fr: C'est Allah qui Se moque d'eux et les endurcira dans leur révolte et prolongera sans fin leur égarement.
ph: Allāhu Yastahzi'u Bihim Wa Yamudduhum Fī Ţughyānihim Ya`mahūna

2:16
ar: أُو۟لَٰٓئِكَ ٱلَّذِينَ ٱشْتَرَوُا۟ ٱلضَّلَٰلَةَ بِٱلْهُدَىٰ فَمَا رَبِحَت تِّجَٰرَتُهُمْ وَمَا كَانُوا۟ مُهْتَدِينَ
fr: Ce sont eux qui ont troqué le droit chemin contre l'égarement. Eh bien, leur négoce n'a point profité. Et ils ne sont pas sur la bonne voie.
ph: 'Ūlā'ika Al-Ladhīna Ashtaraw Ađ-Đalālata Bil-Hudá Famā Rabiĥat Tijāratuhum Wa Mā Kānū Muhtadīna

2:17
ar: مَثَلُهُمْ كَمَثَلِ ٱلَّذِى ٱسْتَوْقَدَ نَارًۭا فَلَمَّآ أَضَآءَتْ مَا حَوْلَهُۥ ذَهَبَ ٱللَّهُ بِنُورِهِمْ وَتَرَكَهُمْ فِى ظُلُمَٰتٍۢ لَّا يُبْصِرُونَ
fr: Ils ressemblent à quelqu'un qui a allumé un feu; puis quand le feu a illuminé tout à l'entour, Allah a fait disparaître leur lumière et les a abandonnés dans les ténèbres où ils ne voient plus rien.
ph: Mathaluhum Kamathali Al-Ladhī Astawqada Nārāan Falammā 'Ađā'at Mā Ĥawlahu Dhahaba Allāhu Binūrihim Wa Tarakahum Fī Žulumātin Lā Yubşirūna

2:18
ar: صُمٌّۢ بُكْمٌ عُمْىٌۭ فَهُمْ لَا يَرْجِعُونَ
fr: Sourds, muets, aveugles, ils ne peuvent donc pas revenir (de leur égarement).
ph: Şummun Bukmun `Umyun Fahum Lā Yarji`ūna

2:19
ar: أَوْ كَصَيِّبٍۢ مِّنَ ٱلسَّمَآءِ فِيهِ ظُلُمَٰتٌۭ وَرَعْدٌۭ وَبَرْقٌۭ يَجْعَلُونَ أَصَٰبِعَهُمْ فِىٓ ءَاذَانِهِم مِّنَ ٱلصَّوَٰعِقِ حَذَرَ ٱلْمَوْتِ ۚ وَٱللَّهُ مُحِيطٌۢ بِٱلْكَٰفِرِينَ
fr: (On peut encore les comparer à ces gens qui,) au moment où les nuées éclatent en pluies, chargées de ténèbres, de tonnerre et éclairs, se mettent les doigts dans les oreilles, terrorisés par le fracas de la foudre et craignant la mort; et Allah encercle de tous côtés les infidèles.
ph: 'Aw Kaşayyibin Mina As-Samā'i Fīhi Žulumātun Wa Ra`dun Wa Barqun Yaj`alūna 'Aşābi`ahum Fī 'Ādhānihim Mina Aş-Şawā`iqi Ĥadhara Al-Mawti Wa Allāhu Muĥīţun Bil-Kāfirīna

2:20
ar: يَكَادُ ٱلْبَرْقُ يَخْطَفُ أَبْصَٰرَهُمْ ۖ كُلَّمَآ أَضَآءَ لَهُم مَّشَوْا۟ فِيهِ وَإِذَآ أَظْلَمَ عَلَيْهِمْ قَامُوا۟ ۚ وَلَوْ شَآءَ ٱللَّهُ لَذَهَبَ بِسَمْعِهِمْ وَأَبْصَٰرِهِمْ ۚ إِنَّ ٱللَّهَ عَلَىٰ كُلِّ شَىْءٍۢ قَدِيرٌۭ
fr: L'éclair presque leur emporte la vue: chaque fois qu'il leur donne de la lumière, ils avancent; mais dès qu'il fait obscur, ils s'arrêtent. Si Allah le voulait Il leur enlèverait certes l'ouïe et la vue, car Allah a pouvoir sur toute chose.
ph: Yakādu Al-Barqu Yakhţafu 'Abşārahum Kullamā 'Ađā'a Lahum Mashaw Fīhi Wa 'Idhā 'Ažlama `Alayhim Qāmū Wa Law Shā'a Allāhu Ladhahaba Bisam`ihim Wa 'Abşārihim 'Inna Allāha `Alá Kulli Shay'in Qadīrun

2:21
ar: يَٰٓأَيُّهَا ٱلنَّاسُ ٱعْبُدُوا۟ رَبَّكُمُ ٱلَّذِى خَلَقَكُمْ وَٱلَّذِينَ مِن قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُونَ
fr: Ô hommes ! Adorez votre Seigneur, qui vous a créés vous et ceux qui vous ont précédés. Ainsi atteindriez-vous la piété.
ph: Yā 'Ayyuhā An-Nāsu A`budū Rabbakumu Al-Ladhī Khalaqakum Wa Al-Ladhīna Min Qablikum La`allakum Tattaqūna

2:22
ar: ٱلَّذِى جَعَلَ لَكُمُ ٱلْأَرْضَ فِرَٰشًۭا وَٱلسَّمَآءَ بِنَآءًۭ وَأَنزَلَ مِنَ ٱلسَّمَآءِ مَآءًۭ فَأَخْرَجَ بِهِۦ مِنَ ٱلثَّمَرَٰتِ رِزْقًۭا لَّكُمْ ۖ فَلَا تَجْعَلُوا۟ لِلَّهِ أَندَادًۭا وَأَنتُمْ تَعْلَمُونَ
fr: C'est Lui qui vous a fait la terre pour lit, et le ciel pour toit; qui précipite la pluie du ciel et par elle fait surgir toutes sortes de fruits pour vous nourrir, ne Lui cherchez donc pas des égaux, alors que vous savez (tout cela).
ph: Al-Ladhī Ja`ala Lakumu Al-'Arđa Firāshāan Wa As-Samā'a Binā'an Wa 'Anzala Mina As-Samā'i Mā'an Fa'akhraja Bihi Mina Ath-Thamarāti Rizqāan Lakum Falā Taj`alū Lillāhi 'Andādāan Wa 'Antum Ta`lamūna

2:23
ar: وَإِن كُنتُمْ فِى رَيْبٍۢ مِّمَّا نَزَّلْنَا عَلَىٰ عَبْدِنَا فَأْتُوا۟ بِسُورَةٍۢ مِّن مِّثْلِهِۦ وَٱدْعُوا۟ شُهَدَآءَكُم مِّن دُونِ ٱللَّهِ إِن كُنتُمْ صَٰدِقِينَ
fr: Si vous avez un doute sur ce que Nous avons révélé à Notre Serviteur, tâchez donc de produire une sourate semblable et appelez vos témoins, (les idoles) que vous adorez en dehors d'Allah, si vous êtes véridiques.
ph: Wa 'In Kuntum Fī Raybin Mimmā Nazzalnā `Alá `Abdinā Fa'tū Bisūratin Min Mithlihi Wa Ad`ū Shuhadā'akum Min Dūni Allāhi 'In Kuntum Şādiqīna

2:24
ar: فَإِن لَّمْ تَفْعَلُوا۟ وَلَن تَفْعَلُوا۟ فَٱتَّقُوا۟ ٱلنَّارَ ٱلَّتِى وَقُودُهَا ٱلنَّاسُ وَٱلْحِجَارَةُ ۖ أُعِدَّتْ لِلْكَٰفِرِينَ
fr: Si vous n'y parvenez pas et, à coup sûr, vous n'y parviendrez jamais, parez-vous donc contre le feu qu'alimenteront les hommes et les pierres, lequel est réservé aux infidèles.
ph: Fa'in Lam Taf`alū Wa Lan Taf`alū Fa Attaqū An-Nāra Allatī Waqūduhā An-Nāsu Wa Al-Ĥijāratu 'U`iddat Lilkāfirīna

2:25
ar: وَبَشِّرِ ٱلَّذِينَ ءَامَنُوا۟ وَعَمِلُوا۟ ٱلصَّٰلِحَٰتِ أَنَّ لَهُمْ جَنَّٰتٍۢ تَجْرِى مِن تَحْتِهَا ٱلْأَنْهَٰرُ ۖ كُلَّمَا رُزِقُوا۟ مِنْهَا مِن ثَمَرَةٍۢ رِّزْقًۭا ۙ قَالُوا۟ هَٰذَا ٱلَّذِى رُزِقْنَا مِن قَبْلُ ۖ وَأُتُوا۟ بِهِۦ مُتَشَٰبِهًۭا ۖ وَلَهُمْ فِيهَآ أَزْوَٰجٌۭ مُّطَهَّرَةٌۭ ۖ وَهُمْ فِيهَا خَٰلِدُونَ
fr: Annonce à ceux qui croient et pratiquent de bonnes œuvres qu'ils auront pour demeures des jardins sous lesquels coulent les ruisseaux; chaque fois qu'ils seront gratifiés d'un fruit des jardins ils diront: « C'est bien là ce qui nous avait été servi auparavant. » Or c'est quelque chose de semblable (seulement dans la forme); ils auront là des épouses pures, et là ils demeureront éternellement.
ph: Wa Bashiri Al-Ladhīna 'Āmanū Wa `Amilū Aş-Şāliĥāti 'Anna Lahum Jannātin Tajrī Min Taĥtihā Al-'Anhāru Kullamā Ruziqū Minhā Min Thamaratin Rizqāan Qālū Hādhā Al-Ladhī Ruziqnā Min Qablu Wa 'Utū Bihi Mutashābihāan Wa Lahum Fīhā 'Azwājun Muţahharatun Wa Hum Fīhā Khālidūna

2:26
ar: ۞ إِنَّ ٱللَّهَ لَا يَسْتَحْىِۦٓ أَن يَضْرِبَ مَثَلًۭا مَّا بَعُوضَةًۭ فَمَا فَوْقَهَا ۚ فَأَمَّا ٱلَّذِينَ ءَامَنُوا۟ فَيَعْلَمُونَ أَنَّهُ ٱلْحَقُّ مِن رَّبِّهِمْ ۖ وَأَمَّا ٱلَّذِينَ كَفَرُوا۟ فَيَقُولُونَ مَاذَآ أَرَادَ ٱللَّهُ بِهَٰذَا مَثَلًۭا ۘ يُضِلُّ بِهِۦ كَثِيرًۭا وَيَهْدِى بِهِۦ كَثِيرًۭا ۚ وَمَا يُضِلُّ بِهِۦٓ إِلَّا ٱلْفَٰسِقِينَ
fr: Certes, Allah ne se gêne point de citer en exemple n'importe quoi: un moustique ou quoi que ce soit au-dessus; quant aux croyants, ils savent bien qu'il s'agit de la vérité venant de la part de leur Seigneur; quant aux infidèles, ils se demandent: « Qu'a voulu dire Allah par un tel exemple ? » Par cela, nombreux sont ceux qu'Il égare et nombreux sont ceux qu'Il guide; mais Il n'égare par cela que les pervers,
ph: 'Inna Allāha Lā Yastaĥyī 'An Yađriba Mathalāan Mā Ba`ūđatan Famā Fawqahā Fa'ammā Al-Ladhīna 'Āmanū Faya`lamūna 'Annahu Al-Ĥaqqu Min Rabbihim Wa 'Ammā Al-Ladhīna Kafarū Fayaqūlūna Mādhā 'Arāda Allāhu Bihadhā Mathalāan Yuđillu Bihi Kathīrāan Wa Yahdī Bihi Kathīrāan Wa Mā Yuđillu Bihi 'Illā Al-Fāsiqīna

2:27
ar: ٱلَّذِينَ يَنقُضُونَ عَهْدَ ٱللَّهِ مِنۢ بَعْدِ مِيثَٰقِهِۦ وَيَقْطَعُونَ مَآ أَمَرَ ٱللَّهُ بِهِۦٓ أَن يُوصَلَ وَيُفْسِدُونَ فِى ٱلْأَرْضِ ۚ أُو۟لَٰٓئِكَ هُمُ ٱلْخَٰسِرُونَ
fr: qui rompent le pacte qu'ils avaient fermement conclu avec Allah, coupent ce qu'Allah a ordonné d'unir, et sèment la corruption sur la terre. Ceux-là sont les vrais perdants.
ph: Al-Ladhīna Yanquđūna `Ahda Allāhi Min Ba`di Mīthāqihi Wa Yaqţa`ūna Mā 'Amara Allāhu Bihi 'An Yūşala Wa Yufsidūna Fī Al-'Arđi 'Ūlā'ika Humu Al-Khāsirūna

2:28
ar: كَيْفَ تَكْفُرُونَ بِٱللَّهِ وَكُنتُمْ أَمْوَٰتًۭا فَأَحْيَٰكُمْ ۖ ثُمَّ يُمِيتُكُمْ ثُمَّ يُحْيِيكُمْ ثُمَّ إِلَيْهِ تُرْجَعُونَ
fr: Comment pouvez-vous renier Allah alors qu'Il vous a donné la vie, quand vous en étiez privés ? Puis Il vous fera mourir; puis Il vous fera revivre et enfin c'est à Lui que vous retournerez.
ph: Kayfa Takfurūna Billāhi Wa Kuntum 'Amwātāan Fa'aĥyākum Thumma Yumītukum Thumma Yuĥyīkum Thumma 'Ilayhi Turja`ūna

2:29
ar: هُوَ ٱلَّذِى خَلَقَ لَكُم مَّا فِى ٱلْأَرْضِ جَمِيعًۭا ثُمَّ ٱسْتَوَىٰٓ إِلَى ٱلسَّمَآءِ فَسَوَّىٰهُنَّ سَبْعَ سَمَٰوَٰتٍۢ ۚ وَهُوَ بِكُلِّ شَىْءٍ عَلِيمٌۭ
fr: C'est Lui qui a créé pour vous tout ce qui est sur la terre, puis Il a orienté Sa volonté vers le ciel et en fit sept cieux. Et Il est Omniscient.
ph: Huwa Al-Ladhī Khalaqa Lakum Mā Fī Al-'Arđi Jamī`āan Thumma Astawá 'Ilá As-Samā'i Fasawwāhunna Sab`a Samāwātin Wa Huwa Bikulli Shay'in `Alīmun

2:30
ar: وَإِذْ قَالَ رَبُّكَ لِلْمَلَٰٓئِكَةِ إِنِّى جَاعِلٌۭ فِى ٱلْأَرْضِ خَلِيفَةًۭ ۖ قَالُوٓا۟ أَتَجْعَلُ فِيهَا مَن يُفْسِدُ فِيهَا وَيَسْفِكُ ٱلدِّمَآءَ وَنَحْنُ نُسَبِّحُ بِحَمْدِكَ وَنُقَدِّسُ لَكَ ۖ قَالَ إِنِّىٓ أَعْلَمُ مَا لَا تَعْلَمُونَ
fr: Lorsque Ton Seigneur confia aux Anges: « Je vais établir sur la terre un vicaire (khalifah) ». Ils dirent: « Vas-Tu y désigner un qui y mettra le désordre et répandra le sang, quand nous sommes là à Te sanctifier et à Te glorifier ? » -Il dit: « En vérité, Je sais ce que vous ne savez pas ! »
ph: Wa 'Idh Qāla Rabbuka Lilmalā'ikati 'Innī Jā`ilun Fī Al-'Arđi Khalīfatan Qālū 'Ataj`alu Fīhā Man Yufsidu Fīhā Wa Yasfiku Ad-Dimā'a Wa Naĥnu Nusabbiĥu Biĥamdika Wa Nuqaddisu Laka Qāla 'Innī 'A`lamu Mā Lā Ta`lamūna

2:31
ar: وَعَلَّمَ ءَادَمَ ٱلْأَسْمَآءَ كُلَّهَا ثُمَّ عَرَضَهُمْ عَلَى ٱلْمَلَٰٓئِكَةِ فَقَالَ أَنۢبِـُٔونِى بِأَسْمَآءِ هَٰٓؤُلَآءِ إِن كُنتُمْ صَٰدِقِينَ
fr: Et Il apprit à Adam tous les noms (de toutes choses), puis Il les présenta aux Anges et dit: « Informez-Moi des noms de ceux-là, si vous êtes véridiques ! » (dans votre prétention que vous êtes plus méritants qu'Adam).
ph: Wa `Allama 'Ādama Al-'Asmā'a Kullahā Thumma `Arađahum `Alá Al-Malā'ikati Faqāla 'Anbi'ūnī Bi'asmā'i Hā'uulā' 'In Kuntum Şādiqīna

2:32
ar: قَالُوا۟ سُبْحَٰنَكَ لَا عِلْمَ لَنَآ إِلَّا مَا عَلَّمْتَنَآ ۖ إِنَّكَ أَنتَ ٱلْعَلِيمُ ٱلْحَكِيمُ
fr: -Ils dirent: « Gloire à Toi ! Nous n'avons de savoir que ce que Tu nous a appris. Certes c'est Toi l'Omniscient, le Sage. »
ph: Qālū Subĥānaka Lā `Ilma Lanā 'Illā Mā `Allamtanā 'Innaka 'Anta Al-`Alīmu Al-Ĥakīmu

2:33
ar: قَالَ يَٰٓـَٔادَمُ أَنۢبِئْهُم بِأَسْمَآئِهِمْ ۖ فَلَمَّآ أَنۢبَأَهُم بِأَسْمَآئِهِمْ قَالَ أَلَمْ أَقُل لَّكُمْ إِنِّىٓ أَعْلَمُ غَيْبَ ٱلسَّمَٰوَٰتِ وَٱلْأَرْضِ وَأَعْلَمُ مَا تُبْدُونَ وَمَا كُنتُمْ تَكْتُمُونَ
fr: Il dit: « Ô Adam, informe-les de ces noms ; » Puis quand celui-ci les eut informés de ces noms, Allah dit: « Ne vous ai-Je pas dit que Je connais les mystères des cieux et de la terre, et que Je sais ce que vous divulguez et ce que vous cachez ? »
ph: Qāla Yā 'Ādamu 'Anbi'hum Bi'asmā'ihim Falammā 'Anba'ahum Bi'asmā'ihim Qāla 'Alam 'Aqul Lakum 'Innī 'A`lamu Ghayba As-Samāwāti Wa Al-'Arđi Wa 'A`lamu Mā Tubdūna Wa Mā Kuntum Taktumūna

2:34
ar: وَإِذْ قُلْنَا لِلْمَلَٰٓئِكَةِ ٱسْجُدُوا۟ لِءَادَمَ فَسَجَدُوٓا۟ إِلَّآ إِبْلِيسَ أَبَىٰ وَٱسْتَكْبَرَ وَكَانَ مِنَ ٱلْكَٰفِرِينَ
fr: Et lorsque Nous demandâmes aux Anges de se prosterner devant Adam, ils se prosternèrent à l'exception d'Iblis qui refusa, s'enfla d'orgueil et fut parmi les infidèles.
ph: Wa 'Idh Qulnā Lilmalā'ikati Asjudū Li'dama Fasajadū 'Illā 'Iblīsa 'Abá Wa Astakbara Wa Kāna Mina Al-Kāfirīna

2:35
ar: وَقُلْنَا يَٰٓـَٔادَمُ ٱسْكُنْ أَنتَ وَزَوْجُكَ ٱلْجَنَّةَ وَكُلَا مِنْهَا رَغَدًا حَيْثُ شِئْتُمَا وَلَا تَقْرَبَا هَٰذِهِ ٱلشَّجَرَةَ فَتَكُونَا مِنَ ٱلظَّٰلِمِينَ
fr: Et Nous dîmes: « Ô Adam, habite le Paradis toi et ton épouse, et nourrissez-vous-en de partout à votre guise; mais n'approchez pas de l'arbre que voici: sinon vous seriez du nombre des injustes. »
ph: Wa Qulnā Yā 'Ādamu Askun 'Anta Wa Zawjuka Al-Jannata Wa Kulā Minhā Raghadāan Ĥaythu Shi'tumā Wa Lā Taqrabā Hadhihi Ash-Shajarata Fatakūnā Mina Až-Žālimīna

2:36
ar: فَأَزَلَّهُمَا ٱلشَّيْطَٰنُ عَنْهَا فَأَخْرَجَهُمَا مِمَّا كَانَا فِيهِ ۖ وَقُلْنَا ٱهْبِطُوا۟ بَعْضُكُمْ لِبَعْضٍ عَدُوٌّۭ ۖ وَلَكُمْ فِى ٱلْأَرْضِ مُسْتَقَرٌّۭ وَمَتَٰعٌ إِلَىٰ حِينٍۢ
fr: Peu de temps après, Satan les fit glisser de là et les fit sortir du lieu où ils étaient. Et Nous dîmes: « Descendez (du Paradis); ennemis les uns des autres. Et pour vous il y aura une demeure sur la terre, et un usufruit pour un temps.
ph: Fa'azallahumā Ash-Shayţānu `Anhā Fa'akhrajahumā Mimmā Kānā Fīhi Wa Qulnā Ahbiţū Ba`đukum Liba`đin `Adūwun Wa Lakum Fī Al-'Arđi Mustaqarrun Wa Matā`un 'Ilá Ĥīnin

2:37
ar: فَتَلَقَّىٰٓ ءَادَمُ مِن رَّبِّهِۦ كَلِمَٰتٍۢ فَتَابَ عَلَيْهِ ۚ إِنَّهُۥ هُوَ ٱلتَّوَّابُ ٱلرَّحِيمُ
fr: Puis Adam reçut de son Seigneur des paroles, et Allah agréa son repentir car c'est Lui certes, le Repentant, le Miséricordieux.
ph: Fatalaqqá 'Ādamu Min Rabbihi Kalimātin Fatāba `Alayhi 'Innahu Huwa At-Tawwābu Ar-Raĥīmu

2:38
ar: قُلْنَا ٱهْبِطُوا۟ مِنْهَا جَمِيعًۭا ۖ فَإِمَّا يَأْتِيَنَّكُم مِّنِّى هُدًۭى فَمَن تَبِعَ هُدَاىَ فَلَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُونَ
fr: -Nous dîmes: « Descendez d'ici, vous tous ! Toutes les fois que Je vous enverrai un guide, ceux qui [le] suivront n'auront rien à craindre et ne seront point affligés. »
ph: Qulnā Ahbiţū Minhā Jamī`āan Fa'immā Ya'tiyannakum Minnī Hudáan Faman Tabi`a Hudāya Falā Khawfun `Alayhim Wa Lā Hum Yaĥzanūna

2:39
ar: وَٱلَّذِينَ كَفَرُوا۟ وَكَذَّبُوا۟ بِـَٔايَٰتِنَآ أُو۟لَٰٓئِكَ أَصْحَٰبُ ٱلنَّارِ ۖ هُمْ فِيهَا خَٰلِدُونَ
fr: Et ceux qui ne croient pas (à nos messagers) et traitent de mensonge Nos révélations, ceux-là sont les gens du Feu où ils demeureront éternellement.
ph: Wa Al-Ladhīna Kafarū Wa Kadhabū Bi'āyātinā 'Ūlā'ika 'Aşĥābu An-Nāri Hum Fīhā Khālidūna

2:40
ar: يَٰبَنِىٓ إِسْرَٰٓءِيلَ ٱذْكُرُوا۟ نِعْمَتِىَ ٱلَّتِىٓ أَنْعَمْتُ عَلَيْكُمْ وَأَوْفُوا۟ بِعَهْدِىٓ أُوفِ بِعَهْدِكُمْ وَإِيَّٰىَ فَٱرْهَبُونِ
fr: Ô enfants d'Israël, rappelez-vous Mon bienfait dont Je vous ai comblés. Si vous tenez vos engagements vis-à-vis de Moi, Je tiendrai les miens. Et c'est Moi que vous devez redouter.
ph: Yā Banī 'Isrā'īla Adhkurū Ni`matiya Allatī 'An`amtu `Alaykum Wa 'Awfū Bi`ahdī 'Ūfi Bi`ahdikum Wa 'Īyāya Fārhabūni

2:41
ar: وَءَامِنُوا۟ بِمَآ أَنزَلْتُ مُصَدِّقًۭا لِّمَا مَعَكُمْ وَلَا تَكُونُوٓا۟ أَوَّلَ كَافِرٍۭ بِهِۦ ۖ وَلَا تَشْتَرُوا۟ بِـَٔايَٰتِى ثَمَنًۭا قَلِيلًۭا وَإِيَّٰىَ فَٱتَّقُونِ
fr: Et croyez à ce que J'ai fait descendre, en confirmation de ce qui était déjà avec vous; et ne soyez pas les premiers à le rejeter. Et n'échangez pas Mes révélations contre un vil prix. Et c'est Moi que vous devez craindre.
ph: Wa 'Āminū Bimā 'Anzaltu Muşaddiqāan Limā Ma`akum Wa Lā Takūnū 'Awwala Kāfirin Bihi Wa Lā Tashtarū Bi'āyātī Thamanāan Qalīlāan Wa 'Īyāya Fa Attaqūni

2:42
ar: وَلَا تَلْبِسُوا۟ ٱلْحَقَّ بِٱلْبَٰطِلِ وَتَكْتُمُوا۟ ٱلْحَقَّ وَأَنتُمْ تَعْلَمُونَ
fr: Et ne mêlez pas le faux à la vérité. Ne cachez pas sciemment la vérité.
ph: Wa Lā Talbisū Al-Ĥaqqa Bil-Bāţili Wa Taktumū Al-Ĥaqqa Wa 'Antum Ta`lamūna

2:43
ar: وَأَقِيمُوا۟ ٱلصَّلَوٰةَ وَءَاتُوا۟ ٱلزَّكَوٰةَ وَٱرْكَعُوا۟ مَعَ ٱلرَّٰكِعِينَ
fr: Et accomplissez la Salat, et acquittez la Zakat, et inclinez-vous avec ceux qui s'inclinent.
ph: Wa 'Aqīmū Aş-Şalāata Wa 'Ātū Az-Zakāata Wa Arka`ū Ma`a Ar-Rāki`īna

2:44
ar: ۞ أَتَأْمُرُونَ ٱلنَّاسَ بِٱلْبِرِّ وَتَنسَوْنَ أَنفُسَكُمْ وَأَنتُمْ تَتْلُونَ ٱلْكِتَٰبَ ۚ أَفَلَا تَعْقِلُونَ
fr: Commanderez-vous aux gens de faire le bien, et vous oubliez vous-mêmes de le faire, alors que vous récitez le Livre ? Êtes-vous donc dépourvus de raison ?
ph: 'Ata'murūna An-Nāsa Bil-Birri Wa Tansawna 'Anfusakum Wa 'Antum Tatlūna Al-Kitāba 'Afalā Ta`qilūna

2:45
ar: وَٱسْتَعِينُوا۟ بِٱلصَّبْرِ وَٱلصَّلَوٰةِ ۚ وَإِنَّهَا لَكَبِيرَةٌ إِلَّا عَلَى ٱلْخَٰشِعِينَ
fr: Et cherchez secours dans l'endurance et la Salat: certes, la Salat est une lourde obligation, sauf pour les humbles,
ph: Wa Asta`īnū Biş-Şabri Wa Aş-Şalāati Wa 'Innahā Lakabīratun 'Illā `Alá Al-Khāshi`īna

2:46
ar: ٱلَّذِينَ يَظُنُّونَ أَنَّهُم مُّلَٰقُوا۟ رَبِّهِمْ وَأَنَّهُمْ إِلَيْهِ رَٰجِعُونَ
fr: qui ont la certitude de rencontrer leur Seigneur (après leur résurrection) et retourner à Lui seul.
ph: Al-Ladhīna Yažunnūna 'Annahum Mulāqū Rabbihim Wa 'Annahum 'Ilayhi Rāji`ūna

2:47
ar: يَٰبَنِىٓ إِسْرَٰٓءِيلَ ٱذْكُرُوا۟ نِعْمَتِىَ ٱلَّتِىٓ أَنْعَمْتُ عَلَيْكُمْ وَأَنِّى فَضَّلْتُكُمْ عَلَى ٱلْعَٰلَمِينَ
fr: Ô enfants d'Israël, rappelez-vous Mon bienfait dont Je vous ai comblés, (Rappelez-vous) que Je vous ai préférés à tous les peuples (de l'époque).
ph: Yā Banī 'Isrā'īla Adhkurū Ni`matiya Allatī 'An`amtu `Alaykum Wa 'Annī Fađđaltukum `Alá Al-`Ālamīna

2:48
ar: وَٱتَّقُوا۟ يَوْمًۭا لَّا تَجْزِى نَفْسٌ عَن نَّفْسٍۢ شَيْـًۭٔا وَلَا يُقْبَلُ مِنْهَا شَفَٰعَةٌۭ وَلَا يُؤْخَذُ مِنْهَا عَدْلٌۭ وَلَا هُمْ يُنصَرُونَ
fr: Et redoutez le jour où nulle âme ne suffira en quoi que ce soit à une autre; où l'on n'acceptera d'elle aucune intercession; et où on ne recevra d'elle aucune compensation. Et ils ne seront point secourus.
ph: Wa Attaqū Yawmāan Lā Tajzī Nafsun `An Nafsin Shay'āan Wa Lā Yuqbalu Minhā Shafā`atun Wa Lā Yu'ukhadhu Minhā `Adlun Wa Lā Hum Yunşarūna

2:49
ar: وَإِذْ نَجَّيْنَٰكُم مِّنْ ءَالِ فِرْعَوْنَ يَسُومُونَكُمْ سُوٓءَ ٱلْعَذَابِ يُذَبِّحُونَ أَبْنَآءَكُمْ وَيَسْتَحْيُونَ نِسَآءَكُمْ ۚ وَفِى ذَٰلِكُم بَلَآءٌۭ مِّن رَّبِّكُمْ عَظِيمٌۭ
fr: Et [rappelez-vous] lorsque Nous vous avons délivrés des gens de Fir'awn (Pharaon); qui vous infligeaient le pire châtiment: en égorgeant vos fils et épargnant vos femmes. C'était là une grande épreuve de la part de votre Seigneur.
ph: Wa 'Idh Najjaynākum Min 'Āli Fir`awna Yasūmūnakum Sū'a Al-`Adhābi Yudhabbiĥūna 'Abnā'akum Wa Yastaĥyūna Nisā'akum Wa Fī Dhālikum Balā'un Min Rabbikum `Ažīmun

2:50
ar: وَإِذْ فَرَقْنَا بِكُمُ ٱلْبَحْرَ فَأَنجَيْنَٰكُمْ وَأَغْرَقْنَآ ءَالَ فِرْعَوْنَ وَأَنتُمْ تَنظُرُونَ
fr: Et [rappelez-vous] lorsque Nous avons fendu la mer pour vous donner passage ! Nous vous avons donc délivrés, et noyé les gens de Fir'awn (Pharaon), tandis que vous regardiez.
ph: Wa 'Idh Faraqnā Bikumu Al-Baĥra Fa'anjaynākum Wa 'Aghraqnā 'Āla Fir`awna Wa 'Antum Tanžurūna

2:51
ar: وَإِذْ وَٰعَدْنَا مُوسَىٰٓ أَرْبَعِينَ لَيْلَةًۭ ثُمَّ ٱتَّخَذْتُمُ ٱلْعِجْلَ مِنۢ بَعْدِهِۦ وَأَنتُمْ ظَٰلِمُونَ
fr: Et [rappelez-vous] lorsque Nous donnâmes rendez-vous à Musa (Moïse) pendant quarante nuits ! Puis en son absence vous avez pris le Veau pour idole alors que vous étiez injustes (à l'égard de vous-mêmes en adorant autre qu'Allah).
ph: Wa 'Idh Wā`adnā Mūsá 'Arba`īna Laylatan Thumma Attakhadhtumu Al-`Ijla Min Ba`dihi Wa 'Antum Žālimūna

2:52
ar: ثُمَّ عَفَوْنَا عَنكُم مِّنۢ بَعْدِ ذَٰلِكَ لَعَلَّكُمْ تَشْكُرُونَ
fr: Mais en dépit de cela Nous vous pardonnâmes, afin que vous reconnaissiez (Nos bienfaits à votre égard).
ph: Thumma `Afawnā `Ankum Min Ba`di Dhālika La`allakum Tashkurūna

2:53
ar: وَإِذْ ءَاتَيْنَا مُوسَى ٱلْكِتَٰبَ وَٱلْفُرْقَانَ لَعَلَّكُمْ تَهْتَدُونَ
fr: Et [rappelez-vous] lorsque Nous avons donné à Musa (Moïse) le Livre et le Discernement afin que vous soyez guidés.
ph: Wa 'Idh 'Ātaynā Mūsá Al-Kitāba Wa Al-Furqāna La`allakum Tahtadūna

2:54
ar: وَإِذْ قَالَ مُوسَىٰ لِقَوْمِهِۦ يَٰقَوْمِ إِنَّكُمْ ظَلَمْتُمْ أَنفُسَكُم بِٱتِّخَاذِكُمُ ٱلْعِجْلَ فَتُوبُوٓا۟ إِلَىٰ بَارِئِكُمْ فَٱقْتُلُوٓا۟ أَنفُسَكُمْ ذَٰلِكُمْ خَيْرٌۭ لَّكُمْ عِندَ بَارِئِكُمْ فَتَابَ عَلَيْكُمْ ۚ إِنَّهُۥ هُوَ ٱلتَّوَّابُ ٱلرَّحِيمُ
fr: Et [rappelez-vous] lorsque Musa (Moïse) dit à son peuple: « Ô mon peuple, certes vous vous êtes fait du tort à vous-mêmes en prenant le Veau pour idole. Revenez donc à votre Créateur; puis, tuez donc les coupables vous-mêmes: ce serait mieux pour vous, auprès de votre Créateur ! »... C'est ainsi qu'Il agréa votre repentir; car c'est Lui, certes, le Repentant et le Miséricordieux !
ph: Wa 'Idh Qāla Mūsá Liqawmihi Yā Qawmi 'Innakum Žalamtum 'Anfusakum Biāttikhādhikumu Al-`Ijla Fatūbū 'Ilá Bāri'ikum Fāqtulū 'Anfusakum Dhālikum Khayrun Lakum `Inda Bāri'ikum Fatāba `Alaykum 'Innahu Huwa At-Tawwābu Ar-Raĥīmu

2:55
ar: وَإِذْ قُلْتُمْ يَٰمُوسَىٰ لَن نُّؤْمِنَ لَكَ حَتَّىٰ نَرَى ٱللَّهَ جَهْرَةًۭ فَأَخَذَتْكُمُ ٱلصَّٰعِقَةُ وَأَنتُمْ تَنظُرُونَ
fr: Et [rappelez-vous] lorsque vous dites: « Ô Musa (Moïse), nous ne te croirons qu'après avoir vu Allah clairement ! »... Alors la foudre vous saisit tandis que vous regardiez.
ph: Wa 'Idh Qultum Yā Mūsá Lan Nu'umina Laka Ĥattá Nará Allāha Jahratan Fa'akhadhatkumu Aş-Şā`iqatu Wa 'Antum Tanžurūna

2:56
ar: ثُمَّ بَعَثْنَٰكُم مِّنۢ بَعْدِ مَوْتِكُمْ لَعَلَّكُمْ تَشْكُرُونَ
fr: Puis Nous vous ressuscitâmes après votre mort afin que vous soyez reconnaissants.
ph: Thumma Ba`athnākum Min Ba`di Mawtikum La`allakum Tashkurūna

2:57
ar: وَظَلَّلْنَا عَلَيْكُمُ ٱلْغَمَامَ وَأَنزَلْنَا عَلَيْكُمُ ٱلْمَنَّ وَٱلسَّلْوَىٰ ۖ كُلُوا۟ مِن طَيِّبَٰتِ مَا رَزَقْنَٰكُمْ ۖ وَمَا ظَلَمُونَا وَلَٰكِن كَانُوٓا۟ أَنفُسَهُمْ يَظْلِمُونَ
fr: Et Nous vous couvrîmes de l'ombre d'un nuage; et fîmes descendre sur vous la manne et les cailles « Mangez des délices que Nous vous avons attribués ! » -Ce n'est pas à Nous qu'ils firent du tort, mais ils se firent du tort à eux-mêmes.
ph: Wa Žallalnā `Alaykumu Al-Ghamāma Wa 'Anzalnā `Alaykumu Al-Manna Wa As-Salwá Kulū Min Ţayyibāti Mā Razaqnākum Wa Mā Žalamūnā Wa Lakin Kānū 'Anfusahum Yažlimūna

2:58
ar: وَإِذْ قُلْنَا ٱدْخُلُوا۟ هَٰذِهِ ٱلْقَرْيَةَ فَكُلُوا۟ مِنْهَا حَيْثُ شِئْتُمْ رَغَدًۭا وَٱدْخُلُوا۟ ٱلْبَابَ سُجَّدًۭا وَقُولُوا۟ حِطَّةٌۭ نَّغْفِرْ لَكُمْ خَطَٰيَٰكُمْ ۚ وَسَنَزِيدُ ٱلْمُحْسِنِينَ
fr: Et [rappelez-vous] lorsque Nous dîmes: « Entrez dans cette ville, et mangez-y à l'envie où il vous plaira; mais entrez par la porte en vous prosternant et demandez la « rémission » (de vos péchés); Nous vous pardonnerons vos fautes si vous faites cela et donnerons davantage de récompense pour les bienfaisants.
ph: Wa 'Idh Qulnā Adkhulū Hadhihi Al-Qaryata Fakulū Minhā Ĥaythu Shi'tum Raghadāan Wa Adkhulū Al-Bāba Sujjadāan Wa Qūlū Ĥiţţatun Naghfir Lakum Khaţāyākum Wa Sanazīdu Al-Muĥsinīna

2:59
ar: فَبَدَّلَ ٱلَّذِينَ ظَلَمُوا۟ قَوْلًا غَيْرَ ٱلَّذِى قِيلَ لَهُمْ فَأَنزَلْنَا عَلَى ٱلَّذِينَ ظَلَمُوا۟ رِجْزًۭا مِّنَ ٱلسَّمَآءِ بِمَا كَانُوا۟ يَفْسُقُونَ
fr: Mais, à ces paroles, les pervers en substituèrent d'autres, et pour les punir de leur fourberie Nous leur envoyâmes du ciel un châtiment avilissant.
ph: Fabaddala Al-Ladhīna Žalamū Qawlāan Ghayra Al-Ladhī Qīla Lahum Fa'anzalnā `Alá Al-Ladhīna Žalamū Rijzāan Mina As-Samā'i Bimā Kānū Yafsuqūna

2:60
ar: ۞ وَإِذِ ٱسْتَسْقَىٰ مُوسَىٰ لِقَوْمِهِۦ فَقُلْنَا ٱضْرِب بِّعَصَاكَ ٱلْحَجَرَ ۖ فَٱنفَجَرَتْ مِنْهُ ٱثْنَتَا عَشْرَةَ عَيْنًۭا ۖ قَدْ عَلِمَ كُلُّ أُنَاسٍۢ مَّشْرَبَهُمْ ۖ كُلُوا۟ وَٱشْرَبُوا۟ مِن رِّزْقِ ٱللَّهِ وَلَا تَعْثَوْا۟ فِى ٱلْأَرْضِ مُفْسِدِينَ
fr: Et [rappelez-vous] quand Musa (Moïse) demanda de l'eau pour désaltérer son peuple, c'est alors que Nous dîmes: « Frappe le rocher avec ton bâton. » Et tout d'un coup, douze sources en jaillirent, et certes, chaque tribu sut où s'abreuver ! « Mangez et buvez de ce qu'Allah vous accorde; et ne semez pas de troubles sur la terre comme des fauteurs de désordre. »
ph: Wa 'Idh Astasqá Mūsá Liqawmihi Faqulnā Ađrib Bi`aşāka Al-Ĥajara Fānfajarat Minhu Athnatā `Ashrata `Aynāan Qad `Alima Kullu 'Unāsin Mashrabahum Kulū Wa Ashrabū Min Rizqi Allāhi Wa Lā Ta`thaw Fī Al-'Arđi Mufsidīna

2:61
ar: وَإِذْ قُلْتُمْ يَٰمُوسَىٰ لَن نَّصْبِرَ عَلَىٰ طَعَامٍۢ وَٰحِدٍۢ فَٱدْعُ لَنَا رَبَّكَ يُخْرِجْ لَنَا مِمَّا تُنۢبِتُ ٱلْأَرْضُ مِنۢ بَقْلِهَا وَقِثَّآئِهَا وَفُومِهَا وَعَدَسِهَا وَبَصَلِهَا ۖ قَالَ أَتَسْتَبْدِلُونَ ٱلَّذِى هُوَ أَدْنَىٰ بِٱلَّذِى هُوَ خَيْرٌ ۚ ٱهْبِطُوا۟ مِصْرًۭا فَإِنَّ لَكُم مَّا سَأَلْتُمْ ۗ وَضُرِبَتْ عَلَيْهِمُ ٱلذِّلَّةُ وَٱلْمَسْكَنَةُ وَبَآءُو بِغَضَبٍۢ مِّنَ ٱللَّهِ ۗ ذَٰلِكَ بِأَنَّهُمْ كَانُوا۟ يَكْفُرُونَ بِـَٔايَٰتِ ٱللَّهِ وَيَقْتُلُونَ ٱلنَّبِيِّۦنَ بِغَيْرِ ٱلْحَقِّ ۗ ذَٰلِكَ بِمَا عَصَوا۟ وَّكَانُوا۟ يَعْتَدُونَ
fr: Et [rappelez-vous] quand vous dîtes: « Ô Musa (Moïse), nous ne pouvons plus tolérer une seule nourriture. Prie donc ton Seigneur pour qu'Il nous fasse sortir de la terre ce qu'elle fait pousser, de ses légumes, ses concombres, son ail (ou blé), ses lentilles et ses oignons ! » -Il vous répondit: « Voulez-vous échanger le meilleur pour le moins bon ? Descendez donc à n'importe quelle ville; vous y trouverez certainement ce que vous demandez ! » L'avilissement et la misère s'abattirent sur eux; ils encoururent la colère d'Allah. Cela est parce qu'ils reniaient les révélations d'Allah, et qu'ils tuaient sans droit les prophètes. Cela parce qu'ils désobéissaient et transgressaient.
ph: Wa 'Idhi Qultum Yā Mūsá Lan Naşbira `Alá Ţa`āmin Wāĥidin Fād`u Lanā Rabbaka Yukhrij Lanā Mimmā Tunbitu Al-'Arđu Min Baqlihā Wa Qiththā'ihā Wa Fūmihā Wa `Adasihā Wa Başalihā Qāla 'Atastabdilūna Al-Ladhī Huwa 'Adná Bial-Ladhī Huwa Khayrun Ahbiţū Mişrāan Fa'inna Lakum Mā Sa'altum Wa Đuribat `Alayhimu Adh-Dhillatu Wa Al-Maskanatu Wa Bā'ū Bighađabin Mina Allāhi Dhālika Bi'annahum Kānū Yakfurūna Bi'āyāti Allāhi Wa Yaqtulūna An-Nabīyīna Bighayri Al-Ĥaqqi Dhālika Bimā `Aşaw Wa Kānū Ya`tadūna

2:62
ar: إِنَّ ٱلَّذِينَ ءَامَنُوا۟ وَٱلَّذِينَ هَادُوا۟ وَٱلنَّصَٰرَىٰ وَٱلصَّٰبِـِٔينَ مَنْ ءَامَنَ بِٱللَّهِ وَٱلْيَوْمِ ٱلْءَاخِرِ وَعَمِلَ صَٰلِحًۭا فَلَهُمْ أَجْرُهُمْ عِندَ رَبِّهِمْ وَلَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُونَ
fr: Certes, ceux qui ont cru, ceux qui se sont judaïsés, les Nazaréens, et les sabéens, quiconque d'entre eux a cru en Allah au Jour dernier et accompli de bonnes œuvres, sera récompensé par son Seigneur; il n'éprouvera aucune crainte et il ne sera jamais affligé.
ph: 'Inna Al-Ladhīna 'Āmanū Wa Al-Ladhīna Hādū Wa An-Naşārá Wa Aş-Şābi'īna Man 'Āmana Billāhi Wa Al-Yawmi Al-'Ākhiri Wa `Amila Şāliĥāan Falahum 'Ajruhum `Inda Rabbihim Wa Lā Khawfun `Alayhim Wa Lā Hum Yaĥzanūna

2:63
ar: وَإِذْ أَخَذْنَا مِيثَٰقَكُمْ وَرَفَعْنَا فَوْقَكُمُ ٱلطُّورَ خُذُوا۟ مَآ ءَاتَيْنَٰكُم بِقُوَّةٍۢ وَٱذْكُرُوا۟ مَا فِيهِ لَعَلَّكُمْ تَتَّقُونَ
fr: (Et rappelez-vous) quand Nous avons contracté un engagement avec vous et brandi sur vous le Mont. « Tenez ferme ce que Nous vous avons donné et souvenez-vous de ce qui s'y trouve afin que vous soyez pieux ! »
ph: Wa 'Idh 'Akhadhnā Mīthāqakum Wa Rafa`nā Fawqakumu Aţ-Ţūra Khudhū Mā 'Ātaynākum Biqūwatin Wa Adhkurū Mā Fīhi La`allakum Tattaqūna

2:64
ar: ثُمَّ تَوَلَّيْتُم مِّنۢ بَعْدِ ذَٰلِكَ ۖ فَلَوْلَا فَضْلُ ٱللَّهِ عَلَيْكُمْ وَرَحْمَتُهُۥ لَكُنتُم مِّنَ ٱلْخَٰسِرِينَ
fr: Puis vous vous en détournâtes après vos engagements, n'eût été donc la grâce d'Allah et Sa miséricorde, vous seriez certes parmi les perdants.
ph: Thumma Tawallaytum Min Ba`di Dhālika Falawlā Fađlu Allāhi `Alaykum Wa Raĥmatuhu Lakuntum Mina Al-Khāsirīna

2:65
ar: وَلَقَدْ عَلِمْتُمُ ٱلَّذِينَ ٱعْتَدَوْا۟ مِنكُمْ فِى ٱلسَّبْتِ فَقُلْنَا لَهُمْ كُونُوا۟ قِرَدَةً خَٰسِـِٔينَ
fr: Vous avez certainement connu ceux des vôtres qui transgressèrent le Sabbat. Et bien Nous leur dîmes: « Soyez des singes abjects ! »
ph: Wa Laqad `Alimtumu Al-Ladhīna A`tadaw Minkum Fī As-Sabti Faqulnā Lahum Kūnū Qiradatan Khāsi'īna

2:66
ar: فَجَعَلْنَٰهَا نَكَٰلًۭا لِّمَا بَيْنَ يَدَيْهَا وَمَا خَلْفَهَا وَمَوْعِظَةًۭ لِّلْمُتَّقِينَ
fr: Nous fîmes donc de cela un exemple pour les villes qui l'entouraient alors et une exhortation pour les pieux.
ph: Faja`alnāhā Nakālāan Limā Bayna Yadayhā Wa Mā Khalfahā Wa Maw`ižatan Lilmuttaqīna

2:67
ar: وَإِذْ قَالَ مُوسَىٰ لِقَوْمِهِۦٓ إِنَّ ٱللَّهَ يَأْمُرُكُمْ أَن تَذْبَحُوا۟ بَقَرَةًۭ ۖ قَالُوٓا۟ أَتَتَّخِذُنَا هُزُوًۭا ۖ قَالَ أَعُوذُ بِٱللَّهِ أَنْ أَكُونَ مِنَ ٱلْجَٰهِلِينَ
fr: (Et rappelez-vous) lorsque Musa (Moïse) dit à son peuple: « Certes Allah vous ordonne d'immoler une vache ». Ils dirent: « Nous prends-tu en moquerie ? » -« Qu'Allah me garde d'être du nombre des ignorants » dit-il.
ph: Wa 'Idh Qāla Mūsá Liqawmihi 'Inna Allāha Ya'murukum 'An Tadhbaĥū Baqaratan Qālū 'Atattakhidhunā Huzūan Qāla 'A`ūdhu Billāhi 'An 'Akūna Mina Al-Jāhilīn

2:68
ar: قَالُوا۟ ٱدْعُ لَنَا رَبَّكَ يُبَيِّن لَّنَا مَا هِىَ ۚ قَالَ إِنَّهُۥ يَقُولُ إِنَّهَا بَقَرَةٌۭ لَّا فَارِضٌۭ وَلَا بِكْرٌ عَوَانٌۢ بَيْنَ ذَٰلِكَ ۖ فَٱفْعَلُوا۟ مَا تُؤْمَرُونَ
fr: -Ils dirent: « Demande pour nous à ton Seigneur qu'Il nous précise ce qu'elle doit être. » -Il dit: « Certes Allah dit que c'est bien une vache, ni vieille ni vierge, d'un âge moyen, entre les deux. Faites donc ce qu'on vous commande. »
ph: Qālū Ad`u Lanā Rabbaka Yubayyin Lanā Mā Hiya Qāla 'Innahu Yaqūlu 'Innahā Baqaratun Lā Fāriđun Wa Lā Bikrun `Awānun Bayna Dhālika Fāf`alū Mā Tu'umarūna

2:69
ar: قَالُوا۟ ٱدْعُ لَنَا رَبَّكَ يُبَيِّن لَّنَا مَا لَوْنُهَا ۚ قَالَ إِنَّهُۥ يَقُولُ إِنَّهَا بَقَرَةٌۭ صَفْرَآءُ فَاقِعٌۭ لَّوْنُهَا تَسُرُّ ٱلنَّٰظِرِينَ
fr: -Ils dirent: « Demande donc pour nous à ton Seigneur qu'Il nous précise sa couleur. » -Il dit: « Allah dit que c'est une vache jaune, de couleur vive et plaisante à voir. »
ph: Qālū Ad`u Lanā Rabbaka Yubayyin Lanā Mā Lawnuhā Qāla 'Innahu Yaqūlu 'Innahā Baqaratun Şafrā'u Fāqi`un Lawnuhā Tasurru An-Nāžirīna

2:70
ar: قَالُوا۟ ٱدْعُ لَنَا رَبَّكَ يُبَيِّن لَّنَا مَا هِىَ إِنَّ ٱلْبَقَرَ تَشَٰبَهَ عَلَيْنَا وَإِنَّآ إِن شَآءَ ٱللَّهُ لَمُهْتَدُونَ
fr: -Ils dirent: « Demande pour nous à ton Seigneur qu'Il nous précise ce qu'elle est car pour nous, les vaches se confondent. Mais, nous y serions certainement bien guidés, si Allah le veut. »
ph: Qālū Ad`u Lanā Rabbaka Yubayyin Lanā Mā Hiya 'Inna Al-Baqara Tashābaha `Alaynā Wa 'Innā 'In Shā'a Allāhu Lamuhtadūna

2:71
ar: قَالَ إِنَّهُۥ يَقُولُ إِنَّهَا بَقَرَةٌۭ لَّا ذَلُولٌۭ تُثِيرُ ٱلْأَرْضَ وَلَا تَسْقِى ٱلْحَرْثَ مُسَلَّمَةٌۭ لَّا شِيَةَ فِيهَا ۚ قَالُوا۟ ٱلْـَٰٔنَ جِئْتَ بِٱلْحَقِّ ۚ فَذَبَحُوهَا وَمَا كَادُوا۟ يَفْعَلُونَ
fr: -Il dit: « Allah dit que c'est bien une vache qui n'a pas été asservie à labourer la terre ni à arroser le champ, indemne d'infirmité et dont la couleur est unie. » -Ils dirent: « Te voilà enfin, tu nous as apporté la vérité ! » Ils l'immolèrent alors mais il s'en fallut qu'ils ne l'eussent pas fait.
ph: Qāla 'Innahu Yaqūlu 'Innahā Baqaratun Lā Dhalūlun Tuthīru Al-'Arđa Wa Lā Tasqī Al-Ĥartha Musallamatun Lā Shiyata Fīhā Qālū Al-'Āna Ji'ta Bil-Ĥaqqi Fadhabaĥūhā Wa Mā Kādū Yaf`alūna

2:72
ar: وَإِذْ قَتَلْتُمْ نَفْسًۭا فَٱدَّٰرَْٰٔتُمْ فِيهَا ۖ وَٱللَّهُ مُخْرِجٌۭ مَّا كُنتُمْ تَكْتُمُونَ
fr: Et quand vous aviez tué un homme et que chacun de vous cherchait à se disculper ! Mais Allah démasque ce que vous dissimuliez.
ph: Wa 'Idh Qataltum Nafsāan Fa Addāra'tum Fīhā Wa Allāhu Mukhrijun Mā Kuntum Taktumūna

2:73
ar: فَقُلْنَا ٱضْرِبُوهُ بِبَعْضِهَا ۚ كَذَٰلِكَ يُحْىِ ٱللَّهُ ٱلْمَوْتَىٰ وَيُرِيكُمْ ءَايَٰتِهِۦ لَعَلَّكُمْ تَعْقِلُونَ
fr: Nous dîmes donc: « Frappez le tué avec une partie de la vache. » -Ainsi Allah ressuscite les morts et vous montre les signes (de Sa puissance) afin que vous raisonniez
ph: Faqulnā Ađribūhu Biba`đihā Kadhālika Yuĥyī Allāhu Al-Mawtá Wa Yurīkum 'Āyātihi La`allakum Ta`qilūna

2:74
ar: ثُمَّ قَسَتْ قُلُوبُكُم مِّنۢ بَعْدِ ذَٰلِكَ فَهِىَ كَٱلْحِجَارَةِ أَوْ أَشَدُّ قَسْوَةًۭ ۚ وَإِنَّ مِنَ ٱلْحِجَارَةِ لَمَا يَتَفَجَّرُ مِنْهُ ٱلْأَنْهَٰرُ ۚ وَإِنَّ مِنْهَا لَمَا يَشَّقَّقُ فَيَخْرُجُ مِنْهُ ٱلْمَآءُ ۚ وَإِنَّ مِنْهَا لَمَا يَهْبِطُ مِنْ خَشْيَةِ ٱللَّهِ ۗ وَمَا ٱللَّهُ بِغَٰفِلٍ عَمَّا تَعْمَلُونَ
fr: Puis, et en dépit de tout cela, vos cœurs se sont endurcis; ils sont devenus comme des pierres ou même plus durs encore; car il y a des pierres d'où jaillissent les ruisseaux, d'autres se fendent pour qu'en surgisse l'eau, d'autres s'affaissent par crainte d'Allah. Et Allah n'est certainement jamais inattentif à ce que vous faites
ph: Thumma Qasat Qulūbukum Min Ba`di Dhālika Fahiya Kālĥijārati 'Aw 'Ashaddu Qaswatan Wa 'Inna Mina Al-Ĥijārati Lamā Yatafajjaru Minhu Al-'Anhāru Wa 'Inna Minhā Lamā Yashaqqaqu Fayakhruju Minhu Al-Mā'u Wa 'Inna Minhā Lamā Yahbiţu Min Khashyati Allāhi Wa Mā Allāhu Bighāfilin `Ammā Ta`malūna

2:75
ar: ۞ أَفَتَطْمَعُونَ أَن يُؤْمِنُوا۟ لَكُمْ وَقَدْ كَانَ فَرِيقٌۭ مِّنْهُمْ يَسْمَعُونَ كَلَٰمَ ٱللَّهِ ثُمَّ يُحَرِّفُونَهُۥ مِنۢ بَعْدِ مَا عَقَلُوهُ وَهُمْ يَعْلَمُونَ
fr: -Eh bien, espérez-vous [Musulmans] que des pareils gens (les Juifs) vous partageront la foi ? alors qu'un groupe d'entre eux; après avoir entendu et compris la parole d'Allah, la falsifièrent sciemment.
ph: 'Afataţma`ūna 'An Yu'uminū Lakum Wa Qad Kāna Farīqun Minhum Yasma`ūna Kalāma Allāhi Thumma Yuĥarrifūnahu Min Ba`di Mā `Aqalūhu Wa Hum Ya`lamūna

2:76
ar: وَإِذَا لَقُوا۟ ٱلَّذِينَ ءَامَنُوا۟ قَالُوٓا۟ ءَامَنَّا وَإِذَا خَلَا بَعْضُهُمْ إِلَىٰ بَعْضٍۢ قَالُوٓا۟ أَتُحَدِّثُونَهُم بِمَا فَتَحَ ٱللَّهُ عَلَيْكُمْ لِيُحَآجُّوكُم بِهِۦ عِندَ رَبِّكُمْ ۚ أَفَلَا تَعْقِلُونَ
fr: Et quand ils rencontrent des croyants, ils disent: « Nous croyons » et, une fois seuls entre eux, ils disent: « Allez-vous confier aux Musulmans ce qu'Allah vous a révélé pour leur fournir, ainsi, un argument contre vous devant votre Seigneur ! Êtes-vous donc dépourvus de raison ? ».
ph: Wa 'Idhā Laqū Al-Ladhīna 'Āmanū Qālū 'Āmannā Wa 'Idhā Khalā Ba`đuhum 'Ilá Ba`đin Qālū 'Atuĥaddithūnahum Bimā Fataĥa Allāhu `Alaykum Liyuĥājjūkum Bihi `Inda Rabbikum 'Afalā Ta`qilūna

2:77
ar: أَوَلَا يَعْلَمُونَ أَنَّ ٱللَّهَ يَعْلَمُ مَا يُسِرُّونَ وَمَا يُعْلِنُونَ
fr: -Ne savent-ils pas qu'en vérité Allah sait ce qu'ils cachent et ce qu'ils divulguent ?
ph: 'Awalā Ya`lamūna 'Anna Allāha Ya`lamu Mā Yusirrūna Wa Mā Yu`linūna

2:78
ar: وَمِنْهُمْ أُمِّيُّونَ لَا يَعْلَمُونَ ٱلْكِتَٰبَ إِلَّآ أَمَانِىَّ وَإِنْ هُمْ إِلَّا يَظُنُّونَ
fr: Et il y a parmi eux des illettrés qui ne savent rien du Livre hormis des prétentions et ils ne font que des conjectures.
ph: Wa Minhum 'Ummīyūna Lā Ya`lamūna Al-Kitāba 'Illā 'Amānīya Wa 'In Hum 'Illā Yažunnūna

2:79
ar: فَوَيْلٌۭ لِّلَّذِينَ يَكْتُبُونَ ٱلْكِتَٰبَ بِأَيْدِيهِمْ ثُمَّ يَقُولُونَ هَٰذَا مِنْ عِندِ ٱللَّهِ لِيَشْتَرُوا۟ بِهِۦ ثَمَنًۭا قَلِيلًۭا ۖ فَوَيْلٌۭ لَّهُم مِّمَّا كَتَبَتْ أَيْدِيهِمْ وَوَيْلٌۭ لَّهُم مِّمَّا يَكْسِبُونَ
fr: Malheur, donc, à ceux qui de leurs propres mains composent un livre puis le présentent comme venant d'Allah pour en tirer un vil profit ! -Malheur à eux, donc, à cause de ce que leurs mains ont écrit, et malheur à eux à cause de ce qu'ils en profitent !
ph: Fawaylun Lilladhīna Yaktubūna Al-Kitāba Bi'aydīhim Thumma Yaqūlūna Hādhā Min `Indi Allāhi Liyashtarū Bihi Thamanāan Qalīlāan Fawaylun Lahum Mimmā Katabat 'Aydīhim Wa Waylun Lahum Mimmā Yaksibūna

2:80
ar: وَقَالُوا۟ لَن تَمَسَّنَا ٱلنَّارُ إِلَّآ أَيَّامًۭا مَّعْدُودَةًۭ ۚ قُلْ أَتَّخَذْتُمْ عِندَ ٱللَّهِ عَهْدًۭا فَلَن يُخْلِفَ ٱللَّهُ عَهْدَهُۥٓ ۖ أَمْ تَقُولُونَ عَلَى ٱللَّهِ مَا لَا تَعْلَمُونَ
fr: Et ils ont dit: « Le Feu ne nous touchera que pour quelques jours comptés ! » Dis: « Auriez-vous pris un engagement avec Allah -car Allah ne manque jamais à Son engagement; -non, mais vous dites sur Allah ce que vous ne savez pas ».
ph: Wa Qālū Lan Tamassanā An-Nāru 'Illā 'Ayyāmāan Ma`dūdatan Qul 'Āttakhadhtum `Inda Allāhi `Ahdāan Falan Yukhlifa Allāhu `Ahdahu 'Am Taqūlūna `Alá Allāhi Mā Lā Ta`lamūna

2:81
ar: بَلَىٰ مَن كَسَبَ سَيِّئَةًۭ وَأَحَٰطَتْ بِهِۦ خَطِيٓـَٔتُهُۥ فَأُو۟لَٰٓئِكَ أَصْحَٰبُ ٱلنَّارِ ۖ هُمْ فِيهَا خَٰلِدُونَ
fr: Bien au contraire ! Ceux qui font le mal et qui se font cerner par leurs péchés, ceux-là sont les gens du Feu où ils demeureront éternellement.
ph: Balá Man Kasaba Sayyi'atan Wa 'Aĥāţat Bihi Khaţī'atuhu Fa'ūlā'ika 'Aşĥābu An-Nāri Hum Fīhā Khālidūna

2:82
ar: وَٱلَّذِينَ ءَامَنُوا۟ وَعَمِلُوا۟ ٱلصَّٰلِحَٰتِ أُو۟لَٰٓئِكَ أَصْحَٰبُ ٱلْجَنَّةِ ۖ هُمْ فِيهَا خَٰلِدُونَ
fr: Et ceux qui croient et pratiquent les bonnes œuvres, ceux-là sont les gens du Paradis où ils demeureront éternellement.
ph: Wa Al-Ladhīna 'Āmanū Wa `Amilū Aş-Şāliĥāti 'Ūlā'ika 'Aşĥābu Al-Jannati Hum Fīhā Khālidūna

2:83
ar: وَإِذْ أَخَذْنَا مِيثَٰقَ بَنِىٓ إِسْرَٰٓءِيلَ لَا تَعْبُدُونَ إِلَّا ٱللَّهَ وَبِٱلْوَٰلِدَيْنِ إِحْسَانًۭا وَذِى ٱلْقُرْبَىٰ وَٱلْيَتَٰمَىٰ وَٱلْمَسَٰكِينِ وَقُولُوا۟ لِلنَّاسِ حُسْنًۭا وَأَقِيمُوا۟ ٱلصَّلَوٰةَ وَءَاتُوا۟ ٱلزَّكَوٰةَ ثُمَّ تَوَلَّيْتُمْ إِلَّا قَلِيلًۭا مِّنكُمْ وَأَنتُم مُّعْرِضُونَ
fr: Et [rappelle-toi], lorsque Nous avons pris l'engagement des enfants d'Israʾil (Israël) de n'adorer qu'Allah, de faire le bien envers les pères, les mères, les proches parents, les orphelins et les nécessiteux, d'avoir de bonnes paroles avec les gens; d'accomplir régulièrement la Salat et d'acquitter la Zakat ! -Mais à l'exception d'un petit nombre de vous, vous manquiez à vos engagements en vous détournant de Nos commandements.
ph: Wa 'Idh 'Akhadhnā Mīthāqa Banī 'Isrā'īla Lā Ta`budūna 'Illā Allāha Wa Bil-Wālidayni 'Iĥsānāan Wa Dhī Al-Qurbá Wa Al-Yatāmá Wa Al-Masākīni Wa Qūlū Lilnnāsi Ĥusnāan Wa 'Aqīmū Aş-Şalāata Wa 'Ātū Az-Zakāata Thumma Tawallaytum 'Illā Qalīlāan Minkum Wa 'Antum Mu`riđūna

2:84
ar: وَإِذْ أَخَذْنَا مِيثَٰقَكُمْ لَا تَسْفِكُونَ دِمَآءَكُمْ وَلَا تُخْرِجُونَ أَنفُسَكُم مِّن دِيَٰرِكُمْ ثُمَّ أَقْرَرْتُمْ وَأَنتُمْ تَشْهَدُونَ
fr: Et rappelez-vous, lorsque Nous obtînmes de vous l'engagement de ne pas vous verser le sang, [par le meurtre] de ne pas vous expulser les uns les autres de vos maisons. Puis vous y avez souscrit avec votre propre témoignage.
ph: Wa 'Idh 'Akhadhnā Mīthāqakum Lā Tasfikūna Dimā'akum Wa Lā Tukhrijūna 'Anfusakum Min Diyārikum Thumma 'Aqrartum Wa 'Antum Tash/hadūna

2:85
ar: ثُمَّ أَنتُمْ هَٰٓؤُلَآءِ تَقْتُلُونَ أَنفُسَكُمْ وَتُخْرِجُونَ فَرِيقًۭا مِّنكُم مِّن دِيَٰرِهِمْ تَظَٰهَرُونَ عَلَيْهِم بِٱلْإِثْمِ وَٱلْعُدْوَٰنِ وَإِن يَأْتُوكُمْ أُسَٰرَىٰ تُفَٰدُوهُمْ وَهُوَ مُحَرَّمٌ عَلَيْكُمْ إِخْرَاجُهُمْ ۚ أَفَتُؤْمِنُونَ بِبَعْضِ ٱلْكِتَٰبِ وَتَكْفُرُونَ بِبَعْضٍۢ ۚ فَمَا جَزَآءُ مَن يَفْعَلُ ذَٰلِكَ مِنكُمْ إِلَّا خِزْىٌۭ فِى ٱلْحَيَوٰةِ ٱلدُّنْيَا ۖ وَيَوْمَ ٱلْقِيَٰمَةِ يُرَدُّونَ إِلَىٰٓ أَشَدِّ ٱلْعَذَابِ ۗ وَمَا ٱللَّهُ بِغَٰفِلٍ عَمَّا تَعْمَلُونَ
fr: Quoique ainsi engagés, voilà que vous vous entretuez, que vous expulsez de leurs maisons une partie d'entre vous contre qui vous prêtez main forte par péché et agression. Mais quelle contradiction ! Si vos coreligionnaires vous viennent captifs vous les rançonnez alors qu'il vous était interdit de les expulser (de chez eux). Croyez-vous donc en une partie du Livre et rejetez-vous le reste ? Ceux d'entre vous qui agissent de la sorte ne méritent que l'ignominie dans cette vie, et au Jour de la Résurrection ils seront refoulés au plus dur châtiment, et Allah n'est pas inattentif à ce que vous faites.
ph: Thumma 'Antum Hā'uulā' Taqtulūna 'Anfusakum Wa Tukhrijūna Farīqāan Minkum Min Diyārihim Tažāharūna `Alayhim Bil-'Ithmi Wa Al-`Udwāni Wa 'In Ya'tūkum 'Usārá Tufādūhum Wa Huwa Muĥarramun `Alaykum 'Ikhrājuhum 'A Fatu'uminūna Biba`đi Al-Kitābi Wa Takfurūna Biba`đin Famā Jazā'u Man Yaf`alu Dhālika Minkum 'Illā Khizyun Fī Al-Ĥayāati Ad-Dunyā Wa Yawma Al-Qiyāmati Yuraddūna 'Ilá 'Ashaddi Al-`Adhābi Wa Mā Allāhu Bighāfilin `Ammā Ta`malūna

2:86
ar: أُو۟لَٰٓئِكَ ٱلَّذِينَ ٱشْتَرَوُا۟ ٱلْحَيَوٰةَ ٱلدُّنْيَا بِٱلْءَاخِرَةِ ۖ فَلَا يُخَفَّفُ عَنْهُمُ ٱلْعَذَابُ وَلَا هُمْ يُنصَرُونَ
fr: Voilà ceux qui échangent la vie présente contre la vie future. Eh bien, leur châtiment ne sera pas diminué. Et ils ne seront point secourus.
ph: 'Ūlā'ika Al-Ladhīna Ashtaraw Al-Ĥayāata Ad-Dunyā Bil-'Ākhirati Falā Yukhaffafu `Anhumu Al-`Adhābu Wa Lā Hum Yunşarūna

2:87
ar: وَلَقَدْ ءَاتَيْنَا مُوسَى ٱلْكِتَٰبَ وَقَفَّيْنَا مِنۢ بَعْدِهِۦ بِٱلرُّسُلِ ۖ وَءَاتَيْنَا عِيسَى ٱبْنَ مَرْيَمَ ٱلْبَيِّنَٰتِ وَأَيَّدْنَٰهُ بِرُوحِ ٱلْقُدُسِ ۗ أَفَكُلَّمَا جَآءَكُمْ رَسُولٌۢ بِمَا لَا تَهْوَىٰٓ أَنفُسُكُمُ ٱسْتَكْبَرْتُمْ فَفَرِيقًۭا كَذَّبْتُمْ وَفَرِيقًۭا تَقْتُلُونَ
fr: Certes, Nous avons donné le Livre à Musa (Moïse); Nous avons envoyé après lui des prophètes successifs. Et Nous avons donné des preuves à 'Isa (Jésus) fils de Maryam (Marie), et Nous l'avons renforcé du Saint-Esprit. Est-ce qu'à chaque fois, qu'un Messager vous apportait des vérités contraires à vos souhaits vous vous enfliez d'orgueil ? Vous traitiez les uns d'imposteurs et vous tuiez les autres.
ph: Wa Laqad 'Ātaynā Mūsá Al-Kitāba Wa Qaffaynā Min Ba`dihi Bir-Rusuli Wa 'Ātaynā `Īsá Abna Maryama Al-Bayyināti Wa 'Ayyadnāhu Birūĥi Al-Qudusi 'Afakullamā Jā'akum Rasūlun Bimā Lā Tahwá 'Anfusukum Astakbartum Fafarīqāan Kadhabtum Wa Farīqāan Taqtulūn

2:88
ar: وَقَالُوا۟ قُلُوبُنَا غُلْفٌۢ ۚ بَل لَّعَنَهُمُ ٱللَّهُ بِكُفْرِهِمْ فَقَلِيلًۭا مَّا يُؤْمِنُونَ
fr: Et ils dirent: « Nos cœurs sont enveloppés et impénétrables » -Non mais Allah les a maudits à cause de leur infidélité, leur foi est donc médiocre.
ph: Wa Qālū Qulūbunā Ghulfun Bal La`anahumu Allāhu Bikufrihim Faqalīlāan Mā Yu'uminūna

2:89
ar: وَلَمَّا جَآءَهُمْ كِتَٰبٌۭ مِّنْ عِندِ ٱللَّهِ مُصَدِّقٌۭ لِّمَا مَعَهُمْ وَكَانُوا۟ مِن قَبْلُ يَسْتَفْتِحُونَ عَلَى ٱلَّذِينَ كَفَرُوا۟ فَلَمَّا جَآءَهُم مَّا عَرَفُوا۟ كَفَرُوا۟ بِهِۦ ۚ فَلَعْنَةُ ٱللَّهِ عَلَى ٱلْكَٰفِرِينَ
fr: Et quand leur vint d'Allah un Livre confirmant celui qu'ils avaient déjà, -alors qu'auparavant ils cherchaient la suprématie sur les mécréants, -quand donc leur vint cela même qu'ils reconnaissaient, ils refusèrent d'y croire. Que la malédiction d'Allah soit sur les mécréants !
ph: Wa Lammā Jā'ahum Kitābun Min `Indi Allāhi Muşaddiqun Limā Ma`ahum Wa Kānū Min Qablu Yastaftiĥūna `Alá Al-Ladhīna Kafarū Falammā Jā'ahum Mā `Arafū Kafarū Bihi Fala`natu Allāhi `Alá Al-Kāfirīna

2:90
ar: بِئْسَمَا ٱشْتَرَوْا۟ بِهِۦٓ أَنفُسَهُمْ أَن يَكْفُرُوا۟ بِمَآ أَنزَلَ ٱللَّهُ بَغْيًا أَن يُنَزِّلَ ٱللَّهُ مِن فَضْلِهِۦ عَلَىٰ مَن يَشَآءُ مِنْ عِبَادِهِۦ ۖ فَبَآءُو بِغَضَبٍ عَلَىٰ غَضَبٍۢ ۚ وَلِلْكَٰفِرِينَ عَذَابٌۭ مُّهِينٌۭ
fr: Comme est vil ce contre quoi ils ont troqué leurs âmes ! Ils ne croient pas en ce qu'Allah a fait descendre, révoltés à l'idée qu'Allah, de par Sa grâce, fasse descendre la révélation sur ceux de Ses serviteurs qu'Il veut. Ils ont donc acquis colère sur colère, car un châtiment avilissant attend les infidèles !
ph: Bi'sa Mā Ashtaraw Bihi 'Anfusahum 'An Yakfurū Bimā 'Anzala Allāhu Baghyāan 'An Yunazzila Allāhu Min Fađlih `Alá Man Yashā'u Min `Ibādihi Fabā'ū Bighađabin `Alá Ghađabin Wa Lilkāfirīna `Adhābun Muhīnun

2:91
ar: وَإِذَا قِيلَ لَهُمْ ءَامِنُوا۟ بِمَآ أَنزَلَ ٱللَّهُ قَالُوا۟ نُؤْمِنُ بِمَآ أُنزِلَ عَلَيْنَا وَيَكْفُرُونَ بِمَا وَرَآءَهُۥ وَهُوَ ٱلْحَقُّ مُصَدِّقًۭا لِّمَا مَعَهُمْ ۗ قُلْ فَلِمَ تَقْتُلُونَ أَنۢبِيَآءَ ٱللَّهِ مِن قَبْلُ إِن كُنتُم مُّؤْمِنِينَ
fr: Et quand on leur dit: « Croyez à ce qu'Allah a fait descendre », ils disent: « Nous croyons à ce qu'on a fait descendre à nous. » Et ils rejettent le reste, alors qu'il est la vérité confirmant ce qu'il y avait déjà avec eux. -Dis: « Pourquoi donc avez-vous tué auparavant les prophètes d'Allah, si vous étiez croyants ? »
ph: Wa 'Idhā Qīla Lahum 'Āminū Bimā 'Anzala Allāhu Qālū Nu'uminu Bimā 'Unzila `Alaynā Wa Yakfurūna Bimā Warā'ahu Wa Huwa Al-Ĥaqqu Muşaddiqāan Limā Ma`ahum Qul Falima Taqtulūna 'Anbiyā'a Allāhi Min Qablu 'In Kuntum Mu'uminīna

2:92
ar: ۞ وَلَقَدْ جَآءَكُم مُّوسَىٰ بِٱلْبَيِّنَٰتِ ثُمَّ ٱتَّخَذْتُمُ ٱلْعِجْلَ مِنۢ بَعْدِهِۦ وَأَنتُمْ ظَٰلِمُونَ
fr: Et en effet Musa (Moïse) vous est venu avec les preuves. Malgré cela, une fois absent, vous avez pris le Veau pour idole, alors que vous étiez injustes.
ph: Wa Laqad Jā'akum Mūsá Bil-Bayyināti Thumma Attakhadhtumu Al-`Ijla Min Ba`dihi Wa 'Antum Žālimūna

2:93
ar: وَإِذْ أَخَذْنَا مِيثَٰقَكُمْ وَرَفَعْنَا فَوْقَكُمُ ٱلطُّورَ خُذُوا۟ مَآ ءَاتَيْنَٰكُم بِقُوَّةٍۢ وَٱسْمَعُوا۟ ۖ قَالُوا۟ سَمِعْنَا وَعَصَيْنَا وَأُشْرِبُوا۟ فِى قُلُوبِهِمُ ٱلْعِجْلَ بِكُفْرِهِمْ ۚ قُلْ بِئْسَمَا يَأْمُرُكُم بِهِۦٓ إِيمَٰنُكُمْ إِن كُنتُم مُّؤْمِنِينَ
fr: Et rappelez-vous, lorsque Nous avons pris l'engagement de vous, et brandi sur vous AT-Tûr (le Mont Sinaï) en vous disant: « Tenez ferme à ce que Nous vous avons donné, et écoutez ! » Ils dirent: « Nous avons écouté et désobéi. » Dans leur impiété, leurs cœurs étaient passionnément épris du Veau (objet de leur culte). Dis-[leur]: « Quelles mauvaises prescriptions ordonnées par votre foi, si vous êtes croyants ».
ph: Wa 'Idh 'Akhadhnā Mīthāqakum Wa Rafa`nā Fawqakumu Aţ-Ţūra Khudhū Mā 'Ātaynākum Biqūwatin Wa Asma`ū Qālū Sami`nā Wa `Aşaynā Wa 'Ushribū Fī Qulūbihimu Al-`Ijla Bikufrihim Qul Bi'samā Ya'murukum Bihi 'Īmānukum 'In Kuntum Mu'uminīna

2:94
ar: قُلْ إِن كَانَتْ لَكُمُ ٱلدَّارُ ٱلْءَاخِرَةُ عِندَ ٱللَّهِ خَالِصَةًۭ مِّن دُونِ ٱلنَّاسِ فَتَمَنَّوُا۟ ٱلْمَوْتَ إِن كُنتُمْ صَٰدِقِينَ
fr: -Dis: « Si l'Ultime demeure auprès d'Allah est pour vous seuls, à l'exclusion des autres gens, souhaitez donc la mort [immédiate] si vous êtes véridiques ! »
ph: Qul 'In Kānat Lakumu Ad-Dāru Al-'Ākhiratu `Inda Allāhi Khālişatan Min Dūni An-Nāsi Fatamannaw Al-Mawta 'In Kuntum Şādiqīna

2:95
ar: وَلَن يَتَمَنَّوْهُ أَبَدًۢا بِمَا قَدَّمَتْ أَيْدِيهِمْ ۗ وَٱللَّهُ عَلِيمٌۢ بِٱلظَّٰلِمِينَ
fr: Or, ils ne la souhaiteront jamais, sachant tout le mal qu'ils ont perpétré de leurs mains. Et Allah connait bien les injustes.
ph: Wa Lan Yatamannawhu 'Abadāan Bimā Qaddamat 'Aydīhim Wa Allāhu `Alīmun Biž-Žālimīna

2:96
ar: وَلَتَجِدَنَّهُمْ أَحْرَصَ ٱلنَّاسِ عَلَىٰ حَيَوٰةٍۢ وَمِنَ ٱلَّذِينَ أَشْرَكُوا۟ ۚ يَوَدُّ أَحَدُهُمْ لَوْ يُعَمَّرُ أَلْفَ سَنَةٍۢ وَمَا هُوَ بِمُزَحْزِحِهِۦ مِنَ ٱلْعَذَابِ أَن يُعَمَّرَ ۗ وَٱللَّهُ بَصِيرٌۢ بِمَا يَعْمَلُونَ
fr: Et certes tu les trouveras les plus attachés à la vie [d'ici-bas], pire en cela que les Associateurs. Tel d'entre eux aimerait vivre mille ans. Mais une pareille longévité ne le sauvera pas du châtiment ! Et Allah voit bien leurs actions.
ph: Wa Latajidannahum 'Aĥraşa An-Nāsi `Alá Ĥayāatin Wa Mina Al-Ladhīna 'Ashrakū Yawaddu 'Aĥaduhum Law Yu`ammaru 'Alfa Sanatin Wa Mā Huwa Bimuzaĥziĥihi Mina Al-`Adhābi 'An Yu`ammara Wa Allāhu Başīrun Bimā Ya`malūna

2:97
ar: قُلْ مَن كَانَ عَدُوًّۭا لِّجِبْرِيلَ فَإِنَّهُۥ نَزَّلَهُۥ عَلَىٰ قَلْبِكَ بِإِذْنِ ٱللَّهِ مُصَدِّقًۭا لِّمَا بَيْنَ يَدَيْهِ وَهُدًۭى وَبُشْرَىٰ لِلْمُؤْمِنِينَ
fr: Dis: « Quiconque est ennemi de Jibril (Gabriel) doit connaître que c'est lui qui, avec la permission d'Allah, a fait descendre sur ton cœur cette révélation qui déclare véridiques les messages antérieurs et qui sert aux croyants de guide et d'heureuse annonce »
ph: Qul Man Kāna `Adūwāan Lijibrīla Fa'innahu Nazzalahu `Alá Qalbika Bi'idhni Allāhi Muşaddiqāan Limā Bayna Yadayhi Wa Hudáan Wa Bushrá Lilmu'uminīna

2:98
ar: مَن كَانَ عَدُوًّۭا لِّلَّهِ وَمَلَٰٓئِكَتِهِۦ وَرُسُلِهِۦ وَجِبْرِيلَ وَمِيكَىٰلَ فَإِنَّ ٱللَّهَ عَدُوٌّۭ لِّلْكَٰفِرِينَ
fr: [Dis: ]: « Quiconque est ennemi d'Allah, de Ses anges, de Ses messagers, de Jibril (Gabriel) et de Michaël... [Allah sera son ennemi] car Allah est l'ennemi des infidèles. »
ph: Man Kāna `Adūwāan Lillāhi Wa Malā'ikatihi Wa Rusulihi Wa Jibrīla Wa Mīkāla Fa'inna Allāha `Adūwun Lilkāfirīna

2:99
ar: وَلَقَدْ أَنزَلْنَآ إِلَيْكَ ءَايَٰتٍۭ بَيِّنَٰتٍۢ ۖ وَمَا يَكْفُرُ بِهَآ إِلَّا ٱلْفَٰسِقُونَ
fr: Et très certainement Nous avons fait descendre vers toi des signes évidents. Et seuls les pervers n'y croient pas.
ph: Wa Laqad 'Anzalnā 'Ilayka 'Āyātin Bayyinātin Wa Mā Yakfuru Bihā 'Illā Al-Fāsiqūna

2:100
ar: أَوَكُلَّمَا عَٰهَدُوا۟ عَهْدًۭا نَّبَذَهُۥ فَرِيقٌۭ مِّنْهُم ۚ بَلْ أَكْثَرُهُمْ لَا يُؤْمِنُونَ
fr: Faudrait-il chaque fois qu'ils concluent un pacte, qu'une partie d'entre eux le dénonce ? C'est que plutôt la plupart d'entre eux ne sont pas croyants.
ph: 'Awakullamā `Āhadū `Ahdāan Nabadhahu Farīqun Minhum Bal 'Aktharuhum Lā Yu'uminūna

2:101
ar: وَلَمَّا جَآءَهُمْ رَسُولٌۭ مِّنْ عِندِ ٱللَّهِ مُصَدِّقٌۭ لِّمَا مَعَهُمْ نَبَذَ فَرِيقٌۭ مِّنَ ٱلَّذِينَ أُوتُوا۟ ٱلْكِتَٰبَ كِتَٰبَ ٱللَّهِ وَرَآءَ ظُهُورِهِمْ كَأَنَّهُمْ لَا يَعْلَمُونَ
fr: Et quand leur vint d'Allah un messager confirmant ce qu'il y avait déjà avec eux, certains à qui le Livre avait été donné, jetèrent derrière leur dos le Livre d'Allah comme s'ils ne savaient pas !
ph: Wa Lammā Jā'ahum Rasūlun Min `Indi Allāhi Muşaddiqun Limā Ma`ahum Nabadha Farīqun Mina Al-Ladhīna 'Ūtū Al-Kitāba Kitāba Allāhi Warā'a Žuhūrihim Ka'annahum Lā Ya`lamūna

2:102
ar: وَٱتَّبَعُوا۟ مَا تَتْلُوا۟ ٱلشَّيَٰطِينُ عَلَىٰ مُلْكِ سُلَيْمَٰنَ ۖ وَمَا كَفَرَ سُلَيْمَٰنُ وَلَٰكِنَّ ٱلشَّيَٰطِينَ كَفَرُوا۟ يُعَلِّمُونَ ٱلنَّاسَ ٱلسِّحْرَ وَمَآ أُنزِلَ عَلَى ٱلْمَلَكَيْنِ بِبَابِلَ هَٰرُوتَ وَمَٰرُوتَ ۚ وَمَا يُعَلِّمَانِ مِنْ أَحَدٍ حَتَّىٰ يَقُولَآ إِنَّمَا نَحْنُ فِتْنَةٌۭ فَلَا تَكْفُرْ ۖ فَيَتَعَلَّمُونَ مِنْهُمَا مَا يُفَرِّقُونَ بِهِۦ بَيْنَ ٱلْمَرْءِ وَزَوْجِهِۦ ۚ وَمَا هُم بِضَآرِّينَ بِهِۦ مِنْ أَحَدٍ إِلَّا بِإِذْنِ ٱللَّهِ ۚ وَيَتَعَلَّمُونَ مَا يَضُرُّهُمْ وَلَا يَنفَعُهُمْ ۚ وَلَقَدْ عَلِمُوا۟ لَمَنِ ٱشْتَرَىٰهُ مَا لَهُۥ فِى ٱلْءَاخِرَةِ مِنْ خَلَٰقٍۢ ۚ وَلَبِئْسَ مَا شَرَوْا۟ بِهِۦٓ أَنفُسَهُمْ ۚ لَوْ كَانُوا۟ يَعْلَمُونَ
fr: Et ils suivirent ce que les diables racontent contre le règne de Sulayman (Salomon). Alors que Sulayman (Salomon) n'a jamais été mécréant mais bien les diables: ils enseignent aux gens la magie ainsi que ce qui est descendu aux deux anges Harut et Marut, à Babylone; mais ceux-ci n'enseignaient rien à personne, qu'ils n'aient dit d'abord: « Nous ne sommes rien qu'une tentation: ne sois pas mécréant » ils apprennent auprès d'eux ce qui sème la désunion entre l'homme et son épouse. Or ils ne sont capables de nuire à personne qu'avec la permission d'Allah. Et les gens apprennent ce qui leur nuit et ne leur est pas profitable. Et ils savent, très certainement, que celui qui acquiert [ce pouvoir] n'aura aucune part dans l'au-delà. Certes, quelle détestable marchandise pour laquelle ils ont vendu leurs âmes ! Si seulement ils savaient !
ph: Wa Attaba`ū Mā Tatlū Ash-Shayāţīnu `Alá Mulki Sulaymāna Wa Mā Kafara Sulaymānu Wa Lakinna Ash-Shayāţīna Kafarū Yu`allimūna An-Nāsa As-Siĥra Wa Mā 'Unzila `Alá Al-Malakayni Bibābila Hārūta Wa Mārūta Wa Mā Yu`allimāni Min 'Aĥadin Ĥattá Yaqūlā 'Innamā Naĥnu Fitnatun Falā Takfur Fayata`allamūna Minhumā Mā Yufarriqūna Bihi Bayna Al-Mar'i Wa Zawjihi Wa Mā Hum Biđārrīna Bihi Min 'Aĥadin 'Illā Bi'idhni Allāhi Wa Yata`allamūna Mā Yađurruhum Wa Lā Yanfa`uhum Wa Laqad `Alimū Lamani Ashtarāhu Mā Lahu Fī Al-'Ākhirati Min Khalāqin Wa Labi'sa Mā Sharaw Bihi 'Anfusahum Law Kānū Ya`lamūna

2:103
ar: وَلَوْ أَنَّهُمْ ءَامَنُوا۟ وَٱتَّقَوْا۟ لَمَثُوبَةٌۭ مِّنْ عِندِ ٱللَّهِ خَيْرٌۭ ۖ لَّوْ كَانُوا۟ يَعْلَمُونَ
fr: Et s'ils croyaient et vivaient en piété, une récompense de la part d'Allah serait certes meilleure. Si seulement ils savaient !
ph: Wa Law 'Annahum 'Āmanū Wa Attaqaw Lamathūbatun Min `Indi Allāhi Khayrun Law Kānū Ya`lamūna

2:104
ar: يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ لَا تَقُولُوا۟ رَٰعِنَا وَقُولُوا۟ ٱنظُرْنَا وَٱسْمَعُوا۟ ۗ وَلِلْكَٰفِرِينَ عَذَابٌ أَلِيمٌۭ
fr: Ô vous qui croyez ! Ne dites pas: « Râ'inâ » (favorise-nous) mais dites: « Onzurnâ » (regarde-nous); et écoutez ! Un châtiment douloureux sera pour les infidèles.
ph: Yā 'Ayyuhā Al-Ladhīna 'Āmanū Lā Taqūlū Rā`inā Wa Qūlū Anžurnā Wa Asma`ū Wa Lilkāfirīna `Adhābun 'Alīmun

2:105
ar: مَّا يَوَدُّ ٱلَّذِينَ كَفَرُوا۟ مِنْ أَهْلِ ٱلْكِتَٰبِ وَلَا ٱلْمُشْرِكِينَ أَن يُنَزَّلَ عَلَيْكُم مِّنْ خَيْرٍۢ مِّن رَّبِّكُمْ ۗ وَٱللَّهُ يَخْتَصُّ بِرَحْمَتِهِۦ مَن يَشَآءُ ۚ وَٱللَّهُ ذُو ٱلْفَضْلِ ٱلْعَظِيمِ
fr: Ni les mécréants parmi les gens du Livre, ni les Associateurs n'aiment qu'on fasse descendre sur vous un bienfait de la part de votre Seigneur, alors qu'Allah réserve à qui Il veut sa Miséricorde. Et c'est Allah le Détenteur de l'abondante grâce.
ph: Mā Yawaddu Al-Ladhīna Kafarū Min 'Ahli Al-Kitābi Wa Lā Al-Mushrikīna 'An Yunazzala `Alaykum Min Khayrin Min Rabbikum Wa Allāhu Yakhtaşşu Biraĥmatihi Man Yashā'u Wa Allāhu Dhū Al-Fađli Al-`Ažīmi

2:106
ar: ۞ مَا نَنسَخْ مِنْ ءَايَةٍ أَوْ نُنسِهَا نَأْتِ بِخَيْرٍۢ مِّنْهَآ أَوْ مِثْلِهَآ ۗ أَلَمْ تَعْلَمْ أَنَّ ٱللَّهَ عَلَىٰ كُلِّ شَىْءٍۢ قَدِيرٌ
fr: Si Nous abrogeons un verset quelconque ou que Nous le fassions oublier, Nous en apportons un meilleur, ou un semblable. Ne sais-tu pas qu'Allah est Omnipotent ?
ph: Mā Nansakh Min 'Āyatin 'Aw Nunsihā Na'ti Bikhayrin Minhā 'Aw Mithlihā 'Alam Ta`lam 'Anna Allāha `Alá Kulli Shay'in Qadīrun

2:107
ar: أَلَمْ تَعْلَمْ أَنَّ ٱللَّهَ لَهُۥ مُلْكُ ٱلسَّمَٰوَٰتِ وَٱلْأَرْضِ ۗ وَمَا لَكُم مِّن دُونِ ٱللَّهِ مِن وَلِىٍّۢ وَلَا نَصِيرٍ
fr: Ne sais-tu pas qu'à Allah, appartient le royaume des cieux et de la terre, et qu'en dehors d'Allah vous n'avez ni protecteur ni secoureur ?
ph: 'Alam Ta`lam 'Anna Allāha Lahu Mulku As-Samāwāti Wa Al-'Arđi Wa Mā Lakum Min Dūni Allāhi Min Wa Līyin Wa Lā Naşīrin

2:108
ar: أَمْ تُرِيدُونَ أَن تَسْـَٔلُوا۟ رَسُولَكُمْ كَمَا سُئِلَ مُوسَىٰ مِن قَبْلُ ۗ وَمَن يَتَبَدَّلِ ٱلْكُفْرَ بِٱلْإِيمَٰنِ فَقَدْ ضَلَّ سَوَآءَ ٱلسَّبِيلِ
fr: Voudriez-vous interroger votre Messager comme auparavant on interrogea Musa (Moïse) ? Quiconque substitue la mécréance à la foi s'égare certes du droit chemin.
ph: 'Am Turīdūna 'An Tas'alū Rasūlakum Kamā Su'ila Mūsá Min Qablu Wa Man Yatabaddali Al-Kufra Bil-'Īmāni Faqad Đalla Sawā'a As-Sabīli

2:109
ar: وَدَّ كَثِيرٌۭ مِّنْ أَهْلِ ٱلْكِتَٰبِ لَوْ يَرُدُّونَكُم مِّنۢ بَعْدِ إِيمَٰنِكُمْ كُفَّارًا حَسَدًۭا مِّنْ عِندِ أَنفُسِهِم مِّنۢ بَعْدِ مَا تَبَيَّنَ لَهُمُ ٱلْحَقُّ ۖ فَٱعْفُوا۟ وَٱصْفَحُوا۟ حَتَّىٰ يَأْتِىَ ٱللَّهُ بِأَمْرِهِۦٓ ۗ إِنَّ ٱللَّهَ عَلَىٰ كُلِّ شَىْءٍۢ قَدِيرٌۭ
fr: Nombre de gens du Livre aimeraient par jalousie de leur part, pouvoir vous rendre mécréants après que vous ayez cru. Et après que la vérité s'est manifestée à eux ! Pardonnez et oubliez jusqu'à ce qu'Allah fasse venir Son commandement. Allah est très certainement Omnipotent !
ph: Wadda Kathīrun Min 'Ahli Al-Kitābi Law Yaruddūnakum Min Ba`di 'Īmānikum Kuffārāan Ĥasadāan Min `Indi 'Anfusihim Min Ba`di Mā Tabayyana Lahumu Al-Ĥaqqu Fā`fū Wa Aşfaĥū Ĥattá Ya'tiya Allāhu Bi'amrihi 'Inna Allāha `Alá Kulli Shay'in Qadīrun

2:110
ar: وَأَقِيمُوا۟ ٱلصَّلَوٰةَ وَءَاتُوا۟ ٱلزَّكَوٰةَ ۚ وَمَا تُقَدِّمُوا۟ لِأَنفُسِكُم مِّنْ خَيْرٍۢ تَجِدُوهُ عِندَ ٱللَّهِ ۗ إِنَّ ٱللَّهَ بِمَا تَعْمَلُونَ بَصِيرٌۭ
fr: Et accomplissez la Salat et acquittez la Zakat. Et tout ce que vous avancez de bien pour vous-mêmes, vous le retrouverez auprès d'Allah, car Allah voit parfaitement ce que vous faites.
ph: Wa 'Aqīmū Aş-Şalāata Wa 'Ātū Az-Zakāata Wa Mā Tuqaddimū Li'nfusikum Min Khayrin Tajidūhu `Inda Allāhi 'Inna Allāha Bimā Ta`malūna Başīrun

2:111
ar: وَقَالُوا۟ لَن يَدْخُلَ ٱلْجَنَّةَ إِلَّا مَن كَانَ هُودًا أَوْ نَصَٰرَىٰ ۗ تِلْكَ أَمَانِيُّهُمْ ۗ قُلْ هَاتُوا۟ بُرْهَٰنَكُمْ إِن كُنتُمْ صَٰدِقِينَ
fr: Et ils ont dit: « Nul n'entrera au Paradis que Juifs ou Chrétiens. » Voilà leurs chimères. -Dis: « Donnez votre preuve, si vous êtes véridiques. »
ph: Wa Qālū Lan Yadkhula Al-Jannata 'Illā Man Kāna Hūdāan 'Aw Naşārá Tilka 'Amānīyuhum Qul Hātū Burhānakum 'In Kuntum Şādiqīn

2:112
ar: بَلَىٰ مَنْ أَسْلَمَ وَجْهَهُۥ لِلَّهِ وَهُوَ مُحْسِنٌۭ فَلَهُۥٓ أَجْرُهُۥ عِندَ رَبِّهِۦ وَلَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُونَ
fr: Non, mais quiconque soumet à Allah son être tout en faisant le bien, aura sa rétribution auprès de son Seigneur. Pour eux, nulle crainte, et ils ne seront point attristés.
ph: Balá Man 'Aslama Wajhahu Lillāhi Wa Huwa Muĥsinun Falahu 'Ajruhu `Inda Rabbihi Wa Lā Khawfun `Alayhim Wa Lā Hum Yaĥzanūna

2:113
ar: وَقَالَتِ ٱلْيَهُودُ لَيْسَتِ ٱلنَّصَٰرَىٰ عَلَىٰ شَىْءٍۢ وَقَالَتِ ٱلنَّصَٰرَىٰ لَيْسَتِ ٱلْيَهُودُ عَلَىٰ شَىْءٍۢ وَهُمْ يَتْلُونَ ٱلْكِتَٰبَ ۗ كَذَٰلِكَ قَالَ ٱلَّذِينَ لَا يَعْلَمُونَ مِثْلَ قَوْلِهِمْ ۚ فَٱللَّهُ يَحْكُمُ بَيْنَهُمْ يَوْمَ ٱلْقِيَٰمَةِ فِيمَا كَانُوا۟ فِيهِ يَخْتَلِفُونَ
fr: Et les Juifs disent: « Les Chrétiens ne tiennent sur rien » et les Chrétiens disent: « Les Juifs ne tiennent sur rien », alors qu'ils lisent le Livre ! De même ceux qui ne savent rien tiennent un langage semblable au leur. Eh bien, Allah jugera sur ce quoi ils s'opposent, au Jour de la Résurrection.
ph: Wa Qālati Al-Yahūdu Laysati An-Naşārá `Alá Shay'in Wa Qālati An-Naşārá Laysati Al-Yahūdu `Alá Shay'in Wa Hum Yatlūna Al-Kitāba Kadhālika Qāla Al-Ladhīna Lā Ya`lamūna Mithla Qawlihim Fa-Allāhu Yaĥkumu Baynahum Yawma Al-Qiyāmati Fīmā Kānū Fīhi Yakhtalifūna

2:114
ar: وَمَنْ أَظْلَمُ مِمَّن مَّنَعَ مَسَٰجِدَ ٱللَّهِ أَن يُذْكَرَ فِيهَا ٱسْمُهُۥ وَسَعَىٰ فِى خَرَابِهَآ ۚ أُو۟لَٰٓئِكَ مَا كَانَ لَهُمْ أَن يَدْخُلُوهَآ إِلَّا خَآئِفِينَ ۚ لَهُمْ فِى ٱلدُّنْيَا خِزْىٌۭ وَلَهُمْ فِى ٱلْءَاخِرَةِ عَذَابٌ عَظِيمٌۭ
fr: Qui est plus injuste que celui qui empêche que dans les mosquées d'Allah, on mentionne Son Nom, et qui s'efforce à les détruire ? De tels gens ne devraient y entrer qu'apeurés. Pour eux, ignominie ici-bas; et dans l'au-delà un énorme châtiment.
ph: Wa Man 'Ažlamu Mimman Mana`a Masājida Allāhi 'An Yudhkara Fīhā Asmuhu Wa Sa`á Fī Kharābihā 'Ūlā'ika Mā Kāna Lahum 'An Yadkhulūhā 'Ilā Khā'ifīna Lahum Fī Ad-Dunyā Khizyun Wa Lahum Fī Al-'Ākhirati `Adhābun `Ažīmun

2:115
ar: وَلِلَّهِ ٱلْمَشْرِقُ وَٱلْمَغْرِبُ ۚ فَأَيْنَمَا تُوَلُّوا۟ فَثَمَّ وَجْهُ ٱللَّهِ ۚ إِنَّ ٱللَّهَ وَٰسِعٌ عَلِيمٌۭ
fr: À Allah seul appartiennent l'Est et l'Ouest. Où que vous vous tourniez, la Face (direction) d'Allah est donc là, car Allah a la grâce immense; Il est Omniscient.
ph: Wa Lillahi Al-Mashriqu Wa Al-Maghribu Fa'aynamā Tuwallū Fathamma Wajhu Allāhi 'Inna Allāha Wāsi`un `Alīmun

2:116
ar: وَقَالُوا۟ ٱتَّخَذَ ٱللَّهُ وَلَدًۭا ۗ سُبْحَٰنَهُۥ ۖ بَل لَّهُۥ مَا فِى ٱلسَّمَٰوَٰتِ وَٱلْأَرْضِ ۖ كُلٌّۭ لَّهُۥ قَٰنِتُونَ
fr: Et ils ont dit: « Allah s'est donné un fils ! » Gloire à Lui ! Non ! Mais c'est à Lui qu'appartient ce qui est dans les cieux et la terre et c'est à Lui que tous obéissent.
ph: Wa Qālū Attakhadha Allāhu Waladāan Subĥānahu Bal Lahu Mā Fī As-Samāwāti Wa Al-'Arđi Kullun Lahu Qānitūna

2:117
ar: بَدِيعُ ٱلسَّمَٰوَٰتِ وَٱلْأَرْضِ ۖ وَإِذَا قَضَىٰٓ أَمْرًۭا فَإِنَّمَا يَقُولُ لَهُۥ كُن فَيَكُونُ
fr: Il est le Créateur des cieux et de la terre à partir du néant. Lorsqu'Il décide une chose, Il dit seulement: « Sois », et elle est aussitôt.
ph: Badī`u As-Samāwāti Wa Al-'Arđi Wa 'Idhā Qađá 'Amrāan Fa'innamā Yaqūlu Lahu Kun Fayakūnu

2:118
ar: وَقَالَ ٱلَّذِينَ لَا يَعْلَمُونَ لَوْلَا يُكَلِّمُنَا ٱللَّهُ أَوْ تَأْتِينَآ ءَايَةٌۭ ۗ كَذَٰلِكَ قَالَ ٱلَّذِينَ مِن قَبْلِهِم مِّثْلَ قَوْلِهِمْ ۘ تَشَٰبَهَتْ قُلُوبُهُمْ ۗ قَدْ بَيَّنَّا ٱلْءَايَٰتِ لِقَوْمٍۢ يُوقِنُونَ
fr: Et ceux qui ne savent pas ont dit: « Pourquoi Allah ne nous parle-t-Il pas [directement], ou pourquoi un signe ne nous vient-il pas ? » De même, ceux d'avant eux disaient une parole semblable. Leurs cœurs se ressemblent. Nous avons clairement exposé les signes pour des gens qui ont la foi ferme.
ph: Wa Qāla Al-Ladhīna Lā Ya`lamūna Lawlā Yukallimunā Allāhu 'Aw Ta'tīnā 'Āyatun Kadhālika Qāla Al-Ladhīna Min Qablihim Mithla Qawlihim Tashābahat Qulūbuhum Qad Bayyannā Al-'Āyāti Liqawmin Yūqinūna

2:119
ar: إِنَّآ أَرْسَلْنَٰكَ بِٱلْحَقِّ بَشِيرًۭا وَنَذِيرًۭا ۖ وَلَا تُسْـَٔلُ عَنْ أَصْحَٰبِ ٱلْجَحِيمِ
fr: Certes, Nous t'avons envoyé avec la vérité, en annonciateur et avertisseur; et on ne te demande pas compte des gens de l'Enfer.
ph: 'Innā 'Arsalnāka Bil-Ĥaqqi Bashīrāan Wa Nadhīrāan Wa Lā Tus'alu `An 'Aşĥābi Al-Jaĥīmi

2:120
ar: وَلَن تَرْضَىٰ عَنكَ ٱلْيَهُودُ وَلَا ٱلنَّصَٰرَىٰ حَتَّىٰ تَتَّبِعَ مِلَّتَهُمْ ۗ قُلْ إِنَّ هُدَى ٱللَّهِ هُوَ ٱلْهُدَىٰ ۗ وَلَئِنِ ٱتَّبَعْتَ أَهْوَآءَهُم بَعْدَ ٱلَّذِى جَآءَكَ مِنَ ٱلْعِلْمِ ۙ مَا لَكَ مِنَ ٱللَّهِ مِن وَلِىٍّۢ وَلَا نَصِيرٍ
fr: Ni les Juifs, ni les Chrétiens ne seront jamais satisfaits de toi, jusqu'à ce que tu suives leur religion. -Dis: « Certes, c'est la direction d'Allah qui est la vraie direction. » Mais si tu suis leurs passions après ce que tu as reçu de science, tu n'auras contre Allah ni protecteur ni secoureur.
ph: Wa Lan Tarđá `Anka Al-Yahūdu Wa Lā An-Naşārá Ĥattá Tattabi`a Millatahum Qul 'Inna Hudá Allāhi Huwa Al-Hudá Wa La'ini Attaba`ta 'Ahwā'ahum Ba`da Al-Ladhī Jā'aka Mina Al-`Ilmi Mā Laka Mina Allāhi Min Wa Līyin Wa Lā Naşīrin

2:121
ar: ٱلَّذِينَ ءَاتَيْنَٰهُمُ ٱلْكِتَٰبَ يَتْلُونَهُۥ حَقَّ تِلَاوَتِهِۦٓ أُو۟لَٰٓئِكَ يُؤْمِنُونَ بِهِۦ ۗ وَمَن يَكْفُرْ بِهِۦ فَأُو۟لَٰٓئِكَ هُمُ ٱلْخَٰسِرُونَ
fr: Ceux à qui Nous avons donné le Livre, qui le récitent comme il se doit, ceux-là y croient. Et ceux qui n'y croient pas sont les perdants.
ph: Al-Ladhīna 'Ātaynāhumu Al-Kitāba Yatlūnahu Ĥaqqa Tilāwatihi 'Ūlā'ika Yu'uminūna Bihi Wa Man Yakfur Bihi Fa'ūlā'ika Humu Al-Khāsirūna

2:122
ar: يَٰبَنِىٓ إِسْرَٰٓءِيلَ ٱذْكُرُوا۟ نِعْمَتِىَ ٱلَّتِىٓ أَنْعَمْتُ عَلَيْكُمْ وَأَنِّى فَضَّلْتُكُمْ عَلَى ٱلْعَٰلَمِينَ
fr: Ô enfants d'Israʾil (Israël), rappelez-vous Mon bienfait dont Je vous ai comblés et que Je vous ai favorisés par-dessus le reste du monde (de leur époque).
ph: Yā Banī 'Isrā'īla Adhkurū Ni`matiya Allatī 'An`amtu `Alaykum Wa 'Annī Fađđaltukum `Alá Al-`Ālamīna

2:123
ar: وَٱتَّقُوا۟ يَوْمًۭا لَّا تَجْزِى نَفْسٌ عَن نَّفْسٍۢ شَيْـًۭٔا وَلَا يُقْبَلُ مِنْهَا عَدْلٌۭ وَلَا تَنفَعُهَا شَفَٰعَةٌۭ وَلَا هُمْ يُنصَرُونَ
fr: Et redoutez le jour où nulle âme ne bénéficiera à une autre, où l'on n'acceptera d'elle aucune compensation, et où aucune intercession ne lui sera utile. Et ils ne seront point secourus.
ph: Wa Attaqū Yawmāan Lā Tajzī Nafsun `An Nafsin Shay'āan Wa Lā Yuqbalu Minhā `Adlun Wa Lā Tanfa`uhā Shafā`atun Wa Lā Hum Yunşarūna

2:124
ar: ۞ وَإِذِ ٱبْتَلَىٰٓ إِبْرَٰهِۦمَ رَبُّهُۥ بِكَلِمَٰتٍۢ فَأَتَمَّهُنَّ ۖ قَالَ إِنِّى جَاعِلُكَ لِلنَّاسِ إِمَامًۭا ۖ قَالَ وَمِن ذُرِّيَّتِى ۖ قَالَ لَا يَنَالُ عَهْدِى ٱلظَّٰلِمِينَ
fr: [Et rappelle-toi] quand ton Seigneur eut éprouvé Ibrahim (Abraham) par certains commandements, et qu'il les eut accomplis, le Seigneur lui dit: « Je vais faire de toi un exemple à suivre pour les gens. » « Et parmi ma descendance ? » demanda-t-il. « Mon engagement, dit Allah, ne s'applique pas aux injustes »
ph: Wa 'Idh Abtalá 'Ibrāhīma Rabbuhu Bikalimātin Fa'atammahunna Qāla 'Innī Jā`iluka Lilnnāsi 'Imāmāan Qāla Wa Min Dhurrīyatī Qāla Lā Yanālu `Ahdī Až-Žālimīna

2:125
ar: وَإِذْ جَعَلْنَا ٱلْبَيْتَ مَثَابَةًۭ لِّلنَّاسِ وَأَمْنًۭا وَٱتَّخِذُوا۟ مِن مَّقَامِ إِبْرَٰهِۦمَ مُصَلًّۭى ۖ وَعَهِدْنَآ إِلَىٰٓ إِبْرَٰهِۦمَ وَإِسْمَٰعِيلَ أَن طَهِّرَا بَيْتِىَ لِلطَّآئِفِينَ وَٱلْعَٰكِفِينَ وَٱلرُّكَّعِ ٱلسُّجُودِ
fr: [Et rappelle-toi], quand nous fîmes de la Maison un lieu de visite et un asile pour les gens -Adoptez donc pour lieu de prière, ce lieu où Ibrahim (Abraham) se tint debout -Et Nous confiâmes à Ibrahim (Abraham) et à Isma'il (Ismaël) ceci: « Purifiez Ma Maison pour ceux qui tournent autour, y font retraite pieuse, s'y inclinent et s'y prosternent. »
ph: Wa 'Idh Ja`alnā Al-Bayta Mathābatan Lilnnāsi Wa 'Amnāan Wa Attakhidhū Min Maqāmi 'Ibrāhīma Muşalláan Wa `Ahidnā 'Ilá 'Ibrāhīma Wa 'Ismā`īla 'An Ţahhirā Baytiya Lilţţā'ifīna Wa Al-`Ākifīna Wa Ar-Rukka`i As-Sujūdi

2:126
ar: وَإِذْ قَالَ إِبْرَٰهِۦمُ رَبِّ ٱجْعَلْ هَٰذَا بَلَدًا ءَامِنًۭا وَٱرْزُقْ أَهْلَهُۥ مِنَ ٱلثَّمَرَٰتِ مَنْ ءَامَنَ مِنْهُم بِٱللَّهِ وَٱلْيَوْمِ ٱلْءَاخِرِ ۖ قَالَ وَمَن كَفَرَ فَأُمَتِّعُهُۥ قَلِيلًۭا ثُمَّ أَضْطَرُّهُۥٓ إِلَىٰ عَذَابِ ٱلنَّارِ ۖ وَبِئْسَ ٱلْمَصِيرُ
fr: Et quand Ibrahim (Abraham) supplia: « Ô mon Seigneur, fais de cette cité un lieu de sécurité, et fais attribution des fruits à ceux qui parmi ses habitants auront cru en Allah et au Jour dernier », le Seigneur dit: « Et quiconque n'y aura pas cru, alors Je lui concèderai une courte jouissance [ici-bas], puis Je le contraindrai au châtiment du Feu [dans l'au-delà]. Et quelle mauvaise destination ! »
ph: Wa 'Idh Qāla 'Ibrāhīmu Rabbi Aj`al Hādhā Baladāan 'Āmināan Wa Arzuq 'Ahlahu Mina Ath-Thamarāti Man 'Āmana Minhum Billāhi Wa Al-Yawmi Al-'Ākhiri Qāla Wa Man Kafara Fa'umatti`uhu Qalīlāan Thumma 'Ađţarruhu 'Ilá `Adhābi An-Nāri Wa Bi'sa Al-Maşīru

2:127
ar: وَإِذْ يَرْفَعُ إِبْرَٰهِۦمُ ٱلْقَوَاعِدَ مِنَ ٱلْبَيْتِ وَإِسْمَٰعِيلُ رَبَّنَا تَقَبَّلْ مِنَّآ ۖ إِنَّكَ أَنتَ ٱلسَّمِيعُ ٱلْعَلِيمُ
fr: Et quand Ibrahim (Abraham) et Isma'il (Ismaël) élevaient les assises de la Maison: « Ô notre Seigneur, accepte ceci de notre part ! Car c'est Toi l'Audient, l'Omniscient.
ph: Wa 'Idh Yarfa`u 'Ibrāhīmu Al-Qawā`ida Mina Al-Bayti Wa 'Ismā`īlu Rabbanā Taqabbal Minnā 'Innaka 'Anta As-Samī`u Al-`Alīmu

2:128
ar: رَبَّنَا وَٱجْعَلْنَا مُسْلِمَيْنِ لَكَ وَمِن ذُرِّيَّتِنَآ أُمَّةًۭ مُّسْلِمَةًۭ لَّكَ وَأَرِنَا مَنَاسِكَنَا وَتُبْ عَلَيْنَآ ۖ إِنَّكَ أَنتَ ٱلتَّوَّابُ ٱلرَّحِيمُ
fr: Notre Seigneur ! Fais de nous Tes Soumis, et de notre descendance une communauté soumise à Toi. Et montre nous nos rites et accepte de nous le repentir. Car c'est Toi certes l'Accueillant au repentir, le Miséricordieux.
ph: Rabbanā Wa Aj`alnā Muslimayni Laka Wa Min Dhurrīyatinā 'Ummatan Muslimatan Laka Wa 'Arinā Manāsikanā Wa Tub `Alaynā 'Innaka 'Anta At-Tawwābu Ar-Raĥīmu

2:129
ar: رَبَّنَا وَٱبْعَثْ فِيهِمْ رَسُولًۭا مِّنْهُمْ يَتْلُوا۟ عَلَيْهِمْ ءَايَٰتِكَ وَيُعَلِّمُهُمُ ٱلْكِتَٰبَ وَٱلْحِكْمَةَ وَيُزَكِّيهِمْ ۚ إِنَّكَ أَنتَ ٱلْعَزِيزُ ٱلْحَكِيمُ
fr: Notre Seigneur ! Envoie l'un des leurs comme messager parmi eux, pour leur réciter Tes versets, leur enseigner le Livre et la Sagesse, et les purifier. Car c'est Toi certes le Puissant, le Sage !
ph: Rabbanā Wa Ab`ath Fīhim Rasūlāan Minhum Yatlū `Alayhim 'Āyātika Wa Yu`allimuhumu Al-Kitāba Wa Al-Ĥikmata Wa Yuzakkīhim 'Innaka 'Anta Al-`Azīzu Al-Ĥakīmu

2:130
ar: وَمَن يَرْغَبُ عَن مِّلَّةِ إِبْرَٰهِۦمَ إِلَّا مَن سَفِهَ نَفْسَهُۥ ۚ وَلَقَدِ ٱصْطَفَيْنَٰهُ فِى ٱلدُّنْيَا ۖ وَإِنَّهُۥ فِى ٱلْءَاخِرَةِ لَمِنَ ٱلصَّٰلِحِينَ
fr: Qui donc aura en aversion la religion d'Ibrahim (Abraham), sinon celui qui sème son âme dans la sottise ? Car très certainement Nous l'avons choisi en ce monde; et, dans l'au-delà, il est certes du nombre des gens de bien.
ph: Wa Man Yarghabu `An Millati 'Ibrāhīma 'Illā Man Safiha Nafsahu Wa Laqadi Aşţafaynāhu Fī Ad-Dunyā Wa 'Innahu Fī Al-'Ākhirati Lamina Aş-Şāliĥīna

2:131
ar: إِذْ قَالَ لَهُۥ رَبُّهُۥٓ أَسْلِمْ ۖ قَالَ أَسْلَمْتُ لِرَبِّ ٱلْعَٰلَمِينَ
fr: Quand son Seigneur lui avait dit: « Soumets-toi », il dit: « Je me soumets au Seigneur de l'Univers. »
ph: 'Idh Qāla Lahu Rabbuhu 'Aslim Qāla 'Aslamtu Lirabbi Al-`Ālamīna

2:132
ar: وَوَصَّىٰ بِهَآ إِبْرَٰهِۦمُ بَنِيهِ وَيَعْقُوبُ يَٰبَنِىَّ إِنَّ ٱللَّهَ ٱصْطَفَىٰ لَكُمُ ٱلدِّينَ فَلَا تَمُوتُنَّ إِلَّا وَأَنتُم مُّسْلِمُونَ
fr: Et c'est ce qu'Ibrahim (Abraham) recommanda à ses fils, de même que Ya'qub (Jacob): « Ô mes fils, certes Allah vous a choisi la religion: ne mourrez point, donc, autrement qu'en Soumis ! » (à Allah).
ph: Wa Waşşá Bihā 'Ibrāhīmu Banīhi Wa Ya`qūbu Yā Banīya 'Inna Allāha Aşţafá Lakumu Ad-Dīna Falā Tamūtunna 'Illā Wa 'Antum Muslimūna

2:133
ar: أَمْ كُنتُمْ شُهَدَآءَ إِذْ حَضَرَ يَعْقُوبَ ٱلْمَوْتُ إِذْ قَالَ لِبَنِيهِ مَا تَعْبُدُونَ مِنۢ بَعْدِى قَالُوا۟ نَعْبُدُ إِلَٰهَكَ وَإِلَٰهَ ءَابَآئِكَ إِبْرَٰهِۦمَ وَإِسْمَٰعِيلَ وَإِسْحَٰقَ إِلَٰهًۭا وَٰحِدًۭا وَنَحْنُ لَهُۥ مُسْلِمُونَ
fr: Etiez-vous témoins quand la mort se présenta à Ya'qub (Jacob) et qu'il dit à ses fils: « Qu'adorerez-vous après moi ? » -Ils répondirent: « Nous adorerons ta divinité et la divinité de tes pères, Ibrahim (Abraham), Isma'il (Ismaël) et Ishaq (Isaac), Divinité Unique et à laquelle nous sommes Soumis. »
ph: 'Am Kuntum Shuhadā'a 'Idh Ĥađara Ya`qūba Al-Mawtu 'Idh Qāla Libanīhi Mā Ta`budūna Min Ba`dī Qālū Na`budu 'Ilahaka Wa 'Ilaha 'Ābā'ika 'Ibrāhīma Wa 'Ismā`īla Wa 'Isĥāqa 'Ilahāan Wāĥidāan Wa Naĥnu Lahu Muslimūna

2:134
ar: تِلْكَ أُمَّةٌۭ قَدْ خَلَتْ ۖ لَهَا مَا كَسَبَتْ وَلَكُم مَّا كَسَبْتُمْ ۖ وَلَا تُسْـَٔلُونَ عَمَّا كَانُوا۟ يَعْمَلُونَ
fr: Voilà une génération bel et bien révolue. A elle ce qu'elle a acquis, et à vous ce que vous avez acquis. On ne vous demandera pas compte de ce qu'ils faisaient.
ph: Tilka 'Ummatun Qad Khalat Lahā Mā Kasabat Wa Lakum Mā Kasabtum Wa Lā Tus'alūna `Ammā Kānū Ya`malūna

2:135
ar: وَقَالُوا۟ كُونُوا۟ هُودًا أَوْ نَصَٰرَىٰ تَهْتَدُوا۟ ۗ قُلْ بَلْ مِلَّةَ إِبْرَٰهِۦمَ حَنِيفًۭا ۖ وَمَا كَانَ مِنَ ٱلْمُشْرِكِينَ
fr: Ils ont dit : « Soyez Juifs ou Chrétiens, vous serez donc sur la bonne voie. » -Dis: « Non, mais nous suivons la religion d'Ibrahim (Abraham) le modèle même de la droiture et qui ne fut point parmi les Associateurs. »
ph: Wa Qālū Kūnū Hūdāan 'Aw Naşārá Tahtadū Qul Bal Millata 'Ibrāhīma Ĥanīfāan Wa Mā Kāna Mina Al-Mushrikīna

2:136
ar: قُولُوٓا۟ ءَامَنَّا بِٱللَّهِ وَمَآ أُنزِلَ إِلَيْنَا وَمَآ أُنزِلَ إِلَىٰٓ إِبْرَٰهِۦمَ وَإِسْمَٰعِيلَ وَإِسْحَٰقَ وَيَعْقُوبَ وَٱلْأَسْبَاطِ وَمَآ أُوتِىَ مُوسَىٰ وَعِيسَىٰ وَمَآ أُوتِىَ ٱلنَّبِيُّونَ مِن رَّبِّهِمْ لَا نُفَرِّقُ بَيْنَ أَحَدٍۢ مِّنْهُمْ وَنَحْنُ لَهُۥ مُسْلِمُونَ
fr: Dites: « Nous croyons en Allah et en ce qu'on nous a révélé, et en ce qu'on a fait descendre vers Ibrahim (Abraham) et Isma'il (Ismaël) et Ishaq (Isaac) et Ya'qub (Jacob) et les Tribus, et en ce qui a été donné à Musa (Moïse) et à 'Isa (Jésus), et en ce qui a été donné aux prophètes, venant de leur Seigneur: nous ne faisons aucune distinction entre eux. Et à Lui nous sommes Soumis. »
ph: Qūlū 'Āmannā Billāhi Wa Mā 'Unzila 'Ilaynā Wa Mā 'Unzila 'Ilá 'Ibrāhīma Wa 'Ismā`īla Wa 'Isĥāqa Wa Ya`qūba Wa Al-'Asbāţi Wa Mā 'Ūtiya Mūsá Wa `Īsá Wa Mā 'Ūtiya An-Nabīyūna Min Rabbihim Lā Nufarriqu Bayna 'Aĥadin Minhum Wa Naĥnu Lahu Muslimūna

2:137
ar: فَإِنْ ءَامَنُوا۟ بِمِثْلِ مَآ ءَامَنتُم بِهِۦ فَقَدِ ٱهْتَدَوا۟ ۖ وَّإِن تَوَلَّوْا۟ فَإِنَّمَا هُمْ فِى شِقَاقٍۢ ۖ فَسَيَكْفِيكَهُمُ ٱللَّهُ ۚ وَهُوَ ٱلسَّمِيعُ ٱلْعَلِيمُ
fr: Alors, s'ils croient à cela même à quoi vous croyez, ils seront certainement sur la bonne voie. Et s'ils s'en détournent, ils seront certes dans le schisme ! Alors Allah te suffira contre eux. Il est l'Audient, l'Omniscient.
ph: Fa'in 'Āmanū Bimithli Mā 'Āmantum Bihi Faqadi Ahtadaw Wa 'In Tawallaw Fa'innamā Hum Fī Shiqāqin Fasayakfīkahumu Allāhu Wa Huwa As-Samī`u Al-`Alīmu

2:138
ar: صِبْغَةَ ٱللَّهِ ۖ وَمَنْ أَحْسَنُ مِنَ ٱللَّهِ صِبْغَةًۭ ۖ وَنَحْنُ لَهُۥ عَٰبِدُونَ
fr: « Nous suivons la religion d'Allah ! Et qui est meilleur qu'Allah en Sa religion ? C'est Lui que nous adorons ».
ph: Şibghata Allāhi Wa Man 'Aĥsanu Mina Allāhi Şibghatan Wa Naĥnu Lahu `Ābidūna

2:139
ar: قُلْ أَتُحَآجُّونَنَا فِى ٱللَّهِ وَهُوَ رَبُّنَا وَرَبُّكُمْ وَلَنَآ أَعْمَٰلُنَا وَلَكُمْ أَعْمَٰلُكُمْ وَنَحْنُ لَهُۥ مُخْلِصُونَ
fr: Dis: « Discutez vous avec nous au sujet d'Allah, alors qu'Il est notre Seigneur et le vôtre ? A nous nos actions et à vous les vôtres ! C'est à Lui que nous sommes dévoués.
ph: Qul 'Atuĥājjūnanā Fī Allāhi Wa Huwa Rabbunā Wa Rabbukum Wa Lanā 'A`mālunā Wa Lakum 'A`mālukum Wa Naĥnu Lahu Mukhlişūna

2:140
ar: أَمْ تَقُولُونَ إِنَّ إِبْرَٰهِۦمَ وَإِسْمَٰعِيلَ وَإِسْحَٰقَ وَيَعْقُوبَ وَٱلْأَسْبَاطَ كَانُوا۟ هُودًا أَوْ نَصَٰرَىٰ ۗ قُلْ ءَأَنتُمْ أَعْلَمُ أَمِ ٱللَّهُ ۗ وَمَنْ أَظْلَمُ مِمَّن كَتَمَ شَهَٰدَةً عِندَهُۥ مِنَ ٱللَّهِ ۗ وَمَا ٱللَّهُ بِغَٰفِلٍ عَمَّا تَعْمَلُونَ
fr: Ou dites-vous qu'Ibrahim (Abraham), Isma'il (Ismaël), Ishaq (Isaac) et Ya'qub (Jacob) et les tribus étaient Juifs ou Chrétiens ? » -Dis: « Est-ce vous les plus savants ou Allah ? » -Qui est plus injuste que celui qui cache un témoignage qu'il détient d'Allah ? Et Allah n'est pas inattentif à ce que vous faites.
ph: 'Am Taqūlūna 'Inna 'Ibrāhīma Wa 'Ismā`īla Wa 'Isĥāqa Wa Ya`qūba Wa Al-'Asbāţa Kānū Hūdāan 'Aw Naşārá Qul 'A'antum 'A`lamu 'Ami Allāhu Wa Man 'Ažlamu Mimman Katama Shahādatan `Indahu Mina Allāhi Wa Mā Allāhu Bighāfilin `Ammā Ta`malūna

2:141
ar: تِلْكَ أُمَّةٌۭ قَدْ خَلَتْ ۖ لَهَا مَا كَسَبَتْ وَلَكُم مَّا كَسَبْتُمْ ۖ وَلَا تُسْـَٔلُونَ عَمَّا كَانُوا۟ يَعْمَلُونَ
fr: Voilà une génération bel et bien révolue. A elle ce qu'elle a acquis, et à vous ce que vous avez acquis. Et on ne vous demandera pas compte de ce qu'ils faisaient.
ph: Tilka 'Ummatun Qad Khalat Lahā Mā Kasabat Wa Lakum Mā Kasabtum Wa Lā Tus'alūna `Ammā Kānū Ya`malūna

2:142
ar: ۞ سَيَقُولُ ٱلسُّفَهَآءُ مِنَ ٱلنَّاسِ مَا وَلَّىٰهُمْ عَن قِبْلَتِهِمُ ٱلَّتِى كَانُوا۟ عَلَيْهَا ۚ قُل لِّلَّهِ ٱلْمَشْرِقُ وَٱلْمَغْرِبُ ۚ يَهْدِى مَن يَشَآءُ إِلَىٰ صِرَٰطٍۢ مُّسْتَقِيمٍۢ
fr: Les faibles d'esprit parmi les gens vont dire: « Qui les a détournés de la direction (Qibla) vers laquelle ils s'orientaient auparavant ? » -Dis: « C'est à Allah qu'appartiennent le Levant et le Couchant. Il guide qui Il veut vers un droit chemin. »
ph: Sayaqūlu As-Sufahā'u Mina An-Nāsi Mā Wa Llāhum `An Qiblatihimu Allatī Kānū `Alayhā Qul Lillāhi Al-Mashriqu Wa Al-Maghribu Yahdī Man Yashā'u 'Ilá Şirāţin Mustaqīmin

2:143
ar: وَكَذَٰلِكَ جَعَلْنَٰكُمْ أُمَّةًۭ وَسَطًۭا لِّتَكُونُوا۟ شُهَدَآءَ عَلَى ٱلنَّاسِ وَيَكُونَ ٱلرَّسُولُ عَلَيْكُمْ شَهِيدًۭا ۗ وَمَا جَعَلْنَا ٱلْقِبْلَةَ ٱلَّتِى كُنتَ عَلَيْهَآ إِلَّا لِنَعْلَمَ مَن يَتَّبِعُ ٱلرَّسُولَ مِمَّن يَنقَلِبُ عَلَىٰ عَقِبَيْهِ ۚ وَإِن كَانَتْ لَكَبِيرَةً إِلَّا عَلَى ٱلَّذِينَ هَدَى ٱللَّهُ ۗ وَمَا كَانَ ٱللَّهُ لِيُضِيعَ إِيمَٰنَكُمْ ۚ إِنَّ ٱللَّهَ بِٱلنَّاسِ لَرَءُوفٌۭ رَّحِيمٌۭ
fr: Et aussi Nous avons fait de vous une communauté de justes pour que vous soyez témoins aux gens, comme le Messager sera témoin à vous. Et Nous n'avions établi la direction (Qibla) vers laquelle tu te tournais que pour savoir qui suit le Messager [Muhammad] et qui s'en retourne sur ses talons. C'était un changement difficile, mais pas pour ceux qu'Allah guide. Et ce n'est pas Allah qui vous fera perdre [la récompense de] votre foi, car Allah, certes est Compatissant et Miséricordieux pour les hommes.
ph: Wa Kadhalika Ja`alnākum 'Ummatan Wasaţāan Litakūnū Shuhadā'a `Alá An-Nāsi Wa Yakūna Ar-Rasūlu `Alaykum Shahīdāan Wa Mā Ja`alnā Al-Qiblata Allatī Kunta `Alayhā 'Illā Lina`lama Man Yattabi`u Ar-Rasūla Mimman Yanqalibu `Alá `Aqibayhi Wa 'In Kānat Lakabīratan 'Illā `Alá Al-Ladhīna Hadá Allāhu Wa Mā Kāna Allāhu Liyuđī`a 'Īmānakum 'Inna Allāha Bin-Nāsi Lara'ūfun Raĥīmun

2:144
ar: قَدْ نَرَىٰ تَقَلُّبَ وَجْهِكَ فِى ٱلسَّمَآءِ ۖ فَلَنُوَلِّيَنَّكَ قِبْلَةًۭ تَرْضَىٰهَا ۚ فَوَلِّ وَجْهَكَ شَطْرَ ٱلْمَسْجِدِ ٱلْحَرَامِ ۚ وَحَيْثُ مَا كُنتُمْ فَوَلُّوا۟ وُجُوهَكُمْ شَطْرَهُۥ ۗ وَإِنَّ ٱلَّذِينَ أُوتُوا۟ ٱلْكِتَٰبَ لَيَعْلَمُونَ أَنَّهُ ٱلْحَقُّ مِن رَّبِّهِمْ ۗ وَمَا ٱللَّهُ بِغَٰفِلٍ عَمَّا يَعْمَلُونَ
fr: Certes nous te voyons tourner le visage en tous sens dans le ciel. Nous te faisons donc orienter vers une direction qui te plaît. Tourne donc ton visage vers la Mosquée sacrée. Où que vous soyez, tournez-y vos visages. Certes, ceux à qui le Livre a été donné savent bien que c'est la vérité venue de leur Seigneur. Et Allah n'est pas inattentif à ce qu'ils font.
ph: Qad Nará Taqalluba Wajhika Fī As-Samā'i Falanuwalliyannaka Qiblatan Tarđāhā Fawalli Wajhaka Shaţra Al-Masjidi Al-Ĥarāmi Wa Ĥaythu Mā Kuntum Fawallū Wujūhakum Shaţrahu Wa 'Inna Al-Ladhīna 'Ūtū Al-Kitāba Laya`lamūna 'Annahu Al-Ĥaqqu Min Rabbihim Wa Mā Allāhu Bighāfilin `Ammā Ya`malūna

2:145
ar: وَلَئِنْ أَتَيْتَ ٱلَّذِينَ أُوتُوا۟ ٱلْكِتَٰبَ بِكُلِّ ءَايَةٍۢ مَّا تَبِعُوا۟ قِبْلَتَكَ ۚ وَمَآ أَنتَ بِتَابِعٍۢ قِبْلَتَهُمْ ۚ وَمَا بَعْضُهُم بِتَابِعٍۢ قِبْلَةَ بَعْضٍۢ ۚ وَلَئِنِ ٱتَّبَعْتَ أَهْوَآءَهُم مِّنۢ بَعْدِ مَا جَآءَكَ مِنَ ٱلْعِلْمِ ۙ إِنَّكَ إِذًۭا لَّمِنَ ٱلظَّٰلِمِينَ
fr: Certes si tu apportais toutes les preuves à ceux à qui le Livre a été donné, ils ne suivraient pas ta direction (Qibla) ! Et tu ne suivras pas la leur; et entre eux, les uns ne suivent pas la direction des autres. Et si tu suivais leurs passions après ce que tu as reçu de science, tu serais, certes, du nombre des injustes.
ph: Wa La'in 'Atayta Al-Ladhīna 'Ūtū Al-Kitāba Bikulli 'Āyatin Mā Tabi`ū Qiblataka Wa Mā 'Anta Bitābi`in Qiblatahum Wa Mā Ba`đuhum Bitābi`in Qiblata Ba`đin Wa La'ini Attaba`ta 'Ahwā'ahum Min Ba`di Mā Jā'aka Mina Al-`Ilmi 'Innaka 'Idhāan Lamina Až-Žālimīna

2:146
ar: ٱلَّذِينَ ءَاتَيْنَٰهُمُ ٱلْكِتَٰبَ يَعْرِفُونَهُۥ كَمَا يَعْرِفُونَ أَبْنَآءَهُمْ ۖ وَإِنَّ فَرِيقًۭا مِّنْهُمْ لَيَكْتُمُونَ ٱلْحَقَّ وَهُمْ يَعْلَمُونَ
fr: Ceux à qui Nous avons donné le Livre, le reconnaissent comme ils reconnaissent leurs enfants. Or une partie d'entre eux cache la vérité, alors qu'ils la savent !
ph: Al-Ladhīna 'Ātaynāhumu Al-Kitāba Ya`rifūnahu Kamā Ya`rifūna 'Abnā'ahum Wa 'Inna Farīqāan Minhum Layaktumūna Al-Ĥaqqa Wa Hum Ya`lamūna

2:147
ar: ٱلْحَقُّ مِن رَّبِّكَ ۖ فَلَا تَكُونَنَّ مِنَ ٱلْمُمْتَرِينَ
fr: La vérité vient de ton Seigneur. Ne sois donc pas de ceux qui doutent.
ph: Al-Ĥaqqu Min Rabbika Falā Takūnanna Mina Al-Mumtarīna

2:148
ar: وَلِكُلٍّۢ وِجْهَةٌ هُوَ مُوَلِّيهَا ۖ فَٱسْتَبِقُوا۟ ٱلْخَيْرَٰتِ ۚ أَيْنَ مَا تَكُونُوا۟ يَأْتِ بِكُمُ ٱللَّهُ جَمِيعًا ۚ إِنَّ ٱللَّهَ عَلَىٰ كُلِّ شَىْءٍۢ قَدِيرٌۭ
fr: À chacun une orientation vers laquelle il se tourne. Rivalisez donc dans les bonnes œuvres. Où que vous soyez, Allah vous ramènera tous vers Lui, car Allah est, certes Omnipotent.
ph: Wa Likullin Wijhatun Huwa Muwallīhā Fāstabiqū Al-Khayrāti 'Ayna Mā Takūnū Ya'ti Bikumu Allāhu Jamī`āan 'Inna Allāha `Alá Kulli Shay'in Qadīrun

2:149
ar: وَمِنْ حَيْثُ خَرَجْتَ فَوَلِّ وَجْهَكَ شَطْرَ ٱلْمَسْجِدِ ٱلْحَرَامِ ۖ وَإِنَّهُۥ لَلْحَقُّ مِن رَّبِّكَ ۗ وَمَا ٱللَّهُ بِغَٰفِلٍ عَمَّا تَعْمَلُونَ
fr: Et d'où que tu sortes, tourne ton visage vers la Mosquée sacrée. Oui voilà bien la vérité venant de ton Seigneur. Et Allah n'est pas inattentif à ce que vous faites.
ph: Wa Min Ĥaythu Kharajta Fawalli Wajhaka Shaţra Al-Masjidi Al-Ĥarāmi Wa 'Innahu Lalĥaqqu Min Rabbika Wa Mā Allāhu Bighāfilin `Ammā Ta`malūna

2:150
ar: وَمِنْ حَيْثُ خَرَجْتَ فَوَلِّ وَجْهَكَ شَطْرَ ٱلْمَسْجِدِ ٱلْحَرَامِ ۚ وَحَيْثُ مَا كُنتُمْ فَوَلُّوا۟ وُجُوهَكُمْ شَطْرَهُۥ لِئَلَّا يَكُونَ لِلنَّاسِ عَلَيْكُمْ حُجَّةٌ إِلَّا ٱلَّذِينَ ظَلَمُوا۟ مِنْهُمْ فَلَا تَخْشَوْهُمْ وَٱخْشَوْنِى وَلِأُتِمَّ نِعْمَتِى عَلَيْكُمْ وَلَعَلَّكُمْ تَهْتَدُونَ
fr: Et d'où que tu sortes, tourne ton visage vers la Mosquée sacrée. Et où que vous soyez, tournez-y vos visages, afin que les gens n'aient pas d'argument contre vous, sauf ceux d'entre eux qui sont de vrais injustes. Ne les craignez donc pas; mais craignez-Moi pour que Je parachève Mon bienfait à votre égard, et que vous soyez bien guidés !
ph: Wa Min Ĥaythu Kharajta Fawalli Wajhaka Shaţra Al-Masjidi Al-Ĥarāmi Wa Ĥaythu Mā Kuntum Fawallū Wujūhakum Shaţrahu Li'allā Yakūna Lilnnāsi `Alaykum Ĥujjatun 'Illā Al-Ladhīna Žalamū Minhum Falā Takhshawhum Wa Akhshawnī Wa Li'atimma Ni`matī `Alaykum Wa La`allakum Tahtadūna

2:151
ar: كَمَآ أَرْسَلْنَا فِيكُمْ رَسُولًۭا مِّنكُمْ يَتْلُوا۟ عَلَيْكُمْ ءَايَٰتِنَا وَيُزَكِّيكُمْ وَيُعَلِّمُكُمُ ٱلْكِتَٰبَ وَٱلْحِكْمَةَ وَيُعَلِّمُكُم مَّا لَمْ تَكُونُوا۟ تَعْلَمُونَ
fr: Ainsi, Nous avons envoyé parmi vous un messager de chez vous qui vous récite Nos versets, vous purifie, vous enseigne le Livre et la Sagesse et vous enseigne ce que vous ne saviez pas.
ph: Kamā 'Arsalnā Fīkum Rasūlāan Minkum Yatlū `Alaykum 'Āyātinā Wa Yuzakkīkum Wa Yu`allimukumu Al-Kitāba Wa Al-Ĥikmata Wa Yu`allimukum Mā Lam Takūnū Ta`lamūna

2:152
ar: فَٱذْكُرُونِىٓ أَذْكُرْكُمْ وَٱشْكُرُوا۟ لِى وَلَا تَكْفُرُونِ
fr: Souvenez-vous de Moi donc. Je vous récompenserai. Remerciez-Moi et ne soyez pas ingrats envers Moi !
ph: Fādhkurūnī 'Adhkurkum Wa Ashkurū Lī Wa Lā Takfurūni

2:153
ar: يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ ٱسْتَعِينُوا۟ بِٱلصَّبْرِ وَٱلصَّلَوٰةِ ۚ إِنَّ ٱللَّهَ مَعَ ٱلصَّٰبِرِينَ
fr: Ô les croyants ! Cherchez secours dans l'endurance et la Salat. Car Allah est avec ceux qui sont endurants.
ph: Yā 'Ayyuhā Al-Ladhīna 'Āmanū Asta`īnū Biş-Şabri Wa Aş-Şalāati 'Inna Allāha Ma`a Aş-Şābirīna

2:154
ar: وَلَا تَقُولُوا۟ لِمَن يُقْتَلُ فِى سَبِيلِ ٱللَّهِ أَمْوَٰتٌۢ ۚ بَلْ أَحْيَآءٌۭ وَلَٰكِن لَّا تَشْعُرُونَ
fr: Et ne dites pas de ceux qui sont tués dans le sentier d'Allah qu'ils sont morts. Au contraire ils sont vivants, mais vous en êtes inconscients.
ph: Wa Lā Taqūlū Liman Yuqtalu Fī Sabīli Allāhi 'Amwātun Bal 'Aĥyā'un Wa Lakin Lā Tash`urūna

2:155
ar: وَلَنَبْلُوَنَّكُم بِشَىْءٍۢ مِّنَ ٱلْخَوْفِ وَٱلْجُوعِ وَنَقْصٍۢ مِّنَ ٱلْأَمْوَٰلِ وَٱلْأَنفُسِ وَٱلثَّمَرَٰتِ ۗ وَبَشِّرِ ٱلصَّٰبِرِينَ
fr: Très certainement, Nous vous éprouverons par un peu de peur, de faim et de diminution de biens, de personnes et de fruits. Et fais la bonne annonce aux endurants,
ph: Wa Lanabluwannakum Bishay'in Mina Al-Khawfi Wa Al-Jū`i Wa Naqşin Mina Al-'Amwli Wa Al-'Anfusi Wa Ath-Thamarāti Wa Bashiri Aş-Şābirīna

2:156
ar: ٱلَّذِينَ إِذَآ أَصَٰبَتْهُم مُّصِيبَةٌۭ قَالُوٓا۟ إِنَّا لِلَّهِ وَإِنَّآ إِلَيْهِ رَٰجِعُونَ
fr: qui disent, quand un malheur les atteint: « Certes nous sommes à Allah, et c'est à Lui que nous retournerons.
ph: Al-Ladhīna 'Idhā 'Aşābat/hum Muşībatun Qālū 'Innā Lillāhi Wa 'Innā 'Ilayhi Rāji`ūna

2:157
ar: أُو۟لَٰٓئِكَ عَلَيْهِمْ صَلَوَٰتٌۭ مِّن رَّبِّهِمْ وَرَحْمَةٌۭ ۖ وَأُو۟لَٰٓئِكَ هُمُ ٱلْمُهْتَدُونَ
fr: Ceux-là reçoivent des bénédictions de leur Seigneur, ainsi que la miséricorde; et ceux-là sont les biens guidés.
ph: 'Ūlā'ika `Alayhim Şalawātun Min Rabbihim Wa Raĥmatun Wa 'Ūlā'ika Humu Al-Muhtadūna

2:158
ar: ۞ إِنَّ ٱلصَّفَا وَٱلْمَرْوَةَ مِن شَعَآئِرِ ٱللَّهِ ۖ فَمَنْ حَجَّ ٱلْبَيْتَ أَوِ ٱعْتَمَرَ فَلَا جُنَاحَ عَلَيْهِ أَن يَطَّوَّفَ بِهِمَا ۚ وَمَن تَطَوَّعَ خَيْرًۭا فَإِنَّ ٱللَّهَ شَاكِرٌ عَلِيمٌ
fr: AS-Safâ et Al-Marwah sont vraiment parmi les lieux sacrés d'Allah. Donc, quiconque fait pèlerinage à la Maison ou fait l'Umra ne commet pas de péché en faisant le va-et-vient entre ces deux monts. Et quiconque fait de son propre gré une bonne œuvre, alors Allah est Reconnaissant, Omniscient.
ph: 'Inna Aş-Şafā Wa Al-Marwata Min Sha`ā'iri Allāhi Faman Ĥajja Al-Bayta 'Aw A`tamara Falā Junāĥa `Alayhi 'An Yaţţawwafa Bihimā Wa Man Taţawwa`a Khayrāan Fa'inna Allāha Shākirun `Alīmun

2:159
ar: إِنَّ ٱلَّذِينَ يَكْتُمُونَ مَآ أَنزَلْنَا مِنَ ٱلْبَيِّنَٰتِ وَٱلْهُدَىٰ مِنۢ بَعْدِ مَا بَيَّنَّٰهُ لِلنَّاسِ فِى ٱلْكِتَٰبِ ۙ أُو۟لَٰٓئِكَ يَلْعَنُهُمُ ٱللَّهُ وَيَلْعَنُهُمُ ٱللَّٰعِنُونَ
fr: Certes ceux qui cachent ce que Nous avons fait descendre en fait de preuves et de guide après l'exposé que Nous en avons fait aux gens, dans le Livre, voilà ceux qu'Allah maudit et que les maudisseurs maudissent,
ph: 'Inna Al-Ladhīna Yaktumūna Mā 'Anzalnā Mina Al-Bayyināti Wa Al-Hudá Min Ba`di Mā Bayyannāhu Lilnnāsi Fī Al-Kitābi 'Ūlā'ika Yal`anuhumu Allāhu Wa Yal`anuhumu Al-Lā`inūna

2:160
ar: إِلَّا ٱلَّذِينَ تَابُوا۟ وَأَصْلَحُوا۟ وَبَيَّنُوا۟ فَأُو۟لَٰٓئِكَ أَتُوبُ عَلَيْهِمْ ۚ وَأَنَا ٱلتَّوَّابُ ٱلرَّحِيمُ
fr: sauf ceux qui se sont repentis, corrigés et déclarés: d'eux Je reçois le repentir. Car c'est Moi, l'Accueillant au repentir, le Miséricordieux.
ph: 'Illā Al-Ladhīna Tābū Wa 'Aşlaĥū Wa Bayyanū Fa'ūlā'ika 'Atūbu `Alayhim Wa 'Anā At-Tawwābu Ar-Raĥīmu

2:161
ar: إِنَّ ٱلَّذِينَ كَفَرُوا۟ وَمَاتُوا۟ وَهُمْ كُفَّارٌ أُو۟لَٰٓئِكَ عَلَيْهِمْ لَعْنَةُ ٱللَّهِ وَٱلْمَلَٰٓئِكَةِ وَٱلنَّاسِ أَجْمَعِينَ
fr: Ceux qui ne croient pas et meurent mécréants, recevront la malédiction d'Allah, des Anges et de tous les hommes.
ph: 'Inna Al-Ladhīna Kafarū Wa Mātū Wa Hum Kuffārun 'Ūlā'ika `Alayhim La`natu Allāhi Wa Al-Malā'ikati Wa An-Nāsi 'Ajma`īna

2:162
ar: خَٰلِدِينَ فِيهَا ۖ لَا يُخَفَّفُ عَنْهُمُ ٱلْعَذَابُ وَلَا هُمْ يُنظَرُونَ
fr: Ils y demeureront éternellement; le châtiment ne leur sera pas allégé, et on ne leur accordera pas de répit.
ph: Khālidīna Fīhā Lā Yukhaffafu `Anhumu Al-`Adhābu Wa Lā Hum Yunžarūna

2:163
ar: وَإِلَٰهُكُمْ إِلَٰهٌۭ وَٰحِدٌۭ ۖ لَّآ إِلَٰهَ إِلَّا هُوَ ٱلرَّحْمَٰنُ ٱلرَّحِيمُ
fr: Et votre Divinité est une divinité unique. Pas de divinité à part Lui, le Tout Miséricordieux, le Très Miséricordieux.
ph: Wa 'Ilahukum 'Ilahun Wāĥidun Lā 'Ilāha 'Illā Huwa Ar-Raĥmānu Ar-Raĥīmu

2:164
ar: إِنَّ فِى خَلْقِ ٱلسَّمَٰوَٰتِ وَٱلْأَرْضِ وَٱخْتِلَٰفِ ٱلَّيْلِ وَٱلنَّهَارِ وَٱلْفُلْكِ ٱلَّتِى تَجْرِى فِى ٱلْبَحْرِ بِمَا يَنفَعُ ٱلنَّاسَ وَمَآ أَنزَلَ ٱللَّهُ مِنَ ٱلسَّمَآءِ مِن مَّآءٍۢ فَأَحْيَا بِهِ ٱلْأَرْضَ بَعْدَ مَوْتِهَا وَبَثَّ فِيهَا مِن كُلِّ دَآبَّةٍۢ وَتَصْرِيفِ ٱلرِّيَٰحِ وَٱلسَّحَابِ ٱلْمُسَخَّرِ بَيْنَ ٱلسَّمَآءِ وَٱلْأَرْضِ لَءَايَٰتٍۢ لِّقَوْمٍۢ يَعْقِلُونَ
fr: Certes dans la création des cieux et de la terre, dans l'alternance de la nuit et du jour, dans le navire qui vogue en mer chargé de choses profitables aux gens, dans l'eau qu'Allah fait descendre du ciel, par laquelle Il rend la vie à la terre une fois morte et y répand des bêtes de toute espèce, dans la variation des vents, et dans les nuages soumis entre le ciel et la terre, en tout cela il y a des signes, pour un peuple qui raisonne.
ph: 'Inna Fī Khalqi As-Samāwāti Wa Al-'Arđi Wa Akhtilāfi Al-Layli Wa An-Nahāri Wa Al-Fulki Allatī Tajrī Fī Al-Baĥri Bimā Yanfa`u An-Nāsa Wa Mā 'Anzala Allāhu Mina As-Samā'i Min Mā'in Fa'aĥyā Bihi Al-'Arđa Ba`da Mawtihā Wa Baththa Fīhā Min Kulli Dābbatin Wa Taşrīfi Ar-Riyāĥi Wa As-Saĥābi Al-Musakhkhari Bayna As-Samā'i Wa Al-'Arđi La'āyātin Liqawmin Ya`qilūna

2:165
ar: وَمِنَ ٱلنَّاسِ مَن يَتَّخِذُ مِن دُونِ ٱللَّهِ أَندَادًۭا يُحِبُّونَهُمْ كَحُبِّ ٱللَّهِ ۖ وَٱلَّذِينَ ءَامَنُوٓا۟ أَشَدُّ حُبًّۭا لِّلَّهِ ۗ وَلَوْ يَرَى ٱلَّذِينَ ظَلَمُوٓا۟ إِذْ يَرَوْنَ ٱلْعَذَابَ أَنَّ ٱلْقُوَّةَ لِلَّهِ جَمِيعًۭا وَأَنَّ ٱللَّهَ شَدِيدُ ٱلْعَذَابِ
fr: Parmi les hommes, il en est qui prennent, en dehors d'Allah, des égaux à Lui, en les aimant comme on aime Allah. Or les croyants sont les plus ardents en l'amour d'Allah. Quand les injustes verront le châtiment, ils sauront que la force tout entière est à Allah et qu'Allah est dur en châtiment !..
ph: Wa Mina An-Nāsi Man Yattakhidhu Min Dūni Allāhi 'Andādāan Yuĥibbūnahum Kaĥubbi Allāhi Wa Al-Ladhīna 'Āmanū 'Ashaddu Ĥubbāan Lillāhi Wa Law Yará Al-Ladhīna Žalamū 'Idh Yarawna Al-`Adhāba 'Anna Al-Qūwata Lillāhi Jamī`āan Wa 'Anna Allāha Shadīdu Al-`Adhābi

2:166
ar: إِذْ تَبَرَّأَ ٱلَّذِينَ ٱتُّبِعُوا۟ مِنَ ٱلَّذِينَ ٱتَّبَعُوا۟ وَرَأَوُا۟ ٱلْعَذَابَ وَتَقَطَّعَتْ بِهِمُ ٱلْأَسْبَابُ
fr: Quand les meneurs désavoueront les suiveurs à la vue du châtiment, les liens entre eux seront bien brisés !
ph: 'Idh Tabarra'a Al-Ladhīna Attubi`ū Mina Al-Ladhīna Attaba`ū Wa Ra'aw Al-`Adhāba Wa Taqaţţa`at Bihimu Al-'Asbābu

2:167
ar: وَقَالَ ٱلَّذِينَ ٱتَّبَعُوا۟ لَوْ أَنَّ لَنَا كَرَّةًۭ فَنَتَبَرَّأَ مِنْهُمْ كَمَا تَبَرَّءُوا۟ مِنَّا ۗ كَذَٰلِكَ يُرِيهِمُ ٱللَّهُ أَعْمَٰلَهُمْ حَسَرَٰتٍ عَلَيْهِمْ ۖ وَمَا هُم بِخَٰرِجِينَ مِنَ ٱلنَّارِ
fr: Et les suiveurs diront: « Ah ! Si un retour nous était possible ! Alors nous les désavouerions comme ils nous ont désavoués ! » -Ainsi Allah leur montra leurs actions; source de remords pour eux; mais ils ne pourront pas sortir du Feu.
ph: Wa Qāla Al-Ladhīna Attaba`ū Law 'Anna Lanā Karratan Fanatabarra'a Minhum Kamā Tabarra'ū Minnā Kadhālika Yurīhimu Allāhu 'A`mālahum Ĥasarātin `Alayhim Wa Mā Hum Bikhārijīna Mina An-Nāri

2:168
ar: يَٰٓأَيُّهَا ٱلنَّاسُ كُلُوا۟ مِمَّا فِى ٱلْأَرْضِ حَلَٰلًۭا طَيِّبًۭا وَلَا تَتَّبِعُوا۟ خُطُوَٰتِ ٱلشَّيْطَٰنِ ۚ إِنَّهُۥ لَكُمْ عَدُوٌّۭ مُّبِينٌ
fr: Ô gens ! De ce qui existe sur la terre; mangez le licite et le pur; ne suivez point les pas du Diable car il est vraiment pour vous, un ennemi déclaré.
ph: Yā 'Ayyuhā An-Nāsu Kulū Mimmā Fī Al-'Arđi Ĥalālāan Ţayyibāan Wa Lā Tattabi`ū Khuţuwāti Ash-Shayţāni 'Innahu Lakum `Adūwun Mubīn

2:169
ar: إِنَّمَا يَأْمُرُكُم بِٱلسُّوٓءِ وَٱلْفَحْشَآءِ وَأَن تَقُولُوا۟ عَلَى ٱللَّهِ مَا لَا تَعْلَمُونَ
fr: Il ne vous commande que le mal et la turpitude et de dire contre Allah ce que vous ne savez pas.
ph: 'Innamā Ya'murukum Bis-Sū'i Wa Al-Faĥshā'i Wa 'An Taqūlū `Alá Allāhi Mā Lā Ta`lamūna

2:170
ar: وَإِذَا قِيلَ لَهُمُ ٱتَّبِعُوا۟ مَآ أَنزَلَ ٱللَّهُ قَالُوا۟ بَلْ نَتَّبِعُ مَآ أَلْفَيْنَا عَلَيْهِ ءَابَآءَنَآ ۗ أَوَلَوْ كَانَ ءَابَآؤُهُمْ لَا يَعْقِلُونَ شَيْـًۭٔا وَلَا يَهْتَدُونَ
fr: Et quand on leur dit: « Suivez ce qu'Allah a fait descendre », ils disent: « Non, mais nous suivrons les coutumes de nos ancêtres. » -Quoi ! et si leurs ancêtres n'avaient rien raisonné et s'ils n'avaient pas été dans la bonne direction ?
ph: Wa 'Idhā Qīla Lahum Attabi`ū Mā 'Anzala Allāhu Qālū Bal Nattabi`u Mā 'Alfaynā `Alayhi 'Ābā'anā 'Awalaw Kāna 'Ābā'uuhum Lā Ya`qilūna Shay'āan Wa Lā Yahtadūna

2:171
ar: وَمَثَلُ ٱلَّذِينَ كَفَرُوا۟ كَمَثَلِ ٱلَّذِى يَنْعِقُ بِمَا لَا يَسْمَعُ إِلَّا دُعَآءًۭ وَنِدَآءًۭ ۚ صُمٌّۢ بُكْمٌ عُمْىٌۭ فَهُمْ لَا يَعْقِلُونَ
fr: Les mécréants ressemblent à [du bétail] auquel on crie et qui entend seulement appel et voix confus. Sourds, muets, aveugles, ils ne raisonnent point.
ph: Wa Mathalu Al-Ladhīna Kafarū Kamathali Al-Ladhī Yan`iqu Bimā Lā Yasma`u 'Illā Du`ā'an Wa Nidā'an Şummun Bukmun `Umyun Fahum Lā Ya`qilūna

2:172
ar: يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ كُلُوا۟ مِن طَيِّبَٰتِ مَا رَزَقْنَٰكُمْ وَٱشْكُرُوا۟ لِلَّهِ إِن كُنتُمْ إِيَّاهُ تَعْبُدُونَ
fr: Ô les croyants ! Mangez des (nourritures) licites que Nous vous avons attribuées. Et remerciez Allah, si c'est Lui que vous adorez.
ph: Yā 'Ayyuhā Al-Ladhīna 'Āmanū Kulū Min Ţayyibāti Mā Razaqnākum Wa Ashkurū Lillāhi 'In Kuntum 'Īyāhu Ta`budūna

2:173
ar: إِنَّمَا حَرَّمَ عَلَيْكُمُ ٱلْمَيْتَةَ وَٱلدَّمَ وَلَحْمَ ٱلْخِنزِيرِ وَمَآ أُهِلَّ بِهِۦ لِغَيْرِ ٱللَّهِ ۖ فَمَنِ ٱضْطُرَّ غَيْرَ بَاغٍۢ وَلَا عَادٍۢ فَلَآ إِثْمَ عَلَيْهِ ۚ إِنَّ ٱللَّهَ غَفُورٌۭ رَّحِيمٌ
fr: Certes, Il vous interdit la chair d'une bête morte, le sang, la viande de porc et ce sur quoi on a invoqué un autre qu'Allah. Il n'y a pas de péché sur celui qui est contraint sans toutefois abuser ni transgresser, car Allah est Pardonneur et Miséricordieux.
ph: 'Innamā Ĥarrama `Alaykumu Al-Maytata Wa Ad-Dama Wa Laĥma Al-Khinzīri Wa Mā 'Uhilla Bihi Lighayri Allāhi Famani Ađţurra Ghayra Bāghin Wa Lā `Ādin Falā 'Ithma `Alayhi 'Inna Allāha Ghafūrun Raĥīmun

2:174
ar: إِنَّ ٱلَّذِينَ يَكْتُمُونَ مَآ أَنزَلَ ٱللَّهُ مِنَ ٱلْكِتَٰبِ وَيَشْتَرُونَ بِهِۦ ثَمَنًۭا قَلِيلًا ۙ أُو۟لَٰٓئِكَ مَا يَأْكُلُونَ فِى بُطُونِهِمْ إِلَّا ٱلنَّارَ وَلَا يُكَلِّمُهُمُ ٱللَّهُ يَوْمَ ٱلْقِيَٰمَةِ وَلَا يُزَكِّيهِمْ وَلَهُمْ عَذَابٌ أَلِيمٌ
fr: Ceux qui cachent ce qu'Allah a fait descendre du Livre et le vendent à vil prix, ceux-là ne s'emplissent le ventre que de Feu. Allah ne leur adressera pas la parole, au Jour de la Résurrection, et ne les purifiera pas. Et il y aura pour eux un douloureux châtiment.
ph: 'Inna Al-Ladhīna Yaktumūna Mā 'Anzala Allāhu Mina Al-Kitābi Wa Yashtarūna Bihi Thamanāan Qalīlāan 'Ūlā'ika Mā Ya'kulūna Fī Buţūnihim 'Illā An-Nāra Wa Lā Yukallimuhumu Allāhu Yawma Al-Qiyāmati Wa Lā Yuzakkīhim Wa Lahum `Adhābun 'Alīmun

2:175
ar: أُو۟لَٰٓئِكَ ٱلَّذِينَ ٱشْتَرَوُا۟ ٱلضَّلَٰلَةَ بِٱلْهُدَىٰ وَٱلْعَذَابَ بِٱلْمَغْفِرَةِ ۚ فَمَآ أَصْبَرَهُمْ عَلَى ٱلنَّارِ
fr: Ceux-là ont échangé la bonne direction contre l'égarement et le pardon contre le châtiment. Qu'est-ce qui leur fera supporter le Feu ?!
ph: 'Ūlā'ika Al-Ladhīna Ashtaraw Ađ-Đalālata Bil-Hudá Wa Al-`Adhāba Bil-Maghfirati Famā 'Aşbarahum `Alá An-Nāri

2:176
ar: ذَٰلِكَ بِأَنَّ ٱللَّهَ نَزَّلَ ٱلْكِتَٰبَ بِٱلْحَقِّ ۗ وَإِنَّ ٱلَّذِينَ ٱخْتَلَفُوا۟ فِى ٱلْكِتَٰبِ لَفِى شِقَاقٍۭ بَعِيدٍۢ
fr: C'est ainsi, car c'est avec la vérité qu'Allah a fait descendre le Livre; et ceux qui s'opposent au sujet du Livre sont dans une profonde divergence.
ph: Dhālika Bi'anna Allāha Nazzala Al-Kitāba Bil-Ĥaqqi Wa 'Inna Al-Ladhīna Akhtalafū Fī Al-Kitābi Lafī Shiqāqin Ba`īdin

2:177
ar: ۞ لَّيْسَ ٱلْبِرَّ أَن تُوَلُّوا۟ وُجُوهَكُمْ قِبَلَ ٱلْمَشْرِقِ وَٱلْمَغْرِبِ وَلَٰكِنَّ ٱلْبِرَّ مَنْ ءَامَنَ بِٱللَّهِ وَٱلْيَوْمِ ٱلْءَاخِرِ وَٱلْمَلَٰٓئِكَةِ وَٱلْكِتَٰبِ وَٱلنَّبِيِّۦنَ وَءَاتَى ٱلْمَالَ عَلَىٰ حُبِّهِۦ ذَوِى ٱلْقُرْبَىٰ وَٱلْيَتَٰمَىٰ وَٱلْمَسَٰكِينَ وَٱبْنَ ٱلسَّبِيلِ وَٱلسَّآئِلِينَ وَفِى ٱلرِّقَابِ وَأَقَامَ ٱلصَّلَوٰةَ وَءَاتَى ٱلزَّكَوٰةَ وَٱلْمُوفُونَ بِعَهْدِهِمْ إِذَا عَٰهَدُوا۟ ۖ وَٱلصَّٰبِرِينَ فِى ٱلْبَأْسَآءِ وَٱلضَّرَّآءِ وَحِينَ ٱلْبَأْسِ ۗ أُو۟لَٰٓئِكَ ٱلَّذِينَ صَدَقُوا۟ ۖ وَأُو۟لَٰٓئِكَ هُمُ ٱلْمُتَّقُونَ
fr: La bonté pieuse ne consiste pas à tourner vos visages vers le Levant ou le Couchant. Mais la bonté pieuse est de croire en Allah, au Jour dernier, aux Anges, au Livre et aux prophètes, de donner de son bien, quelqu'amour qu'on en ait, aux proches, aux orphelins, aux nécessiteux, aux voyageurs indigents et à ceux qui demandent l'aide et pour délier les jougs, d'accomplir la Salat et d'acquitter la Zakat. Et ceux qui remplissent leurs engagements lorsqu'ils se sont engagés, ceux qui sont endurants dans la misère, la maladie et quand les combats font rage, les voilà les véridiques et les voilà les vrais pieux !
ph: Laysa Al-Birra 'An Tuwallū Wujūhakum Qibala Al-Mashriqi Wa Al-Maghribi Wa Lakinna Al-Birra Man 'Āmana Billāhi Wa Al-Yawmi Al-'Ākhiri Wa Al-Malā'ikati Wa Al-Kitābi Wa An-Nabīyīna Wa 'Ātá Al-Māla `Alá Ĥubbihi Dhawī Al-Qurbá Wa Al-Yatāmá Wa Al-Masākīna Wa Abna As-Sabīli Wa As-Sā'ilīna Wa Fī Ar-Riqābi Wa 'Aqāma Aş-Şalāata Wa 'Ātá Az-Zakāata Wa Al-Mūfūna Bi`ahdihim 'Idhā `Āhadū Wa Aş-Şābirīna Fī Al-Ba'sā'i Wa Ađ-Đarrā'i Wa Ĥīna Al-Ba'si 'Ūlā'ika Al-Ladhīna Şadaqū Wa 'Ūlā'ika Humu Al-Muttaqūna

2:178
ar: يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ كُتِبَ عَلَيْكُمُ ٱلْقِصَاصُ فِى ٱلْقَتْلَى ۖ ٱلْحُرُّ بِٱلْحُرِّ وَٱلْعَبْدُ بِٱلْعَبْدِ وَٱلْأُنثَىٰ بِٱلْأُنثَىٰ ۚ فَمَنْ عُفِىَ لَهُۥ مِنْ أَخِيهِ شَىْءٌۭ فَٱتِّبَاعٌۢ بِٱلْمَعْرُوفِ وَأَدَآءٌ إِلَيْهِ بِإِحْسَٰنٍۢ ۗ ذَٰلِكَ تَخْفِيفٌۭ مِّن رَّبِّكُمْ وَرَحْمَةٌۭ ۗ فَمَنِ ٱعْتَدَىٰ بَعْدَ ذَٰلِكَ فَلَهُۥ عَذَابٌ أَلِيمٌۭ
fr: Ô les croyants ! On vous a prescrit le talion au sujet des tués: homme libre pour homme libre, esclave pour esclave, femme pour femme. Mais celui à qui son frère aura pardonné en quelque façon doit faire face à une requête convenable et doit payer des dommages de bonne grâce. Ceci est un allègement de la part de votre Seigneur, et une miséricorde. Donc, quiconque après cela transgresse, aura un châtiment douloureux.
ph: Yā 'Ayyuhā Al-Ladhīna 'Āmanū Kutiba `Alaykumu Al-Qişāşu Fī Al-Qatlá Al-Ĥurru Bil-Ĥurri Wa Al-`Abdu Bil-`Abdi Wa Al-'Unthá Bil-'Unthá Faman `Ufiya Lahu Min 'Akhīhi Shay'un Fa Attibā`un Bil-Ma`rūfi Wa 'Adā'un 'Ilayhi Bi'iĥsānin Dhālika Takhfīfun Min Rabbikum Wa Raĥmatun Famani A`tadá Ba`da Dhālika Falahu `Adhābun 'Alīmun

2:179
ar: وَلَكُمْ فِى ٱلْقِصَاصِ حَيَوٰةٌۭ يَٰٓأُو۟لِى ٱلْأَلْبَٰبِ لَعَلَّكُمْ تَتَّقُونَ
fr: C'est dans le talion que vous aurez la préservation de la vie, Ô vous doués d'intelligence, ainsi atteindrez-vous la piété.
ph: Wa Lakum Fī Al-Qişāşi Ĥayāatun Yā 'Ūlī Al-'Albābi La`allakum Tattaqūna

2:180
ar: كُتِبَ عَلَيْكُمْ إِذَا حَضَرَ أَحَدَكُمُ ٱلْمَوْتُ إِن تَرَكَ خَيْرًا ٱلْوَصِيَّةُ لِلْوَٰلِدَيْنِ وَٱلْأَقْرَبِينَ بِٱلْمَعْرُوفِ ۖ حَقًّا عَلَى ٱلْمُتَّقِينَ
fr: On vous a prescrit, quand la mort est proche de l'un de vous et s'il laisse des biens, de faire un testament en règle en faveur de ses père et mère et de ses plus proches. C'est un devoir pour les pieux.
ph: Kutiba `Alaykum 'Idhā Ĥađara 'Aĥadakumu Al-Mawtu 'In Taraka Khayrāan Al-Waşīyatu Lilwālidayni Wa Al-'Aqrabīna Bil-Ma`rūfi Ĥaqqāan `Alá Al-Muttaqīna

2:181
ar: فَمَنۢ بَدَّلَهُۥ بَعْدَمَا سَمِعَهُۥ فَإِنَّمَآ إِثْمُهُۥ عَلَى ٱلَّذِينَ يُبَدِّلُونَهُۥٓ ۚ إِنَّ ٱللَّهَ سَمِيعٌ عَلِيمٌۭ
fr: Quiconque l'altère après l'avoir entendu, le péché ne reposera que sur ceux qui l'ont altéré; certes, Allah est Audient et Omniscient.
ph: Faman Baddalahu Ba`damā Sami`ahu Fa'innamā 'Ithmuhu `Alá Al-Ladhīna Yubaddilūnahu 'Inna Allāha Samī`un `Alīmun

2:182
ar: فَمَنْ خَافَ مِن مُّوصٍۢ جَنَفًا أَوْ إِثْمًۭا فَأَصْلَحَ بَيْنَهُمْ فَلَآ إِثْمَ عَلَيْهِ ۚ إِنَّ ٱللَّهَ غَفُورٌۭ رَّحِيمٌۭ
fr: Mais quiconque craint d'un testateur quelque partialité (volontaire ou involontaire), et les réconcilie, alors, pas de péché sur lui car Allah est certes Pardonneur et Miséricordieux !
ph: Faman Khāfa Min Mūşin Janafāan 'Aw 'Ithmāan Fa'aşlaĥa Baynahum Falā 'Ithma `Alayhi 'Inna Allāha Ghafūrun Raĥīmun

2:183
ar: يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ كُتِبَ عَلَيْكُمُ ٱلصِّيَامُ كَمَا كُتِبَ عَلَى ٱلَّذِينَ مِن قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُونَ
fr: Ô les croyants ! On vous a prescrit as-Siyâm comme on l'a prescrit à ceux d'avant vous, ainsi atteindrez-vous la piété,
ph: Yā 'Ayyuhā Al-Ladhīna 'Āmanū Kutiba `Alaykumu Aş-Şiyāmu Kamā Kutiba `Alá Al-Ladhīna Min Qablikum La`allakum Tattaqūna

2:184
ar: أَيَّامًۭا مَّعْدُودَٰتٍۢ ۚ فَمَن كَانَ مِنكُم مَّرِيضًا أَوْ عَلَىٰ سَفَرٍۢ فَعِدَّةٌۭ مِّنْ أَيَّامٍ أُخَرَ ۚ وَعَلَى ٱلَّذِينَ يُطِيقُونَهُۥ فِدْيَةٌۭ طَعَامُ مِسْكِينٍۢ ۖ فَمَن تَطَوَّعَ خَيْرًۭا فَهُوَ خَيْرٌۭ لَّهُۥ ۚ وَأَن تَصُومُوا۟ خَيْرٌۭ لَّكُمْ ۖ إِن كُنتُمْ تَعْلَمُونَ
fr: pendant un nombre déterminé de jours. Quiconque d'entre vous est malade ou en voyage, devra jeûner un nombre égal d'autres jours. Mais pour ceux qui ne pourraient le supporter qu'(avec grande difficulté), il y a une compensation: nourrir un pauvre. Et si quelqu'un fait plus de son propre gré, c'est pour lui; mais il est mieux pour vous de jeûner; si vous saviez !
ph: 'Ayyāmāan Ma`dūdātin Faman Kāna Minkum Marīđāan 'Aw `Alá Safarin Fa`iddatun Min 'Ayyāmin 'Ukhara Wa `Alá Al-Ladhīna Yuţīqūnahu Fidyatun Ţa`āmu Miskīnin Faman Taţawwa`a Khayrāan Fahuwa Khayrun Lahu Wa 'An Taşūmū Khayrun Lakum 'In Kuntum Ta`lamūna

2:185
ar: شَهْرُ رَمَضَانَ ٱلَّذِىٓ أُنزِلَ فِيهِ ٱلْقُرْءَانُ هُدًۭى لِّلنَّاسِ وَبَيِّنَٰتٍۢ مِّنَ ٱلْهُدَىٰ وَٱلْفُرْقَانِ ۚ فَمَن شَهِدَ مِنكُمُ ٱلشَّهْرَ فَلْيَصُمْهُ ۖ وَمَن كَانَ مَرِيضًا أَوْ عَلَىٰ سَفَرٍۢ فَعِدَّةٌۭ مِّنْ أَيَّامٍ أُخَرَ ۗ يُرِيدُ ٱللَّهُ بِكُمُ ٱلْيُسْرَ وَلَا يُرِيدُ بِكُمُ ٱلْعُسْرَ وَلِتُكْمِلُوا۟ ٱلْعِدَّةَ وَلِتُكَبِّرُوا۟ ٱللَّهَ عَلَىٰ مَا هَدَىٰكُمْ وَلَعَلَّكُمْ تَشْكُرُونَ
fr: (Ces jours sont) le mois de Ramadân au cours duquel le Coran a été descendu comme guide pour les gens, et preuves claires de la bonne direction et du discernement. Donc, quiconque d'entre vous est présent en ce mois, qu'il jeûne ! Et quiconque est malade ou en voyage, alors qu'il jeûne un nombre égal d'autres jours. -Allah veut pour vous la facilité, Il ne veut pas la difficulté pour vous, afin que vous en complétiez le nombre et que vous proclamiez la grandeur d'Allah pour vous avoir guidés, et afin que vous soyez reconnaissants !
ph: Shahru Ramađāna Al-Ladhī 'Unzila Fīhi Al-Qur'ānu Hudáan Lilnnāsi Wa Bayyinātin Mina Al-Hudá Wa Al-Furqāni Faman Shahida Minkumu Ash-Shahra Falyaşumhu Wa Man Kāna Marīđāan 'Aw `Alá Safarin Fa`iddatun Min 'Ayyāmin 'Ukhara Yurīdu Allāhu Bikumu Al-Yusra Wa Lā Yurīdu Bikumu Al-`Usra Wa Litukmilū Al-`Iddata Wa Litukabbirū Allāha `Alá Mā Hadākum Wa La`allakum Tashkurūna

2:186
ar: وَإِذَا سَأَلَكَ عِبَادِى عَنِّى فَإِنِّى قَرِيبٌ ۖ أُجِيبُ دَعْوَةَ ٱلدَّاعِ إِذَا دَعَانِ ۖ فَلْيَسْتَجِيبُوا۟ لِى وَلْيُؤْمِنُوا۟ بِى لَعَلَّهُمْ يَرْشُدُونَ
fr: Et quand Mes serviteurs t'interrogent sur Moi... alors Je suis tout proche: Je réponds à l'appel de celui qui Me prie quand il Me prie. Qu'ils répondent à Mon appel, et qu'ils croient en Moi, afin qu'ils soient bien guidés.
ph: Wa 'Idhā Sa'alaka `Ibādī `Annī Fa'innī Qarībun 'Ujību Da`wata Ad-Dā`i 'Idhā Da`āni Falyastajībū Lī Wa Līu'uminū Bī La`allahum Yarshudūna

2:187
ar: أُحِلَّ لَكُمْ لَيْلَةَ ٱلصِّيَامِ ٱلرَّفَثُ إِلَىٰ نِسَآئِكُمْ ۚ هُنَّ لِبَاسٌۭ لَّكُمْ وَأَنتُمْ لِبَاسٌۭ لَّهُنَّ ۗ عَلِمَ ٱللَّهُ أَنَّكُمْ كُنتُمْ تَخْتَانُونَ أَنفُسَكُمْ فَتَابَ عَلَيْكُمْ وَعَفَا عَنكُمْ ۖ فَٱلْـَٰٔنَ بَٰشِرُوهُنَّ وَٱبْتَغُوا۟ مَا كَتَبَ ٱللَّهُ لَكُمْ ۚ وَكُلُوا۟ وَٱشْرَبُوا۟ حَتَّىٰ يَتَبَيَّنَ لَكُمُ ٱلْخَيْطُ ٱلْأَبْيَضُ مِنَ ٱلْخَيْطِ ٱلْأَسْوَدِ مِنَ ٱلْفَجْرِ ۖ ثُمَّ أَتِمُّوا۟ ٱلصِّيَامَ إِلَى ٱلَّيْلِ ۚ وَلَا تُبَٰشِرُوهُنَّ وَأَنتُمْ عَٰكِفُونَ فِى ٱلْمَسَٰجِدِ ۗ تِلْكَ حُدُودُ ٱللَّهِ فَلَا تَقْرَبُوهَا ۗ كَذَٰلِكَ يُبَيِّنُ ٱللَّهُ ءَايَٰتِهِۦ لِلنَّاسِ لَعَلَّهُمْ يَتَّقُونَ
fr: On vous a permis, la nuit d'as-Siyâm, d'avoir des rapports avec vos femmes; elles sont un vêtement pour vous et vous êtes un vêtement pour elles. Allah sait que vous aviez clandestinement des rapports avec vos femmes. Il vous a pardonné et vous a graciés. Cohabitez donc avec elles, maintenant, et cherchez ce qu'Allah a prescrit en votre faveur; mangez et buvez jusqu'à ce que se distingue, pour vous, le fil blanc de l'aube du fil noir de la nuit. Puis accomplissez le jeûne jusqu'à la nuit. Mais ne cohabitez pas avec elles pendant que vous êtes en retraite rituelle dans les mosquées. Voilà les lois d'Allah: ne vous en approchez donc pas (pour les transgresser). C'est ainsi qu'Allah expose aux hommes Ses enseignements, afin qu'ils deviennent pieux !
ph: 'Uĥilla Lakum Laylata Aş-Şiyāmi Ar-Rafathu 'Ilá Nisā'ikum Hunna Libāsun Lakum Wa 'Antum Libāsun Lahunna `Alima Allāhu 'Annakum Kuntum Takhtānūna 'Anfusakum Fatāba `Alaykum Wa `Afā `Ankum Fāl'āna Bāshirūhunna Wa Abtaghū Mā Kataba Allāhu Lakum Wa Kulū Wa Ashrabū Ĥattá Yatabayyana Lakumu Al-Khayţu Al-'Abyađu Mina Al-Khayţi Al-'Aswadi Mina Al-Fajri Thumma 'Atimmū Aş-Şiyāma 'Ilá Al-Layli Wa Lā Tubāshirūhunna Wa 'Antum `Ākifūna Fī Al-Masājidi Tilka Ĥudūdu Allāhi Falā Taqrabūhā Kadhālika Yubayyinu Allāhu 'Āyātihi Lilnnāsi La`allahum Yattaqūna

2:188
ar: وَلَا تَأْكُلُوٓا۟ أَمْوَٰلَكُم بَيْنَكُم بِٱلْبَٰطِلِ وَتُدْلُوا۟ بِهَآ إِلَى ٱلْحُكَّامِ لِتَأْكُلُوا۟ فَرِيقًۭا مِّنْ أَمْوَٰلِ ٱلنَّاسِ بِٱلْإِثْمِ وَأَنتُمْ تَعْلَمُونَ
fr: Et ne dévorez pas mutuellement et illicitement vos biens; et ne vous en servez pas pour corrompre des juges pour vous permettre de dévorer une partie des biens des gens, injustement et sciemment.
ph: Wa Lā Ta'kulū 'Amwālakum Baynakum Bil-Bāţili Wa Tudlū Bihā 'Ilá Al-Ĥukkāmi Lita'kulū Farīqāan Min 'Amwāli An-Nāsi Bil-'Ithmi Wa 'Antum Ta`lamūna

2:189
ar: ۞ يَسْـَٔلُونَكَ عَنِ ٱلْأَهِلَّةِ ۖ قُلْ هِىَ مَوَٰقِيتُ لِلنَّاسِ وَٱلْحَجِّ ۗ وَلَيْسَ ٱلْبِرُّ بِأَن تَأْتُوا۟ ٱلْبُيُوتَ مِن ظُهُورِهَا وَلَٰكِنَّ ٱلْبِرَّ مَنِ ٱتَّقَىٰ ۗ وَأْتُوا۟ ٱلْبُيُوتَ مِنْ أَبْوَٰبِهَا ۚ وَٱتَّقُوا۟ ٱللَّهَ لَعَلَّكُمْ تُفْلِحُونَ
fr: Ils t'interrogent sur les nouvelles lunes -Dis: « Elles servent aux gens pour compter le temps, et aussi pour le hajj [pèlerinage]. Et ce n'est pas un acte de bienfaisance que de rentrer chez vous par l'arrière des maisons. Mais la bonté pieuse consiste à craindre Allah. Entrez donc dans les maisons par leurs portes. Et craignez Allah, afin que vous réussissiez !
ph: Yas'alūnaka `Ani Al-'Ahillati Qul Hiya Mawāqītu Lilnnāsi Wa Al-Ĥajji Wa Laysa Al-Birru Bi'an Ta'tū Al-Buyūta Min Žuhūrihā Wa Lakinna Al-Birra Mani Attaqá Wa 'Tū Al-Buyūta Min 'Abwābihā Wa Attaqū Allāha La`allakum Tufliĥūna

2:190
ar: وَقَٰتِلُوا۟ فِى سَبِيلِ ٱللَّهِ ٱلَّذِينَ يُقَٰتِلُونَكُمْ وَلَا تَعْتَدُوٓا۟ ۚ إِنَّ ٱللَّهَ لَا يُحِبُّ ٱلْمُعْتَدِينَ
fr: Combattez dans le sentier d'Allah ceux qui vous combattent, et ne transgressez pas. Certes, Allah n'aime pas les transgresseurs !
ph: Wa Qātilū Fī Sabīli Allāhi Al-Ladhīna Yuqātilūnakum Wa Lā Ta`tadū 'Inna Allāha Lā Yuĥibbu Al-Mu`tadīna

2:191
ar: وَٱقْتُلُوهُمْ حَيْثُ ثَقِفْتُمُوهُمْ وَأَخْرِجُوهُم مِّنْ حَيْثُ أَخْرَجُوكُمْ ۚ وَٱلْفِتْنَةُ أَشَدُّ مِنَ ٱلْقَتْلِ ۚ وَلَا تُقَٰتِلُوهُمْ عِندَ ٱلْمَسْجِدِ ٱلْحَرَامِ حَتَّىٰ يُقَٰتِلُوكُمْ فِيهِ ۖ فَإِن قَٰتَلُوكُمْ فَٱقْتُلُوهُمْ ۗ كَذَٰلِكَ جَزَآءُ ٱلْكَٰفِرِينَ
fr: Et tuez-les, où que vous les rencontriez; et chassez-les d'où ils vous ont chassés: l'association est plus grave que le meurtre. Mais ne les combattez pas près de la Mosquée sacrée avant qu'ils ne vous y aient combattus. S'ils vous y combattent, tuez-les donc. Telle est la rétribution des mécréants.
ph: Wāqtulūhum Ĥaythu Thaqiftumūhum Wa 'Akhrijūhum Min Ĥaythu 'Akhrajūkum Wa Al-Fitnatu 'Ashaddu Mina Al-Qatli Wa Lā Tuqātilūhum `Inda Al-Masjidi Al-Ĥarāmi Ĥattá Yuqātilūkum Fīhi Fa'in Qātalūkum Fāqtulūhum Kadhālika Jazā'u Al-Kāfirīna

2:192
ar: فَإِنِ ٱنتَهَوْا۟ فَإِنَّ ٱللَّهَ غَفُورٌۭ رَّحِيمٌۭ
fr: S'ils cessent, Allah est, certes, Pardonneur et Miséricordieux.
ph: Fa'ini Antahaw Fa'inna Allāha Ghafūrun Raĥīmun

2:193
ar: وَقَٰتِلُوهُمْ حَتَّىٰ لَا تَكُونَ فِتْنَةٌۭ وَيَكُونَ ٱلدِّينُ لِلَّهِ ۖ فَإِنِ ٱنتَهَوْا۟ فَلَا عُدْوَٰنَ إِلَّا عَلَى ٱلظَّٰلِمِينَ
fr: Et combattez-les jusqu'à ce qu'il n'y ait plus d'association et que la religion soit entièrement à Allah seul. S'ils cessent, donc plus d'hostilités, sauf contre les injustes.
ph: Wa Qātilūhum Ĥattá Lā Takūna Fitnatun Wa Yakūna Ad-Dīnu Lillāhi Fa'ini Antahaw Falā `Udwāna 'Illā `Alá Až-Žālimīna

2:194
ar: ٱلشَّهْرُ ٱلْحَرَامُ بِٱلشَّهْرِ ٱلْحَرَامِ وَٱلْحُرُمَٰتُ قِصَاصٌۭ ۚ فَمَنِ ٱعْتَدَىٰ عَلَيْكُمْ فَٱعْتَدُوا۟ عَلَيْهِ بِمِثْلِ مَا ٱعْتَدَىٰ عَلَيْكُمْ ۚ وَٱتَّقُوا۟ ٱللَّهَ وَٱعْلَمُوٓا۟ أَنَّ ٱللَّهَ مَعَ ٱلْمُتَّقِينَ
fr: Le Mois sacré pour le mois sacré ! -Le talion s'applique à toutes choses sacrées -. Donc, quiconque transgresse contre vous, transgressez contre lui, à transgression égale. Et craignez Allah. Et sachez qu'Allah est avec les pieux.
ph: Ash-Shahru Al-Ĥarāmu Bish-Shahri Al-Ĥarāmi Wa Al-Ĥurumātu Qişāşun Famani A`tadá `Alaykum Fā`tadū `Alayhi Bimithli Mā A`tadá `Alaykum Wa Attaqū Allāha Wa A`lamū 'Anna Allāha Ma`a Al-Muttaqīna

2:195
ar: وَأَنفِقُوا۟ فِى سَبِيلِ ٱللَّهِ وَلَا تُلْقُوا۟ بِأَيْدِيكُمْ إِلَى ٱلتَّهْلُكَةِ ۛ وَأَحْسِنُوٓا۟ ۛ إِنَّ ٱللَّهَ يُحِبُّ ٱلْمُحْسِنِينَ
fr: Et dépensez dans le sentier d'Allah. Et ne vous jetez pas par vos propres mains dans la destruction. Et faites le bien. Car Allah aime les bienfaisants.
ph: Wa 'Anfiqū Fī Sabīli Allāhi Wa Lā Tulqū Bi'aydīkum 'Ilá At-Tahlukati Wa 'Aĥsinū 'Inna Allāha Yuĥibbu Al-Muĥsinīna

2:196
ar: وَأَتِمُّوا۟ ٱلْحَجَّ وَٱلْعُمْرَةَ لِلَّهِ ۚ فَإِنْ أُحْصِرْتُمْ فَمَا ٱسْتَيْسَرَ مِنَ ٱلْهَدْىِ ۖ وَلَا تَحْلِقُوا۟ رُءُوسَكُمْ حَتَّىٰ يَبْلُغَ ٱلْهَدْىُ مَحِلَّهُۥ ۚ فَمَن كَانَ مِنكُم مَّرِيضًا أَوْ بِهِۦٓ أَذًۭى مِّن رَّأْسِهِۦ فَفِدْيَةٌۭ مِّن صِيَامٍ أَوْ صَدَقَةٍ أَوْ نُسُكٍۢ ۚ فَإِذَآ أَمِنتُمْ فَمَن تَمَتَّعَ بِٱلْعُمْرَةِ إِلَى ٱلْحَجِّ فَمَا ٱسْتَيْسَرَ مِنَ ٱلْهَدْىِ ۚ فَمَن لَّمْ يَجِدْ فَصِيَامُ ثَلَٰثَةِ أَيَّامٍۢ فِى ٱلْحَجِّ وَسَبْعَةٍ إِذَا رَجَعْتُمْ ۗ تِلْكَ عَشَرَةٌۭ كَامِلَةٌۭ ۗ ذَٰلِكَ لِمَن لَّمْ يَكُنْ أَهْلُهُۥ حَاضِرِى ٱلْمَسْجِدِ ٱلْحَرَامِ ۚ وَٱتَّقُوا۟ ٱللَّهَ وَٱعْلَمُوٓا۟ أَنَّ ٱللَّهَ شَدِيدُ ٱلْعِقَابِ
fr: Et accomplissez pour Allah le pèlerinage et l'Umra. Si vous en êtes empêchés, alors faites un sacrifice qui vous soit facile. Et ne rasez pas vos têtes avant que l'offrande [l'animal à sacrifier] n'ait atteint son lieu d'immolation. Si l'un d'entre vous est malade ou souffre d'une affection de la tête (et doit se raser), qu'il se rachète alors par un Siyâm ou par une aumône ou par un sacrifice. Quand vous retrouverez ensuite la paix, quiconque a joui d'une vie normale après avoir fait l'Umra en attendant le pèlerinage, doit faire un sacrifice qui lui soit facile. S'il n'a pas les moyens qu'il jeûne trois jours pendant le pèlerinage et sept jours une fois rentré chez lui, soit en tout dix jours. Cela est prescrit pour celui dont la famille n'habite pas auprès de la Mosquée sacrée. Et craignez Allah. Et sachez qu'Allah est dur en punition.
ph: Wa 'Atimmū Al-Ĥajja Wa Al-`Umrata Lillāhi Fa'in 'Uĥşirtum Famā Astaysara Mina Al-Hadyi Wa Lā Taĥliqū Ru'ūsakum Ĥattá Yablugha Al-Hadyu Maĥillahu Faman Kāna Minkum Marīđāan 'Aw Bihi 'Adháan Min Ra'sihi Fafidyatun Min Şiyāmin 'Aw Şadaqatin 'Aw Nusukin Fa'idhā 'Amintum Faman Tamatta`a Bil-`Umrati 'Ilá Al-Ĥajji Famā Astaysara Mina Al-Hadyi Faman Lam Yajid Faşiyāmu Thalāthati 'Ayyāmin Fī Al-Ĥajji Wa Sab`atin 'Idhā Raja`tum Tilka `Asharatun Kāmilatun Dhālika Liman Lam Yakun 'Ahluhu Ĥāđirī Al-Masjidi Al-Ĥarāmi Wa Attaqū Allāha Wa A`lamū 'Anna Allāha Shadīdu Al-`Iqābi

2:197
ar: ٱلْحَجُّ أَشْهُرٌۭ مَّعْلُومَٰتٌۭ ۚ فَمَن فَرَضَ فِيهِنَّ ٱلْحَجَّ فَلَا رَفَثَ وَلَا فُسُوقَ وَلَا جِدَالَ فِى ٱلْحَجِّ ۗ وَمَا تَفْعَلُوا۟ مِنْ خَيْرٍۢ يَعْلَمْهُ ٱللَّهُ ۗ وَتَزَوَّدُوا۟ فَإِنَّ خَيْرَ ٱلزَّادِ ٱلتَّقْوَىٰ ۚ وَٱتَّقُونِ يَٰٓأُو۟لِى ٱلْأَلْبَٰبِ
fr: Le pèlerinage a lieu dans des mois connus. Si l'on se décide de l'accomplir, alors point de rapport sexuel, point de perversité, point de dispute pendant le pèlerinage. Et le bien que vous faites, Allah le sait. Et prenez vos provisions; mais vraiment la meilleure provision est la piété. Et redoutez-Moi, Ô doués d'intelligence !
ph: Al-Ĥajju 'Ash/hurun Ma`lūmātun Faman Farađa Fīhinna Al-Ĥajja Falā Rafatha Wa Lā Fusūqa Wa Lā Jidāla Fī Al-Ĥajji Wa Mā Taf`alū Min Khayrin Ya`lamhu Allāhu Wa Tazawwadū Fa'inna Khayra Az-Zādi At-Taqwá Wa Attaqūnī Yā 'Ūlī Al-'Albābi

2:198
ar: لَيْسَ عَلَيْكُمْ جُنَاحٌ أَن تَبْتَغُوا۟ فَضْلًۭا مِّن رَّبِّكُمْ ۚ فَإِذَآ أَفَضْتُم مِّنْ عَرَفَٰتٍۢ فَٱذْكُرُوا۟ ٱللَّهَ عِندَ ٱلْمَشْعَرِ ٱلْحَرَامِ ۖ وَٱذْكُرُوهُ كَمَا هَدَىٰكُمْ وَإِن كُنتُم مِّن قَبْلِهِۦ لَمِنَ ٱلضَّآلِّينَ
fr: Ce n'est pas un péché que d'aller en quête de quelque grâce de votre Seigneur. Puis, quand vous déferlez depuis 'Arafât, invoquez Allah, à Al-Mach'ar-al-haram (Al-Muzdalifa). Et invoquez-Le comme Il vous a montré la bonne voie, quoiqu'auparavant vous étiez du nombre des égarés.
ph: Laysa `Alaykum Junāĥun 'An Tabtaghū Fađlāan Min Rabbikum Fa'idhā 'Afađtum Min `Arafātin Fādhkurū Allāha `Inda Al-Mash`ari Al-Ĥarāmi Wa Adhkurūhu Kamā Hadākum Wa 'In Kuntum Min Qablihi Lamina Ađ-Đāllīna

2:199
ar: ثُمَّ أَفِيضُوا۟ مِنْ حَيْثُ أَفَاضَ ٱلنَّاسُ وَٱسْتَغْفِرُوا۟ ٱللَّهَ ۚ إِنَّ ٱللَّهَ غَفُورٌۭ رَّحِيمٌۭ
fr: Ensuite déferlez par où les gens déferlèrent, et demandez pardon à Allah. Car Allah est Pardonneur et Miséricordieux.
ph: Thumma 'Afīđū Min Ĥaythu 'Afāđa An-Nāsu Wa Astaghfirū Allāha 'Inna Allāha Ghafūrun Raĥīmun

2:200
ar: فَإِذَا قَضَيْتُم مَّنَٰسِكَكُمْ فَٱذْكُرُوا۟ ٱللَّهَ كَذِكْرِكُمْ ءَابَآءَكُمْ أَوْ أَشَدَّ ذِكْرًۭا ۗ فَمِنَ ٱلنَّاسِ مَن يَقُولُ رَبَّنَآ ءَاتِنَا فِى ٱلدُّنْيَا وَمَا لَهُۥ فِى ٱلْءَاخِرَةِ مِنْ خَلَٰقٍۢ
fr: Et quand vous aurez achevé vos rites, alors invoquez Allah comme vous invoquez vos pères, et plus ardemment encore. Mais il est des gens qui disent seulement: « Seigneur ! Accorde nous [le bien] ici-bas ! » -Pour ceux-là, nulle part dans l'au-delà.
ph: Fa'idhā Qađaytum Manāsikakum Fādhkurū Allāha Kadhikrikum 'Ābā'akum 'Aw 'Ashadda Dhikrāan Famina An-Nāsi Man Yaqūlu Rabbanā 'Ātinā Fī Ad-Dunyā Wa Mā Lahu Fī Al-'Ākhirati Min Khalāqin

2:201
ar: وَمِنْهُم مَّن يَقُولُ رَبَّنَآ ءَاتِنَا فِى ٱلدُّنْيَا حَسَنَةًۭ وَفِى ٱلْءَاخِرَةِ حَسَنَةًۭ وَقِنَا عَذَابَ ٱلنَّارِ
fr: Et il est des gens qui disent: « Seigneur ! Accorde nous belle part ici-bas, et belle part aussi dans l'au-delà; et protège-nous du châtiment du Feu ! »
ph: Wa Minhum Man Yaqūlu Rabbanā 'Ātinā Fī Ad-Dunyā Ĥasanatan Wa Fī Al-'Ākhirati Ĥasanatan Wa Qinā `Adhāba An-Nāri

2:202
ar: أُو۟لَٰٓئِكَ لَهُمْ نَصِيبٌۭ مِّمَّا كَسَبُوا۟ ۚ وَٱللَّهُ سَرِيعُ ٱلْحِسَابِ
fr: Ceux-là auront une part de ce qu'ils auront acquis. Et Allah est prompt à faire rendre compte.
ph: 'Ūlā'ika Lahum Naşībun Mimmā Kasabū Wa Allāhu Sarī`u Al-Ĥisābi

2:203
ar: ۞ وَٱذْكُرُوا۟ ٱللَّهَ فِىٓ أَيَّامٍۢ مَّعْدُودَٰتٍۢ ۚ فَمَن تَعَجَّلَ فِى يَوْمَيْنِ فَلَآ إِثْمَ عَلَيْهِ وَمَن تَأَخَّرَ فَلَآ إِثْمَ عَلَيْهِ ۚ لِمَنِ ٱتَّقَىٰ ۗ وَٱتَّقُوا۟ ٱللَّهَ وَٱعْلَمُوٓا۟ أَنَّكُمْ إِلَيْهِ تُحْشَرُونَ
fr: Et invoquez Allah pendant un nombre de jours déterminés. Ensuite, il n'y a pas de péché, pour qui se comporte en piété, à partir au bout de deux jours, à s'attarder non plus. Et craignez Allah. Et sachez que c'est vers Lui que vous serez rassemblés.
ph: Wa Adhkurū Allāha Fī 'Ayyāmin Ma`dūdātin Faman Ta`ajjala Fī Yawmayni Falā 'Ithma `Alayhi Wa Man Ta'akhkhara Falā 'Ithma `Alayhi Limani Attaqá Wa Attaqū Allāha Wa A`lamū 'Annakum 'Ilayhi Tuĥsharūna

2:204
ar: وَمِنَ ٱلنَّاسِ مَن يُعْجِبُكَ قَوْلُهُۥ فِى ٱلْحَيَوٰةِ ٱلدُّنْيَا وَيُشْهِدُ ٱللَّهَ عَلَىٰ مَا فِى قَلْبِهِۦ وَهُوَ أَلَدُّ ٱلْخِصَامِ
fr: Il y a parmi les gens celui dont la parole sur la vie présente te plaît, et qui prend Allah à témoin de ce qu'il a dans le cœur, tandis que c'est le plus acharné disputeur.
ph: Wa Mina An-Nāsi Man Yu`jibuka Qawluhu Fī Al-Ĥayāati Ad-Dunyā Wa Yush/hidu Allāha `Alá Mā Fī Qalbihi Wa Huwa 'Aladdu Al-Khişāmi

2:205
ar: وَإِذَا تَوَلَّىٰ سَعَىٰ فِى ٱلْأَرْضِ لِيُفْسِدَ فِيهَا وَيُهْلِكَ ٱلْحَرْثَ وَٱلنَّسْلَ ۗ وَٱللَّهُ لَا يُحِبُّ ٱلْفَسَادَ
fr: Dès qu'il tourne le dos, il parcourt la terre pour y semer le désordre et saccager culture et bétail. Et Allah n'aime pas le désordre !
ph: Wa 'Idhā Tawallá Sa`á Fī Al-'Arđi Liyufsida Fīhā Wa Yuhlika Al-Ĥartha Wa An-Nasla Wa Allāhu Lā Yuĥibbu Al-Fasāda

2:206
ar: وَإِذَا قِيلَ لَهُ ٱتَّقِ ٱللَّهَ أَخَذَتْهُ ٱلْعِزَّةُ بِٱلْإِثْمِ ۚ فَحَسْبُهُۥ جَهَنَّمُ ۚ وَلَبِئْسَ ٱلْمِهَادُ
fr: Et quand on lui dit: « Redoute Allah », l'orgueil criminel s'empare de lui. L'Enfer lui suffira, et quel mauvais lit, certes !
ph: Wa 'Idhā Qīla Lahu Attaqi Allāha 'Akhadhat/hu Al-`Izzatu Bil-'Ithmi Faĥasbuhu Jahannamu Wa Labi'sa Al-Mihādu

2:207
ar: وَمِنَ ٱلنَّاسِ مَن يَشْرِى نَفْسَهُ ٱبْتِغَآءَ مَرْضَاتِ ٱللَّهِ ۗ وَٱللَّهُ رَءُوفٌۢ بِٱلْعِبَادِ
fr: Et il y a parmi les gens celui qui se sacrifie pour la recherche de l'agrément d'Allah. Et Allah est Compatissant envers Ses serviteurs.
ph: Wa Mina An-Nāsi Man Yashrī Nafsahu Abtighā'a Marđāati Allāhi Wa Allāhu Ra'ūfun Bil-`Ibādi

2:208
ar: يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ ٱدْخُلُوا۟ فِى ٱلسِّلْمِ كَآفَّةًۭ وَلَا تَتَّبِعُوا۟ خُطُوَٰتِ ٱلشَّيْطَٰنِ ۚ إِنَّهُۥ لَكُمْ عَدُوٌّۭ مُّبِينٌۭ
fr: Ô les croyants ! Entrez en plein dans l'Islam, et ne suivez point les pas du diable, car il est certes pour vous un ennemi déclaré.
ph: Yā 'Ayyuhā Al-Ladhīna 'Āmanū Adkhulū Fī As-Silmi Kāffatan Wa Lā Tattabi`ū Khuţuwāti Ash-Shayţāni 'Innahu Lakum `Adūwun Mubīnun

2:209
ar: فَإِن زَلَلْتُم مِّنۢ بَعْدِ مَا جَآءَتْكُمُ ٱلْبَيِّنَٰتُ فَٱعْلَمُوٓا۟ أَنَّ ٱللَّهَ عَزِيزٌ حَكِيمٌ
fr: Puis, si vous bronchez, après que les preuves vous soient venues, sachez alors qu'Allah est Puissant et Sage.
ph: Fa'in Zalaltum Min Ba`di Mā Jā'atkumu Al-Bayyinātu Fā`lamū 'Anna Allāha `Azīzun Ĥakīmun

2:210
ar: هَلْ يَنظُرُونَ إِلَّآ أَن يَأْتِيَهُمُ ٱللَّهُ فِى ظُلَلٍۢ مِّنَ ٱلْغَمَامِ وَٱلْمَلَٰٓئِكَةُ وَقُضِىَ ٱلْأَمْرُ ۚ وَإِلَى ٱللَّهِ تُرْجَعُ ٱلْأُمُورُ
fr: Qu'attendent-ils sinon qu'Allah leur vienne à l'ombre des nuées de même que les Anges et que leur sort soit réglé ? Et c'est à Allah que toute chose est ramenée.
ph: Hal Yanžurūna 'Illā 'An Ya'tiyahumu Allāhu Fī Žulalin Mina Al-Ghamāmi Wa Al-Malā'ikatu Wa Quđiya Al-'Amru Wa 'Ilá Allāhi Turja`u Al-'Umūru

2:211
ar: سَلْ بَنِىٓ إِسْرَٰٓءِيلَ كَمْ ءَاتَيْنَٰهُم مِّنْ ءَايَةٍۭ بَيِّنَةٍۢ ۗ وَمَن يُبَدِّلْ نِعْمَةَ ٱللَّهِ مِنۢ بَعْدِ مَا جَآءَتْهُ فَإِنَّ ٱللَّهَ شَدِيدُ ٱلْعِقَابِ
fr: Demande aux enfants d'Israʾil (Israël) combien de miracles évidents Nous leur avons apportés ! Or, quiconque altère le bienfait d'Allah après qu'il lui soit parvenu... alors, Allah vraiment est dur en punition.
ph: Sal Banī 'Isrā'īla Kam 'Ātaynāhum Min 'Āyatin Bayyinatin Wa Man Yubaddil Ni`mata Allāhi Min Ba`di Mā Jā'at/hu Fa'inna Allāha Shadīdu Al-`Iqābi

2:212
ar: زُيِّنَ لِلَّذِينَ كَفَرُوا۟ ٱلْحَيَوٰةُ ٱلدُّنْيَا وَيَسْخَرُونَ مِنَ ٱلَّذِينَ ءَامَنُوا۟ ۘ وَٱلَّذِينَ ٱتَّقَوْا۟ فَوْقَهُمْ يَوْمَ ٱلْقِيَٰمَةِ ۗ وَٱللَّهُ يَرْزُقُ مَن يَشَآءُ بِغَيْرِ حِسَابٍۢ
fr: On a enjolivé la vie présente à ceux qui ne croient pas, et ils se moquent de ceux qui croient. Mais les pieux seront au-dessus d'eux, au Jour de la Résurrection. Et Allah accorde Ses bienfaits à qui Il veut, sans compter.
ph: Zuyyina Lilladhīna Kafarū Al-Ĥayāatu Ad-Dunyā Wa Yaskharūna Mina Al-Ladhīna 'Āmanū Wa Al-Ladhīna Attaqaw Fawqahum Yawma Al-Qiyāmati Wa Allāhu Yarzuqu Man Yashā'u Bighayri Ĥisābin

2:213
ar: كَانَ ٱلنَّاسُ أُمَّةًۭ وَٰحِدَةًۭ فَبَعَثَ ٱللَّهُ ٱلنَّبِيِّۦنَ مُبَشِّرِينَ وَمُنذِرِينَ وَأَنزَلَ مَعَهُمُ ٱلْكِتَٰبَ بِٱلْحَقِّ لِيَحْكُمَ بَيْنَ ٱلنَّاسِ فِيمَا ٱخْتَلَفُوا۟ فِيهِ ۚ وَمَا ٱخْتَلَفَ فِيهِ إِلَّا ٱلَّذِينَ أُوتُوهُ مِنۢ بَعْدِ مَا جَآءَتْهُمُ ٱلْبَيِّنَٰتُ بَغْيًۢا بَيْنَهُمْ ۖ فَهَدَى ٱللَّهُ ٱلَّذِينَ ءَامَنُوا۟ لِمَا ٱخْتَلَفُوا۟ فِيهِ مِنَ ٱلْحَقِّ بِإِذْنِهِۦ ۗ وَٱللَّهُ يَهْدِى مَن يَشَآءُ إِلَىٰ صِرَٰطٍۢ مُّسْتَقِيمٍ
fr: Les gens formaient (à l'origine) une seule communauté (croyante). Puis, (après leurs divergences,) Allah envoya des prophètes comme annonciateurs et avertisseurs; et Il fit descendre avec eux le Livre contenant la vérité, pour régler parmi les gens leurs divergences. Mais, ce sont ceux-là mêmes à qui il avait été apporté, qui se mirent à en disputer, après que les preuves leur furent venues, par esprit de rivalité ! Puis Allah, de par Sa Grâce, guida ceux qui crurent vers cette Vérité sur laquelle les autres disputaient. Et Allah guide qui Il veut vers le chemin droit.
ph: Kāna An-Nāsu 'Ummatan Wāĥidatan Faba`atha Allāhu An-Nabīyīna Mubashirīna Wa Mundhirīna Wa 'Anzala Ma`ahumu Al-Kitāba Bil-Ĥaqqi Liyaĥkuma Bayna An-Nāsi Fīmā Akhtalafū Fīhi Wa Mā Akhtalafa Fīhi 'Illā Al-Ladhīna 'Ūtūhu Min Ba`di Mā Jā'at/humu Al-Bayyinātu Baghyāan Baynahum Fahadá Allāhu Al-Ladhīna 'Āmanū Limā Akhtalafū Fīhi Mina Al-Ĥaqqi Bi'idhnihi Wa Allāhu Yahdī Man Yashā'u 'Ilá Şirāţin Mustaqīmin

2:214
ar: أَمْ حَسِبْتُمْ أَن تَدْخُلُوا۟ ٱلْجَنَّةَ وَلَمَّا يَأْتِكُم مَّثَلُ ٱلَّذِينَ خَلَوْا۟ مِن قَبْلِكُم ۖ مَّسَّتْهُمُ ٱلْبَأْسَآءُ وَٱلضَّرَّآءُ وَزُلْزِلُوا۟ حَتَّىٰ يَقُولَ ٱلرَّسُولُ وَٱلَّذِينَ ءَامَنُوا۟ مَعَهُۥ مَتَىٰ نَصْرُ ٱللَّهِ ۗ أَلَآ إِنَّ نَصْرَ ٱللَّهِ قَرِيبٌۭ
fr: Pensez-vous entrer au Paradis alors que vous n'avez pas encore subi des épreuves semblables à celles que subirent ceux qui vécurent avant vous ? Misère et maladie les avaient touchés; et ils furent secoués jusqu'à ce que le Messager, et avec lui, ceux qui avaient cru, se fussent écriés: « Quand viendra le secours d'Allah ? » -Quoi ! Le secours d'Allah est sûrement proche.
ph: 'Am Ĥasibtum 'An Tadkhulū Al-Jannata Wa Lammā Ya'tikum Mathalu Al-Ladhīna Khalaw Min Qablikum Massat/humu Al-Ba'sā'u Wa Ađ-Đarrā'u Wa Zulzilū Ĥattá Yaqūla Ar-Rasūlu Wa Al-Ladhīna 'Āmanū Ma`ahu Matá Naşru Allāhi 'Alā 'Inna Naşra Allāhi Qarībun

2:215
ar: يَسْـَٔلُونَكَ مَاذَا يُنفِقُونَ ۖ قُلْ مَآ أَنفَقْتُم مِّنْ خَيْرٍۢ فَلِلْوَٰلِدَيْنِ وَٱلْأَقْرَبِينَ وَٱلْيَتَٰمَىٰ وَٱلْمَسَٰكِينِ وَٱبْنِ ٱلسَّبِيلِ ۗ وَمَا تَفْعَلُوا۟ مِنْ خَيْرٍۢ فَإِنَّ ٱللَّهَ بِهِۦ عَلِيمٌۭ
fr: Ils t'interrogent: « Qu'est-ce qu'on doit dépenser ? » Dis: « Ce que vous dépensez de bien devrait être pour les père et mère, les proches, les orphelins, les pauvres et les voyageurs indigents. Et tout ce que vous faites de bien, vraiment Allah le sait. »
ph: Yas'alūnaka Mādhā Yunfiqūna Qul Mā 'Anfaqtum Min Khayrin Falilwālidayni Wa Al-'Aqrabīna Wa Al-Yatāmá Wa Al-Masākīni Wa Abni As-Sabīli Wa Mā Taf`alū Min Khayrin Fa'inna Allāha Bihi `Alīmun

2:216
ar: كُتِبَ عَلَيْكُمُ ٱلْقِتَالُ وَهُوَ كُرْهٌۭ لَّكُمْ ۖ وَعَسَىٰٓ أَن تَكْرَهُوا۟ شَيْـًۭٔا وَهُوَ خَيْرٌۭ لَّكُمْ ۖ وَعَسَىٰٓ أَن تُحِبُّوا۟ شَيْـًۭٔا وَهُوَ شَرٌّۭ لَّكُمْ ۗ وَٱللَّهُ يَعْلَمُ وَأَنتُمْ لَا تَعْلَمُونَ
fr: Le combat vous a été prescrit alors qu'il vous est désagréable. Or, il se peut que vous ayez de l'aversion pour une chose alors qu'elle vous est un bien. Et il se peut que vous aimiez une chose alors qu'elle vous est mauvaise. C'est Allah qui sait, alors que vous ne savez pas.
ph: Kutiba `Alaykumu Al-Qitālu Wa Huwa Kurhun Lakum Wa `Asá 'An Takrahū Shay'āan Wa Huwa Khayrun Lakum Wa `Asá 'An Tuĥibbū Shay'āan Wa Huwa Sharrun Lakum Wa Allāhu Ya`lamu Wa 'Antum Lā Ta`lamūna

2:217
ar: يَسْـَٔلُونَكَ عَنِ ٱلشَّهْرِ ٱلْحَرَامِ قِتَالٍۢ فِيهِ ۖ قُلْ قِتَالٌۭ فِيهِ كَبِيرٌۭ ۖ وَصَدٌّ عَن سَبِيلِ ٱللَّهِ وَكُفْرٌۢ بِهِۦ وَٱلْمَسْجِدِ ٱلْحَرَامِ وَإِخْرَاجُ أَهْلِهِۦ مِنْهُ أَكْبَرُ عِندَ ٱللَّهِ ۚ وَٱلْفِتْنَةُ أَكْبَرُ مِنَ ٱلْقَتْلِ ۗ وَلَا يَزَالُونَ يُقَٰتِلُونَكُمْ حَتَّىٰ يَرُدُّوكُمْ عَن دِينِكُمْ إِنِ ٱسْتَطَٰعُوا۟ ۚ وَمَن يَرْتَدِدْ مِنكُمْ عَن دِينِهِۦ فَيَمُتْ وَهُوَ كَافِرٌۭ فَأُو۟لَٰٓئِكَ حَبِطَتْ أَعْمَٰلُهُمْ فِى ٱلدُّنْيَا وَٱلْءَاخِرَةِ ۖ وَأُو۟لَٰٓئِكَ أَصْحَٰبُ ٱلنَّارِ ۖ هُمْ فِيهَا خَٰلِدُونَ
fr: Ils t'interrogent sur le fait de faire la guerre pendant les mois sacrés. -Dis: « Y combattre est un péché grave, mais plus grave encore auprès d'Allah est de faire obstacle au sentier d'Allah, d'être impie envers Celui-ci et la Mosquée sacrée, et d'expulser de là ses habitants. L'association est plus grave que le meurtre. » Or, ils ne cesseront de vous combattre jusqu'à, s'ils peuvent, vous détourner de votre religion. Et ceux qui parmi vous abjureront leur religion et mourront infidèles, vaines seront pour eux leurs actions dans la vie immédiate et la vie future. Voilà les gens du Feu: ils y demeureront éternellement.
ph: Yas'alūnaka `Ani Ash-Shahri Al-Ĥarāmi Qitālin Fīhi Qul Qitālun Fīhi Kabīrun Wa Şaddun `An Sabīli Allāhi Wa Kufrun Bihi Wa Al-Masjidi Al-Ĥarāmi Wa 'Ikhrāju 'Ahlihi Minhu 'Akbaru `Inda Allāhi Wa Al-Fitnatu 'Akbaru Mina Al-Qatli Wa Lā Yazālūna Yuqātilūnakum Ĥattá Yaruddūkum `An Dīnikum 'Ini Astaţā`ū Wa Man Yartadid Minkum `An Dīnihi Fayamut Wa Huwa Kāfirun Fa'ūlā'ika Ĥabiţat 'A`māluhum Fī Ad-Dunyā Wa Al-'Ākhirati Wa 'Ūlā'ika 'Aşĥābu An-Nāri Hum Fīhā Khālidūna

2:218
ar: إِنَّ ٱلَّذِينَ ءَامَنُوا۟ وَٱلَّذِينَ هَاجَرُوا۟ وَجَٰهَدُوا۟ فِى سَبِيلِ ٱللَّهِ أُو۟لَٰٓئِكَ يَرْجُونَ رَحْمَتَ ٱللَّهِ ۚ وَٱللَّهُ غَفُورٌۭ رَّحِيمٌۭ
fr: Certes, ceux qui ont cru, émigré et lutté dans le sentier d'Allah, ceux-là espèrent la miséricorde d'Allah. Et Allah est Pardonneur et Miséricordieux.
ph: 'Inna Al-Ladhīna 'Āmanū Wa Al-Ladhīna Hājarū Wa Jāhadū Fī Sabīli Allāhi 'Ūlā'ika Yarjūna Raĥmata Allāhi Wa Allāhu Ghafūrun Raĥīmun

2:219
ar: ۞ يَسْـَٔلُونَكَ عَنِ ٱلْخَمْرِ وَٱلْمَيْسِرِ ۖ قُلْ فِيهِمَآ إِثْمٌۭ كَبِيرٌۭ وَمَنَٰفِعُ لِلنَّاسِ وَإِثْمُهُمَآ أَكْبَرُ مِن نَّفْعِهِمَا ۗ وَيَسْـَٔلُونَكَ مَاذَا يُنفِقُونَ قُلِ ٱلْعَفْوَ ۗ كَذَٰلِكَ يُبَيِّنُ ٱللَّهُ لَكُمُ ٱلْءَايَٰتِ لَعَلَّكُمْ تَتَفَكَّرُونَ
fr: Ils t'interrogent sur le vin et les jeux de hasard. Dis: « Dans les deux il y a un grand péché et quelques avantages pour les gens; mais dans les deux, le péché est plus grand que l'utilité. » Et ils t'interrogent: « Que doit-on dépenser (en charité) ? » Dis: « L'excédent de vos biens. » Ainsi, Allah vous explique Ses versets afin que vous méditiez
ph: Yas'alūnaka `Ani Al-Khamri Wa Al-Maysiri Qul Fīhimā 'Ithmun Kabīrun Wa Manāfi`u Lilnnāsi Wa 'Ithmuhumā 'Akbaru Min Naf`ihimā Wa Yas'alūnaka Mādhā Yunfiqūna Quli Al-`Afwa Kadhālika Yubayyinu Allāhu Lakumu Al-'Āyāti La`allakum Tatafakkarūna

2:220
ar: فِى ٱلدُّنْيَا وَٱلْءَاخِرَةِ ۗ وَيَسْـَٔلُونَكَ عَنِ ٱلْيَتَٰمَىٰ ۖ قُلْ إِصْلَاحٌۭ لَّهُمْ خَيْرٌۭ ۖ وَإِن تُخَالِطُوهُمْ فَإِخْوَٰنُكُمْ ۚ وَٱللَّهُ يَعْلَمُ ٱلْمُفْسِدَ مِنَ ٱلْمُصْلِحِ ۚ وَلَوْ شَآءَ ٱللَّهُ لَأَعْنَتَكُمْ ۚ إِنَّ ٱللَّهَ عَزِيزٌ حَكِيمٌۭ
fr: sur ce monde et sur l'au-delà ! Et ils t'interrogent au sujet des orphelins. Dis: « Leur faire du bien est la meilleure action. Si vous vous mêlez à eux, ce sont alors vos frères [en religion]. Allah distingue celui qui sème le désordre de celui qui fait le bien. Et si Allah avait voulu, Il vous aurait accablés. Certes Allah est Puissant et Sage.
ph: Fī Ad-Dunyā Wa Al-'Ākhirati Wa Yas'alūnaka `Ani Al-Yatāmá Qul 'Işlāĥun Lahum Khayrun Wa 'In Tukhāliţūhum Fa'ikhwānukum Wa Allāhu Ya`lamu Al-Mufsida Mina Al-Muşliĥi Wa Law Shā'a Allāhu La'a`natakum 'Inna Allāha `Azīzun Ĥakīmun

2:221
ar: وَلَا تَنكِحُوا۟ ٱلْمُشْرِكَٰتِ حَتَّىٰ يُؤْمِنَّ ۚ وَلَأَمَةٌۭ مُّؤْمِنَةٌ خَيْرٌۭ مِّن مُّشْرِكَةٍۢ وَلَوْ أَعْجَبَتْكُمْ ۗ وَلَا تُنكِحُوا۟ ٱلْمُشْرِكِينَ حَتَّىٰ يُؤْمِنُوا۟ ۚ وَلَعَبْدٌۭ مُّؤْمِنٌ خَيْرٌۭ مِّن مُّشْرِكٍۢ وَلَوْ أَعْجَبَكُمْ ۗ أُو۟لَٰٓئِكَ يَدْعُونَ إِلَى ٱلنَّارِ ۖ وَٱللَّهُ يَدْعُوٓا۟ إِلَى ٱلْجَنَّةِ وَٱلْمَغْفِرَةِ بِإِذْنِهِۦ ۖ وَيُبَيِّنُ ءَايَٰتِهِۦ لِلنَّاسِ لَعَلَّهُمْ يَتَذَكَّرُونَ
fr: Et n'épousez pas les femmes associatrices tant qu'elles n'auront pas la foi, et certes, une esclave croyante vaut mieux qu'une associatrice même si elle vous enchante. Et ne donnez pas d'épouses aux associateurs tant qu'ils n'auront pas la foi, et certes, un esclave croyant vaut mieux qu'un associateur même s'il vous enchante. Car ceux-là [les associateurs] invitent au Feu; tandis qu'Allah invite, de par Sa Grâce, au Paradis et au pardon. Et Il expose aux gens Ses enseignements afin qu'ils se souviennent !
ph: Wa Lā Tankiĥū Al-Mushrikāti Ĥattá Yu'uminna Wa La'amatun Mu'uminatun Khayrun Min Mushrikatin Wa Law 'A`jabatkum Wa Lā Tunkiĥū Al-Mushrikīna Ĥattá Yu'uminū Wa La`abdun Mu'uminun Khayrun Min Mushrikin Wa Law 'A`jabakum 'Ūlā'ika Yad`ūna 'Ilá An-Nāri Wa Allāhu Yad`ū 'Ilá Al-Jannati Wa Al-Maghfirati Bi'idhnihi Wa Yubayyinu 'Āyātihi Lilnnāsi La`allahum Yatadhakkarūna

2:222
ar: وَيَسْـَٔلُونَكَ عَنِ ٱلْمَحِيضِ ۖ قُلْ هُوَ أَذًۭى فَٱعْتَزِلُوا۟ ٱلنِّسَآءَ فِى ٱلْمَحِيضِ ۖ وَلَا تَقْرَبُوهُنَّ حَتَّىٰ يَطْهُرْنَ ۖ فَإِذَا تَطَهَّرْنَ فَأْتُوهُنَّ مِنْ حَيْثُ أَمَرَكُمُ ٱللَّهُ ۚ إِنَّ ٱللَّهَ يُحِبُّ ٱلتَّوَّٰبِينَ وَيُحِبُّ ٱلْمُتَطَهِّرِينَ
fr: -Et ils t'interrogent sur la menstruation des femmes. -Dis: « C'est un mal. Eloignez-vous donc des femmes pendant les menstrues, et ne les approchez que quand elles sont pures. Quand elles se sont purifiées, alors cohabitez avec elles suivant les prescriptions d'Allah car Allah aime ceux qui se repentent, et Il aime ceux qui se purifient ».
ph: Wa Yas'alūnaka `Ani Al-Maĥīđi Qul Huwa 'Adháan Fā`tazilū An-Nisā' Fī Al-Maĥīđi Wa Lā Taqrabūhunna Ĥattá Yaţhurna Fa'idhā Taţahharna Fa'tūhunna Min Ĥaythu 'Amarakumu Allāhu 'Inna Allāha Yuĥibbu At-Tawwābīna Wa Yuĥibbu Al-Mutaţahhirīna

2:223
ar: نِسَآؤُكُمْ حَرْثٌۭ لَّكُمْ فَأْتُوا۟ حَرْثَكُمْ أَنَّىٰ شِئْتُمْ ۖ وَقَدِّمُوا۟ لِأَنفُسِكُمْ ۚ وَٱتَّقُوا۟ ٱللَّهَ وَٱعْلَمُوٓا۟ أَنَّكُم مُّلَٰقُوهُ ۗ وَبَشِّرِ ٱلْمُؤْمِنِينَ
fr: Vos épouses sont pour vous un champ de labour; allez à votre champ comme [et quand] vous le voulez et œuvrez pour vous-mêmes à l'avance. Craignez Allah et sachez que vous Le rencontrerez. Et fais gracieuse annonce aux croyants !
ph: Nisā'uukum Ĥarthun Lakum Fa'tū Ĥarthakum 'Anná Shi'tum Wa Qaddimū Li'nfusikum Wa Attaqū Allāha Wa A`lamū 'Annakum Mulāqūhu Wa Bashiri Al-Mu'uminīna

2:224
ar: وَلَا تَجْعَلُوا۟ ٱللَّهَ عُرْضَةًۭ لِّأَيْمَٰنِكُمْ أَن تَبَرُّوا۟ وَتَتَّقُوا۟ وَتُصْلِحُوا۟ بَيْنَ ٱلنَّاسِ ۗ وَٱللَّهُ سَمِيعٌ عَلِيمٌۭ
fr: Et n'usez pas du nom d'Allah, dans vos serments, pour vous dispenser de faire le bien, d'être pieux et de réconcilier les gens. Et Allah est Audient et Omniscient.
ph: Wa Lā Taj`alū Allāha `Urđatan Li'ymānikum 'An Tabarrū Wa Tattaqū Wa Tuşliĥū Bayna An-Nāsi Wa Allāhu Samī`un `Alīmun

2:225
ar: لَّا يُؤَاخِذُكُمُ ٱللَّهُ بِٱللَّغْوِ فِىٓ أَيْمَٰنِكُمْ وَلَٰكِن يُؤَاخِذُكُم بِمَا كَسَبَتْ قُلُوبُكُمْ ۗ وَٱللَّهُ غَفُورٌ حَلِيمٌۭ
fr: Ce n'est pas pour les expressions gratuites dans vos serments qu'Allah vous saisit: Il vous saisit pour ce que vos cœurs ont acquis. Et Allah est Pardonneur et Patient.
ph: Lā Yu'uākhidhukumu Allāhu Bil-Laghwi Fī 'Aymānikum Wa Lakin Yu'uākhidhukum Bimā Kasabat Qulūbukum Wa Allāhu Ghafūrun Ĥalīmun

2:226
ar: لِّلَّذِينَ يُؤْلُونَ مِن نِّسَآئِهِمْ تَرَبُّصُ أَرْبَعَةِ أَشْهُرٍۢ ۖ فَإِن فَآءُو فَإِنَّ ٱللَّهَ غَفُورٌۭ رَّحِيمٌۭ
fr: Pour ceux qui font le serment de se priver de leurs femmes, il y a un délai d'attente de quatre mois. Et s'ils reviennent (de leur serment) celui-ci sera annulé, car Allah est certes Pardonneur et Miséricordieux !
ph: Lilladhīna Yu'ulūna Min Nisā'ihim Tarabbuşu 'Arba`ati 'Ash/hurin Fa'in Fā'ū Fa'inna Allāha Ghafūrun Raĥīmun

2:227
ar: وَإِنْ عَزَمُوا۟ ٱلطَّلَٰقَ فَإِنَّ ٱللَّهَ سَمِيعٌ عَلِيمٌۭ
fr: Mais s'ils se décident au divorce, (celui-ci devient exécutoire) car Allah est certes Audient et Omniscient.
ph: Wa 'In `Azamū Aţ-Ţalāqa Fa'inna Allāha Samī`un `Alīmun

2:228
ar: وَٱلْمُطَلَّقَٰتُ يَتَرَبَّصْنَ بِأَنفُسِهِنَّ ثَلَٰثَةَ قُرُوٓءٍۢ ۚ وَلَا يَحِلُّ لَهُنَّ أَن يَكْتُمْنَ مَا خَلَقَ ٱللَّهُ فِىٓ أَرْحَامِهِنَّ إِن كُنَّ يُؤْمِنَّ بِٱللَّهِ وَٱلْيَوْمِ ٱلْءَاخِرِ ۚ وَبُعُولَتُهُنَّ أَحَقُّ بِرَدِّهِنَّ فِى ذَٰلِكَ إِنْ أَرَادُوٓا۟ إِصْلَٰحًۭا ۚ وَلَهُنَّ مِثْلُ ٱلَّذِى عَلَيْهِنَّ بِٱلْمَعْرُوفِ ۚ وَلِلرِّجَالِ عَلَيْهِنَّ دَرَجَةٌۭ ۗ وَٱللَّهُ عَزِيزٌ حَكِيمٌ
fr: Et les femmes divorcées doivent observer un délai d'attente de trois menstrues; et il ne leur est pas permis de taire ce qu'Allah a créé dans leurs ventres, si elles croient en Allah et au Jour dernier. Et leurs époux seront plus en droit de les reprendre pendant cette période, s'ils veulent la réconciliation. Quant à elles, elles ont des droits équivalents à leurs obligations, conformément à la bienséance. Mais les hommes ont cependant une prédominance sur elles. Et Allah est Puissant et Sage.
ph: Wa Al-Muţallaqātu Yatarabbaşna Bi'anfusihinna Thalāthata Qurū'in Wa Lā Yaĥillu Lahunna 'An Yaktumna Mā Khalaqa Allāhu Fī 'Arĥāmihinna 'In Kunna Yu'uminna Billāhi Wa Al-Yawmi Al-'Ākhiri Wa Bu`ūlatuhunna 'Aĥaqqu Biraddihinna Fī Dhālika 'In 'Arādū 'Işlāĥāan Wa Lahunna Mithlu Al-Ladhī `Alayhinna Bil-Ma`rūfi Wa Lilrrijāli `Alayhinna Darajatun Wa Allāhu `Azīzun Ĥakīmun

2:229
ar: ٱلطَّلَٰقُ مَرَّتَانِ ۖ فَإِمْسَاكٌۢ بِمَعْرُوفٍ أَوْ تَسْرِيحٌۢ بِإِحْسَٰنٍۢ ۗ وَلَا يَحِلُّ لَكُمْ أَن تَأْخُذُوا۟ مِمَّآ ءَاتَيْتُمُوهُنَّ شَيْـًٔا إِلَّآ أَن يَخَافَآ أَلَّا يُقِيمَا حُدُودَ ٱللَّهِ ۖ فَإِنْ خِفْتُمْ أَلَّا يُقِيمَا حُدُودَ ٱللَّهِ فَلَا جُنَاحَ عَلَيْهِمَا فِيمَا ٱفْتَدَتْ بِهِۦ ۗ تِلْكَ حُدُودُ ٱللَّهِ فَلَا تَعْتَدُوهَا ۚ وَمَن يَتَعَدَّ حُدُودَ ٱللَّهِ فَأُو۟لَٰٓئِكَ هُمُ ٱلظَّٰلِمُونَ
fr: Le divorce est permis pour seulement deux fois. Alors, c'est soit la reprise conformément à la bienséance, ou la libération avec gentillesse. Et il ne vous est pas permis de reprendre quoi que ce soit de ce que vous leur aviez donné, -à moins que tous deux ne craignent de ne point pouvoir se conformer aux ordres imposés par Allah. Si donc vous craignez que tous deux ne puissent se conformer aux ordres d'Allah, alors ils ne commettent aucun péché si la femme se rachète avec quelque bien. Voilà les ordres d'Allah. Ne les transgressez donc pas. Et ceux qui transgressent les ordres d'Allah ceux-là sont les injustes.
ph: Aţ-Ţalāqu Marratāni Fa'imsākun Bima`rūfin 'Aw Tasrīĥun Bi'iĥsānin Wa Lā Yaĥillu Lakum 'An Ta'khudhū Mimmā 'Ātaytumūhunna Shay'āan 'Illā 'An Yakhāfā 'Allā Yuqīmā Ĥudūda Allāhi Fa'in Khiftum 'Allā Yuqīmā Ĥudūda Allāhi Falā Junāĥa `Alayhimā Fīmā Aftadat Bihi Tilka Ĥudūdu Allāhi Falā Ta`tadūhā Wa Man Yata`adda Ĥudūda Allāhi Fa'ūlā'ika Humu Až-Žālimūna

2:230
ar: فَإِن طَلَّقَهَا فَلَا تَحِلُّ لَهُۥ مِنۢ بَعْدُ حَتَّىٰ تَنكِحَ زَوْجًا غَيْرَهُۥ ۗ فَإِن طَلَّقَهَا فَلَا جُنَاحَ عَلَيْهِمَآ أَن يَتَرَاجَعَآ إِن ظَنَّآ أَن يُقِيمَا حُدُودَ ٱللَّهِ ۗ وَتِلْكَ حُدُودُ ٱللَّهِ يُبَيِّنُهَا لِقَوْمٍۢ يَعْلَمُونَ
fr: S'il divorce avec elle (la troisième fois) alors elle ne lui sera plus licite tant qu'elle n'aura pas épousé un autre. Et si ce (dernier) la répudie alors les deux ne commettent aucun péché en reprenant la vie commune, pourvu qu'ils pensent pouvoir tous deux se conformer aux ordres d'Allah. Voilà les ordres d'Allah, qu'Il expose aux gens qui comprennent.
ph: Fa'in Ţallaqahā Falā Taĥillu Lahu Min Ba`du Ĥattá Tankiĥa Zawjāan Ghayrahu Fa'in Ţallaqahā Falā Junāĥa `Alayhimā 'An Yatarāja`ā 'In Žannā 'An Yuqīmā Ĥudūda Allāhi Wa Tilka Ĥudūdu Allāhi Yubayyinuhā Liqawmin Ya`lamūna

2:231
ar: وَإِذَا طَلَّقْتُمُ ٱلنِّسَآءَ فَبَلَغْنَ أَجَلَهُنَّ فَأَمْسِكُوهُنَّ بِمَعْرُوفٍ أَوْ سَرِّحُوهُنَّ بِمَعْرُوفٍۢ ۚ وَلَا تُمْسِكُوهُنَّ ضِرَارًۭا لِّتَعْتَدُوا۟ ۚ وَمَن يَفْعَلْ ذَٰلِكَ فَقَدْ ظَلَمَ نَفْسَهُۥ ۚ وَلَا تَتَّخِذُوٓا۟ ءَايَٰتِ ٱللَّهِ هُزُوًۭا ۚ وَٱذْكُرُوا۟ نِعْمَتَ ٱللَّهِ عَلَيْكُمْ وَمَآ أَنزَلَ عَلَيْكُم مِّنَ ٱلْكِتَٰبِ وَٱلْحِكْمَةِ يَعِظُكُم بِهِۦ ۚ وَٱتَّقُوا۟ ٱللَّهَ وَٱعْلَمُوٓا۟ أَنَّ ٱللَّهَ بِكُلِّ شَىْءٍ عَلِيمٌۭ
fr: Et quand vous divorcez d'avec vos épouses, et que leur délai expire, alors, reprenez-les conformément à la bienséance ou libérez-les conformément à la bienséance. Mais ne les retenez pas pour leur faire du tort: vous transgresseriez alors et quiconque agit ainsi se fait du tort à lui-même. Ne prenez pas en moquerie les versets d'Allah. Et rappelez-vous le bienfait d'Allah envers vous, ainsi que le Livre et la Sagesse qu'Il vous a fait descendre; par lesquels Il vous exhorte. Et craignez Allah, et sachez qu'Allah est Omniscient.
ph: Wa 'Idhā Ţallaqtumu An-Nisā' Fabalaghna 'Ajalahunna Fa'amsikūhunna Bima`rūfin 'Aw Sarriĥūhunna Bima`rūfin Wa Lā Tumsikūhunna Đirārāan Lita`tadū Wa Man Yaf`al Dhālika Faqad Žalama Nafsahu Wa Lā Tattakhidhū 'Āyāti Allāhi Huzūan Wa Adhkurū Ni`mata Allāhi `Alaykum Wa Mā 'Anzala `Alaykum Mina Al-Kitābi Wa Al-Ĥikmati Ya`ižukum Bihi Wa Attaqū Allāha Wa A`lamū 'Anna Allāha Bikulli Shay'in `Alīmun

2:232
ar: وَإِذَا طَلَّقْتُمُ ٱلنِّسَآءَ فَبَلَغْنَ أَجَلَهُنَّ فَلَا تَعْضُلُوهُنَّ أَن يَنكِحْنَ أَزْوَٰجَهُنَّ إِذَا تَرَٰضَوْا۟ بَيْنَهُم بِٱلْمَعْرُوفِ ۗ ذَٰلِكَ يُوعَظُ بِهِۦ مَن كَانَ مِنكُمْ يُؤْمِنُ بِٱللَّهِ وَٱلْيَوْمِ ٱلْءَاخِرِ ۗ ذَٰلِكُمْ أَزْكَىٰ لَكُمْ وَأَطْهَرُ ۗ وَٱللَّهُ يَعْلَمُ وَأَنتُمْ لَا تَعْلَمُونَ
fr: Et quand vous divorcez d'avec vos épouses, et que leur délai expire, alors ne les empêchez pas de renouer avec leurs époux, s'ils s'agréent l'un l'autre, et conformément à la bienséance. Voilà à quoi est exhorté celui d'entre vous qui croit en Allah et au Jour dernier. Ceci est plus décent et plus pur pour vous. Et Allah sait, alors que vous ne savez pas.
ph: Wa 'Idhā Ţallaqtumu An-Nisā' Fabalaghna 'Ajalahunna Falā Ta`đulūhunna 'An Yankiĥna 'Azwājahunna 'Idhā Tarāđaw Baynahum Bil-Ma`rūfi Dhālika Yū`ažu Bihi Man Kāna Minkum Yu'uminu Billāhi Wa Al-Yawmi Al-'Ākhiri Dhālikum 'Azká Lakum Wa 'Aţharu Wa Allāhu Ya`lamu Wa 'Antum Lā Ta`lamūna

2:233
ar: ۞ وَٱلْوَٰلِدَٰتُ يُرْضِعْنَ أَوْلَٰدَهُنَّ حَوْلَيْنِ كَامِلَيْنِ ۖ لِمَنْ أَرَادَ أَن يُتِمَّ ٱلرَّضَاعَةَ ۚ وَعَلَى ٱلْمَوْلُودِ لَهُۥ رِزْقُهُنَّ وَكِسْوَتُهُنَّ بِٱلْمَعْرُوفِ ۚ لَا تُكَلَّفُ نَفْسٌ إِلَّا وُسْعَهَا ۚ لَا تُضَآرَّ وَٰلِدَةٌۢ بِوَلَدِهَا وَلَا مَوْلُودٌۭ لَّهُۥ بِوَلَدِهِۦ ۚ وَعَلَى ٱلْوَارِثِ مِثْلُ ذَٰلِكَ ۗ فَإِنْ أَرَادَا فِصَالًا عَن تَرَاضٍۢ مِّنْهُمَا وَتَشَاوُرٍۢ فَلَا جُنَاحَ عَلَيْهِمَا ۗ وَإِنْ أَرَدتُّمْ أَن تَسْتَرْضِعُوٓا۟ أَوْلَٰدَكُمْ فَلَا جُنَاحَ عَلَيْكُمْ إِذَا سَلَّمْتُم مَّآ ءَاتَيْتُم بِٱلْمَعْرُوفِ ۗ وَٱتَّقُوا۟ ٱللَّهَ وَٱعْلَمُوٓا۟ أَنَّ ٱللَّهَ بِمَا تَعْمَلُونَ بَصِيرٌۭ
fr: Et les mères, qui veulent donner un allaitement complet, allaiteront leurs bébés deux ans complets. Au père de l'enfant de les nourrir et vêtir de manière convenable. Nul ne doit supporter plus que ses moyens. La mère n'a pas à subir de dommage à cause de son enfant, ni le père, à cause de son enfant. Même obligation pour l'héritier. Et si, après s'être consultés, tous deux tombent d'accord pour décider le sevrage, nul grief à leur faire. Et si vous voulez mettre vos enfants en nourrice, nul grief à vous faire non plus, à condition que vous acquittiez la rétribution convenue, conformément à l'usage. Et craignez Allah, et sachez qu'Allah observe ce que vous faites.
ph: Wa Al-Wālidātu Yurđi`na 'Awlādahunna Ĥawlayni Kāmilayni Liman 'Arāda 'An Yutimma Ar-Rađā`ata Wa `Alá Al-Mawlūdi Lahu Rizquhunna Wa Kiswatuhunna Bil-Ma`rūfi Lā Tukallafu Nafsun 'Illā Wus`ahā Lā Tuđārra Wa A-Datun Biwaladihā Wa Lā Mawlūdun Lahu Biwaladihi Wa `Alá Al-Wārithi Mithlu Dhālika Fa'in 'Arādā Fişālāan `An Tarāđin Minhumā Wa Tashāwurin Falā Junāĥa `Alayhimā Wa 'In 'Aradtum 'An Tastarđi`ū 'Awlādakum Falā Junāĥa `Alaykum 'Idhā Sallamtum Mā 'Ātaytum Bil-Ma`rūfi Wa Attaqū Allāha Wa A`lamū 'Anna Allāha Bimā Ta`malūna Başīrun

2:234
ar: وَٱلَّذِينَ يُتَوَفَّوْنَ مِنكُمْ وَيَذَرُونَ أَزْوَٰجًۭا يَتَرَبَّصْنَ بِأَنفُسِهِنَّ أَرْبَعَةَ أَشْهُرٍۢ وَعَشْرًۭا ۖ فَإِذَا بَلَغْنَ أَجَلَهُنَّ فَلَا جُنَاحَ عَلَيْكُمْ فِيمَا فَعَلْنَ فِىٓ أَنفُسِهِنَّ بِٱلْمَعْرُوفِ ۗ وَٱللَّهُ بِمَا تَعْمَلُونَ خَبِيرٌۭ
fr: Ceux des vôtres que la mort frappe et qui laissent des épouses: celles-ci doivent observer une période d'attente de quatre mois et dix jours. Passé ce délai, on ne vous reprochera pas la façon dont elles disposeront d'elles-mêmes d'une manière convenable. Allah est Parfaitement Connaisseur de ce que vous faites.
ph: Wa Al-Ladhīna Yutawaffawna Minkum Wa Yadharūna 'Azwājāan Yatarabbaşna Bi'anfusihinna 'Arba`ata 'Ash/hurin Wa `Ashrāan Fa'idhā Balaghna 'Ajalahunna Falā Junāĥa `Alaykum Fīmā Fa`alna Fī 'Anfusihinna Bil-Ma`rūfi Wa Allāhu Bimā Ta`malūna Khabīrun

2:235
ar: وَلَا جُنَاحَ عَلَيْكُمْ فِيمَا عَرَّضْتُم بِهِۦ مِنْ خِطْبَةِ ٱلنِّسَآءِ أَوْ أَكْنَنتُمْ فِىٓ أَنفُسِكُمْ ۚ عَلِمَ ٱللَّهُ أَنَّكُمْ سَتَذْكُرُونَهُنَّ وَلَٰكِن لَّا تُوَاعِدُوهُنَّ سِرًّا إِلَّآ أَن تَقُولُوا۟ قَوْلًۭا مَّعْرُوفًۭا ۚ وَلَا تَعْزِمُوا۟ عُقْدَةَ ٱلنِّكَاحِ حَتَّىٰ يَبْلُغَ ٱلْكِتَٰبُ أَجَلَهُۥ ۚ وَٱعْلَمُوٓا۟ أَنَّ ٱللَّهَ يَعْلَمُ مَا فِىٓ أَنفُسِكُمْ فَٱحْذَرُوهُ ۚ وَٱعْلَمُوٓا۟ أَنَّ ٱللَّهَ غَفُورٌ حَلِيمٌۭ
fr: Et on ne vous reprochera pas de faire, aux femmes, allusion à une proposition de mariage, ou d'en garder secrète l'intention. Allah sait que vous allez songer à ces femmes. Mais ne leur promettez rien secrètement sauf à leur dire des paroles convenables. Et ne vous décidez au contrat de mariage qu'à l'expiration du délai prescrit. Et sachez qu'Allah sait ce qu'il y a dans vos âmes. Prenez donc garde à Lui, et sachez aussi qu'Allah est Pardonneur et Plein de mansuétude.
ph: Wa Lā Junāĥa `Alaykum Fīmā `Arrađtum Bihi Min Khiţbati An-Nisā' 'Aw 'Aknantum Fī 'Anfusikum `Alima Allāhu 'Annakum Satadhkurūnahunna Wa Lakin Lā Tuwā`idūhunna Sirrāan 'Illā 'An Taqūlū Qawlāan Ma`rūfāan Wa Lā Ta`zimū `Uqdata An-Nikāĥi Ĥattá Yablugha Al-Kitābu 'Ajalahu Wa A`lamū 'Anna Allāha Ya`lamu Mā Fī 'Anfusikum Fāĥdharūhu Wa A`lamū 'Anna Allāha Ghafūrun Ĥalīmun

2:236
ar: لَّا جُنَاحَ عَلَيْكُمْ إِن طَلَّقْتُمُ ٱلنِّسَآءَ مَا لَمْ تَمَسُّوهُنَّ أَوْ تَفْرِضُوا۟ لَهُنَّ فَرِيضَةًۭ ۚ وَمَتِّعُوهُنَّ عَلَى ٱلْمُوسِعِ قَدَرُهُۥ وَعَلَى ٱلْمُقْتِرِ قَدَرُهُۥ مَتَٰعًۢا بِٱلْمَعْرُوفِ ۖ حَقًّا عَلَى ٱلْمُحْسِنِينَ
fr: Vous ne faites point de péché en divorçant d'avec des épouses que vous n'avez pas touchées, et à qui vous n'avez pas fixé leur mahr . Donnez-leur toutefois -l'homme aisé selon sa capacité, l'indigent selon sa capacité -quelque bien convenable dont elles puissent jouir. C'est un devoir pour les bienfaisants.
ph: Lā Junāĥa `Alaykum 'In Ţallaqtumu An-Nisā' Mā Lam Tamassūhunna 'Aw Tafriđū Lahunna Farīđatan Wa Matti`ūhunna `Alá Al-Mūsi`i Qadaruhu Wa `Alá Al-Muqtiri Qadaruhu Matā`āan Bil-Ma`rūfi Ĥaqqāan `Alá Al-Muĥsinīna

2:237
ar: وَإِن طَلَّقْتُمُوهُنَّ مِن قَبْلِ أَن تَمَسُّوهُنَّ وَقَدْ فَرَضْتُمْ لَهُنَّ فَرِيضَةًۭ فَنِصْفُ مَا فَرَضْتُمْ إِلَّآ أَن يَعْفُونَ أَوْ يَعْفُوَا۟ ٱلَّذِى بِيَدِهِۦ عُقْدَةُ ٱلنِّكَاحِ ۚ وَأَن تَعْفُوٓا۟ أَقْرَبُ لِلتَّقْوَىٰ ۚ وَلَا تَنسَوُا۟ ٱلْفَضْلَ بَيْنَكُمْ ۚ إِنَّ ٱللَّهَ بِمَا تَعْمَلُونَ بَصِيرٌ
fr: Et si vous divorcez d'avec elles sans les avoir touchées, mais après fixation de leur mahr versez-leur alors la moitié de ce que vous avez fixé, à moins qu'elles ne s'en désistent, ou que ne se désiste celui entre les mains de qui est la conclusion du mariage. Le désistement est plus proche de la piété. Et n'oubliez pas votre faveur mutuelle. Car Allah voit parfaitement ce que vous faites.
ph: Wa 'In Ţallaqtumūhunna Min Qabli 'An Tamassūhunna Wa Qad Farađtum Lahunna Farīđatan Fanişfu Mā Farađtum 'Illā 'An Ya`fūna 'Aw Ya`fuwa Al-Ladhī Biyadihi `Uqdatu An-Nikāĥi Wa 'An Ta`fū 'Aqrabu Lilttaqwá Wa Lā Tansaw Al-Fađla Baynakum 'Inna Allāha Bimā Ta`malūna Başīrun

2:238
ar: حَٰفِظُوا۟ عَلَى ٱلصَّلَوَٰتِ وَٱلصَّلَوٰةِ ٱلْوُسْطَىٰ وَقُومُوا۟ لِلَّهِ قَٰنِتِينَ
fr: Soyez assidus aux Salats et surtout la Salat médiane; et tenez-vous debout devant Allah, avec humilité.
ph: Ĥāfižū `Alá Aş-Şalawāti Wa Aş-Şalāati Al-Wusţá Wa Qūmū Lillāhi Qānitīna

2:239
ar: فَإِنْ خِفْتُمْ فَرِجَالًا أَوْ رُكْبَانًۭا ۖ فَإِذَآ أَمِنتُمْ فَٱذْكُرُوا۟ ٱللَّهَ كَمَا عَلَّمَكُم مَّا لَمْ تَكُونُوا۟ تَعْلَمُونَ
fr: Mais si vous craignez (un grand danger), alors priez en marchant ou sur vos montures. Puis quand vous êtes en sécurité, invoquez Allah comme Il vous a enseigné ce que vous ne saviez pas.
ph: Fa'in Khiftum Farijālāan 'Aw Rukbānāan Fa'idhā 'Amintum Fādhkurū Allāha Kamā `Allamakum Mā Lam Takūnū Ta`lamūna

2:240
ar: وَٱلَّذِينَ يُتَوَفَّوْنَ مِنكُمْ وَيَذَرُونَ أَزْوَٰجًۭا وَصِيَّةًۭ لِّأَزْوَٰجِهِم مَّتَٰعًا إِلَى ٱلْحَوْلِ غَيْرَ إِخْرَاجٍۢ ۚ فَإِنْ خَرَجْنَ فَلَا جُنَاحَ عَلَيْكُمْ فِى مَا فَعَلْنَ فِىٓ أَنفُسِهِنَّ مِن مَّعْرُوفٍۢ ۗ وَٱللَّهُ عَزِيزٌ حَكِيمٌۭ
fr: Ceux d'entre vous que la mort frappe et qui laissent des épouses, doivent laisser un testament en faveur de leurs épouses pourvoyant à un an d'entretien sans les expulser de chez elles. Si ce sont elles qui partent, alors on ne vous reprochera pas ce qu'elles font de convenable pour elles-mêmes. Allah est Puissant et Sage.
ph: Wa Al-Ladhīna Yutawaffawna Minkum Wa Yadharūna 'Azwājāan Waşīyatan Li'zwājihim Matā`āan 'Ilá Al-Ĥawli Ghayra 'Ikhrājin Fa'in Kharajna Falā Junāĥa `Alaykum Fī Mā Fa`alna Fī 'Anfusihinna Min Ma`rūfin Wa Allāhu `Azīzun Ĥakīmun

2:241
ar: وَلِلْمُطَلَّقَٰتِ مَتَٰعٌۢ بِٱلْمَعْرُوفِ ۖ حَقًّا عَلَى ٱلْمُتَّقِينَ
fr: Les divorcées ont droit à la jouissance d'une allocation convenable, [constituant] un devoir pour les pieux.
ph: Wa Lilmuţallaqāti Matā`un Bil-Ma`rūfi Ĥaqqāan `Alá Al-Muttaqīna

2:242
ar: كَذَٰلِكَ يُبَيِّنُ ٱللَّهُ لَكُمْ ءَايَٰتِهِۦ لَعَلَّكُمْ تَعْقِلُونَ
fr: C'est ainsi qu'Allah vous explique Ses versets, afin que vous raisonniez !
ph: Kadhālika Yubayyinu Allāhu Lakum 'Āyātihi La`allakum Ta`qilūna

2:243
ar: ۞ أَلَمْ تَرَ إِلَى ٱلَّذِينَ خَرَجُوا۟ مِن دِيَٰرِهِمْ وَهُمْ أُلُوفٌ حَذَرَ ٱلْمَوْتِ فَقَالَ لَهُمُ ٱللَّهُ مُوتُوا۟ ثُمَّ أَحْيَٰهُمْ ۚ إِنَّ ٱللَّهَ لَذُو فَضْلٍ عَلَى ٱلنَّاسِ وَلَٰكِنَّ أَكْثَرَ ٱلنَّاسِ لَا يَشْكُرُونَ
fr: N'as-tu pas vu ceux qui sortirent de leurs demeures, -il y en avait des milliers -, par crainte de la mort ? Puis Allah leur dit: « Mourez. » Après quoi Il les rendit à la vie. Certes, Allah est Détenteur de la Faveur, envers les gens; mais la plupart des gens ne sont pas reconnaissants.
ph: 'Alam Tara 'Ilá Al-Ladhīna Kharajū Min Diyārihim Wa Hum 'Ulūfun Ĥadhara Al-Mawti Faqāla Lahumu Allāhu Mūtū Thumma 'Aĥyāhum 'Inna Allāha Ladhū Fađlin `Alá An-Nāsi Wa Lakinna 'Akthara An-Nāsi Lā Yashkurūna

2:244
ar: وَقَٰتِلُوا۟ فِى سَبِيلِ ٱللَّهِ وَٱعْلَمُوٓا۟ أَنَّ ٱللَّهَ سَمِيعٌ عَلِيمٌۭ
fr: Et combattez dans le sentier d'Allah. Et sachez qu'Allah est Audient et Omniscient.
ph: Wa Qātilū Fī Sabīli Allāhi Wa A`lamū 'Anna Allāha Samī`un `Alīmun

2:245
ar: مَّن ذَا ٱلَّذِى يُقْرِضُ ٱللَّهَ قَرْضًا حَسَنًۭا فَيُضَٰعِفَهُۥ لَهُۥٓ أَضْعَافًۭا كَثِيرَةًۭ ۚ وَٱللَّهُ يَقْبِضُ وَيَبْصُۜطُ وَإِلَيْهِ تُرْجَعُونَ
fr: Quiconque prête à Allah de bonne grâce, Il le lui rendra multiplié plusieurs fois. Allah restreint ou étend (Ses faveurs.) Et c'est à Lui que vous retournerez.
ph: Man Dhā Al-Ladhī Yuqriđu Allāha Qarđāan Ĥasanāan Fayuđā`ifahu Lahu 'Ađ`āfāan Kathīratan Wa Allāhu Yaqbiđu Wa Yabsuţu Wa 'Ilayhi Turja`ūna

2:246
ar: أَلَمْ تَرَ إِلَى ٱلْمَلَإِ مِنۢ بَنِىٓ إِسْرَٰٓءِيلَ مِنۢ بَعْدِ مُوسَىٰٓ إِذْ قَالُوا۟ لِنَبِىٍّۢ لَّهُمُ ٱبْعَثْ لَنَا مَلِكًۭا نُّقَٰتِلْ فِى سَبِيلِ ٱللَّهِ ۖ قَالَ هَلْ عَسَيْتُمْ إِن كُتِبَ عَلَيْكُمُ ٱلْقِتَالُ أَلَّا تُقَٰتِلُوا۟ ۖ قَالُوا۟ وَمَا لَنَآ أَلَّا نُقَٰتِلَ فِى سَبِيلِ ٱللَّهِ وَقَدْ أُخْرِجْنَا مِن دِيَٰرِنَا وَأَبْنَآئِنَا ۖ فَلَمَّا كُتِبَ عَلَيْهِمُ ٱلْقِتَالُ تَوَلَّوْا۟ إِلَّا قَلِيلًۭا مِّنْهُمْ ۗ وَٱللَّهُ عَلِيمٌۢ بِٱلظَّٰلِمِينَ
fr: N'as-tu pas su l'histoire des notables, parmi les enfants d'Israʾil (Israël), lorsqu'après Musa (Moïse) ils dirent à un prophète à eux: « Désigne-nous un roi, pour que nous combattions dans le sentier d'Allah. » Il dit: « Et si vous ne combattez pas, quand le combat vous sera prescrit ? » Ils dirent: « Et qu'aurions-nous à ne pas combattre dans le sentier d'Allah, alors qu'on nous a expulsés de nos maisons et qu'on a capturé nos enfants ? » Et quand le combat leur fut prescrit, ils tournèrent le dos, sauf un petit nombre d'entre eux. Et Allah connaît bien les injustes.
ph: 'Alam Tara 'Ilá Al-Mala'i Min Banī 'Isrā'īla Min Ba`di Mūsá 'Idh Qālū Linabīyin Lahum Ab`ath Lanā Malikāan Nuqātil Fī Sabīli Allāhi Qāla Hal `Asaytum 'In Kutiba `Alaykumu Al-Qitālu 'Allā Tuqātilū Qālū Wa Mā Lanā 'Allā Nuqātila Fī Sabīli Allāhi Wa Qad 'Ukhrijnā Min Diyārinā Wa 'Abnā'inā Falammā Kutiba `Alayhimu Al-Qitālu Tawallaw 'Illā Qalīlāan Minhum Wa Allāhu `Alīmun Biž-Žālimīna

2:247
ar: وَقَالَ لَهُمْ نَبِيُّهُمْ إِنَّ ٱللَّهَ قَدْ بَعَثَ لَكُمْ طَالُوتَ مَلِكًۭا ۚ قَالُوٓا۟ أَنَّىٰ يَكُونُ لَهُ ٱلْمُلْكُ عَلَيْنَا وَنَحْنُ أَحَقُّ بِٱلْمُلْكِ مِنْهُ وَلَمْ يُؤْتَ سَعَةًۭ مِّنَ ٱلْمَالِ ۚ قَالَ إِنَّ ٱللَّهَ ٱصْطَفَىٰهُ عَلَيْكُمْ وَزَادَهُۥ بَسْطَةًۭ فِى ٱلْعِلْمِ وَٱلْجِسْمِ ۖ وَٱللَّهُ يُؤْتِى مُلْكَهُۥ مَن يَشَآءُ ۚ وَٱللَّهُ وَٰسِعٌ عَلِيمٌۭ
fr: Et leur prophète leur dit: « Voici qu'Allah vous a envoyé Tâlût pour roi. » Ils dirent: « Comment règnerait-il sur nous ? Nous avons plus de droit que lui à la royauté. On ne lui a même pas prodigué beaucoup de richesses ! » Il dit: « Allah, vraiment l'a élu sur vous, et a accru sa part quant au savoir et à la condition physique. » -Et Allah alloue Son pouvoir à qui Il veut. Allah a la grâce immense et Il est Omniscient.
ph: Wa Qāla Lahum Nabīyuhum 'Inna Allāha Qad Ba`atha Lakum Ţālūta Malikāan Qālū 'Anná Yakūnu Lahu Al-Mulku `Alaynā Wa Naĥnu 'Aĥaqqu Bil-Mulki Minhu Wa Lam Yu'uta Sa`atan Mina Al-Māli Qāla 'Inna Allāha Aşţafāhu `Alaykum Wa Zādahu Basţatan Fī Al-`Ilmi Wa Al-Jismi Wa Allāhu Yu'utī Mulkahu Man Yashā'u Wa Allāhu Wāsi`un `Alīmun

2:248
ar: وَقَالَ لَهُمْ نَبِيُّهُمْ إِنَّ ءَايَةَ مُلْكِهِۦٓ أَن يَأْتِيَكُمُ ٱلتَّابُوتُ فِيهِ سَكِينَةٌۭ مِّن رَّبِّكُمْ وَبَقِيَّةٌۭ مِّمَّا تَرَكَ ءَالُ مُوسَىٰ وَءَالُ هَٰرُونَ تَحْمِلُهُ ٱلْمَلَٰٓئِكَةُ ۚ إِنَّ فِى ذَٰلِكَ لَءَايَةًۭ لَّكُمْ إِن كُنتُم مُّؤْمِنِينَ
fr: Et leur prophète leur dit: « Le signe de son investiture sera que le Coffre va vous revenir; objet de quiétude inspiré par votre Seigneur, et contenant les reliques de ce que laissèrent la famille de Musa (Moïse) et la famille d'Harun (Aaron). Les Anges le porteront. Voilà bien là un signe pour vous, si vous êtes croyants ! »
ph: Wa Qāla Lahum Nabīyuhum 'Inna 'Āyata Mulkihi 'An Ya'tiyakumu At-Tābūtu Fīhi Sakīnatun Min Rabbikum Wa Baqīyatun Mimmā Taraka 'Ālu Mūsá Wa 'Ālu Hārūna Taĥmiluhu Al-Malā'ikatu 'Inna Fī Dhālika La'āyatan Lakum 'In Kuntum Mu'uminīna

2:249
ar: فَلَمَّا فَصَلَ طَالُوتُ بِٱلْجُنُودِ قَالَ إِنَّ ٱللَّهَ مُبْتَلِيكُم بِنَهَرٍۢ فَمَن شَرِبَ مِنْهُ فَلَيْسَ مِنِّى وَمَن لَّمْ يَطْعَمْهُ فَإِنَّهُۥ مِنِّىٓ إِلَّا مَنِ ٱغْتَرَفَ غُرْفَةًۢ بِيَدِهِۦ ۚ فَشَرِبُوا۟ مِنْهُ إِلَّا قَلِيلًۭا مِّنْهُمْ ۚ فَلَمَّا جَاوَزَهُۥ هُوَ وَٱلَّذِينَ ءَامَنُوا۟ مَعَهُۥ قَالُوا۟ لَا طَاقَةَ لَنَا ٱلْيَوْمَ بِجَالُوتَ وَجُنُودِهِۦ ۚ قَالَ ٱلَّذِينَ يَظُنُّونَ أَنَّهُم مُّلَٰقُوا۟ ٱللَّهِ كَم مِّن فِئَةٍۢ قَلِيلَةٍ غَلَبَتْ فِئَةًۭ كَثِيرَةًۢ بِإِذْنِ ٱللَّهِ ۗ وَٱللَّهُ مَعَ ٱلصَّٰبِرِينَ
fr: Puis, au moment de partir avec les troupes, Tâlût dit: « Voici: Allah va vous éprouver par une rivière: quiconque y boira ne sera plus des miens; et quiconque n'y goûtera pas sera des miens; -passe pour celui qui y puisera un coup dans le creux de sa main. » Ils en burent, sauf un petit nombre d'entre eux. Puis, lorsqu'ils l'eurent traversée, lui et ceux des croyants qui l'accompagnaient, ils dirent: « Nous voilà sans force aujourd'hui contre Goliath et ses troupes ! » Ceux qui étaient convaincus qu'ils auront à rencontrer Allah dirent: « Combien de fois une troupe peu nombreuse a, par la grâce d'Allah, vaincu une troupe très nombreuse ! Et Allah est avec les endurants »
ph: Falammā Faşala Ţālūtu Bil-Junūdi Qāla 'Inna Allāha Mubtalīkum Binaharin Faman Shariba Minhu Falaysa Minnī Wa Man Lam Yaţ`amhu Fa'innahu Minnī 'Illā Mani Aghtarafa Ghurfatan Biyadihi Fasharibū Minhu 'Illā Qalīlāan Minhum Falammā Jāwazahu Huwa Wa Al-Ladhīna 'Āmanū Ma`ahu Qālū Lā Ţāqata Lanā Al-Yawma Bijālūta Wa Junūdihi Qāla Al-Ladhīna Yažunnūna 'Annahum Mulāqū Allāhi Kam Min Fi'atin Qalīlatin Ghalabat Fi'atan Kathīratan Bi'idhni Allāhi Wa Allāhu Ma`a Aş-Şābirīna

2:250
ar: وَلَمَّا بَرَزُوا۟ لِجَالُوتَ وَجُنُودِهِۦ قَالُوا۟ رَبَّنَآ أَفْرِغْ عَلَيْنَا صَبْرًۭا وَثَبِّتْ أَقْدَامَنَا وَٱنصُرْنَا عَلَى ٱلْقَوْمِ ٱلْكَٰفِرِينَ
fr: Et quand ils affrontèrent Goliath et ses troupes, ils dirent: « Seigneur ! Déverse sur nous l'endurance, affermis nos pas et donne-nous la victoire sur ce peuple infidèle. »
ph: Wa Lammā Barazū Lijālūta Wa Junūdihi Qālū Rabbanā 'Afrigh `Alaynā Şabrāan Wa Thabbit 'Aqdāmanā Wa Anşurnā `Alá Al-Qawmi Al-Kāfirīna

2:251
ar: فَهَزَمُوهُم بِإِذْنِ ٱللَّهِ وَقَتَلَ دَاوُۥدُ جَالُوتَ وَءَاتَىٰهُ ٱللَّهُ ٱلْمُلْكَ وَٱلْحِكْمَةَ وَعَلَّمَهُۥ مِمَّا يَشَآءُ ۗ وَلَوْلَا دَفْعُ ٱللَّهِ ٱلنَّاسَ بَعْضَهُم بِبَعْضٍۢ لَّفَسَدَتِ ٱلْأَرْضُ وَلَٰكِنَّ ٱللَّهَ ذُو فَضْلٍ عَلَى ٱلْعَٰلَمِينَ
fr: Ils les mirent en déroute, par la grâce d'Allah. Et Dawud (David) tua Goliath; et Allah lui donna la royauté et la sagesse, et lui enseigna ce qu'Il voulut. Et si Allah ne neutralisait pas une partie des hommes par une autre, la terre serait certainement corrompue. Mais Allah est Détenteur de la Faveur pour les mondes.
ph: Fahazamūhum Bi'idhni Allāhi Wa Qatala Dāwūdu Jālūta Wa 'Ātāhu Allāhu Al-Mulka Wa Al-Ĥikmata Wa `Allamahu Mimmā Yashā'u Wa Lawlā Daf`u Allāhi An-Nāsa Ba`đahum Biba`đin Lafasadati Al-'Arđu Wa Lakinna Allāha Dhū Fađlin `Alá Al-`Ālamīna

2:252
ar: تِلْكَ ءَايَٰتُ ٱللَّهِ نَتْلُوهَا عَلَيْكَ بِٱلْحَقِّ ۚ وَإِنَّكَ لَمِنَ ٱلْمُرْسَلِينَ
fr: Voilà les versets d'Allah, que Nous te (Muhammad) récitons avec la vérité. Et tu es, certes parmi les Envoyés.
ph: Tilka 'Āyātu Allāhi Natlūhā `Alayka Bil-Ĥaqqi Wa 'Innaka Lamina Al-Mursalīna

2:253
ar: ۞ تِلْكَ ٱلرُّسُلُ فَضَّلْنَا بَعْضَهُمْ عَلَىٰ بَعْضٍۢ ۘ مِّنْهُم مَّن كَلَّمَ ٱللَّهُ ۖ وَرَفَعَ بَعْضَهُمْ دَرَجَٰتٍۢ ۚ وَءَاتَيْنَا عِيسَى ٱبْنَ مَرْيَمَ ٱلْبَيِّنَٰتِ وَأَيَّدْنَٰهُ بِرُوحِ ٱلْقُدُسِ ۗ وَلَوْ شَآءَ ٱللَّهُ مَا ٱقْتَتَلَ ٱلَّذِينَ مِنۢ بَعْدِهِم مِّنۢ بَعْدِ مَا جَآءَتْهُمُ ٱلْبَيِّنَٰتُ وَلَٰكِنِ ٱخْتَلَفُوا۟ فَمِنْهُم مَّنْ ءَامَنَ وَمِنْهُم مَّن كَفَرَ ۚ وَلَوْ شَآءَ ٱللَّهُ مَا ٱقْتَتَلُوا۟ وَلَٰكِنَّ ٱللَّهَ يَفْعَلُ مَا يُرِيدُ
fr: Parmi ces messagers, Nous avons favorisé certains par rapport à d'autres. Il en est à qui Allah a parlé; et Il en a élevé d'autres en grade. A 'Isa (Jésus) fils de Maryam (Marie) Nous avons apporté les preuves, et l'avons fortifié par le Saint-Esprit. Et si Allah avait voulu, les gens qui vinrent après eux ne se seraient pas entretués, après que les preuves leur furent venues; mais ils se sont opposés: les uns restèrent croyants, les autres furent infidèles. Si Allah avait voulu, ils ne se seraient pas entretués; mais Allah fait ce qu'Il veut.
ph: Tilka Ar-Rusulu Fađđalnā Ba`đahum `Alá Ba`đin Minhum Man Kallama Allāhu Wa Rafa`a Ba`đahum Darajātin Wa 'Ātaynā `Īsá Abna Maryama Al-Bayyināti Wa 'Ayyadnāhu Birūĥi Al-Qudusi Wa Law Shā'a Allāhu Mā Aqtatala Al-Ladhīna Min Ba`dihim Min Ba`di Mā Jā'at/humu Al-Bayyinātu Wa Lakini Akhtalafū Faminhum Man 'Āmana Wa Minhum Man Kafara Wa Law Shā'a Allāhu Mā Aqtatalū Wa Lakinna Allāha Yaf`alu Mā Yurīdu

2:254
ar: يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوٓا۟ أَنفِقُوا۟ مِمَّا رَزَقْنَٰكُم مِّن قَبْلِ أَن يَأْتِىَ يَوْمٌۭ لَّا بَيْعٌۭ فِيهِ وَلَا خُلَّةٌۭ وَلَا شَفَٰعَةٌۭ ۗ وَٱلْكَٰفِرُونَ هُمُ ٱلظَّٰلِمُونَ
fr: Ô les croyants ! Dépensez de ce que Nous vous avons attribué, avant que vienne le jour où il n'y aura ni rançon ni amitié ni intercession. Et ce sont les mécréants qui sont les injustes.
ph: Yā 'Ayyuhā Al-Ladhīna 'Āmanū 'Anfiqū Mimmā Razaqnākum Min Qabli 'An Ya'tiya Yawmun Lā Bay`un Fīhi Wa Lā Khullatun Wa Lā Shafā`atun Wa Al-Kāfirūna Humu Až-Žālimūna

2:255
ar: ٱللَّهُ لَآ إِلَٰهَ إِلَّا هُوَ ٱلْحَىُّ ٱلْقَيُّومُ ۚ لَا تَأْخُذُهُۥ سِنَةٌۭ وَلَا نَوْمٌۭ ۚ لَّهُۥ مَا فِى ٱلسَّمَٰوَٰتِ وَمَا فِى ٱلْأَرْضِ ۗ مَن ذَا ٱلَّذِى يَشْفَعُ عِندَهُۥٓ إِلَّا بِإِذْنِهِۦ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَىْءٍۢ مِّنْ عِلْمِهِۦٓ إِلَّا بِمَا شَآءَ ۚ وَسِعَ كُرْسِيُّهُ ٱلسَّمَٰوَٰتِ وَٱلْأَرْضَ ۖ وَلَا يَـُٔودُهُۥ حِفْظُهُمَا ۚ وَهُوَ ٱلْعَلِىُّ ٱلْعَظِيمُ
fr: Allah ! Point de divinité à part Lui, le Vivant, Celui qui subsiste par lui-même: « Al-Qayyûm. » Ni somnolence ni sommeil ne Le saisissent. A Lui appartient tout ce qui est dans les cieux et sur la terre. Qui peut intercéder auprès de Lui sans Sa permission ? Il connaît leur passé et leur futur. Et, de Sa science, ils n'embrassent que ce qu'Il veut. Son: Trône « Kursiy », déborde les cieux et la terre, dont la garde ne Lui coûte aucune peine. Et Il est le Très Haut, le Très Grand.
ph: Allāhu Lā 'Ilāha 'Illā Huwa Al-Ĥayyu Al-Qayyūmu Lā Ta'khudhuhu Sinatun Wa Lā Nawmun Lahu Mā Fī As-Samāwāti Wa Mā Fī Al-'Arđi Man Dhā Al-Ladhī Yashfa`u `Indahu 'Illā Bi'idhnihi Ya`lamu Mā Bayna 'Aydīhim Wa Mā Khalfahum Wa Lā Yuĥīţūna Bishay'in Min `Ilmihi 'Illā Bimā Shā'a Wasi`a Kursīyuhu As-Samāwāti Wa Al-'Arđa Wa Lā Ya'ūduhu Ĥifžuhumā Wa Huwa Al-`Alīyu Al-`Ažīmu

2:256
ar: لَآ إِكْرَاهَ فِى ٱلدِّينِ ۖ قَد تَّبَيَّنَ ٱلرُّشْدُ مِنَ ٱلْغَىِّ ۚ فَمَن يَكْفُرْ بِٱلطَّٰغُوتِ وَيُؤْمِنۢ بِٱللَّهِ فَقَدِ ٱسْتَمْسَكَ بِٱلْعُرْوَةِ ٱلْوُثْقَىٰ لَا ٱنفِصَامَ لَهَا ۗ وَٱللَّهُ سَمِيعٌ عَلِيمٌ
fr: Nulle contrainte en religion ! Car le bon chemin s'est distingué de l'égarement. Donc, quiconque mécroit au Rebelle tandis qu'il croit en Allah saisit l'anse la plus solide, qui ne peut se briser. Et Allah est Audient et Omniscient.
ph: Lā 'Ikrāha Fī Ad-Dīni Qad Tabayyana Ar-Rushdu Mina Al-Ghayyi Faman Yakfur Biţ-Ţāghūti Wa Yu'umin Billāhi Faqadi Astamsaka Bil-`Urwati Al-Wuthqá Lā Anfişāma Lahā Wa Allāhu Samī`un `Alīmun

2:257
ar: ٱللَّهُ وَلِىُّ ٱلَّذِينَ ءَامَنُوا۟ يُخْرِجُهُم مِّنَ ٱلظُّلُمَٰتِ إِلَى ٱلنُّورِ ۖ وَٱلَّذِينَ كَفَرُوٓا۟ أَوْلِيَآؤُهُمُ ٱلطَّٰغُوتُ يُخْرِجُونَهُم مِّنَ ٱلنُّورِ إِلَى ٱلظُّلُمَٰتِ ۗ أُو۟لَٰٓئِكَ أَصْحَٰبُ ٱلنَّارِ ۖ هُمْ فِيهَا خَٰلِدُونَ
fr: Allah est le défenseur de ceux qui ont la foi: Il les fait sortir des ténèbres à la lumière. Quant à ceux qui ne croient pas, ils ont pour défenseurs les Tâghût, qui les font sortir de la lumière aux ténèbres. Voilà les gens du Feu, où ils demeurent éternellement.
ph: Allāhu Wa Līyu Al-Ladhīna 'Āmanū Yukhrijuhum Mina Až-Žulumāti 'Ilá An-Nūr Wa Al-Ladhīna Kafarū 'Awliyā'uuhumu Aţ-Ţāghūtu Yukhrijūnahum Mina An-Nūr 'Ilá Až-Žulumāti 'Ūlā'ika 'Aşĥābu An-Nāri Hum Fīhā Khālidūna

2:258
ar: أَلَمْ تَرَ إِلَى ٱلَّذِى حَآجَّ إِبْرَٰهِۦمَ فِى رَبِّهِۦٓ أَنْ ءَاتَىٰهُ ٱللَّهُ ٱلْمُلْكَ إِذْ قَالَ إِبْرَٰهِۦمُ رَبِّىَ ٱلَّذِى يُحْىِۦ وَيُمِيتُ قَالَ أَنَا۠ أُحْىِۦ وَأُمِيتُ ۖ قَالَ إِبْرَٰهِۦمُ فَإِنَّ ٱللَّهَ يَأْتِى بِٱلشَّمْسِ مِنَ ٱلْمَشْرِقِ فَأْتِ بِهَا مِنَ ٱلْمَغْرِبِ فَبُهِتَ ٱلَّذِى كَفَرَ ۗ وَٱللَّهُ لَا يَهْدِى ٱلْقَوْمَ ٱلظَّٰلِمِينَ
fr: N'as-tu pas su (l'histoire de) celui qui, parce qu'Allah l'avait fait roi, argumenta contre Ibrahim (Abraham) au sujet de son Seigneur ? Ibrahim (Abraham) ayant dit: « J'ai pour Seigneur Celui qui donne la vie et la mort »,: « Moi aussi, dit l'autre, je donne la vie et la mort. » Alors dit Ibrahim (Abraham): « Puisqu'Allah fait venir le soleil du Levant, fais-le donc venir du Couchant. » Le mécréant resta alors confondu. Allah ne guide pas les gens injustes.
ph: 'Alam Tara 'Ilá Al-Ladhī Ĥājja 'Ibrāhīma Fī Rabbihi 'An 'Ātāhu Allāhu Al-Mulka 'Idh Qāla 'Ibrāhīmu Rabbī Al-Ladhī Yuĥyī Wa Yumītu Qāla 'Anā 'Uĥyī Wa 'Umītu Qāla 'Ibrāhīmu Fa'inna Allāha Ya'tī Bish-Shamsi Mina Al-Mashriqi Fa'ti Bihā Mina Al-Maghribi Fabuhita Al-Ladhī Kafara Wa Allāhu Lā Yahdī Al-Qawma Až-Žālimīna

2:259
ar: أَوْ كَٱلَّذِى مَرَّ عَلَىٰ قَرْيَةٍۢ وَهِىَ خَاوِيَةٌ عَلَىٰ عُرُوشِهَا قَالَ أَنَّىٰ يُحْىِۦ هَٰذِهِ ٱللَّهُ بَعْدَ مَوْتِهَا ۖ فَأَمَاتَهُ ٱللَّهُ مِا۟ئَةَ عَامٍۢ ثُمَّ بَعَثَهُۥ ۖ قَالَ كَمْ لَبِثْتَ ۖ قَالَ لَبِثْتُ يَوْمًا أَوْ بَعْضَ يَوْمٍۢ ۖ قَالَ بَل لَّبِثْتَ مِا۟ئَةَ عَامٍۢ فَٱنظُرْ إِلَىٰ طَعَامِكَ وَشَرَابِكَ لَمْ يَتَسَنَّهْ ۖ وَٱنظُرْ إِلَىٰ حِمَارِكَ وَلِنَجْعَلَكَ ءَايَةًۭ لِّلنَّاسِ ۖ وَٱنظُرْ إِلَى ٱلْعِظَامِ كَيْفَ نُنشِزُهَا ثُمَّ نَكْسُوهَا لَحْمًۭا ۚ فَلَمَّا تَبَيَّنَ لَهُۥ قَالَ أَعْلَمُ أَنَّ ٱللَّهَ عَلَىٰ كُلِّ شَىْءٍۢ قَدِيرٌۭ
fr: Ou comme celui qui passait par un village désert et dévasté: « Comment Allah va-t-Il redonner la vie à celui-ci après sa mort ? » dit-il. Allah donc le fit mourir et le garda ainsi pendant cent ans. Puis Il le ressuscita en disant: « Combien de temps as-tu demeuré ainsi ? » -« Je suis resté un jour, dit l'autre, ou une partie d'une journée. » -« Non ! dit Allah, tu es resté cent ans. Regarde donc ta nourriture et ta boisson: rien ne s'est gâté; mais regarde ton âne... Et pour faire de toi un signe pour les gens, et regarde ces ossements, comment Nous les assemblons et les revêtons de chair. » Et devant l'évidence, il dit: « Je sais qu'Allah est Omnipotent. »
ph: 'Aw Kālladhī Marra `Alá Qaryatin Wa Hiya Khāwiyatun `Alá `Urūshihā Qāla 'Anná Yuĥyī Hadhihi Allāhu Ba`da Mawtihā Fa'amātahu Allāhu Miā'ata `Āmin Thumma Ba`athahu Qāla Kam Labithta Qāla Labithtu Yawmāan 'Aw Ba`đa Yawmin Qāla Bal Labithta Miā'ata `Āmin Fānžur 'Ilá Ţa`āmika Wa Sharābika Lam Yatasannah Wa Anžur 'Ilá Ĥimārika Wa Linaj`alaka 'Āyatan Lilnnāsi Wa Anžur 'Ilá Al-`Ižāmi Kayfa Nunshizuhā Thumma Naksūhā Laĥmāan Falammā Tabayyana Lahu Qāla 'A`lamu 'Anna Allāha `Alá Kulli Shay'in Qadīrun

2:260
ar: وَإِذْ قَالَ إِبْرَٰهِۦمُ رَبِّ أَرِنِى كَيْفَ تُحْىِ ٱلْمَوْتَىٰ ۖ قَالَ أَوَلَمْ تُؤْمِن ۖ قَالَ بَلَىٰ وَلَٰكِن لِّيَطْمَئِنَّ قَلْبِى ۖ قَالَ فَخُذْ أَرْبَعَةًۭ مِّنَ ٱلطَّيْرِ فَصُرْهُنَّ إِلَيْكَ ثُمَّ ٱجْعَلْ عَلَىٰ كُلِّ جَبَلٍۢ مِّنْهُنَّ جُزْءًۭا ثُمَّ ٱدْعُهُنَّ يَأْتِينَكَ سَعْيًۭا ۚ وَٱعْلَمْ أَنَّ ٱللَّهَ عَزِيزٌ حَكِيمٌۭ
fr: Et quand Ibrahim (Abraham) dit: « Seigneur ! Montre-moi comment Tu ressuscites les morts », Allah dit: « Ne crois-tu pas encore ? » -« Si ! dit Ibrahim (Abraham); mais que mon cœur soit rassuré. » -« Prends donc, dit Allah, quatre oiseaux, apprivoise-les (et coupe-les) puis, sur des monts séparés, mets-en un fragment ensuite appelle-les: ils viendront à toi en toute hâte. Et sache qu'Allah est Puissant et sage. »
ph: Wa 'Idh Qāla 'Ibrāhīmu Rabbi 'Arinī Kayfa Tuĥyī Al-Mawtá Qāla 'Awalam Tu'umin Qāla Balá Wa Lakin Liyaţma'inna Qalbī Qāla Fakhudh 'Arba`atan Mina Aţ-Ţayri Faşurhunna 'Ilayka Thumma Aj`al `Alá Kulli Jabalin Minhunna Juz'āan Thumma Ad`uhunna Ya'tīnaka Sa`yāan Wa A`lam 'Anna Allāha `Azīzun Ĥakīmun

2:261
ar: مَّثَلُ ٱلَّذِينَ يُنفِقُونَ أَمْوَٰلَهُمْ فِى سَبِيلِ ٱللَّهِ كَمَثَلِ حَبَّةٍ أَنۢبَتَتْ سَبْعَ سَنَابِلَ فِى كُلِّ سُنۢبُلَةٍۢ مِّا۟ئَةُ حَبَّةٍۢ ۗ وَٱللَّهُ يُضَٰعِفُ لِمَن يَشَآءُ ۗ وَٱللَّهُ وَٰسِعٌ عَلِيمٌ
fr: Ceux qui dépensent leurs biens dans le sentier d'Allah ressemblent à un grain d'où naissent sept épis, à cent grains l'épi. Car Allah multiplie la récompense à qui Il veut et la grâce d'Allah est immense, et Il est Omniscient.
ph: Mathalu Al-Ladhīna Yunfiqūna 'Amwālahum Fī Sabīli Allāhi Kamathali Ĥabbatin 'Anbatat Sab`a Sanābila Fī Kulli Sunbulatin Miā'atu Ĥabbatin Wa Allāhu Yuđā`ifu Liman Yashā'u Wa Allāhu Wāsi`un `Alīmun

2:262
ar: ٱلَّذِينَ يُنفِقُونَ أَمْوَٰلَهُمْ فِى سَبِيلِ ٱللَّهِ ثُمَّ لَا يُتْبِعُونَ مَآ أَنفَقُوا۟ مَنًّۭا وَلَآ أَذًۭى ۙ لَّهُمْ أَجْرُهُمْ عِندَ رَبِّهِمْ وَلَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُونَ
fr: Ceux qui dépensent leurs biens dans le sentier d'Allah sans faire suivre leurs largesses ni d'un rappel ni d'un tort, auront leur récompense auprès de leur Seigneur. Nulle crainte pour eux, et ils ne seront point affligés.
ph: Al-Ladhīna Yunfiqūna 'Amwālahum Fī Sabīli Allāhi Thumma Lā Yutbi`ūna Mā 'Anfaqū Mannāan Wa Lā 'Adháan Lahum 'Ajruhum `Inda Rabbihim Wa Lā Khawfun `Alayhim Wa Lā Hum Yaĥzanūna

2:263
ar: ۞ قَوْلٌۭ مَّعْرُوفٌۭ وَمَغْفِرَةٌ خَيْرٌۭ مِّن صَدَقَةٍۢ يَتْبَعُهَآ أَذًۭى ۗ وَٱللَّهُ غَنِىٌّ حَلِيمٌۭ
fr: Une parole agréable et un pardon valent mieux qu'une aumône suivie d'un tort. Allah n'a besoin de rien, et Il est Indulgent.
ph: Qawlun Ma`rūfun Wa Maghfiratun Khayrun Min Şadaqatin Yatba`uhā 'Adháan Wa Allāhu Ghanīyun Ĥalīmun

2:264
ar: يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ لَا تُبْطِلُوا۟ صَدَقَٰتِكُم بِٱلْمَنِّ وَٱلْأَذَىٰ كَٱلَّذِى يُنفِقُ مَالَهُۥ رِئَآءَ ٱلنَّاسِ وَلَا يُؤْمِنُ بِٱللَّهِ وَٱلْيَوْمِ ٱلْءَاخِرِ ۖ فَمَثَلُهُۥ كَمَثَلِ صَفْوَانٍ عَلَيْهِ تُرَابٌۭ فَأَصَابَهُۥ وَابِلٌۭ فَتَرَكَهُۥ صَلْدًۭا ۖ لَّا يَقْدِرُونَ عَلَىٰ شَىْءٍۢ مِّمَّا كَسَبُوا۟ ۗ وَٱللَّهُ لَا يَهْدِى ٱلْقَوْمَ ٱلْكَٰفِرِينَ
fr: Ô les croyants ! N'annulez pas vos aumônes par un rappel ou un tort, comme celui qui dépense son bien par ostentation devant les gens sans croire en Allah et au Jour dernier. Il ressemble à un rocher recouvert de terre: qu'une averse l'atteigne, elle le laisse dénué. De pareils hommes ne tirent aucun profit de leurs actes. Et Allah ne guide pas les gens mécréants.
ph: Yā 'Ayyuhā Al-Ladhīna 'Āmanū Lā Tubţilū Şadaqātikum Bil-Manni Wa Al-'Adhá Kālladhī Yunfiqu Mālahu Ri'ā'a An-Nāsi Wa Lā Yu'uminu Billāhi Wa Al-Yawmi Al-'Ākhiri Famathaluhu Kamathali Şafwānin `Alayhi Turābun Fa'aşābahu Wa Abilun Fatarakahu Şaldāan Lā Yaqdirūna `Alá Shay'in Mimmā Kasabū Wa Allāhu Lā Yahdī Al-Qawma Al-Kāfirīna

2:265
ar: وَمَثَلُ ٱلَّذِينَ يُنفِقُونَ أَمْوَٰلَهُمُ ٱبْتِغَآءَ مَرْضَاتِ ٱللَّهِ وَتَثْبِيتًۭا مِّنْ أَنفُسِهِمْ كَمَثَلِ جَنَّةٍۭ بِرَبْوَةٍ أَصَابَهَا وَابِلٌۭ فَـَٔاتَتْ أُكُلَهَا ضِعْفَيْنِ فَإِن لَّمْ يُصِبْهَا وَابِلٌۭ فَطَلٌّۭ ۗ وَٱللَّهُ بِمَا تَعْمَلُونَ بَصِيرٌ
fr: Et ceux qui dépensent leurs biens cherchant l'agrément d'Allah, et bien rassurés (de Sa récompense), ils ressemblent à un jardin sur une colline. Qu'une averse l'atteigne, il double ses fruits; à défaut d'une averse qui l'atteint, c'est la rosée. Et Allah voit parfaitement ce que vous faites.
ph: Wa Mathalu Al-Ladhīna Yunfiqūna 'Amwālahumu Abtighā'a Marđāati Allāhi Wa Tathbītāan Min 'Anfusihim Kamathali Jannatin Birabwatin 'Aşābahā Wa Abilun Fa'ātat 'Ukulahā Đi`fayni Fa'in Lam Yuşibhā Wa Abilun Faţallun Wa Allāhu Bimā Ta`malūna Başīrun

2:266
ar: أَيَوَدُّ أَحَدُكُمْ أَن تَكُونَ لَهُۥ جَنَّةٌۭ مِّن نَّخِيلٍۢ وَأَعْنَابٍۢ تَجْرِى مِن تَحْتِهَا ٱلْأَنْهَٰرُ لَهُۥ فِيهَا مِن كُلِّ ٱلثَّمَرَٰتِ وَأَصَابَهُ ٱلْكِبَرُ وَلَهُۥ ذُرِّيَّةٌۭ ضُعَفَآءُ فَأَصَابَهَآ إِعْصَارٌۭ فِيهِ نَارٌۭ فَٱحْتَرَقَتْ ۗ كَذَٰلِكَ يُبَيِّنُ ٱللَّهُ لَكُمُ ٱلْءَايَٰتِ لَعَلَّكُمْ تَتَفَكَّرُونَ
fr: L'un de vous aimerait-il avoir un jardin de dattiers et de vignes sous lequel coulent les ruisseaux, et qui lui donne toutes espèces de fruits, que la vieillesse le rattrape, tandis que ses enfants sont encore petits, et qu'un tourbillon contenant du feu s'abatte sur son jardin et le brûle ? Ainsi Allah vous explique les signes afin que vous méditiez !
ph: 'Ayawaddu 'Aĥadukum 'An Takūna Lahu Jannatun Min Nakhīlin Wa 'A`nābin Tajrī Min Taĥtihā Al-'Anhāru Lahu Fīhā Min Kulli Ath-Thamarāti Wa 'Aşābahu Al-Kibaru Wa Lahu Dhurrīyatun Đu`afā'u Fa'aşābahā 'I`şārun Fīhi Nārun Fāĥtaraqat Kadhālika Yubayyinu Allāhu Lakumu Al-'Āyāti La`allakum Tatafakkarūna

2:267
ar: يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوٓا۟ أَنفِقُوا۟ مِن طَيِّبَٰتِ مَا كَسَبْتُمْ وَمِمَّآ أَخْرَجْنَا لَكُم مِّنَ ٱلْأَرْضِ ۖ وَلَا تَيَمَّمُوا۟ ٱلْخَبِيثَ مِنْهُ تُنفِقُونَ وَلَسْتُم بِـَٔاخِذِيهِ إِلَّآ أَن تُغْمِضُوا۟ فِيهِ ۚ وَٱعْلَمُوٓا۟ أَنَّ ٱللَّهَ غَنِىٌّ حَمِيدٌ
fr: Ô les croyants ! Dépensez des meilleures choses que vous avez gagnées et des récoltes que Nous avons fait sortir de la terre pour vous. Et ne vous tournez pas vers ce qui est vil pour en faire dépense. Ne donnez pas ce que vous-mêmes n'accepteriez qu'en fermant les yeux ! Et sachez qu'Allah n'a besoin de rien et qu'Il est digne de louange.
ph: Yā 'Ayyuhā Al-Ladhīna 'Āmanū 'Anfiqū Min Ţayyibāti Mā Kasabtum Wa Mimmā 'Akhrajnā Lakum Mina Al-'Arđi Wa Lā Tayammamū Al-Khabītha Minhu Tunfiqūna Wa Lastum Bi'ākhidhīhi 'Illā 'An Tughmiđū Fīhi Wa A`lamū 'Anna Allāha Ghanīyun Ĥamīdun

2:268
ar: ٱلشَّيْطَٰنُ يَعِدُكُمُ ٱلْفَقْرَ وَيَأْمُرُكُم بِٱلْفَحْشَآءِ ۖ وَٱللَّهُ يَعِدُكُم مَّغْفِرَةًۭ مِّنْهُ وَفَضْلًۭا ۗ وَٱللَّهُ وَٰسِعٌ عَلِيمٌۭ
fr: Le Diable vous fait craindre l'indigence et vous commande des actions honteuses; tandis qu'Allah vous promet pardon et faveur venant de Lui. La grâce d'Allah est immense et Il est Omniscient.
ph: Ash-Shayţānu Ya`idukumu Al-Faqra Wa Ya'murukum Bil-Faĥshā'i Wa Allāhu Ya`idukum Maghfiratan Minhu Wa Fađlāan Wa Allāhu Wāsi`un `Alīmun

2:269
ar: يُؤْتِى ٱلْحِكْمَةَ مَن يَشَآءُ ۚ وَمَن يُؤْتَ ٱلْحِكْمَةَ فَقَدْ أُوتِىَ خَيْرًۭا كَثِيرًۭا ۗ وَمَا يَذَّكَّرُ إِلَّآ أُو۟لُوا۟ ٱلْأَلْبَٰبِ
fr: Il donne la sagesse à qui Il veut. Et celui à qui la sagesse est donnée, vraiment, c'est un bien immense qui lui est donné. Mais les doués d'intelligence seulement s'en souviennent.
ph: Yu'utī Al-Ĥikmata Man Yashā'u Wa Man Yu'uta Al-Ĥikmata Faqad 'Ūtiya Khayrāan Kathīrāan Wa Mā Yadhakkaru 'Illā 'Ūlū Al-'Albābi

2:270
ar: وَمَآ أَنفَقْتُم مِّن نَّفَقَةٍ أَوْ نَذَرْتُم مِّن نَّذْرٍۢ فَإِنَّ ٱللَّهَ يَعْلَمُهُۥ ۗ وَمَا لِلظَّٰلِمِينَ مِنْ أَنصَارٍ
fr: Quelles que soient les dépenses que vous avez faites, ou le vœu que vous avez voué, Allah le sait. Et pour les injustes, pas de secoureurs !
ph: Wa Mā 'Anfaqtum Min Nafaqatin 'Aw Nadhartum Min Nadhrin Fa'inna Allāha Ya`lamuhu Wa Mā Lilžžālimīna Min 'Anşārin

2:271
ar: إِن تُبْدُوا۟ ٱلصَّدَقَٰتِ فَنِعِمَّا هِىَ ۖ وَإِن تُخْفُوهَا وَتُؤْتُوهَا ٱلْفُقَرَآءَ فَهُوَ خَيْرٌۭ لَّكُمْ ۚ وَيُكَفِّرُ عَنكُم مِّن سَيِّـَٔاتِكُمْ ۗ وَٱللَّهُ بِمَا تَعْمَلُونَ خَبِيرٌۭ
fr: Si vous donnez ouvertement vos aumônes, c'est bien; c'est mieux encore, pour vous, si vous êtes discrets avec elles et vous les donniez aux indigents. Allah effacera une partie de vos méfaits. Allah est Parfaitement Connaisseur de ce que vous faites.
ph: 'In Tubdū Aş-Şadaqāti Fani`immā Hiya Wa 'In Tukhfūhā Wa Tu'utūhā Al-Fuqarā'a Fahuwa Khayrun Lakum Wa Yukaffiru `Ankum Min Sayyi'ātikum Wa Allāhu Bimā Ta`malūna Khabīrun

2:272
ar: ۞ لَّيْسَ عَلَيْكَ هُدَىٰهُمْ وَلَٰكِنَّ ٱللَّهَ يَهْدِى مَن يَشَآءُ ۗ وَمَا تُنفِقُوا۟ مِنْ خَيْرٍۢ فَلِأَنفُسِكُمْ ۚ وَمَا تُنفِقُونَ إِلَّا ٱبْتِغَآءَ وَجْهِ ٱللَّهِ ۚ وَمَا تُنفِقُوا۟ مِنْ خَيْرٍۢ يُوَفَّ إِلَيْكُمْ وَأَنتُمْ لَا تُظْلَمُونَ
fr: Ce n'est pas à toi de les guider (vers la bonne voie), mais c'est Allah qui guide qui Il veut. Et tout ce que vous dépensez de vos biens sera à votre avantage et vous ne dépensez que pour la recherche de la Face: « Wajh » d'Allah. Et tout ce que vous dépensez de vos biens dans les bonnes œuvres vous sera récompensé pleinement. Et vous ne serez pas lésés.
ph: Laysa `Alayka Hudāhum Wa Lakinna Allāha Yahdī Man Yashā'u Wa Mā Tunfiqū Min Khayrin Fali'anfusikum Wa Mā Tunfiqūna 'Illā Abtighā'a Wajhi Allāhi Wa Mā Tunfiqū Min Khayrin Yuwaffa 'Ilaykum Wa 'Antum Lā Tužlamūna

2:273
ar: لِلْفُقَرَآءِ ٱلَّذِينَ أُحْصِرُوا۟ فِى سَبِيلِ ٱللَّهِ لَا يَسْتَطِيعُونَ ضَرْبًۭا فِى ٱلْأَرْضِ يَحْسَبُهُمُ ٱلْجَاهِلُ أَغْنِيَآءَ مِنَ ٱلتَّعَفُّفِ تَعْرِفُهُم بِسِيمَٰهُمْ لَا يَسْـَٔلُونَ ٱلنَّاسَ إِلْحَافًۭا ۗ وَمَا تُنفِقُوا۟ مِنْ خَيْرٍۢ فَإِنَّ ٱللَّهَ بِهِۦ عَلِيمٌ
fr: Aux nécessiteux qui se sont confinés dans le sentier d'Allah, ne pouvant pas parcourir le monde, et que l'ignorant croit riches parce qu'ils ont honte de mendier -tu les reconnaîtras à leur aspect -Ils n'importunent personne en mendiant. Et tout ce que vous dépensez de vos biens, Allah le sait parfaitement.
ph: Lilfuqarā'i Al-Ladhīna 'Uĥşirū Fī Sabīli Allāhi Lā Yastaţī`ūna Đarbāan Fī Al-'Arđi Yaĥsabuhumu Al-Jāhilu 'Aghniyā'a Mina At-Ta`affufi Ta`rifuhum Bisīmāhum Lā Yas'alūna An-Nāsa 'Ilĥāfāan Wa Mā Tunfiqū Min Khayrin Fa'inna Allāha Bihi `Alīmun

2:274
ar: ٱلَّذِينَ يُنفِقُونَ أَمْوَٰلَهُم بِٱلَّيْلِ وَٱلنَّهَارِ سِرًّۭا وَعَلَانِيَةًۭ فَلَهُمْ أَجْرُهُمْ عِندَ رَبِّهِمْ وَلَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُونَ
fr: Ceux qui, de nuit et de jour, en secret et ouvertement, dépensent leurs biens (dans les bonnes œuvres), ont leur salaire auprès de leur Seigneur. Ils n'ont rien à craindre et ils ne seront point affligés.
ph: Al-Ladhīna Yunfiqūna 'Amwālahum Bil-Layli Wa An-Nahāri Sirrāan Wa `Alāniyatan Falahum 'Ajruhum `Inda Rabbihim Wa Lā Khawfun `Alayhim Wa Lā Hum Yaĥzanūna

2:275
ar: ٱلَّذِينَ يَأْكُلُونَ ٱلرِّبَوٰا۟ لَا يَقُومُونَ إِلَّا كَمَا يَقُومُ ٱلَّذِى يَتَخَبَّطُهُ ٱلشَّيْطَٰنُ مِنَ ٱلْمَسِّ ۚ ذَٰلِكَ بِأَنَّهُمْ قَالُوٓا۟ إِنَّمَا ٱلْبَيْعُ مِثْلُ ٱلرِّبَوٰا۟ ۗ وَأَحَلَّ ٱللَّهُ ٱلْبَيْعَ وَحَرَّمَ ٱلرِّبَوٰا۟ ۚ فَمَن جَآءَهُۥ مَوْعِظَةٌۭ مِّن رَّبِّهِۦ فَٱنتَهَىٰ فَلَهُۥ مَا سَلَفَ وَأَمْرُهُۥٓ إِلَى ٱللَّهِ ۖ وَمَنْ عَادَ فَأُو۟لَٰٓئِكَ أَصْحَٰبُ ٱلنَّارِ ۖ هُمْ فِيهَا خَٰلِدُونَ
fr: Ceux qui mangent [pratiquent] de l'intérêt usuraire ne se tiennent (au jour du Jugement dernier) que comme se tient celui que le toucher de Satan a bouleversé. Cela, parce qu'ils disent: « Le commerce est tout à fait comme l'intérêt. » Alors qu'Allah a rendu licite le commerce, et illicite l'intérêt. Celui, donc, qui cesse dès que lui est venue une exhortation de son Seigneur, peut conserver ce qu'il a acquis auparavant; et son affaire dépend d'Allah. Mais quiconque récidive... alors les voilà, les gens du Feu ! Ils y demeureront éternellement.
ph: Al-Ladhīna Ya'kulūna Ar-Ribā Lā Yaqūmūna 'Illā Kamā Yaqūmu Al-Ladhī Yatakhabbaţuhu Ash-Shayţānu Mina Al-Massi Dhālika Bi'annahum Qālū 'Innamā Al-Bay`u Mithlu Ar-Ribā Wa 'Aĥalla Allāhu Al-Bay`a Wa Ĥarrama Ar-Ribā Faman Jā'ahu Maw`ižatun Min Rabbihi Fāntahá Falahu Mā Salafa Wa 'Amruhu 'Ilá Allāhi Wa Man `Āda Fa'ūlā'ika 'Aşĥābu An-Nāri Hum Fīhā Khālidūna

2:276
ar: يَمْحَقُ ٱللَّهُ ٱلرِّبَوٰا۟ وَيُرْبِى ٱلصَّدَقَٰتِ ۗ وَٱللَّهُ لَا يُحِبُّ كُلَّ كَفَّارٍ أَثِيمٍ
fr: Allah anéantit l'intérêt usuraire et fait fructifier les aumônes. Et Allah n'aime pas le mécréant pécheur.
ph: Yamĥaqu Allāhu Ar-Ribā Wa Yurbī Aş-Şadaqāti Wa Allāhu Lā Yuĥibbu Kulla Kaffārin 'Athīmin

2:277
ar: إِنَّ ٱلَّذِينَ ءَامَنُوا۟ وَعَمِلُوا۟ ٱلصَّٰلِحَٰتِ وَأَقَامُوا۟ ٱلصَّلَوٰةَ وَءَاتَوُا۟ ٱلزَّكَوٰةَ لَهُمْ أَجْرُهُمْ عِندَ رَبِّهِمْ وَلَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُونَ
fr: Ceux qui ont la foi, ont fait de bonnes œuvres, accompli la Salat et acquitté la Zakat auront certes leur récompense auprès de leur Seigneur. Pas de crainte pour eux, et ils ne seront point affligés.
ph: 'Inna Al-Ladhīna 'Āmanū Wa `Amilū Aş-Şāliĥāti Wa 'Aqāmū Aş-Şalāata Wa 'Ātaw Az-Zakāata Lahum 'Ajruhum `Inda Rabbihim Wa Lā Khawfun `Alayhim Wa Lā Hum Yaĥzanūna

2:278
ar: يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ ٱتَّقُوا۟ ٱللَّهَ وَذَرُوا۟ مَا بَقِىَ مِنَ ٱلرِّبَوٰٓا۟ إِن كُنتُم مُّؤْمِنِينَ
fr: Ô les croyants ! Craignez Allah; et renoncez au reliquat de l'intérêt usuraire, si vous êtes croyants.
ph: Yā 'Ayyuhā Al-Ladhīna 'Āmanū Attaqū Allāha Wa Dharū Mā Baqiya Mina Ar-Ribā 'In Kuntum Mu'uminīna

2:279
ar: فَإِن لَّمْ تَفْعَلُوا۟ فَأْذَنُوا۟ بِحَرْبٍۢ مِّنَ ٱللَّهِ وَرَسُولِهِۦ ۖ وَإِن تُبْتُمْ فَلَكُمْ رُءُوسُ أَمْوَٰلِكُمْ لَا تَظْلِمُونَ وَلَا تُظْلَمُونَ
fr: Et si vous ne le faites pas, alors recevez l'annonce d'une guerre de la part d'Allah et de Son messager. Et si vous vous repentez, vous aurez vos capitaux. Vous ne léserez personne, et vous ne serez point lésés.
ph: Fa'in Lam Taf`alū Fa'dhanū Biĥarbin Mina Allāhi Wa Rasūlihi Wa 'In Tubtum Falakum Ru'ūsu 'Amwālikum Lā Tažlimūna Wa Lā Tužlamūna

2:280
ar: وَإِن كَانَ ذُو عُسْرَةٍۢ فَنَظِرَةٌ إِلَىٰ مَيْسَرَةٍۢ ۚ وَأَن تَصَدَّقُوا۟ خَيْرٌۭ لَّكُمْ ۖ إِن كُنتُمْ تَعْلَمُونَ
fr: À celui qui est dans la gêne, accordez un sursis jusqu'à ce qu'il soit dans l'aisance. Mais il est mieux pour vous de faire remise de la dette par charité ! Si vous saviez !
ph: Wa 'In Kāna Dhū `Usratin Fanažiratun 'Ilá Maysaratin Wa 'An Taşaddaqū Khayrun Lakum 'In Kuntum Ta`lamūna

2:281
ar: وَٱتَّقُوا۟ يَوْمًۭا تُرْجَعُونَ فِيهِ إِلَى ٱللَّهِ ۖ ثُمَّ تُوَفَّىٰ كُلُّ نَفْسٍۢ مَّا كَسَبَتْ وَهُمْ لَا يُظْلَمُونَ
fr: Et craignez le jour où vous serez ramenés vers Allah. Alors chaque âme sera pleinement rétribuée de ce qu'elle aura acquis. Et ils ne seront point lésés.
ph: Wa Attaqū Yawmāan Turja`ūna Fīhi 'Ilá Allāhi Thumma Tuwaffá Kullu Nafsin Mā Kasabat Wa Hum Lā Yužlamūna

2:282
ar: يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوٓا۟ إِذَا تَدَايَنتُم بِدَيْنٍ إِلَىٰٓ أَجَلٍۢ مُّسَمًّۭى فَٱكْتُبُوهُ ۚ وَلْيَكْتُب بَّيْنَكُمْ كَاتِبٌۢ بِٱلْعَدْلِ ۚ وَلَا يَأْبَ كَاتِبٌ أَن يَكْتُبَ كَمَا عَلَّمَهُ ٱللَّهُ ۚ فَلْيَكْتُبْ وَلْيُمْلِلِ ٱلَّذِى عَلَيْهِ ٱلْحَقُّ وَلْيَتَّقِ ٱللَّهَ رَبَّهُۥ وَلَا يَبْخَسْ مِنْهُ شَيْـًۭٔا ۚ فَإِن كَانَ ٱلَّذِى عَلَيْهِ ٱلْحَقُّ سَفِيهًا أَوْ ضَعِيفًا أَوْ لَا يَسْتَطِيعُ أَن يُمِلَّ هُوَ فَلْيُمْلِلْ وَلِيُّهُۥ بِٱلْعَدْلِ ۚ وَٱسْتَشْهِدُوا۟ شَهِيدَيْنِ مِن رِّجَالِكُمْ ۖ فَإِن لَّمْ يَكُونَا رَجُلَيْنِ فَرَجُلٌۭ وَٱمْرَأَتَانِ مِمَّن تَرْضَوْنَ مِنَ ٱلشُّهَدَآءِ أَن تَضِلَّ إِحْدَىٰهُمَا فَتُذَكِّرَ إِحْدَىٰهُمَا ٱلْأُخْرَىٰ ۚ وَلَا يَأْبَ ٱلشُّهَدَآءُ إِذَا مَا دُعُوا۟ ۚ وَلَا تَسْـَٔمُوٓا۟ أَن تَكْتُبُوهُ صَغِيرًا أَوْ كَبِيرًا إِلَىٰٓ أَجَلِهِۦ ۚ ذَٰلِكُمْ أَقْسَطُ عِندَ ٱللَّهِ وَأَقْوَمُ لِلشَّهَٰدَةِ وَأَدْنَىٰٓ أَلَّا تَرْتَابُوٓا۟ ۖ إِلَّآ أَن تَكُونَ تِجَٰرَةً حَاضِرَةًۭ تُدِيرُونَهَا بَيْنَكُمْ فَلَيْسَ عَلَيْكُمْ جُنَاحٌ أَلَّا تَكْتُبُوهَا ۗ وَأَشْهِدُوٓا۟ إِذَا تَبَايَعْتُمْ ۚ وَلَا يُضَآرَّ كَاتِبٌۭ وَلَا شَهِيدٌۭ ۚ وَإِن تَفْعَلُوا۟ فَإِنَّهُۥ فُسُوقٌۢ بِكُمْ ۗ وَٱتَّقُوا۟ ٱللَّهَ ۖ وَيُعَلِّمُكُمُ ٱللَّهُ ۗ وَٱللَّهُ بِكُلِّ شَىْءٍ عَلِيمٌۭ
fr: Ô les croyants ! Quand vous contractez une dette à échéance déterminée, mettez-la en écrit; et qu'un scribe l'écrive, entre vous, en toute justice; un scribe n'a pas à refuser d'écrire selon ce qu'Allah lui a enseigné; qu'il écrive donc, et que dicte le débiteur: qu'il craigne Allah son Seigneur, et se garde d'en rien diminuer. Si le débiteur est gaspilleur ou faible, ou incapable de dicter lui-même, que son représentant dicte alors en toute justice. Faites-en témoigner par deux témoins d'entre vos hommes; et à défaut de deux hommes, un homme et deux femmes d'entre ceux que vous agréez comme témoins, en sorte que si l'une d'elles s'égare, l'autre puisse lui rappeler. Et que les témoins ne refusent pas quand ils sont appelés. Ne vous lassez pas d'écrire la dette, ainsi que son terme, qu'elle soit petite ou grande: c'est plus équitable auprès d'Allah, et plus droit pour le témoignage, et plus susceptible d'écarter les doutes. Mais s'il s'agit d'une marchandise présente que vous négociez entre vous: dans ce cas, il n'y a pas de péché à ne pas l'écrire. Mais prenez des témoins lorsque vous faites une transaction entre vous; et qu'on ne fasse aucun tort à aucun scribe ni à aucun témoin. Si vous le faisiez, cela serait une perversité en vous. Et craignez Allah. Alors Allah vous enseigne et Allah est Omniscient.
ph: Yā 'Ayyuhā Al-Ladhīna 'Āmanū 'Idhā Tadāyantum Bidaynin 'Ilá 'Ajalin Musammáan Fāktubūhu Wa Līaktub Baynakum Kātibun Bil-`Adli Wa Lā Ya'ba Kātibun 'An Yaktuba Kamā `Allamahu Allāhu Falyaktub Wa Līumlili Al-Ladhī `Alayhi Al-Ĥaqqu Wa Līattaqi Allāha Rabbahu Wa Lā Yabkhas Minhu Shay'āan Fa'in Kāna Al-Ladhī `Alayhi Al-Ĥaqqu Safīhāan 'Aw Đa`īfāan 'Aw Lā Yastaţī`u 'An Yumilla Huwa Falyumlil Walīyuhu Bil-`Adli Wa Astash/hidū Shahīdayni Min Rijālikum Fa'in Lam Yakūnā Rajulayni Farajulun Wa Amra'atāni Mimman Tarđawna Mina Ash-Shuhadā'i 'An Tađilla 'Iĥdāhumā Fatudhakkira 'Iĥdāhumā Al-'Ukhrá Wa Lā Ya'ba Ash-Shuhadā'u 'Idhā Mā Du`ū Wa Lā Tas'amū 'An Taktubūhu Şaghīrāan 'Aw Kabīrāan 'Ilá 'Ajalihi Dhālikum 'Aqsaţu `Inda Allāhi Wa 'Aqwamu Lilshahādati Wa 'Adná 'Allā Tartābū 'Illā 'An Takūna Tijāratan Ĥāđiratan Tudīrūnahā Baynakum Falaysa `Alaykum Junāĥun 'Allā Taktubūhā Wa 'Ash/hidū 'Idhā Tabāya`tum Wa Lā Yuđārra Kātibun Wa Lā Shahīdun Wa 'In Taf`alū Fa'innahu Fusūqun Bikum Wa Attaqū Allāha Wa Yu`allimukumu Allāhu Wa Allāhu Bikulli Shay'in `Alīmun

2:283
ar: ۞ وَإِن كُنتُمْ عَلَىٰ سَفَرٍۢ وَلَمْ تَجِدُوا۟ كَاتِبًۭا فَرِهَٰنٌۭ مَّقْبُوضَةٌۭ ۖ فَإِنْ أَمِنَ بَعْضُكُم بَعْضًۭا فَلْيُؤَدِّ ٱلَّذِى ٱؤْتُمِنَ أَمَٰنَتَهُۥ وَلْيَتَّقِ ٱللَّهَ رَبَّهُۥ ۗ وَلَا تَكْتُمُوا۟ ٱلشَّهَٰدَةَ ۚ وَمَن يَكْتُمْهَا فَإِنَّهُۥٓ ءَاثِمٌۭ قَلْبُهُۥ ۗ وَٱللَّهُ بِمَا تَعْمَلُونَ عَلِيمٌۭ
fr: Mais si vous êtes en voyage et ne trouvez pas de scribe, un gage reçu suffit. S'il y a entre vous une confiance réciproque, que celui à qui on a confié quelque chose la restitue; et qu'il craigne Allah son Seigneur. Et ne cachez pas le témoignage: quiconque le cache a, certes, un cœur pécheur. Allah, de ce que vous faites, est Omniscient.
ph: Wa 'In Kuntum `Alá Safarin Wa Lam Tjidū Kātibāan Farihānun Maqbūđatun Fa'in 'Amina Ba`đukum Ba`đāan Falyu'uaddi Al-Ladhī A'utumina 'Amānatahu Wa Līattaqi Allāha Rabbahu Wa Lā Taktumū Ash-Shahādata Wa Man Yaktumhā Fa'innahu 'Āthimun Qalbuhu Wa Allāhu Bimā Ta`malūna `Alīmun

2:284
ar: لِّلَّهِ مَا فِى ٱلسَّمَٰوَٰتِ وَمَا فِى ٱلْأَرْضِ ۗ وَإِن تُبْدُوا۟ مَا فِىٓ أَنفُسِكُمْ أَوْ تُخْفُوهُ يُحَاسِبْكُم بِهِ ٱللَّهُ ۖ فَيَغْفِرُ لِمَن يَشَآءُ وَيُعَذِّبُ مَن يَشَآءُ ۗ وَٱللَّهُ عَلَىٰ كُلِّ شَىْءٍۢ قَدِيرٌ
fr: C'est à Allah qu'appartient tout ce qui est dans les cieux et sur la terre. Que vous manifestiez ce qui est en vous ou que vous le cachiez, Allah vous en demandera compte. Puis Il pardonnera à qui Il veut, et châtiera qui Il veut. Et Allah est Omnipotent.
ph: Lillāhi Mā Fī As-Samāwāti Wa Mā Fī Al-'Arđi Wa 'In Tubdū Mā Fī 'Anfusikum 'Aw Tukhfūhu Yuĥāsibkum Bihi Allāhu Fayaghfiru Liman Yashā'u Wa Yu`adhibu Man Yashā'u Wa Allāhu `Alá Kulli Shay'in Qadīrun

2:285
ar: ءَامَنَ ٱلرَّسُولُ بِمَآ أُنزِلَ إِلَيْهِ مِن رَّبِّهِۦ وَٱلْمُؤْمِنُونَ ۚ كُلٌّ ءَامَنَ بِٱللَّهِ وَمَلَٰٓئِكَتِهِۦ وَكُتُبِهِۦ وَرُسُلِهِۦ لَا نُفَرِّقُ بَيْنَ أَحَدٍۢ مِّن رُّسُلِهِۦ ۚ وَقَالُوا۟ سَمِعْنَا وَأَطَعْنَا ۖ غُفْرَانَكَ رَبَّنَا وَإِلَيْكَ ٱلْمَصِيرُ
fr: Le Messager a cru en ce qu'on a fait descendre vers lui venant de son Seigneur, et aussi les croyants: tous ont cru en Allah, en Ses anges, à Ses livres et en Ses messagers; (en disant): « Nous ne faisons aucune distinction entre Ses messagers. » Et ils ont dit: « Nous avons entendu et obéi. Seigneur, nous implorons Ton pardon. C'est à Toi que sera le retour. »
ph: 'Āmana Ar-Rasūlu Bimā 'Unzila 'Ilayhi Min Rabbihi Wa Al-Mu'uminūna Kullun 'Āmana Billāhi Wa Malā'ikatihi Wa Kutubihi Wa Rusulihi Lā Nufarriqu Bayna 'Aĥadin Min Rusulihi Wa Qālū Sami`nā Wa 'Aţa`nā Ghufrānaka Rabbanā Wa 'Ilayka Al-Maşīru

2:286
ar: لَا يُكَلِّفُ ٱللَّهُ نَفْسًا إِلَّا وُسْعَهَا ۚ لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا ٱكْتَسَبَتْ ۗ رَبَّنَا لَا تُؤَاخِذْنَآ إِن نَّسِينَآ أَوْ أَخْطَأْنَا ۚ رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَآ إِصْرًۭا كَمَا حَمَلْتَهُۥ عَلَى ٱلَّذِينَ مِن قَبْلِنَا ۚ رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِۦ ۖ وَٱعْفُ عَنَّا وَٱغْفِرْ لَنَا وَٱرْحَمْنَآ ۚ أَنتَ مَوْلَىٰنَا فَٱنصُرْنَا عَلَى ٱلْقَوْمِ ٱلْكَٰفِرِينَ
fr: Allah n'impose à aucune âme une charge supérieure à sa capacité. Elle sera récompensée du bien qu'elle aura fait, punie du mal qu'elle aura fait. Seigneur, ne nous châtie pas s'il nous arrive d'oublier ou de commettre une erreur. Seigneur ! Ne nous charge pas d'un fardeau lourd comme Tu as chargé ceux qui vécurent avant nous. Seigneur ! Ne nous impose pas ce que nous ne pouvons supporter, efface nos fautes, pardonne-nous et fais nous miséricorde. Tu es Notre Maître, accorde-nous donc la victoire sur les peuples infidèles.
ph: Lā Yukallifu Allāhu Nafsāan 'Illā Wus`ahā Lahā Mā Kasabat Wa `Alayhā Mā Aktasabat Rabbanā Lā Tu'uākhidhnā 'In Nasīnā 'Aw 'Akhţa'nā Rabbanā Wa Lā Taĥmil `Alaynā 'Işrāan Kamā Ĥamaltahu `Alá Al-Ladhīna Min Qablinā Rabbanā Wa Lā Tuĥammilnā Mā Lā Ţāqata Lanā Bihi Wa A`fu `Annā Wa Aghfir Lanā Wa Arĥamnā 'Anta Mawlānā Fānşurnā `Alá Al-Qawmi Al-Kāfirīna 

# ---------- Sourate 3 · Āl-ʿImrān ----------

3:1
ar: الٓمٓ
fr: Alif, Lam, Mim.
ph: 'Alif-Lām-Mīm

3:2
ar: ٱللَّهُ لَآ إِلَٰهَ إِلَّا هُوَ ٱلْحَىُّ ٱلْقَيُّومُ
fr: Allah ! Pas de divinité à part Lui, le Vivant, Celui qui subsiste par Lui-même: « al-Qayyum ».
ph: Allāhu Lā 'Ilāha 'Illā Huwa Al-Ĥayyu Al-Qayyūmu

3:3
ar: نَزَّلَ عَلَيْكَ ٱلْكِتَٰبَ بِٱلْحَقِّ مُصَدِّقًۭا لِّمَا بَيْنَ يَدَيْهِ وَأَنزَلَ ٱلتَّوْرَىٰةَ وَٱلْإِنجِيلَ
fr: Il a fait descendre sur toi le Livre avec la vérité, confirmant les Livres descendus avant lui. Et Il fit descendre la Thora et l'Évangile.
ph: Nazzala `Alayka Al-Kitāba Bil-Ĥaqqi Muşaddiqāan Limā Bayna Yadayhi Wa 'Anzala At-Tawrāata Wa Al-'Injīla

3:4
ar: مِن قَبْلُ هُدًۭى لِّلنَّاسِ وَأَنزَلَ ٱلْفُرْقَانَ ۗ إِنَّ ٱلَّذِينَ كَفَرُوا۟ بِـَٔايَٰتِ ٱللَّهِ لَهُمْ عَذَابٌۭ شَدِيدٌۭ ۗ وَٱللَّهُ عَزِيزٌۭ ذُو ٱنتِقَامٍ
fr: auparavant, en tant que guide pour les gens. Et Il a fait descendre le Discernement. Ceux qui ne croient pas aux Révélations d'Allah auront, certes, un dur châtiment ! Et, Allah est Puissant, Détenteur du pouvoir de punir.
ph: Min Qablu Hudáan Lilnnāsi Wa 'Anzala Al-Furqāna 'Inna Al-Ladhīna Kafarū Bi'āyāti Allāhi Lahum `Adhābun Shadīdun Wa Allāhu `Azīzun Dhū Antiqāmin

3:5
ar: إِنَّ ٱللَّهَ لَا يَخْفَىٰ عَلَيْهِ شَىْءٌۭ فِى ٱلْأَرْضِ وَلَا فِى ٱلسَّمَآءِ
fr: Rien, vraiment, ne se cache d'Allah de ce qui existe sur la terre ou dans le ciel.
ph: 'Inna Allāha Lā Yakhfá `Alayhi Shay'un Fī Al-'Arđi Wa Lā Fī As-Samā'i

3:6
ar: هُوَ ٱلَّذِى يُصَوِّرُكُمْ فِى ٱلْأَرْحَامِ كَيْفَ يَشَآءُ ۚ لَآ إِلَٰهَ إِلَّا هُوَ ٱلْعَزِيزُ ٱلْحَكِيمُ
fr: C'est Lui qui vous donne forme dans les matrices comme Il veut. Point de divinité à part Lui, le Puissant, le Sage.
ph: Huwa Al-Ladhī Yuşawwirukum Fī Al-'Arĥāmi Kayfa Yashā'u Lā 'Ilāha 'Illā Huwa Al-`Azīzu Al-Ĥakīmu

3:7
ar: هُوَ ٱلَّذِىٓ أَنزَلَ عَلَيْكَ ٱلْكِتَٰبَ مِنْهُ ءَايَٰتٌۭ مُّحْكَمَٰتٌ هُنَّ أُمُّ ٱلْكِتَٰبِ وَأُخَرُ مُتَشَٰبِهَٰتٌۭ ۖ فَأَمَّا ٱلَّذِينَ فِى قُلُوبِهِمْ زَيْغٌۭ فَيَتَّبِعُونَ مَا تَشَٰبَهَ مِنْهُ ٱبْتِغَآءَ ٱلْفِتْنَةِ وَٱبْتِغَآءَ تَأْوِيلِهِۦ ۗ وَمَا يَعْلَمُ تَأْوِيلَهُۥٓ إِلَّا ٱللَّهُ ۗ وَٱلرَّٰسِخُونَ فِى ٱلْعِلْمِ يَقُولُونَ ءَامَنَّا بِهِۦ كُلٌّۭ مِّنْ عِندِ رَبِّنَا ۗ وَمَا يَذَّكَّرُ إِلَّآ أُو۟لُوا۟ ٱلْأَلْبَٰبِ
fr: C'est Lui qui a fait descendre sur toi le Livre: il s'y trouve des versets sans équivoque, qui sont la base du Livre, et d'autres versets qui peuvent prêter à d'interprétations diverses. Les gens, donc, qui ont au cœur une inclination vers l'égarement, mettent l'accent sur les versets à équivoque cherchant la dissension en essayant de leur trouver une interprétation, alors que nul n'en connaît l'interprétation, à part Allah. Mais ceux qui sont bien enracinés dans la science disent: « Nous y croyons: tout est de la part de notre Seigneur ! » Mais, seuls les doués d'intelligence s'en rappellent.
ph: Huwa Al-Ladhī 'Anzala `Alayka Al-Kitāba Minhu 'Āyātun Muĥkamātun Hunna 'Ummu Al-Kitābi Wa 'Ukharu Mutashābihātun Fa'ammā Al-Ladhīna Fī Qulūbihim Zayghun Fayattabi`ūna Mā Tashābaha Minhu Abtighā'a Al-Fitnati Wa Abtighā'a Ta'wīlihi Wa Mā Ya`lamu Ta'wīlahu 'Illā Allāhu Wa Ar-Rāsikhūna Fī Al-`Ilmi Yaqūlūna 'Āmannā Bihi Kullun Min `Indi Rabbinā Wa Mā Yadhakkaru 'Illā 'Ūlū Al-'Albābi

3:8
ar: رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِن لَّدُنكَ رَحْمَةً ۚ إِنَّكَ أَنتَ ٱلْوَهَّابُ
fr: « Seigneur ! Ne laisse pas dévier nos cœurs après que Tu nous aies guidés; et accorde-nous Ta miséricorde. C'est Toi, certes, le Grand Donateur !
ph: Rabbanā Lā Tuzigh Qulūbanā Ba`da 'Idh Hadaytanā Wa Hab Lanā Min Ladunka Raĥmatan 'Innaka 'Anta Al-Wahhābu

3:9
ar: رَبَّنَآ إِنَّكَ جَامِعُ ٱلنَّاسِ لِيَوْمٍۢ لَّا رَيْبَ فِيهِ ۚ إِنَّ ٱللَّهَ لَا يُخْلِفُ ٱلْمِيعَادَ
fr: Seigneur ! C'est Toi qui rassembleras les gens, un jour -en quoi il n'y a point de doute -Allah, vraiment, ne manque jamais à Sa promesse. »
ph: Rabbanā 'Innaka Jāmi`u An-Nāsi Liyawmin Lā Rayba Fīhi 'Inna Allāha Lā Yukhlifu Al-Mī`āda

3:10
ar: إِنَّ ٱلَّذِينَ كَفَرُوا۟ لَن تُغْنِىَ عَنْهُمْ أَمْوَٰلُهُمْ وَلَآ أَوْلَٰدُهُم مِّنَ ٱللَّهِ شَيْـًۭٔا ۖ وَأُو۟لَٰٓئِكَ هُمْ وَقُودُ ٱلنَّارِ
fr: Ceux qui ne croient pas, ni leurs biens ni leurs enfants ne les mettront aucunement à l'abri de la punition d'Allah. Ils seront du combustible pour le Feu,
ph: 'Inna Al-Ladhīna Kafarū Lan Tughniya `Anhum 'Amwāluhum Wa Lā 'Awlāduhum Mina Allāhi Shay'āan Wa 'Ūlā'ika Hum Wa Qūdu An-Nāri

3:11
ar: كَدَأْبِ ءَالِ فِرْعَوْنَ وَٱلَّذِينَ مِن قَبْلِهِمْ ۚ كَذَّبُوا۟ بِـَٔايَٰتِنَا فَأَخَذَهُمُ ٱللَّهُ بِذُنُوبِهِمْ ۗ وَٱللَّهُ شَدِيدُ ٱلْعِقَابِ
fr: comme les gens de Fir'awn (Pharaon) et ceux qui vécurent avant eux. Ils avaient traité de mensonges Nos preuves. Allah les saisit donc, pour leurs péchés. Et Allah est dur en punition.
ph: Kada'bi 'Āli Fir`awna Wa Al-Ladhīna Min Qablihim Kadhabū Bi'āyātinā Fa'akhadhahumu Allāhu Bidhunūbihim Wa Allāhu Shadīdu Al-`Iqābi

3:12
ar: قُل لِّلَّذِينَ كَفَرُوا۟ سَتُغْلَبُونَ وَتُحْشَرُونَ إِلَىٰ جَهَنَّمَ ۚ وَبِئْسَ ٱلْمِهَادُ
fr: Dis à ceux qui ne croient pas: « Vous serez vaincus bientôt; et vous serez rassemblés vers l'Enfer. Et quel mauvais endroit pour se reposer ! »
ph: Qul Lilladhīna Kafarū Satughlabūna Wa Tuĥsharūna 'Ilá Jahannama Wa Bi'sa Al-Mihādu

3:13
ar: قَدْ كَانَ لَكُمْ ءَايَةٌۭ فِى فِئَتَيْنِ ٱلْتَقَتَا ۖ فِئَةٌۭ تُقَٰتِلُ فِى سَبِيلِ ٱللَّهِ وَأُخْرَىٰ كَافِرَةٌۭ يَرَوْنَهُم مِّثْلَيْهِمْ رَأْىَ ٱلْعَيْنِ ۚ وَٱللَّهُ يُؤَيِّدُ بِنَصْرِهِۦ مَن يَشَآءُ ۗ إِنَّ فِى ذَٰلِكَ لَعِبْرَةًۭ لِّأُو۟لِى ٱلْأَبْصَٰرِ
fr: Il y eut déjà pour vous un signe dans ces deux troupes qui s'affrontèrent: l'une combattait dans le sentier d'Allah; et l'autre, était mécréante. Ces derniers voyaient (les croyants) de leurs propres yeux, deux fois plus nombreux qu'eux-mêmes. Or Allah secourt qui Il veut de Son aide. Voilà bien là un exemple pour les doués de clairvoyance !
ph: Qad Kāna Lakum 'Āyatun Fī Fi'atayni At-Taqatā Fi'atun Tuqātilu Fī Sabīli Allāhi Wa 'Ukhrá Kāfiratun Yarawnahum Mithlayhim Ra'ya Al-`Ayni Wa Allāhu Yu'uayyidu Binaşrihi Man Yashā'u 'Inna Fī Dhālika La`ibratan Li'wlī Al-'Abşāri

3:14
ar: زُيِّنَ لِلنَّاسِ حُبُّ ٱلشَّهَوَٰتِ مِنَ ٱلنِّسَآءِ وَٱلْبَنِينَ وَٱلْقَنَٰطِيرِ ٱلْمُقَنطَرَةِ مِنَ ٱلذَّهَبِ وَٱلْفِضَّةِ وَٱلْخَيْلِ ٱلْمُسَوَّمَةِ وَٱلْأَنْعَٰمِ وَٱلْحَرْثِ ۗ ذَٰلِكَ مَتَٰعُ ٱلْحَيَوٰةِ ٱلدُّنْيَا ۖ وَٱللَّهُ عِندَهُۥ حُسْنُ ٱلْمَـَٔابِ
fr: On a enjolivé aux gens l'amour des choses qu'ils désirent: femmes, enfants, trésors thésaurisés d'or et d'argent, chevaux marqués, bétail et champs; tout cela est l'objet de jouissance pour la vie présente, alors que c'est près d'Allah qu'il y a bon retour.
ph: Zuyyina Lilnnāsi Ĥubbu Ash-Shahawāti Mina An-Nisā' Wa Al-Banīna Wa Al-Qanāţīri Al-Muqanţarati Mina Adh-Dhahabi Wa Al-Fiđđati Wa Al-Khayli Al-Musawwamati Wa Al-'An`āmi Wa Al-Ĥarthi Dhālika Matā`u Al-Ĥayāati Ad-Dunyā Wa Allāhu `Indahu Ĥusnu Al-Ma'ābi

3:15
ar: ۞ قُلْ أَؤُنَبِّئُكُم بِخَيْرٍۢ مِّن ذَٰلِكُمْ ۚ لِلَّذِينَ ٱتَّقَوْا۟ عِندَ رَبِّهِمْ جَنَّٰتٌۭ تَجْرِى مِن تَحْتِهَا ٱلْأَنْهَٰرُ خَٰلِدِينَ فِيهَا وَأَزْوَٰجٌۭ مُّطَهَّرَةٌۭ وَرِضْوَٰنٌۭ مِّنَ ٱللَّهِ ۗ وَٱللَّهُ بَصِيرٌۢ بِٱلْعِبَادِ
fr: Dis: « Puis-je vous apprendre quelque chose de meilleur que tout cela ? Pour les pieux, il y a, auprès de leur Seigneur, des jardins sous lesquels coulent les ruisseaux, pour y demeurer éternellement, et aussi, des épouses purifiées, et l'agrément d'Allah. » Et Allah est Clairvoyant sur [Ses] serviteurs,
ph: Qul 'A'uunabbi'ukum Bikhayrin Min Dhālikum Lilladhīna Attaqaw `Inda Rabbihim Jannātun Tajrī Min Taĥtihā Al-'Anhāru Khālidīna Fīhā Wa 'Azwājun Muţahharatun Wa Riđwānun Mina Allāhi Wa Allāhu Başīrun Bil-`Ibādi

3:16
ar: ٱلَّذِينَ يَقُولُونَ رَبَّنَآ إِنَّنَآ ءَامَنَّا فَٱغْفِرْ لَنَا ذُنُوبَنَا وَقِنَا عَذَابَ ٱلنَّارِ
fr: qui disent: « Ô notre Seigneur, nous avons la foi; pardonne-nous donc nos péchés, et protège-nous du châtiment du Feu »,
ph: Al-Ladhīna Yaqūlūna Rabbanā 'Innanā 'Āmannā Fāghfir Lanā Dhunūbanā Wa Qinā `Adhāba An-Nāri

3:17
ar: ٱلصَّٰبِرِينَ وَٱلصَّٰدِقِينَ وَٱلْقَٰنِتِينَ وَٱلْمُنفِقِينَ وَٱلْمُسْتَغْفِرِينَ بِٱلْأَسْحَارِ
fr: ce sont les endurants, les véridiques, les obéissants, ceux qui dépensent [dans le sentier d'Allah] et ceux qui implorent pardon juste avant l'aube.
ph: Aş-Şābirīna Wa Aş-Şādiqīna Wa Al-Qānitīna Wa Al-Munfiqīna Wa Al-Mustaghfirīna Bil-'Asĥāri

3:18
ar: شَهِدَ ٱللَّهُ أَنَّهُۥ لَآ إِلَٰهَ إِلَّا هُوَ وَٱلْمَلَٰٓئِكَةُ وَأُو۟لُوا۟ ٱلْعِلْمِ قَآئِمًۢا بِٱلْقِسْطِ ۚ لَآ إِلَٰهَ إِلَّا هُوَ ٱلْعَزِيزُ ٱلْحَكِيمُ
fr: Allah atteste, et aussi les Anges et les doués de science, qu'il n'y a point de divinité à part Lui, le Mainteneur de la justice. Point de divinité à part Lui, le Puissant, le Sage !
ph: Shahida Allāhu 'Annahu Lā 'Ilāha 'Illā Huwa Wa Al-Malā'ikatu Wa 'Ūlū Al-`Ilmi Qā'imāan Bil-Qisţi Lā 'Ilāha 'Illā Huwa Al-`Azīzu Al-Ĥakīmu

3:19
ar: إِنَّ ٱلدِّينَ عِندَ ٱللَّهِ ٱلْإِسْلَٰمُ ۗ وَمَا ٱخْتَلَفَ ٱلَّذِينَ أُوتُوا۟ ٱلْكِتَٰبَ إِلَّا مِنۢ بَعْدِ مَا جَآءَهُمُ ٱلْعِلْمُ بَغْيًۢا بَيْنَهُمْ ۗ وَمَن يَكْفُرْ بِـَٔايَٰتِ ٱللَّهِ فَإِنَّ ٱللَّهَ سَرِيعُ ٱلْحِسَابِ
fr: Certes, la religion acceptée d'Allah, c'est l'Islam. Ceux auxquels le Livre a été apporté ne se sont disputés, par agressivité entre eux, qu'après avoir reçu la science. Et quiconque ne croit pas aux signes d'Allah... alors Allah est prompt à demander compte !
ph: 'Inna Ad-Dīna `Inda Allāhi Al-'Islāmu Wa Mā Akhtalafa Al-Ladhīna 'Ūtū Al-Kitāba 'Illā Min Ba`di Mā Jā'ahumu Al-`Ilmu Baghyāan Baynahum Wa Man Yakfur Bi'āyāti Allāhi Fa'inna Allāha Sarī`u Al-Ĥisābi

3:20
ar: فَإِنْ حَآجُّوكَ فَقُلْ أَسْلَمْتُ وَجْهِىَ لِلَّهِ وَمَنِ ٱتَّبَعَنِ ۗ وَقُل لِّلَّذِينَ أُوتُوا۟ ٱلْكِتَٰبَ وَٱلْأُمِّيِّۦنَ ءَأَسْلَمْتُمْ ۚ فَإِنْ أَسْلَمُوا۟ فَقَدِ ٱهْتَدَوا۟ ۖ وَّإِن تَوَلَّوْا۟ فَإِنَّمَا عَلَيْكَ ٱلْبَلَٰغُ ۗ وَٱللَّهُ بَصِيرٌۢ بِٱلْعِبَادِ
fr: S'ils te contredisent, dis leur: « Je me suis entièrement soumis à Allah, moi et ceux qui m'ont suivi. » Et dis à ceux à qui le Livre a été donné, ainsi qu'aux illettrés: « Avez-vous embrassé l'Islam ? » S'ils embrassent l'Islam, ils seront bien guidés. Mais, s'ils tournent le dos... Ton devoir n'est que la transmission (du message). Allah, sur [Ses] serviteurs est Clairvoyant. »
ph: Fa'in Ĥājjūka Faqul 'Aslamtu Wajhiya Lillāhi Wa Mani Attaba`ani Wa Qul Lilladhīna 'Ūtū Al-Kitāba Wa Al-'Ummīyīna 'A'aslamtum Fa'in 'Aslamū Faqadi Ahtadaw Wa 'In Tawallaw Fa'innamā `Alayka Al-Balāghu Wa Allāhu Başīrun Bil-`Ibādi

3:21
ar: إِنَّ ٱلَّذِينَ يَكْفُرُونَ بِـَٔايَٰتِ ٱللَّهِ وَيَقْتُلُونَ ٱلنَّبِيِّۦنَ بِغَيْرِ حَقٍّۢ وَيَقْتُلُونَ ٱلَّذِينَ يَأْمُرُونَ بِٱلْقِسْطِ مِنَ ٱلنَّاسِ فَبَشِّرْهُم بِعَذَابٍ أَلِيمٍ
fr: Ceux qui ne croient pas aux signes d'Allah, tuent sans droit les prophètes et tuent les gens qui commandent la justice, annonce-leur un châtiment douloureux.
ph: 'Inna Al-Ladhīna Yakfurūna Bi'āyāti Allāhi Wa Yaqtulūna An-Nabīyīna Bighayri Ĥaqqin Wa Yaqtulūna Al-Ladhīna Ya'murūna Bil-Qisţi Mina An-Nāsi Fabashirhum Bi`adhābin 'Alīmin

3:22
ar: أُو۟لَٰٓئِكَ ٱلَّذِينَ حَبِطَتْ أَعْمَٰلُهُمْ فِى ٱلدُّنْيَا وَٱلْءَاخِرَةِ وَمَا لَهُم مِّن نَّٰصِرِينَ
fr: Ce sont eux dont les œuvres sont devenues vaines, ici-bas comme dans l'au-delà. Et pour eux, pas de secoureurs !
ph: 'Ūlā'ika Al-Ladhīna Ĥabiţat 'A`māluhum Fī Ad-Dunyā Wa Al-'Ākhirati Wa Mā Lahum Min Nāşirīna

3:23
ar: أَلَمْ تَرَ إِلَى ٱلَّذِينَ أُوتُوا۟ نَصِيبًۭا مِّنَ ٱلْكِتَٰبِ يُدْعَوْنَ إِلَىٰ كِتَٰبِ ٱللَّهِ لِيَحْكُمَ بَيْنَهُمْ ثُمَّ يَتَوَلَّىٰ فَرِيقٌۭ مِّنْهُمْ وَهُم مُّعْرِضُونَ
fr: N'as-tu pas vu comment agissent ceux qui ont reçu une part du Livre, et qui sont maintenant invités au Livre d'Allah pour trancher leurs différends; comment un groupe des leurs tourne le dos et s'esquive ?
ph: 'Alam Tara 'Ilá Al-Ladhīna 'Ūtū Naşībāan Mina Al-Kitābi Yud`awna 'Ilá Kitābi Allāhi Liyaĥkuma Baynahum Thumma Yatawallá Farīqun Minhum Wa Hum Mu`riđūna

3:24
ar: ذَٰلِكَ بِأَنَّهُمْ قَالُوا۟ لَن تَمَسَّنَا ٱلنَّارُ إِلَّآ أَيَّامًۭا مَّعْدُودَٰتٍۢ ۖ وَغَرَّهُمْ فِى دِينِهِم مَّا كَانُوا۟ يَفْتَرُونَ
fr: C'est parce qu'ils disent: « Le Feu ne nous touchera que pour un nombre de jours déterminés. » Et leurs mensonges les trompent en religion.
ph: Dhālika Bi'annahum Qālū Lan Tamassanā An-Nāru 'Illā 'Ayyāmāan Ma`dūdātin Wa Gharrahum Fī Dīnihim Mā Kānū Yaftarūna

3:25
ar: فَكَيْفَ إِذَا جَمَعْنَٰهُمْ لِيَوْمٍۢ لَّا رَيْبَ فِيهِ وَوُفِّيَتْ كُلُّ نَفْسٍۢ مَّا كَسَبَتْ وَهُمْ لَا يُظْلَمُونَ
fr: Eh bien comment seront-ils, quand Nous les aurons rassemblés, en un jour sur quoi il n'y a point de doute, et que chaque âme sera pleinement rétribuée selon ce qu'elle aura acquis ? Et ils ne seront point lésés.
ph: Fakayfa 'Idhā Jama`nāhum Liyawmin Lā Rayba Fīhi Wa Wuffiyat Kullu Nafsin Mā Kasabat Wa Hum Lā Yužlamūna

3:26
ar: قُلِ ٱللَّهُمَّ مَٰلِكَ ٱلْمُلْكِ تُؤْتِى ٱلْمُلْكَ مَن تَشَآءُ وَتَنزِعُ ٱلْمُلْكَ مِمَّن تَشَآءُ وَتُعِزُّ مَن تَشَآءُ وَتُذِلُّ مَن تَشَآءُ ۖ بِيَدِكَ ٱلْخَيْرُ ۖ إِنَّكَ عَلَىٰ كُلِّ شَىْءٍۢ قَدِيرٌۭ
fr: -Dis: « Ô Allah, Maître de l'autorité absolue. Tu donnes l'autorité à qui Tu veux, et Tu arraches l'autorité à qui Tu veux; et Tu donnes la puissance à qui Tu veux, et Tu humilies qui Tu veux. Le bien est en Ta main et Tu es Omnipotent.
ph: Quli Al-Lahumma Mālika Al-Mulki Tu'utī Al-Mulka Man Tashā'u Wa Tanzi`u Al-Mulka Mimman Tashā'u Wa Tu`izzu Man Tashā'u Wa Tudhillu Man Tashā'u Biyadika Al-Khayru 'Innaka `Alá Kulli Shay'in Qadīrun

3:27
ar: تُولِجُ ٱلَّيْلَ فِى ٱلنَّهَارِ وَتُولِجُ ٱلنَّهَارَ فِى ٱلَّيْلِ ۖ وَتُخْرِجُ ٱلْحَىَّ مِنَ ٱلْمَيِّتِ وَتُخْرِجُ ٱلْمَيِّتَ مِنَ ٱلْحَىِّ ۖ وَتَرْزُقُ مَن تَشَآءُ بِغَيْرِ حِسَابٍۢ
fr: Tu fais pénétrer la nuit dans le jour, et Tu fais pénétrer le jour dans la nuit, et Tu fais sortir le vivant du mort, et Tu fais sortir le mort du vivant. Et Tu accordes attribution à qui Tu veux, sans compter. »
ph: Tūliju Al-Layla Fī An-Nahāri Wa Tūliju An-Nahāra Fī Al-Layli Wa Tukhriju Al-Ĥayya Mina Al-Mayyiti Wa Tukhriju Al-Mayyita Mina Al-Ĥayyi Wa Tarzuqu Man Tashā'u Bighayri Ĥisābin

3:28
ar: لَّا يَتَّخِذِ ٱلْمُؤْمِنُونَ ٱلْكَٰفِرِينَ أَوْلِيَآءَ مِن دُونِ ٱلْمُؤْمِنِينَ ۖ وَمَن يَفْعَلْ ذَٰلِكَ فَلَيْسَ مِنَ ٱللَّهِ فِى شَىْءٍ إِلَّآ أَن تَتَّقُوا۟ مِنْهُمْ تُقَىٰةًۭ ۗ وَيُحَذِّرُكُمُ ٱللَّهُ نَفْسَهُۥ ۗ وَإِلَى ٱللَّهِ ٱلْمَصِيرُ
fr: Que les croyants ne prennent pas, pour alliés, des infidèles, au lieu de croyants. Quiconque le fait contredit la religion d'Allah, à moins que vous ne cherchiez à vous protéger d'eux. Allah vous met en garde à l'égard de Lui-même. Et c'est à Allah le retour.
ph: Lā Yattakhidhi Al-Mu'uminūna Al-Kāfirīna 'Awliyā'a Min Dūni Al-Mu'uminīna Wa Man Yaf`al Dhālika Falaysa Mina Allāhi Fī Shay'in 'Illā 'An Tattaqū Minhum Tuqāatan Wa Yuĥadhirukumu Allāhu Nafsahu Wa 'Ilá Allāhi Al-Maşīru

3:29
ar: قُلْ إِن تُخْفُوا۟ مَا فِى صُدُورِكُمْ أَوْ تُبْدُوهُ يَعْلَمْهُ ٱللَّهُ ۗ وَيَعْلَمُ مَا فِى ٱلسَّمَٰوَٰتِ وَمَا فِى ٱلْأَرْضِ ۗ وَٱللَّهُ عَلَىٰ كُلِّ شَىْءٍۢ قَدِيرٌۭ
fr: Dis: « Que vous cachiez ce qui est dans vos poitrines ou bien vous le divulguiez, Allah le sait. Il connaît tout ce qui est dans les cieux et sur la terre. Et Allah est Omnipotent.
ph: Qul 'In Tukhfū Mā Fī Şudūrikum 'Aw Tubdūhu Ya`lamhu Allāhu Wa Ya`lamu Mā Fī As-Samāwāti Wa Mā Fī Al-'Arđi Wa Allāhu `Alá Kulli Shay'in Qadīrun

3:30
ar: يَوْمَ تَجِدُ كُلُّ نَفْسٍۢ مَّا عَمِلَتْ مِنْ خَيْرٍۢ مُّحْضَرًۭا وَمَا عَمِلَتْ مِن سُوٓءٍۢ تَوَدُّ لَوْ أَنَّ بَيْنَهَا وَبَيْنَهُۥٓ أَمَدًۢا بَعِيدًۭا ۗ وَيُحَذِّرُكُمُ ٱللَّهُ نَفْسَهُۥ ۗ وَٱللَّهُ رَءُوفٌۢ بِٱلْعِبَادِ
fr: Le jour où chaque âme se trouvera confrontée avec ce qu'elle aura fait de bien et ce qu'elle aura fait de mal; elle souhaitera qu'il y ait entre elle et ce mal une longue distance ! Allah vous met en garde à l'égard de Lui-même. Allah est Compatissant envers [Ses] serviteurs.
ph: Yawma Tajidu Kullu Nafsin Mā `Amilat Min Khayrin Muĥđarāan Wa Mā `Amilat Min Sū'in Tawaddu Law 'Anna Baynahā Wa Baynahu 'Amadāan Ba`īdāan Wa Yuĥadhirukumu Allāhu Nafsahu Wa Allāhu Ra'ūfun Bil-`Ibādi

3:31
ar: قُلْ إِن كُنتُمْ تُحِبُّونَ ٱللَّهَ فَٱتَّبِعُونِى يُحْبِبْكُمُ ٱللَّهُ وَيَغْفِرْ لَكُمْ ذُنُوبَكُمْ ۗ وَٱللَّهُ غَفُورٌۭ رَّحِيمٌۭ
fr: Dis: « Si vous aimez vraiment Allah, suivez-moi, Allah vous aimera alors et vous pardonnera vos péchés. Allah est Pardonneur et Miséricordieux.
ph: Qul 'In Kuntum Tuĥibbūna Allāha Fa Attabi`ūnī Yuĥbibkumu Allāhu Wa Yaghfir Lakum Dhunūbakum Wa Allāhu Ghafūrun Raĥīmun

3:32
ar: قُلْ أَطِيعُوا۟ ٱللَّهَ وَٱلرَّسُولَ ۖ فَإِن تَوَلَّوْا۟ فَإِنَّ ٱللَّهَ لَا يُحِبُّ ٱلْكَٰفِرِينَ
fr: Dis: « Obéissez à Allah et au Messager. Et si vous tournez le dos... alors Allah n'aime pas les infidèles !
ph: Qul 'Aţī`ū Allāha Wa Ar-Rasūla Fa'in Tawallaw Fa'inna Allāha Lā Yuĥibbu Al-Kāfirīna

3:33
ar: ۞ إِنَّ ٱللَّهَ ٱصْطَفَىٰٓ ءَادَمَ وَنُوحًۭا وَءَالَ إِبْرَٰهِيمَ وَءَالَ عِمْرَٰنَ عَلَى ٱلْعَٰلَمِينَ
fr: Certes, Allah a élu Adam, Nuh (Noé), la famille d'Ibrahim (Abraham) et la famille de 'Imran au-dessus de tout le monde.
ph: 'Inna Allāha Aşţafá 'Ādama Wa Nūĥāan Wa 'Āla 'Ibrāhīma Wa 'Āla `Imrān `Alá Al-`Ālamīna

3:34
ar: ذُرِّيَّةًۢ بَعْضُهَا مِنۢ بَعْضٍۢ ۗ وَٱللَّهُ سَمِيعٌ عَلِيمٌ
fr: En tant que descendants les uns des autres, et Allah est Audient et Omniscient.
ph: Dhurrīyatan Ba`đuhā Min Ba`đin Wa Allāhu Samī`un `Alīmun

3:35
ar: إِذْ قَالَتِ ٱمْرَأَتُ عِمْرَٰنَ رَبِّ إِنِّى نَذَرْتُ لَكَ مَا فِى بَطْنِى مُحَرَّرًۭا فَتَقَبَّلْ مِنِّىٓ ۖ إِنَّكَ أَنتَ ٱلسَّمِيعُ ٱلْعَلِيمُ
fr: (Rappelle-toi) quand la femme de 'Imran dit: « Seigneur, je T'ai voué en toute exclusivité ce qui est dans mon ventre. Accepte-le donc, de moi. C'est Toi certes l'Audient et l'Omniscient.
ph: 'Idh Qālati Amra'atu `Imrāna Rabbi 'Innī Nadhartu Laka Mā Fī Baţnī Muĥarrarāan Fataqabbal Minnī 'Innaka 'Anta As-Samī`u Al-`Alīmu

3:36
ar: فَلَمَّا وَضَعَتْهَا قَالَتْ رَبِّ إِنِّى وَضَعْتُهَآ أُنثَىٰ وَٱللَّهُ أَعْلَمُ بِمَا وَضَعَتْ وَلَيْسَ ٱلذَّكَرُ كَٱلْأُنثَىٰ ۖ وَإِنِّى سَمَّيْتُهَا مَرْيَمَ وَإِنِّىٓ أُعِيذُهَا بِكَ وَذُرِّيَّتَهَا مِنَ ٱلشَّيْطَٰنِ ٱلرَّجِيمِ
fr: Puis, lorsqu'elle en eut accouché, elle dit: « Seigneur, voilà que j'ai accouché d'une fille » or Allah savait mieux ce dont elle avait accouché ! Le garçon n'est pas comme la fille. « Je l'ai nommée Maryam (Marie), et je la place, ainsi que sa descendance, sous Ta protection contre le Diable, le banni ».
ph: Falammā Wađa`at/hā Qālat Rabbi 'Innī Wađa`tuhā 'Unthá Wa Allāhu 'A`lamu Bimā Wađa`at Wa Laysa Adh-Dhakaru Kāl'unthá Wa 'Innī Sammaytuhā Maryama Wa 'Innī 'U`īdhuhā Bika Wa Dhurrīyatahā Mina Ash-Shayţāni Ar-Rajīmi

3:37
ar: فَتَقَبَّلَهَا رَبُّهَا بِقَبُولٍ حَسَنٍۢ وَأَنۢبَتَهَا نَبَاتًا حَسَنًۭا وَكَفَّلَهَا زَكَرِيَّا ۖ كُلَّمَا دَخَلَ عَلَيْهَا زَكَرِيَّا ٱلْمِحْرَابَ وَجَدَ عِندَهَا رِزْقًۭا ۖ قَالَ يَٰمَرْيَمُ أَنَّىٰ لَكِ هَٰذَا ۖ قَالَتْ هُوَ مِنْ عِندِ ٱللَّهِ ۖ إِنَّ ٱللَّهَ يَرْزُقُ مَن يَشَآءُ بِغَيْرِ حِسَابٍ
fr: Son Seigneur l'agréa alors du bon agrément, la fit croître en belle croissance. Et Il en confia la garde à Zakariyya (Zacharie). Chaque fois que celui-ci entrait auprès d'elle dans le Sanctuaire, il trouvait près d'elle de la nourriture. Il dit: « Ô Maryam (Marie), d'où te vient cette nourriture ? » -Elle dit: « Cela me vient d'Allah. » Il donne certes la nourriture à qui Il veut sans compter.
ph: Fataqabbalahā Rabbuhā Biqabūlin Ĥasanin Wa 'Anbatahā Nabātāan Ĥasanāan Wa Kaffalahā Zakarīyā Kullamā Dakhala `Alayhā Zakarīyā Al-Miĥrāba Wajada `Indahā Rizqāan Qāla Yā Maryamu 'Anná Laki Hādhā Qālat Huwa Min `Indi Allāhi 'Inna Allāha Yarzuqu Man Yashā'u Bighayri Ĥisābin

3:38
ar: هُنَالِكَ دَعَا زَكَرِيَّا رَبَّهُۥ ۖ قَالَ رَبِّ هَبْ لِى مِن لَّدُنكَ ذُرِّيَّةًۭ طَيِّبَةً ۖ إِنَّكَ سَمِيعُ ٱلدُّعَآءِ
fr: Alors, Zakariyya (Zacharie) pria son Seigneur, et dit: « Ô mon Seigneur, donne-moi, venant de Toi, une excellente descendance. Car Tu es Celui qui entend bien la prière. »
ph: Hunālika Da`ā Zakarīyā Rabbahu Qāla Rabbi Hab Lī Min Ladunka Dhurrīyatan Ţayyibatan 'Innaka Samī`u Ad-Du`ā'i

3:39
ar: فَنَادَتْهُ ٱلْمَلَٰٓئِكَةُ وَهُوَ قَآئِمٌۭ يُصَلِّى فِى ٱلْمِحْرَابِ أَنَّ ٱللَّهَ يُبَشِّرُكَ بِيَحْيَىٰ مُصَدِّقًۢا بِكَلِمَةٍۢ مِّنَ ٱللَّهِ وَسَيِّدًۭا وَحَصُورًۭا وَنَبِيًّۭا مِّنَ ٱلصَّٰلِحِينَ
fr: Alors, les Anges l'appelèrent pendant que, debout, il priait dans le Sanctuaire: « Voilà qu'Allah t'annonce la naissance de Yahya (Jean Baptiste), confirmateur d'une parole d'Allah. Il sera un chef, un chaste, un prophète et du nombre des gens de bien. »
ph: Fanādat/hu Al-Malā'ikatu Wa Huwa Qā'imun Yuşallī Fī Al-Miĥrābi 'Anna Allāha Yubashiruka Biyaĥyá Muşaddiqāan Bikalimatin Mina Allāhi Wa Sayyidāan Wa Ĥaşūrāan Wa Nabīyāan Mina Aş-Şāliĥīna

3:40
ar: قَالَ رَبِّ أَنَّىٰ يَكُونُ لِى غُلَٰمٌۭ وَقَدْ بَلَغَنِىَ ٱلْكِبَرُ وَٱمْرَأَتِى عَاقِرٌۭ ۖ قَالَ كَذَٰلِكَ ٱللَّهُ يَفْعَلُ مَا يَشَآءُ
fr: Il dit: « Ô mon Seigneur, comment aurais-je un garçon maintenant que la vieillesse m'a atteint et que ma femme est stérile ? » Allah dit: « Comme cela ! », Allah fait ce qu'Il veut.
ph: Qāla Rabbi 'Anná Yakūnu Lī Ghulāmun Wa Qad Balaghaniya Al-Kibaru Wa Amra'atī `Āqirun Qāla Kadhālika Allāhu Yaf`alu Mā Yashā'u

3:41
ar: قَالَ رَبِّ ٱجْعَل لِّىٓ ءَايَةًۭ ۖ قَالَ ءَايَتُكَ أَلَّا تُكَلِّمَ ٱلنَّاسَ ثَلَٰثَةَ أَيَّامٍ إِلَّا رَمْزًۭا ۗ وَٱذْكُر رَّبَّكَ كَثِيرًۭا وَسَبِّحْ بِٱلْعَشِىِّ وَٱلْإِبْكَٰرِ
fr: « Seigneur, dit Zakariyya (Zacharie), donne-moi un signe. » « Ton signe, dit Allah, c'est que pendant trois jours tu ne pourras parler aux gens que par geste. Invoque beaucoup Ton Seigneur; et, glorifie-Le, en fin et en début de journée. »
ph: Qāla Rabbi Aj`al Lī 'Āyatan Qāla 'Āyatuka 'Allā Tukallima An-Nāsa Thalāthata 'Ayyāmin 'Illā Ramzāan Wa Adhkur Rabbaka Kathīrāan Wa Sabbiĥ Bil-`Ashīyi Wa Al-'Ibkāri

3:42
ar: وَإِذْ قَالَتِ ٱلْمَلَٰٓئِكَةُ يَٰمَرْيَمُ إِنَّ ٱللَّهَ ٱصْطَفَىٰكِ وَطَهَّرَكِ وَٱصْطَفَىٰكِ عَلَىٰ نِسَآءِ ٱلْعَٰلَمِينَ
fr: (Rappelle-toi) quand les Anges dirent: « Ô Maryam (Marie), certes Allah t'a élue et purifiée; et Il t'a élue au-dessus des femmes des mondes.
ph: Wa 'Idh Qālati Al-Malā'ikatu Yā Maryamu 'Inna Allāha Aşţafāki Wa Ţahharaki Wa Aşţafāki `Alá Nisā'i Al-`Ālamīna

3:43
ar: يَٰمَرْيَمُ ٱقْنُتِى لِرَبِّكِ وَٱسْجُدِى وَٱرْكَعِى مَعَ ٱلرَّٰكِعِينَ
fr: « Ô Maryam (Marie), obéis à Ton Seigneur, prosterne-toi, et incline-toi avec ceux qui s'inclinent ».
ph: Yā Maryamu Aqnutī Lirabbiki Wa Asjudī Wa Arka`ī Ma`a Ar-Rāki`īna

3:44
ar: ذَٰلِكَ مِنْ أَنۢبَآءِ ٱلْغَيْبِ نُوحِيهِ إِلَيْكَ ۚ وَمَا كُنتَ لَدَيْهِمْ إِذْ يُلْقُونَ أَقْلَٰمَهُمْ أَيُّهُمْ يَكْفُلُ مَرْيَمَ وَمَا كُنتَ لَدَيْهِمْ إِذْ يَخْتَصِمُونَ
fr: -Ce sont là des nouvelles de l'Inconnaissable que Nous te révélons. Car tu n'étais pas là lorsqu'ils jetaient leurs calames pour décider qui se chargerait de Maryam (Marie) ! Tu n'étais pas là non plus lorsqu'ils se disputaient !
ph: Dhālika Min 'Nbā'i Al-Ghaybi Nūĥīhi 'Ilayka Wa Mā Kunta Ladayhim 'Idh Yulqūna 'Aqlāmahum 'Ayyuhum Yakfulu Maryama Wa Mā Kunta Ladayhim 'Idh Yakhtaşimūna

3:45
ar: إِذْ قَالَتِ ٱلْمَلَٰٓئِكَةُ يَٰمَرْيَمُ إِنَّ ٱللَّهَ يُبَشِّرُكِ بِكَلِمَةٍۢ مِّنْهُ ٱسْمُهُ ٱلْمَسِيحُ عِيسَى ٱبْنُ مَرْيَمَ وَجِيهًۭا فِى ٱلدُّنْيَا وَٱلْءَاخِرَةِ وَمِنَ ٱلْمُقَرَّبِينَ
fr: (Rappelle-toi) quand les Anges dirent: « Ô Maryam (Marie), voilà qu'Allah t'annonce une parole de Sa part: son nom sera: « Al-Masîh »,: « 'Isa (Jésus) », fils de Maryam (Marie), illustre ici-bas comme dans l'au-delà, et l'un des rapprochés d'Allah.
ph: 'Idh Qālati Al-Malā'ikatu Yā Maryamu 'Inna Allāha Yubashiruki Bikalimatin Minhu Asmuhu Al-Masīĥu `Īsá Abnu Maryama Wajīhāan Fī Ad-Dunyā Wa Al-'Ākhirati Wa Mina Al-Muqarrabīna

3:46
ar: وَيُكَلِّمُ ٱلنَّاسَ فِى ٱلْمَهْدِ وَكَهْلًۭا وَمِنَ ٱلصَّٰلِحِينَ
fr: Il parlera aux gens, dans le berceau et en son âge mûr et il sera du nombre des gens de bien. »
ph: Wa Yukallimu An-Nāsa Fī Al-Mahdi Wa Kahlāan Wa Mina Aş-Şāliĥīna

3:47
ar: قَالَتْ رَبِّ أَنَّىٰ يَكُونُ لِى وَلَدٌۭ وَلَمْ يَمْسَسْنِى بَشَرٌۭ ۖ قَالَ كَذَٰلِكِ ٱللَّهُ يَخْلُقُ مَا يَشَآءُ ۚ إِذَا قَضَىٰٓ أَمْرًۭا فَإِنَّمَا يَقُولُ لَهُۥ كُن فَيَكُونُ
fr: -Elle dit: « Seigneur ! Comment aurais-je un enfant, alors qu'aucun homme ne m'a touchée ? » « C'est ainsi ! » dit-Il. Allah crée ce qu'Il veut. Quand Il décide d'une chose, Il lui dit seulement: « Sois » et elle est aussitôt.
ph: Qālat Rabbi 'Anná Yakūnu Lī Waladun Wa Lam Yamsasnī Basharun Qāla Kadhāliki Allāhu Yakhluqu Mā Yashā'u 'Idhā Qađá 'Amrāan Fa'innamā Yaqūlu Lahu Kun Fayakūnu

3:48
ar: وَيُعَلِّمُهُ ٱلْكِتَٰبَ وَٱلْحِكْمَةَ وَٱلتَّوْرَىٰةَ وَٱلْإِنجِيلَ
fr: Et (Allah) lui enseignera l'écriture, la sagesse , la Thora et l'Évangile,
ph: Wa Yu`allimuhu Al-Kitāba Wa Al-Ĥikmata Wa At-Tawrāata Wa Al-'Injīla

3:49
ar: وَرَسُولًا إِلَىٰ بَنِىٓ إِسْرَٰٓءِيلَ أَنِّى قَدْ جِئْتُكُم بِـَٔايَةٍۢ مِّن رَّبِّكُمْ ۖ أَنِّىٓ أَخْلُقُ لَكُم مِّنَ ٱلطِّينِ كَهَيْـَٔةِ ٱلطَّيْرِ فَأَنفُخُ فِيهِ فَيَكُونُ طَيْرًۢا بِإِذْنِ ٱللَّهِ ۖ وَأُبْرِئُ ٱلْأَكْمَهَ وَٱلْأَبْرَصَ وَأُحْىِ ٱلْمَوْتَىٰ بِإِذْنِ ٱللَّهِ ۖ وَأُنَبِّئُكُم بِمَا تَأْكُلُونَ وَمَا تَدَّخِرُونَ فِى بُيُوتِكُمْ ۚ إِنَّ فِى ذَٰلِكَ لَءَايَةًۭ لَّكُمْ إِن كُنتُم مُّؤْمِنِينَ
fr: et Il sera le messager aux enfants d'Israʾil (Israël), [et leur dira]: « En vérité, je viens à vous avec un signe de la part de votre Seigneur. Pour vous, je forme de la glaise comme la figure d'un oiseau, puis je souffle dedans: et, par la permission d'Allah, cela devient un oiseau. Et je guéris l'aveugle-né et le lépreux, et je ressuscite les morts, par la permission d'Allah. Et je vous apprends ce que vous mangez et ce que vous amassez dans vos maisons. Voilà bien là un signe, pour vous, si vous êtes croyants !
ph: Wa Rasūlāan 'Ilá Banī 'Isrā'īla 'Annī Qad Ji'tukum Bi'āyatin Min Rabbikum 'Annī 'Akhluqu Lakum Mina Aţ-Ţīni Kahay'ati Aţ-Ţayri Fa'anfukhu Fīhi Fayakūnu Ţayrāan Bi'idhni Allāhi Wa 'Ubri'u Al-'Akmaha Wa Al-'Abraşa Wa 'Uĥyi Al-Mawtá Bi'idhni Allāhi Wa 'Unabbi'ukum Bimā Ta'kulūna Wa Mā Taddakhirūna Fī Buyūtikum 'Inna Fī Dhālika La'āyatan Lakum 'In Kuntum Mu'uminyna

3:50
ar: وَمُصَدِّقًۭا لِّمَا بَيْنَ يَدَىَّ مِنَ ٱلتَّوْرَىٰةِ وَلِأُحِلَّ لَكُم بَعْضَ ٱلَّذِى حُرِّمَ عَلَيْكُمْ ۚ وَجِئْتُكُم بِـَٔايَةٍۢ مِّن رَّبِّكُمْ فَٱتَّقُوا۟ ٱللَّهَ وَأَطِيعُونِ
fr: Et je confirme ce qu'il y a dans la Thora révélée avant moi, et je vous rends licite une partie de ce qui vous était interdit. Et j'ai certes apporté un signe de votre Seigneur. Craignez Allah donc, et obéissez-moi.
ph: Wa Muşaddiqāan Limā Bayna Yadayya Mina At-Tawrāati Wa Li'uĥilla Lakum Ba`đa Al-Ladhī Ĥurrima `Alaykum Wa Ji'tukum Bi'āyatin Min Rabbikum Fa Attaqū Allāha Wa 'Aţī`ūni

3:51
ar: إِنَّ ٱللَّهَ رَبِّى وَرَبُّكُمْ فَٱعْبُدُوهُ ۗ هَٰذَا صِرَٰطٌۭ مُّسْتَقِيمٌۭ
fr: Allah est mon Seigneur et votre Seigneur. Adorez-Le donc: voilà le chemin droit. »
ph: 'Inna Allāha Rabbī Wa Rabbukum Fā`budūhu Hādhā Şirāţun Mustaqīmun

3:52
ar: ۞ فَلَمَّآ أَحَسَّ عِيسَىٰ مِنْهُمُ ٱلْكُفْرَ قَالَ مَنْ أَنصَارِىٓ إِلَى ٱللَّهِ ۖ قَالَ ٱلْحَوَارِيُّونَ نَحْنُ أَنصَارُ ٱللَّهِ ءَامَنَّا بِٱللَّهِ وَٱشْهَدْ بِأَنَّا مُسْلِمُونَ
fr: Puis, quand 'Isa (Jésus) ressentit de l'incrédulité, de leur part, il dit: « Qui sont mes alliés dans la voie d'Allah ? » Les apôtres dirent: « Nous sommes les alliés d'Allah. Nous croyons en Allah. Et sois témoin que nous lui sommes soumis.
ph: Falammā 'Aĥassa `Īsá Minhumu Al-Kufra Qāla Man 'Anşārī 'Ilá Allāhi Qāla Al-Ĥawārīyūna Naĥnu 'Anşāru Allāhi 'Āmannā Billāhi Wa Ash/had Bi'annā Muslimūna

3:53
ar: رَبَّنَآ ءَامَنَّا بِمَآ أَنزَلْتَ وَٱتَّبَعْنَا ٱلرَّسُولَ فَٱكْتُبْنَا مَعَ ٱلشَّٰهِدِينَ
fr: Seigneur ! Nous avons cru à ce que Tu as fait descendre et suivi le messager. Inscris-nous donc parmi ceux qui témoignent ».
ph: Rabbanā 'Āmannā Bimā 'Anzalta Wa Attaba`nā Ar-Rasūla Fāktubnā Ma`a Ash-Shāhidīna

3:54
ar: وَمَكَرُوا۟ وَمَكَرَ ٱللَّهُ ۖ وَٱللَّهُ خَيْرُ ٱلْمَٰكِرِينَ
fr: Et ils [les autres] se mirent à comploter. Allah a fait échouer leur complot. Et c'est Allah qui sait le mieux leur machination !
ph: Wa Makarū Wa Makara Allāhu Wa Allāhu Khayru Al-Mākirīna

3:55
ar: إِذْ قَالَ ٱللَّهُ يَٰعِيسَىٰٓ إِنِّى مُتَوَفِّيكَ وَرَافِعُكَ إِلَىَّ وَمُطَهِّرُكَ مِنَ ٱلَّذِينَ كَفَرُوا۟ وَجَاعِلُ ٱلَّذِينَ ٱتَّبَعُوكَ فَوْقَ ٱلَّذِينَ كَفَرُوٓا۟ إِلَىٰ يَوْمِ ٱلْقِيَٰمَةِ ۖ ثُمَّ إِلَىَّ مَرْجِعُكُمْ فَأَحْكُمُ بَيْنَكُمْ فِيمَا كُنتُمْ فِيهِ تَخْتَلِفُونَ
fr: (Rappelle-toi) quand Allah dit: « Ô 'Isa (Jésus), certes, Je vais mettre fin à ta vie terrestre t'élever vers Moi, te débarrasser de ceux qui n'ont pas cru et mettre jusqu'au Jour de la Résurrection, ceux qui te suivent au-dessus de ceux qui ne croient pas. Puis, c'est vers Moi que sera votre retour, et Je jugerai, entre vous, ce sur quoi vous vous opposiez.
ph: 'Idh Qāla Allāhu Yā `Īsá 'Innī Mutawaffīka Wa Rāfi`uka 'Ilayya Wa Muţahhiruka Mina Al-Ladhīna Kafarū Wa Jā`ilu Al-Ladhīna Attaba`ūka Fawqa Al-Ladhīna Kafarū 'Ilá Yawmi Al-Qiyā Mati Thumma 'Ilayya Marji`ukum Fa'aĥkumu Baynakum Fīmā Kuntum Fīhi Takhtalifūna

3:56
ar: فَأَمَّا ٱلَّذِينَ كَفَرُوا۟ فَأُعَذِّبُهُمْ عَذَابًۭا شَدِيدًۭا فِى ٱلدُّنْيَا وَٱلْءَاخِرَةِ وَمَا لَهُم مِّن نَّٰصِرِينَ
fr: Quant à ceux qui n'ont pas cru, Je les châtierai d'un dur châtiment, ici-bas tout comme dans l'au-delà; et pour eux, pas de secoureurs.
ph: Fa'ammā Al-Ladhīna Kafarū Fa'u`adhibuhum `Adhābāan Shadīdāan Fī Ad-Dunyā Wa Al-'Ākhirati Wa Mā Lahum Min Nāşirīna

3:57
ar: وَأَمَّا ٱلَّذِينَ ءَامَنُوا۟ وَعَمِلُوا۟ ٱلصَّٰلِحَٰتِ فَيُوَفِّيهِمْ أُجُورَهُمْ ۗ وَٱللَّهُ لَا يُحِبُّ ٱلظَّٰلِمِينَ
fr: Et quant à ceux qui ont la foi et font de bonnes œuvres, Il leur donnera leurs récompenses. Et Allah n'aime pas les injustes.
ph: Wa 'Ammā Al-Ladhīna 'Āmanū Wa `Amilū Aş-Şāliĥāti Fayuwaffīhim 'Ujūrahum Wa Allāhu Lā Yuĥibbu Až-Žālimīna

3:58
ar: ذَٰلِكَ نَتْلُوهُ عَلَيْكَ مِنَ ٱلْءَايَٰتِ وَٱلذِّكْرِ ٱلْحَكِيمِ
fr: Voilà ce que Nous te récitons des versets et de la révélation précise.
ph: Dhālika Natlūhu `Alayka Mina Al-'Āyāti Wa Adh-Dhikri Al-Ĥakīmi

3:59
ar: إِنَّ مَثَلَ عِيسَىٰ عِندَ ٱللَّهِ كَمَثَلِ ءَادَمَ ۖ خَلَقَهُۥ مِن تُرَابٍۢ ثُمَّ قَالَ لَهُۥ كُن فَيَكُونُ
fr: Pour Allah, 'Isa (Jésus) est comme Adam qu'Il créa de poussière, puis Il lui dit: « Sois »: et il fut.
ph: 'Inna Mathala `Īsá `Inda Allāhi Kamathali 'Ādama Khalaqahu Min Turābin Thumma Qāla Lahu Kun Fayakūnu

3:60
ar: ٱلْحَقُّ مِن رَّبِّكَ فَلَا تَكُن مِّنَ ٱلْمُمْتَرِينَ
fr: La vérité vient de ton Seigneur. Ne sois donc pas du nombre des sceptiques.
ph: Al-Ĥaqqu Min Rabbika Falā Takun Mina Al-Mumtarīna

3:61
ar: فَمَنْ حَآجَّكَ فِيهِ مِنۢ بَعْدِ مَا جَآءَكَ مِنَ ٱلْعِلْمِ فَقُلْ تَعَالَوْا۟ نَدْعُ أَبْنَآءَنَا وَأَبْنَآءَكُمْ وَنِسَآءَنَا وَنِسَآءَكُمْ وَأَنفُسَنَا وَأَنفُسَكُمْ ثُمَّ نَبْتَهِلْ فَنَجْعَل لَّعْنَتَ ٱللَّهِ عَلَى ٱلْكَٰذِبِينَ
fr: À ceux qui te contredisent à son propos, maintenant que tu en es bien informé, tu n'as qu'à dire: « Venez, appelons nos fils et les vôtres, nos femmes et les vôtres, nos propres personnes et les vôtres, puis proférons exécration réciproque en appelant la malédiction d'Allah sur les menteurs.
ph: Faman Ĥājjaka Fīhi Min Ba`di Mā Jā'aka Mina Al-`Ilmi Faqul Ta`ālaw Nad`u 'Abnā'anā Wa 'Abnā'akum Wa Nisā'anā Wa Nisā'akum Wa 'Anfusanā Wa 'Anfusakum Thumma Nabtahil Fanaj`al La`nata Allāhi `Alá Al-Kādhibīna

3:62
ar: إِنَّ هَٰذَا لَهُوَ ٱلْقَصَصُ ٱلْحَقُّ ۚ وَمَا مِنْ إِلَٰهٍ إِلَّا ٱللَّهُ ۚ وَإِنَّ ٱللَّهَ لَهُوَ ٱلْعَزِيزُ ٱلْحَكِيمُ
fr: Voilà, certes, le récit véridique. Et il n'y a pas de divinité à part Allah. En vérité, c'est Allah qui est le Puissant, le Sage.
ph: 'Inna Hādhā Lahuwa Al-Qaşaşu Al-Ĥaqqu Wa Mā Min 'Ilahin 'Illā Allāhu Wa 'Inna Allāha Lahuwa Al-`Azīzu Al-Ĥakīmu

3:63
ar: فَإِن تَوَلَّوْا۟ فَإِنَّ ٱللَّهَ عَلِيمٌۢ بِٱلْمُفْسِدِينَ
fr: Si donc ils tournent le dos... alors Allah connaît bien les semeurs de corruption !
ph: Fa'in Tawallaw Fa'inna Allāha `Alīmun Bil-Mufsidīna

3:64
ar: قُلْ يَٰٓأَهْلَ ٱلْكِتَٰبِ تَعَالَوْا۟ إِلَىٰ كَلِمَةٍۢ سَوَآءٍۭ بَيْنَنَا وَبَيْنَكُمْ أَلَّا نَعْبُدَ إِلَّا ٱللَّهَ وَلَا نُشْرِكَ بِهِۦ شَيْـًۭٔا وَلَا يَتَّخِذَ بَعْضُنَا بَعْضًا أَرْبَابًۭا مِّن دُونِ ٱللَّهِ ۚ فَإِن تَوَلَّوْا۟ فَقُولُوا۟ ٱشْهَدُوا۟ بِأَنَّا مُسْلِمُونَ
fr: -Dis: « Ô gens du Livre, venez à une parole commune entre nous et vous: que nous n'adorions qu'Allah, sans rien Lui associer, et que nous ne prenions point les uns les autres pour seigneurs en dehors d'Allah. » Puis, s'ils tournent le dos, dites: « Soyez témoins que nous, nous sommes soumis. »
ph: Qul Yā 'Ahla Al-Kitābi Ta`ālaw 'Ilá Kalimatin Sawā'in Baynanā Wa Baynakum 'Allā Na`buda 'Illā Allāha Wa Lā Nushrika Bihi Shay'āan Wa Lā Yattakhidha Ba`đunā Ba`đāan 'Arbābāan Min Dūni Allāhi Fa'in Tawallaw Faqūlū Ash/hadū Bi'annā Muslimūna

3:65
ar: يَٰٓأَهْلَ ٱلْكِتَٰبِ لِمَ تُحَآجُّونَ فِىٓ إِبْرَٰهِيمَ وَمَآ أُنزِلَتِ ٱلتَّوْرَىٰةُ وَٱلْإِنجِيلُ إِلَّا مِنۢ بَعْدِهِۦٓ ۚ أَفَلَا تَعْقِلُونَ
fr: Ô gens du Livre, pourquoi disputez-vous au sujet d'Ibrahim (Abraham), alors que la Thora et l'Évangile ne sont descendus qu'après lui ? Ne raisonnez-vous donc pas ?
ph: Yā 'Ahla Al-Kitābi Lima Tuĥājjūna Fī 'Ibrāhīma Wa Mā 'Unzilati At-Tawrāatu Wa Al-'Injīlu 'Illā Min Ba`dihi 'Afalā Ta`qilūna

3:66
ar: هَٰٓأَنتُمْ هَٰٓؤُلَآءِ حَٰجَجْتُمْ فِيمَا لَكُم بِهِۦ عِلْمٌۭ فَلِمَ تُحَآجُّونَ فِيمَا لَيْسَ لَكُم بِهِۦ عِلْمٌۭ ۚ وَٱللَّهُ يَعْلَمُ وَأَنتُمْ لَا تَعْلَمُونَ
fr: Vous avez bel et bien disputé à propos d'une chose dont vous avez connaissance. Mais pourquoi disputez-vous des choses dont vous n'avez pas connaissance ? Or Allah sait, tandis que vous ne savez pas.
ph: Hā'antum Hā'uulā' Ĥājajtum Fīmā Lakum Bihi `Ilmun Falima Tuĥājjūna Fīmā Laysa Lakum Bihi `Ilmun Wa Allāhu Ya`lamu Wa 'Antum Lā Ta`lamūna

3:67
ar: مَا كَانَ إِبْرَٰهِيمُ يَهُودِيًّۭا وَلَا نَصْرَانِيًّۭا وَلَٰكِن كَانَ حَنِيفًۭا مُّسْلِمًۭا وَمَا كَانَ مِنَ ٱلْمُشْرِكِينَ
fr: Ibrahim (Abraham) n'était ni Juif ni Chrétien. Il était entièrement soumis à Allah (Musulman). Et il n'était point du nombre des Associateurs.
ph: Mā Kāna 'Ibrāhīmu Yahūdīyāan Wa Lā Naşrānīyāan Wa Lakin Kāna Ĥanīfāan Muslimāan Wa Mā Kāna Mina Al-Mushrikīna

3:68
ar: إِنَّ أَوْلَى ٱلنَّاسِ بِإِبْرَٰهِيمَ لَلَّذِينَ ٱتَّبَعُوهُ وَهَٰذَا ٱلنَّبِىُّ وَٱلَّذِينَ ءَامَنُوا۟ ۗ وَٱللَّهُ وَلِىُّ ٱلْمُؤْمِنِينَ
fr: Certes les hommes les plus dignes de se réclamer d'Ibrahim (Abraham), sont ceux qui l'ont suivi, ainsi que ce Prophète-ci, et ceux qui ont la foi. Et Allah est l'allié des croyants.
ph: 'Inna 'Awlá An-Nāsi Bi'ibrāhīma Lalladhīna Attaba`ūhu Wa Hadhā An-Nabīyu Wa Al-Ladhīna 'Āmanū Wa Allāhu Wa Līyu Al-Mu'uminīna

3:69
ar: وَدَّت طَّآئِفَةٌۭ مِّنْ أَهْلِ ٱلْكِتَٰبِ لَوْ يُضِلُّونَكُمْ وَمَا يُضِلُّونَ إِلَّآ أَنفُسَهُمْ وَمَا يَشْعُرُونَ
fr: Une partie des gens du Livre aurait bien voulu vous égarer. Or ils n'égarent qu'eux-mêmes; et ils n'en sont pas conscients.
ph: Waddat Ţā'ifatun Min 'Ahli Al-Kitābi Law Yuđillūnakum Wa Mā Yuđillūna 'Illā 'Anfusahum Wa Mā Yash`urūn

3:70
ar: يَٰٓأَهْلَ ٱلْكِتَٰبِ لِمَ تَكْفُرُونَ بِـَٔايَٰتِ ٱللَّهِ وَأَنتُمْ تَشْهَدُونَ
fr: Ô gens du Livre, pourquoi ne croyez vous pas aux versets d'Allah (le Coran), cependant que vous en êtes témoins ?
ph: Yā 'Ahla Al-Kitābi Lima Takfurūna Bi'āyāti Allāhi Wa 'Antum Tash/hadūna

3:71
ar: يَٰٓأَهْلَ ٱلْكِتَٰبِ لِمَ تَلْبِسُونَ ٱلْحَقَّ بِٱلْبَٰطِلِ وَتَكْتُمُونَ ٱلْحَقَّ وَأَنتُمْ تَعْلَمُونَ
fr: Ô gens du Livre, pourquoi mêlez-vous le faux au vrai et cachez-vous sciemment la vérité ?
ph: Yā 'Ahla Al-Kitābi Lima Talbisūna Al-Ĥaqqa Bil-Bāţili Wa Taktumūna Al-Ĥaqqa Wa 'Antum Ta`lamūna

3:72
ar: وَقَالَت طَّآئِفَةٌۭ مِّنْ أَهْلِ ٱلْكِتَٰبِ ءَامِنُوا۟ بِٱلَّذِىٓ أُنزِلَ عَلَى ٱلَّذِينَ ءَامَنُوا۟ وَجْهَ ٱلنَّهَارِ وَٱكْفُرُوٓا۟ ءَاخِرَهُۥ لَعَلَّهُمْ يَرْجِعُونَ
fr: Ainsi dit une partie des gens du Livre: « Au début du jour, croyez à ce qui a été révélé aux Musulmans, mais, à la fin du jour, rejetez-le, afin qu'ils retournent (à leur ancienne religion). »
ph: Wa Qālat Ţā'ifatun Min 'Ahli Al-Kitābi 'Āminū Bial-Ladhī 'Unzila `Alá Al-Ladhīna 'Āmanū Wajha An-Nahāri Wa Akfurū 'Ākhirahu La`allahum Yarji`ūna

3:73
ar: وَلَا تُؤْمِنُوٓا۟ إِلَّا لِمَن تَبِعَ دِينَكُمْ قُلْ إِنَّ ٱلْهُدَىٰ هُدَى ٱللَّهِ أَن يُؤْتَىٰٓ أَحَدٌۭ مِّثْلَ مَآ أُوتِيتُمْ أَوْ يُحَآجُّوكُمْ عِندَ رَبِّكُمْ ۗ قُلْ إِنَّ ٱلْفَضْلَ بِيَدِ ٱللَّهِ يُؤْتِيهِ مَن يَشَآءُ ۗ وَٱللَّهُ وَٰسِعٌ عَلِيمٌۭ
fr: [Et les gens du Livre disent à leurs coreligionnaires]: « Ne croyez que ceux qui suivent votre religion... » Dis: « La vraie direction est la direction d'Allah » -[et ils disent encore: Vous ne devez ni approuver ni reconnaître] que quelqu'un d'autre que vous puisse recevoir comme ce que vous avez reçu de sorte qu'ils (les Musulmans) ne puissent argumenter contre vous auprès de votre Seigneur. Dis-[leur]: En vérité, la grâce est en la main d'Allah. Il la donne à qui Il veut. La grâce d'Allah est immense et Il est Omniscient.
ph: Wa Lā Tu'uminū 'Illā Liman Tabi`a Dīnakum Qul 'Inna Al-Hudá Hudá Allāhi 'An Yu'utá 'Aĥadun Mithla Mā 'Ūtītum 'Aw Yuĥājjūkum `Inda Rabbikum Qul 'Inna Al-Fađla Biyadi Allāhi Yu'utīhi Man Yashā'u Wa Allāhu Wāsi`un `Alīmun

3:74
ar: يَخْتَصُّ بِرَحْمَتِهِۦ مَن يَشَآءُ ۗ وَٱللَّهُ ذُو ٱلْفَضْلِ ٱلْعَظِيمِ
fr: Il réserve à qui Il veut sa miséricorde. Et Allah est Détenteur d'une grâce immense.
ph: Yakhtaşşu Biraĥmatihi Man Yashā'u Wa Allāhu Dhū Al-Fađli Al-`Ažīmi

3:75
ar: ۞ وَمِنْ أَهْلِ ٱلْكِتَٰبِ مَنْ إِن تَأْمَنْهُ بِقِنطَارٍۢ يُؤَدِّهِۦٓ إِلَيْكَ وَمِنْهُم مَّنْ إِن تَأْمَنْهُ بِدِينَارٍۢ لَّا يُؤَدِّهِۦٓ إِلَيْكَ إِلَّا مَا دُمْتَ عَلَيْهِ قَآئِمًۭا ۗ ذَٰلِكَ بِأَنَّهُمْ قَالُوا۟ لَيْسَ عَلَيْنَا فِى ٱلْأُمِّيِّۦنَ سَبِيلٌۭ وَيَقُولُونَ عَلَى ٱللَّهِ ٱلْكَذِبَ وَهُمْ يَعْلَمُونَ
fr: Et parmi les gens du Livre, il y en a qui, si tu lui confies un qintâr, te le rend. Mais il y en a aussi qui, si tu lui confies un dinâr, ne te le rendra que si tu l'y contrains sans relâche. Tout cela parce qu'ils disent: « Ces (arabes) qui n'ont pas de livre n'ont aucun chemin pour nous contraindre. » Ils profèrent des mensonges contre Allah alors qu'ils savent.
ph: Wa Min 'Ahli Al-Kitābi Man 'In Ta'manhu Biqinţārin Yu'uaddihi 'Ilayka Wa Minhum Man 'In Ta'manhu Bidīnārin Lā Yu'uaddihi 'Ilayka 'Illā Mā Dumta `Alayhi Qā'imāan Dhālika Bi'annahum Qālū Laysa `Alaynā Fī Al-'Ummīyīna Sabīlun Wa Yaqūlūna `Alá Allāhi Al-Kadhiba Wa Hum Ya`lamūna

3:76
ar: بَلَىٰ مَنْ أَوْفَىٰ بِعَهْدِهِۦ وَٱتَّقَىٰ فَإِنَّ ٱللَّهَ يُحِبُّ ٱلْمُتَّقِينَ
fr: Au contraire, quiconque remplit sa promesse et craint Allah... Allah aime les pieux.
ph: Balá Man 'Awfá Bi`ahdihi Wa Attaqá Fa'inna Allāha Yuĥibbu Al-Muttaqīna

3:77
ar: إِنَّ ٱلَّذِينَ يَشْتَرُونَ بِعَهْدِ ٱللَّهِ وَأَيْمَٰنِهِمْ ثَمَنًۭا قَلِيلًا أُو۟لَٰٓئِكَ لَا خَلَٰقَ لَهُمْ فِى ٱلْءَاخِرَةِ وَلَا يُكَلِّمُهُمُ ٱللَّهُ وَلَا يَنظُرُ إِلَيْهِمْ يَوْمَ ٱلْقِيَٰمَةِ وَلَا يُزَكِّيهِمْ وَلَهُمْ عَذَابٌ أَلِيمٌۭ
fr: Ceux qui vendent à vil prix leur engagement avec Allah ainsi que leurs serments n'auront aucune part dans l'au-delà, et Allah ne leur parlera pas, ni les regardera, au Jour de la Résurrection, ni ne les purifiera; et ils auront un châtiment douloureux.
ph: 'Inna Al-Ladhīna Yashtarūna Bi`ahdi Allāhi Wa 'Aymānihim Thamanāan Qalīlāan 'Ūlā'ika Lā Khalāqa Lahum Fī Al-'Ākhirati Wa Lā Yukallimuhumu Allāhu Wa Lā Yanžuru 'Ilayhim Yawma Al-Qiyāmati Wa Lā Yuzakkīhim Wa Lahum `Adhābun 'Alīmun

3:78
ar: وَإِنَّ مِنْهُمْ لَفَرِيقًۭا يَلْوُۥنَ أَلْسِنَتَهُم بِٱلْكِتَٰبِ لِتَحْسَبُوهُ مِنَ ٱلْكِتَٰبِ وَمَا هُوَ مِنَ ٱلْكِتَٰبِ وَيَقُولُونَ هُوَ مِنْ عِندِ ٱللَّهِ وَمَا هُوَ مِنْ عِندِ ٱللَّهِ وَيَقُولُونَ عَلَى ٱللَّهِ ٱلْكَذِبَ وَهُمْ يَعْلَمُونَ
fr: Et il y a parmi eux certains qui roulent leurs langues en lisant le Livre pour vous faire croire que cela provient du Livre, alors qu'il n'est point du Livre; et ils disent: « Ceci vient d'Allah », alors qu'il ne vient point d'Allah. Ils disent sciemment des mensonges contre Allah.
ph: Wa 'Inna Minhum Lafarīqāan Yalwūna 'Alsinatahum Bil-Kitābi Litaĥsabūhu Mina Al-Kitābi Wa Mā Huwa Mina Al-Kitābi Wa Yaqūlūna Huwa Min `Indi Allāhi Wa Mā Huwa Min `Indi Allāhi Wa Yaqūlūna `Alá Allāhi Al-Kadhiba Wa Hum Ya`lamūna

3:79
ar: مَا كَانَ لِبَشَرٍ أَن يُؤْتِيَهُ ٱللَّهُ ٱلْكِتَٰبَ وَٱلْحُكْمَ وَٱلنُّبُوَّةَ ثُمَّ يَقُولَ لِلنَّاسِ كُونُوا۟ عِبَادًۭا لِّى مِن دُونِ ٱللَّهِ وَلَٰكِن كُونُوا۟ رَبَّٰنِيِّۦنَ بِمَا كُنتُمْ تُعَلِّمُونَ ٱلْكِتَٰبَ وَبِمَا كُنتُمْ تَدْرُسُونَ
fr: Il ne conviendrait pas à un être humain à qui Allah a donné le Livre, la Compréhension et la Prophétie, de dire ensuite aux gens: « Soyez mes adorateurs, à l'exclusion d'Allah; mais au contraire, [il devra dire]: « Devenez des savants, obéissant au Seigneur, puisque vous enseignez le Livre et vous l'étudiez. »
ph: Mā Kāna Libasharin 'An Yu'utiyahu Allāhu Al-Kitāba Wa Al-Ĥukma Wa An-Nubūwata Thumma Yaqūla Lilnnāsi Kūnū `Ibādāan Lī Min Dūni Allāhi Wa Lakin Kūnū Rabbānīyīna Bimā Kuntum Tu`allimūna Al-Kitāba Wa Bimā Kuntum Tadrusūna

3:80
ar: وَلَا يَأْمُرَكُمْ أَن تَتَّخِذُوا۟ ٱلْمَلَٰٓئِكَةَ وَٱلنَّبِيِّۦنَ أَرْبَابًا ۗ أَيَأْمُرُكُم بِٱلْكُفْرِ بَعْدَ إِذْ أَنتُم مُّسْلِمُونَ
fr: Et il ne va pas vous commander de prendre pour seigneurs anges et prophètes. Vous commanderait-il de rejeter la foi, vous qui êtes Musulmans ?
ph: Wa Lā Ya'murakum 'An Tattakhidhū Al-Malā'ikata Wa An-Nabīyīna 'Arbābāan 'Aya'murukum Bil-Kufri Ba`da 'Idh 'Antum Muslimūna

3:81
ar: وَإِذْ أَخَذَ ٱللَّهُ مِيثَٰقَ ٱلنَّبِيِّۦنَ لَمَآ ءَاتَيْتُكُم مِّن كِتَٰبٍۢ وَحِكْمَةٍۢ ثُمَّ جَآءَكُمْ رَسُولٌۭ مُّصَدِّقٌۭ لِّمَا مَعَكُمْ لَتُؤْمِنُنَّ بِهِۦ وَلَتَنصُرُنَّهُۥ ۚ قَالَ ءَأَقْرَرْتُمْ وَأَخَذْتُمْ عَلَىٰ ذَٰلِكُمْ إِصْرِى ۖ قَالُوٓا۟ أَقْرَرْنَا ۚ قَالَ فَٱشْهَدُوا۟ وَأَنَا۠ مَعَكُم مِّنَ ٱلشَّٰهِدِينَ
fr: Et lorsqu'Allah prit cet engagement des prophètes: « Chaque fois que Je vous accorderai un Livre et de la Sagesse, et qu'ensuite un messager vous viendra confirmer ce qui est avec vous, vous devez croire en lui, et vous devrez lui porter secours. » Il leur dit: « Consentez-vous et acceptez-vous Mon pacte à cette condition ? » « Nous consentons », dirent-ils.: « Soyez-en donc témoins, dit Allah. Et Me voici, avec vous, parmi les témoins.
ph: Wa 'Idh 'Akhadha Allāhu Mīthāqa An-Nabīyīna Lamā 'Ātaytukum Min Kitābin Wa Ĥikmatin Thumma Jā'akum Rasūlun Muşaddiqun Limā Ma`akum Latu'uminunna Bihi Wa Latanşurunnahu Qāla 'A'aqrartum Wa 'Akhadhtum `Alá Dhālikum 'Işrī Qālū 'Aqrarnā Qāla Fāsh/hadū Wa 'Anā Ma`akum Mina Ash-Shāhidīna

3:82
ar: فَمَن تَوَلَّىٰ بَعْدَ ذَٰلِكَ فَأُو۟لَٰٓئِكَ هُمُ ٱلْفَٰسِقُونَ
fr: Quiconque ensuite tournera le dos... alors ce sont eux qui seront les pervers. »
ph: Faman Tawallá Ba`da Dhālika Fa'ūlā'ika Humu Al-Fāsiqūna

3:83
ar: أَفَغَيْرَ دِينِ ٱللَّهِ يَبْغُونَ وَلَهُۥٓ أَسْلَمَ مَن فِى ٱلسَّمَٰوَٰتِ وَٱلْأَرْضِ طَوْعًۭا وَكَرْهًۭا وَإِلَيْهِ يُرْجَعُونَ
fr: Désirent-ils une autre religion que celle d'Allah, alors que se soumet à Lui, bon gré, mal gré, tout ce qui existe dans les cieux et sur la terre, et que c'est vers Lui qu'ils seront ramenés ?
ph: 'Afaghayra Dīni Allāhi Yabghūna Wa Lahu 'Aslama Man Fī As-Samāwāti Wa Al-'Arđi Ţaw`āan Wa Karhāan Wa 'Ilayhi Yurja`ūna

3:84
ar: قُلْ ءَامَنَّا بِٱللَّهِ وَمَآ أُنزِلَ عَلَيْنَا وَمَآ أُنزِلَ عَلَىٰٓ إِبْرَٰهِيمَ وَإِسْمَٰعِيلَ وَإِسْحَٰقَ وَيَعْقُوبَ وَٱلْأَسْبَاطِ وَمَآ أُوتِىَ مُوسَىٰ وَعِيسَىٰ وَٱلنَّبِيُّونَ مِن رَّبِّهِمْ لَا نُفَرِّقُ بَيْنَ أَحَدٍۢ مِّنْهُمْ وَنَحْنُ لَهُۥ مُسْلِمُونَ
fr: Dis: « Nous croyons en Allah, à ce qu'on a fait descendre sur nous, à ce qu'on a fait descendre sur Ibrahim (Abraham), Isma'il (Ismaël), Ishaq (Isaac), Ya'qub (Jacob) et les Tribus, et à ce qui a été apporté à Musa (Moïse), à 'Isa (Jésus) et aux prophètes, de la part de leur Seigneur: nous ne faisons aucune différence entre eux; et c'est à Lui que nous sommes Soumis. »
ph: Qul 'Āmannā Billāhi Wa Mā 'Unzila `Alaynā Wa Mā 'Unzila `Alá 'Ibrāhīma Wa 'Ismā`īla Wa 'Isĥāqa Wa Ya`qūba Wa Al-'Asbāţi Wa Mā 'Ūtiya Mūsá Wa `Īsá Wa An-Nabīyūna Min Rabbihim Lā Nufarriqu Bayna 'Aĥadin Minhum Wa Naĥnu Lahu Muslimūna

3:85
ar: وَمَن يَبْتَغِ غَيْرَ ٱلْإِسْلَٰمِ دِينًۭا فَلَن يُقْبَلَ مِنْهُ وَهُوَ فِى ٱلْءَاخِرَةِ مِنَ ٱلْخَٰسِرِينَ
fr: Et quiconque désire une religion autre que l'Islam, ne sera point agréé, et il sera, dans l'au-delà, parmi les perdants.
ph: Wa Man Yabtaghi Ghayra Al-'Islāmi Dīnāan Falan Yuqbala Minhu Wa Huwa Fī Al-'Ākhirati Mina Al-Khāsirīna

3:86
ar: كَيْفَ يَهْدِى ٱللَّهُ قَوْمًۭا كَفَرُوا۟ بَعْدَ إِيمَٰنِهِمْ وَشَهِدُوٓا۟ أَنَّ ٱلرَّسُولَ حَقٌّۭ وَجَآءَهُمُ ٱلْبَيِّنَٰتُ ۚ وَٱللَّهُ لَا يَهْدِى ٱلْقَوْمَ ٱلظَّٰلِمِينَ
fr: Comment Allah guiderait-Il des gens qui n'ont plus la foi après avoir cru et témoigné que le Messager est véridique, et après que les preuves leur sont venues ? Allah ne guide pas les gens injustes.
ph: Kayfa Yahdī Allāhu Qawmāan Kafarū Ba`da 'Īmānihim Wa Shahidū 'Anna Ar-Rasūla Ĥaqqun Wa Jā'ahumu Al-Bayyinātu Wa Allāhu Lā Yahdī Al-Qawma Až-Žālimīna

3:87
ar: أُو۟لَٰٓئِكَ جَزَآؤُهُمْ أَنَّ عَلَيْهِمْ لَعْنَةَ ٱللَّهِ وَٱلْمَلَٰٓئِكَةِ وَٱلنَّاسِ أَجْمَعِينَ
fr: Ceux là, leur rétribution sera qu'ils auront sur eux la malédiction d'Allah, des Anges et de tous les êtres humains.
ph: 'Ūlā'ika Jazā'uuhum 'Anna `Alayhim La`nata Allāhi Wa Al-Malā'ikati Wa An-Nāsi 'Ajma`īna

3:88
ar: خَٰلِدِينَ فِيهَا لَا يُخَفَّفُ عَنْهُمُ ٱلْعَذَابُ وَلَا هُمْ يُنظَرُونَ
fr: Ils y demeureront éternellement. Le châtiment ne leur sera pas allégé, et ils n'auront aucun répit,
ph: Khālidīna Fīhā Lā Yukhaffafu `Anhumu Al-`Adhābu Wa Lā Hum Yunžarūna

3:89
ar: إِلَّا ٱلَّذِينَ تَابُوا۟ مِنۢ بَعْدِ ذَٰلِكَ وَأَصْلَحُوا۟ فَإِنَّ ٱللَّهَ غَفُورٌۭ رَّحِيمٌ
fr: excepté ceux qui par la suite se repentiront et se réformeront: car Allah est certes Pardonneur et Miséricordieux.
ph: 'Illā Al-Ladhīna Tābū Min Ba`di Dhālika Wa 'Aşlaĥū Fa'inna Allāha Ghafūrun Raĥīmun

3:90
ar: إِنَّ ٱلَّذِينَ كَفَرُوا۟ بَعْدَ إِيمَٰنِهِمْ ثُمَّ ٱزْدَادُوا۟ كُفْرًۭا لَّن تُقْبَلَ تَوْبَتُهُمْ وَأُو۟لَٰٓئِكَ هُمُ ٱلضَّآلُّونَ
fr: En vérité, ceux qui ne croient plus après avoir eu la foi, et laissent augmenter encore leur mécréance, leur repentir ne sera jamais accepté. Ceux-là sont vraiment les égarés.
ph: 'Inna Al-Ladhīna Kafarū Ba`da 'Īmānihim Thumma Azdādū Kufrāan Lan Tuqbala Tawbatuhum Wa 'Ūlā'ika Humu Ađ-Đāllūna

3:91
ar: إِنَّ ٱلَّذِينَ كَفَرُوا۟ وَمَاتُوا۟ وَهُمْ كُفَّارٌۭ فَلَن يُقْبَلَ مِنْ أَحَدِهِم مِّلْءُ ٱلْأَرْضِ ذَهَبًۭا وَلَوِ ٱفْتَدَىٰ بِهِۦٓ ۗ أُو۟لَٰٓئِكَ لَهُمْ عَذَابٌ أَلِيمٌۭ وَمَا لَهُم مِّن نَّٰصِرِينَ
fr: Ceux qui ne croient pas et qui meurent mécréants, il ne sera jamais accepté, d'aucun d'eux de se racheter même si pour cela il (donnait) le contenu, en or, de la terre. Ils auront un châtiment douloureux, et ils n'auront point de secoureurs.
ph: 'Inna Al-Ladhīna Kafarū Wa Mātū Wa Hum Kuffārun Falan Yuqbala Min 'Aĥadihim Mil'u Al-'Arđi Dhahabāan Wa Law Aftadá Bihi 'Ūlā'ika Lahum `Adhābun 'Alīmun Wa Mā Lahum Min Nāşirīna

3:92
ar: لَن تَنَالُوا۟ ٱلْبِرَّ حَتَّىٰ تُنفِقُوا۟ مِمَّا تُحِبُّونَ ۚ وَمَا تُنفِقُوا۟ مِن شَىْءٍۢ فَإِنَّ ٱللَّهَ بِهِۦ عَلِيمٌۭ
fr: Vous n'atteindrez la (vraie) piété, que si vous faites largesses de ce que vous chérissez. Tout ce dont vous faites largesses, Allah le sait certainement bien.
ph: Lan Tanālū Al-Birra Ĥattá Tunfiqū Mimmā Tuĥibbūna Wa Mā Tunfiqū Min Shay'in Fa'inna Allāha Bihi `Alīmun

3:93
ar: ۞ كُلُّ ٱلطَّعَامِ كَانَ حِلًّۭا لِّبَنِىٓ إِسْرَٰٓءِيلَ إِلَّا مَا حَرَّمَ إِسْرَٰٓءِيلُ عَلَىٰ نَفْسِهِۦ مِن قَبْلِ أَن تُنَزَّلَ ٱلتَّوْرَىٰةُ ۗ قُلْ فَأْتُوا۟ بِٱلتَّوْرَىٰةِ فَٱتْلُوهَآ إِن كُنتُمْ صَٰدِقِينَ
fr: Toute nourriture était licite aux enfants d'Israʾil (Israël), sauf celle qu'Israël lui-même s'interdit avant que ne descendît la Thora. Dis-[leur]: « Apportez la Thora et lisez-la, si ce que vous dites est vrai ! »
ph: Kullu Aţ-Ţa`āmi Kāna Ĥillāan Libanī 'Isrā'īla 'Illā Mā Ĥarrama 'Isrā'īlu `Alá Nafsihi Min Qabli 'An Tunazzala At-Tawrāatu Qul Fa'tū Bit-Tawrāati Fātlūhā 'In Kuntum Şādiqīna

3:94
ar: فَمَنِ ٱفْتَرَىٰ عَلَى ٱللَّهِ ٱلْكَذِبَ مِنۢ بَعْدِ ذَٰلِكَ فَأُو۟لَٰٓئِكَ هُمُ ٱلظَّٰلِمُونَ
fr: Donc, quiconque, après cela, invente des mensonges contre Allah... ceux-là sont, donc, les vrais injustes.
ph: Famani Aftará `Alá Allāhi Al-Kadhiba Min Ba`di Dhālika Fa'ūlā'ika Humu Až-Žālimūna

3:95
ar: قُلْ صَدَقَ ٱللَّهُ ۗ فَٱتَّبِعُوا۟ مِلَّةَ إِبْرَٰهِيمَ حَنِيفًۭا وَمَا كَانَ مِنَ ٱلْمُشْرِكِينَ
fr: Dis: « C'est Allah qui dit la vérité. Suivez donc la religion d'Ibrahim (Abraham), Musulman droit. Et il n'était point des associateurs. »
ph: Qul Şadaqa Allāhu Fa Attabi`ū Millata 'Ibrāhīma Ĥanīfāan Wa Mā Kāna Mina Al-Mushrikīna

3:96
ar: إِنَّ أَوَّلَ بَيْتٍۢ وُضِعَ لِلنَّاسِ لَلَّذِى بِبَكَّةَ مُبَارَكًۭا وَهُدًۭى لِّلْعَٰلَمِينَ
fr: La première Maison qui ait été édifiée pour les gens, c'est bien celle de Bakka (la Mecque) bénie et une bonne direction pour l'univers.
ph: 'Inna 'Awwala Baytin Wuđi`a Lilnnāsi Lalladhī Bibakkata Mubārakāan Wa Hudáan Lil`ālamīna

3:97
ar: فِيهِ ءَايَٰتٌۢ بَيِّنَٰتٌۭ مَّقَامُ إِبْرَٰهِيمَ ۖ وَمَن دَخَلَهُۥ كَانَ ءَامِنًۭا ۗ وَلِلَّهِ عَلَى ٱلنَّاسِ حِجُّ ٱلْبَيْتِ مَنِ ٱسْتَطَاعَ إِلَيْهِ سَبِيلًۭا ۚ وَمَن كَفَرَ فَإِنَّ ٱللَّهَ غَنِىٌّ عَنِ ٱلْعَٰلَمِينَ
fr: Là sont des signes évidents, parmi lesquels l'endroit où Ibrahim (Abraham) s'est tenu debout; et quiconque y entre est en sécurité. Et c'est un devoir envers Allah pour les gens qui ont les moyens, d'aller faire le pèlerinage de la Maison. Et quiconque ne croit pas... Allah Se passe largement des mondes.
ph: Fīhi 'Āyātun Bayyinātun Maqāmu 'Ibrāhīma Wa Man Dakhalahu Kāna 'Āmināan Wa Lillahi `Alá An-Nāsi Ĥijju Al-Bayti Mani Astaţā`a 'Ilayhi Sabīlāan Wa Man Kafara Fa'inna Allāha Ghanīyun `Ani Al-`Ālamīna

3:98
ar: قُلْ يَٰٓأَهْلَ ٱلْكِتَٰبِ لِمَ تَكْفُرُونَ بِـَٔايَٰتِ ٱللَّهِ وَٱللَّهُ شَهِيدٌ عَلَىٰ مَا تَعْمَلُونَ
fr: -Dis: « Ô gens du Livre, pourquoi ne croyez-vous pas aux versets d'Allah (al-Qur'ân), alors qu'Allah est témoin de ce que vous faites ? »
ph: Qul Yā 'Ahla Al-Kitābi Lima Takfurūna Bi'āyāti Allāhi Wa Allāhu Shahīdun `Alá Mā Ta`malūna

3:99
ar: قُلْ يَٰٓأَهْلَ ٱلْكِتَٰبِ لِمَ تَصُدُّونَ عَن سَبِيلِ ٱللَّهِ مَنْ ءَامَنَ تَبْغُونَهَا عِوَجًۭا وَأَنتُمْ شُهَدَآءُ ۗ وَمَا ٱللَّهُ بِغَٰفِلٍ عَمَّا تَعْمَلُونَ
fr: -Dis: « Ô gens du Livre, pourquoi obstruez-vous la voie d'Allah à celui qui a la foi, et pourquoi voulez-vous rendre cette voie tortueuse, alors que vous êtes témoins de la vérité ! » Et Allah n'est pas inattentif à ce que vous faites.
ph: Qul Yā 'Ahla Al-Kitābi Lima Taşuddūna `An Sabīli Allāhi Man 'Āmana Tabghūnahā `Iwajāan Wa 'Antum Shuhadā'u Wa Mā Allāhu Bighāfilin `Ammā Ta`malūna

3:100
ar: يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوٓا۟ إِن تُطِيعُوا۟ فَرِيقًۭا مِّنَ ٱلَّذِينَ أُوتُوا۟ ٱلْكِتَٰبَ يَرُدُّوكُم بَعْدَ إِيمَٰنِكُمْ كَٰفِرِينَ
fr: Ô les croyants ! Si vous obéissez à un groupe de ceux auxquels on a donné le Livre, il vous rendra mécréants après que vous ayez eu la foi.
ph: Yā 'Ayyuhā Al-Ladhīna 'Āmanū 'In Tuţī`ū Farīqāan Mina Al-Ladhīna 'Ūtū Al-Kitāba Yaruddūkum Ba`da 'Īmānikum Kāfirīna

3:101
ar: وَكَيْفَ تَكْفُرُونَ وَأَنتُمْ تُتْلَىٰ عَلَيْكُمْ ءَايَٰتُ ٱللَّهِ وَفِيكُمْ رَسُولُهُۥ ۗ وَمَن يَعْتَصِم بِٱللَّهِ فَقَدْ هُدِىَ إِلَىٰ صِرَٰطٍۢ مُّسْتَقِيمٍۢ
fr: Et comment pouvez-vous ne pas croire, alors que les versets d'Allah vous sont récités, et qu'au milieu de vous se tient Son messager ? Quiconque s'attache fortement à Allah, il est certes guidé vers un droit chemin.
ph: Wa Kayfa Takfurūna Wa 'Antum Tutlá `Alaykum 'Āyātu Allāhi Wa Fīkum Rasūluhu Wa Man Ya`taşim Billāhi Faqad Hudiya 'Ilá Şirāţin Mustaqīmin

3:102
ar: يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ ٱتَّقُوا۟ ٱللَّهَ حَقَّ تُقَاتِهِۦ وَلَا تَمُوتُنَّ إِلَّا وَأَنتُم مُّسْلِمُونَ
fr: Ô les croyants ! Craignez Allah comme Il doit être craint. Et ne mourez qu'en pleine soumission.
ph: Yā 'Ayyuhā Al-Ladhīna 'Āmanū Attaqū Allāha Ĥaqqa Tuqātihi Wa Lā Tamūtunna 'Illā Wa 'Antum Muslimūna

3:103
ar: وَٱعْتَصِمُوا۟ بِحَبْلِ ٱللَّهِ جَمِيعًۭا وَلَا تَفَرَّقُوا۟ ۚ وَٱذْكُرُوا۟ نِعْمَتَ ٱللَّهِ عَلَيْكُمْ إِذْ كُنتُمْ أَعْدَآءًۭ فَأَلَّفَ بَيْنَ قُلُوبِكُمْ فَأَصْبَحْتُم بِنِعْمَتِهِۦٓ إِخْوَٰنًۭا وَكُنتُمْ عَلَىٰ شَفَا حُفْرَةٍۢ مِّنَ ٱلنَّارِ فَأَنقَذَكُم مِّنْهَا ۗ كَذَٰلِكَ يُبَيِّنُ ٱللَّهُ لَكُمْ ءَايَٰتِهِۦ لَعَلَّكُمْ تَهْتَدُونَ
fr: Et cramponnez-vous tous ensemble au: « Habl » (câble) d'Allah et ne soyez pas divisés; et rappelez-vous le bienfait d'Allah sur vous: lorsque vous étiez ennemis, c'est Lui qui réconcilia vos cœurs. Puis, par Son bienfait, vous êtes devenus frères. Et alors que vous étiez au bord d'un abîme de Feu, c'est Lui qui vous en a sauvés. Ainsi Allah vous montre Ses signes afin que vous soyez bien guidés.
ph: Wa A`taşimū Biĥabli Allāhi Jamī`āan Wa Lā Tafarraqū Wa Adhkurū Ni`mata Allāhi `Alaykum 'Idh Kuntum 'A`dā'an Fa'allafa Bayna Qulūbikum Fa'aşbaĥtum Bini`matihi 'Ikhwānāan Wa Kuntum `Alá Shafā Ĥufratin Mina An-Nāri Fa'anqadhakum Minhā Kadhālika Yubayyinu Allāhu Lakum 'Āyātihi La`allakum Tahtadūna

3:104
ar: وَلْتَكُن مِّنكُمْ أُمَّةٌۭ يَدْعُونَ إِلَى ٱلْخَيْرِ وَيَأْمُرُونَ بِٱلْمَعْرُوفِ وَيَنْهَوْنَ عَنِ ٱلْمُنكَرِ ۚ وَأُو۟لَٰٓئِكَ هُمُ ٱلْمُفْلِحُونَ
fr: Que soit issue de vous une communauté qui appelle au bien, ordonne le convenable, et interdit le blâmable. Car ce seront eux qui réussiront.
ph: Wa Ltakun Minkum 'Ummatun Yad`ūna 'Ilá Al-Khayri Wa Ya'murūna Bil-Ma`rūfi Wa Yanhawna `Ani Al-Munkari Wa 'Ūlā'ika Humu Al-Mufliĥūna

3:105
ar: وَلَا تَكُونُوا۟ كَٱلَّذِينَ تَفَرَّقُوا۟ وَٱخْتَلَفُوا۟ مِنۢ بَعْدِ مَا جَآءَهُمُ ٱلْبَيِّنَٰتُ ۚ وَأُو۟لَٰٓئِكَ لَهُمْ عَذَابٌ عَظِيمٌۭ
fr: Et ne soyez pas comme ceux qui se sont divisés et se sont mis à disputer, après que les preuves leur furent venues, et ceux-là auront un énorme châtiment.
ph: Wa Lā Takūnū Kālladhīna Tafarraqū Wa Akhtalafū Min Ba`di Mā Jā'ahumu Al-Bayyinātu Wa 'Ūlā'ika Lahum `Adhābun `Ažīmun

3:106
ar: يَوْمَ تَبْيَضُّ وُجُوهٌۭ وَتَسْوَدُّ وُجُوهٌۭ ۚ فَأَمَّا ٱلَّذِينَ ٱسْوَدَّتْ وُجُوهُهُمْ أَكَفَرْتُم بَعْدَ إِيمَٰنِكُمْ فَذُوقُوا۟ ٱلْعَذَابَ بِمَا كُنتُمْ تَكْفُرُونَ
fr: Au jour où certains visages s'éclaireront, et que d'autres s'assombriront. A ceux dont les visages seront assombris (il sera dit): « Avez-vous mécru après avoir eu la foi ? » Eh bien, goûtez au châtiment, pour avoir renié la foi.
ph: Yawma Tabyađđu Wujūhun Wa Taswaddu Wujūhun Fa'ammā Al-Ladhīna Aswaddat Wujūhuhum 'Akafartum Ba`da 'Īmānikum Fadhūqū Al-`Adhāba Bimā Kuntum Takfurūna

3:107
ar: وَأَمَّا ٱلَّذِينَ ٱبْيَضَّتْ وُجُوهُهُمْ فَفِى رَحْمَةِ ٱللَّهِ هُمْ فِيهَا خَٰلِدُونَ
fr: Et quant à ceux dont les visages s'éclaireront, ils seront dans la miséricorde d'Allah, où ils demeureront éternellement.
ph: Wa 'Ammā Al-Ladhīna Abyađđat Wujūhuhum Fafī Raĥmati Allāhi Hum Fīhā Khālidūna

3:108
ar: تِلْكَ ءَايَٰتُ ٱللَّهِ نَتْلُوهَا عَلَيْكَ بِٱلْحَقِّ ۗ وَمَا ٱللَّهُ يُرِيدُ ظُلْمًۭا لِّلْعَٰلَمِينَ
fr: Tels sont les versets d'Allah; Nous te (Muhammad) les récitons avec vérité. Et Allah ne veut point léser les mondes.
ph: Tilka 'Āyātu Allāhi Natlūhā `Alayka Bil-Ĥaqqi Wa Mā Allāhu Yurīdu Žulmāan Lil`ālamīna

3:109
ar: وَلِلَّهِ مَا فِى ٱلسَّمَٰوَٰتِ وَمَا فِى ٱلْأَرْضِ ۚ وَإِلَى ٱللَّهِ تُرْجَعُ ٱلْأُمُورُ
fr: À Allah appartient tout ce qui est dans les cieux et sur la terre. Et c'est vers Allah que toute chose sera ramenée.
ph: Wa Lillahi Mā Fī As-Samāwāti Wa Mā Fī Al-'Arđi Wa 'Ilá Allāhi Turja`u Al-'Umūru

3:110
ar: كُنتُمْ خَيْرَ أُمَّةٍ أُخْرِجَتْ لِلنَّاسِ تَأْمُرُونَ بِٱلْمَعْرُوفِ وَتَنْهَوْنَ عَنِ ٱلْمُنكَرِ وَتُؤْمِنُونَ بِٱللَّهِ ۗ وَلَوْ ءَامَنَ أَهْلُ ٱلْكِتَٰبِ لَكَانَ خَيْرًۭا لَّهُم ۚ مِّنْهُمُ ٱلْمُؤْمِنُونَ وَأَكْثَرُهُمُ ٱلْفَٰسِقُونَ
fr: Vous êtes la meilleure communauté, qu'on ait fait surgir pour les hommes. Vous ordonnez le convenable, interdisez le blâmable et croyez à Allah. Si les gens du Livre croyaient, ce serait meilleur pour eux, il y en a qui ont la foi, mais la plupart d'entre eux sont des pervers.
ph: Kuntum Khayra 'Ummatin 'Ukhrijat Lilnnāsi Ta'murūna Bil-Ma`rūfi Wa Tanhawna `Ani Al-Munkari Wa Tu'uminūna Billāhi Wa Law 'Āmana 'Ahlu Al-Kitābi Lakāna Khayrāan Lahum Minhumu Al-Mu'uminūna Wa 'Aktharuhumu Al-Fāsiqūna

3:111
ar: لَن يَضُرُّوكُمْ إِلَّآ أَذًۭى ۖ وَإِن يُقَٰتِلُوكُمْ يُوَلُّوكُمُ ٱلْأَدْبَارَ ثُمَّ لَا يُنصَرُونَ
fr: Ils ne sauront jamais vous causer de grand mal, seulement une nuisance (par la langue); et s'ils vous combattent, ils vous tourneront le dos, et ils n'auront alors point de secours.
ph: Lan Yađurrūkum 'Illā 'Adháan Wa 'In Yuqātilūkum Yuwallūkumu Al-'Adbāra Thumma Lā Yunşarūna

3:112
ar: ضُرِبَتْ عَلَيْهِمُ ٱلذِّلَّةُ أَيْنَ مَا ثُقِفُوٓا۟ إِلَّا بِحَبْلٍۢ مِّنَ ٱللَّهِ وَحَبْلٍۢ مِّنَ ٱلنَّاسِ وَبَآءُو بِغَضَبٍۢ مِّنَ ٱللَّهِ وَضُرِبَتْ عَلَيْهِمُ ٱلْمَسْكَنَةُ ۚ ذَٰلِكَ بِأَنَّهُمْ كَانُوا۟ يَكْفُرُونَ بِـَٔايَٰتِ ٱللَّهِ وَيَقْتُلُونَ ٱلْأَنۢبِيَآءَ بِغَيْرِ حَقٍّۢ ۚ ذَٰلِكَ بِمَا عَصَوا۟ وَّكَانُوا۟ يَعْتَدُونَ
fr: Où qu'ils se trouvent, ils sont frappés d'avilissement, à moins d'un secours providentiel d'Allah ou d'un pacte conclu avec les hommes. Ils ont encouru la colère d'Allah, et les voilà frappés de malheur, pour n'avoir pas cru aux signes d'Allah, et assassiné injustement les prophètes, et aussi pour avoir désobéi et transgressé.
ph: Đuribat `Alayhimu Adh-Dhillatu 'Ayna Mā Thuqifū 'Illā Biĥablin Mina Allāhi Wa Ĥablin Mina An-Nāsi Wa Bā'ū Bighađabin Mina Allāhi Wa Đuribat `Alayhimu Al-Maskanatu Dhālika Bi'annahum Kānū Yakfurūna Bi'āyāti Allāhi Wa Yaqtulūna Al-'Anbiyā'a Bighayri Ĥaqqin Dhālika Bimā `Aşaw Wa Kānū Ya`tadūna

3:113
ar: ۞ لَيْسُوا۟ سَوَآءًۭ ۗ مِّنْ أَهْلِ ٱلْكِتَٰبِ أُمَّةٌۭ قَآئِمَةٌۭ يَتْلُونَ ءَايَٰتِ ٱللَّهِ ءَانَآءَ ٱلَّيْلِ وَهُمْ يَسْجُدُونَ
fr: Mais ils ne sont pas tous pareils. Il est, parmi les gens du Livre, une communauté droite qui, aux heures de la nuit, récite les versets d'Allah en se prosternant.
ph: Laysū Sawā'an Min 'Ahli Al-Kitābi 'Ummatun Qā'imatun Yatlūna 'Āyāti Allāhi 'Ānā'a Al-Layli Wa Hum Yasjudūna

3:114
ar: يُؤْمِنُونَ بِٱللَّهِ وَٱلْيَوْمِ ٱلْءَاخِرِ وَيَأْمُرُونَ بِٱلْمَعْرُوفِ وَيَنْهَوْنَ عَنِ ٱلْمُنكَرِ وَيُسَٰرِعُونَ فِى ٱلْخَيْرَٰتِ وَأُو۟لَٰٓئِكَ مِنَ ٱلصَّٰلِحِينَ
fr: Ils croient en Allah et au Jour dernier, ordonnent le convenable, interdisent le blâmable et concourent aux bonnes œuvres. Ceux-là sont parmi les gens de bien.
ph: Yu'uminūna Billāhi Wa Al-Yawmi Al-'Ākhiri Wa Ya'murūna Bil-Ma`rūfi Wa Yanhawna `Ani Al-Munkari Wa Yusāri`ūna Fī Al-Khayrāti Wa 'Ūlā'ika Mina Aş-Şāliĥīna

3:115
ar: وَمَا يَفْعَلُوا۟ مِنْ خَيْرٍۢ فَلَن يُكْفَرُوهُ ۗ وَٱللَّهُ عَلِيمٌۢ بِٱلْمُتَّقِينَ
fr: Et quelque bien qu'ils fassent, il ne leur sera pas dénié. Car Allah connaît bien les pieux.
ph: Wa Mā Yaf`alū Min Khayrin Falan Yukfarūhu Wa Allāhu `Alīmun Bil-Muttaqīna

3:116
ar: إِنَّ ٱلَّذِينَ كَفَرُوا۟ لَن تُغْنِىَ عَنْهُمْ أَمْوَٰلُهُمْ وَلَآ أَوْلَٰدُهُم مِّنَ ٱللَّهِ شَيْـًۭٔا ۖ وَأُو۟لَٰٓئِكَ أَصْحَٰبُ ٱلنَّارِ ۚ هُمْ فِيهَا خَٰلِدُونَ
fr: Quant à ceux qui ne croient pas, ni leurs biens, ni leurs enfants ne pourront jamais leur servir contre la punition d'Allah. Et ce sont les gens du Feu: ils y demeureront éternellement.
ph: 'Inna Al-Ladhīna Kafarū Lan Tughniya `Anhum 'Amwāluhum Wa Lā 'Awlāduhum Mina Allāhi Shay'āan Wa 'Ūlā'ika 'Aşĥābu An-Nāri Hum Fīhā Khālidūna

3:117
ar: مَثَلُ مَا يُنفِقُونَ فِى هَٰذِهِ ٱلْحَيَوٰةِ ٱلدُّنْيَا كَمَثَلِ رِيحٍۢ فِيهَا صِرٌّ أَصَابَتْ حَرْثَ قَوْمٍۢ ظَلَمُوٓا۟ أَنفُسَهُمْ فَأَهْلَكَتْهُ ۚ وَمَا ظَلَمَهُمُ ٱللَّهُ وَلَٰكِنْ أَنفُسَهُمْ يَظْلِمُونَ
fr: Ce qu'ils dépensent dans la vie présente ressemble à un vent glacial qui s'abat sur un champ appartenant à des gens qui se sont lésés eux-mêmes, et le détruit. Car ce n'est pas Allah qui leur cause du mal, mais ils se font du mal à eux-mêmes.
ph: Mathalu Mā Yunfiqūna Fī Hadhihi Al-Ĥayāati Ad-Dunyā Kamathali Rīĥin Fīhā Şirrun 'Aşābat Ĥartha Qawmin Žalamū 'Anfusahum Fa'ahlakat/hu Wa Mā Žalamahumu Allāhu Wa Lakin 'Anfusahum Yažlimūna

3:118
ar: يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ لَا تَتَّخِذُوا۟ بِطَانَةًۭ مِّن دُونِكُمْ لَا يَأْلُونَكُمْ خَبَالًۭا وَدُّوا۟ مَا عَنِتُّمْ قَدْ بَدَتِ ٱلْبَغْضَآءُ مِنْ أَفْوَٰهِهِمْ وَمَا تُخْفِى صُدُورُهُمْ أَكْبَرُ ۚ قَدْ بَيَّنَّا لَكُمُ ٱلْءَايَٰتِ ۖ إِن كُنتُمْ تَعْقِلُونَ
fr: Ô les croyants, ne prenez pas de confidents en dehors de vous-mêmes: ils ne failliront pas à vous bouleverser. Ils souhaiteraient que vous soyez en difficulté. La haine certes s'est manifestée dans leurs bouches, mais ce que leurs poitrines cachent est encore plus énorme. Voilà que Nous vous exposons les signes. Si vous pouviez raisonner !
ph: Yā 'Ayyuhā Al-Ladhīna 'Āmanū Lā Tattakhidhū Biţānatan Min Dūnikum Lā Ya'lūnakum Khabālāan Wa Ddū Mā `Anittum Qad Badati Al-Baghđā'u Min 'Afwāhihim Wa Mā Tukhfī Şudūruhum 'Akbaru Qad Bayyannā Lakumu Al-'Āyāti 'In Kuntum Ta`qilūna

3:119
ar: هَٰٓأَنتُمْ أُو۟لَآءِ تُحِبُّونَهُمْ وَلَا يُحِبُّونَكُمْ وَتُؤْمِنُونَ بِٱلْكِتَٰبِ كُلِّهِۦ وَإِذَا لَقُوكُمْ قَالُوٓا۟ ءَامَنَّا وَإِذَا خَلَوْا۟ عَضُّوا۟ عَلَيْكُمُ ٱلْأَنَامِلَ مِنَ ٱلْغَيْظِ ۚ قُلْ مُوتُوا۟ بِغَيْظِكُمْ ۗ إِنَّ ٱللَّهَ عَلِيمٌۢ بِذَاتِ ٱلصُّدُورِ
fr: Vous, (Musulmans) vous les aimez, alors qu'ils ne vous aiment pas; et vous avez foi dans le Livre tout entier. Et lorsqu'ils vous rencontrent, ils disent: « Nous croyons » et une fois seuls, de rage contre vous, ils se mordent les bouts des doigts. Dis: « Mourez de votre rage. » En vérité, Allah connaît fort bien le contenu des cœurs.
ph: Hā'antum 'Ūlā'i Tuĥibbūnahum Wa Lā Yuĥibbūnakum Wa Tu'uminūna Bil-Kitābi Kullihi Wa 'Idhā Laqūkum Qālū 'Āmannā Wa 'Idhā Khalaw `Ađđū `Alaykumu Al-'Anāmila Mina Al-Ghayži Qul Mūtū Bighayžikum 'Inna Allāha `Alīmun Bidhāti Aş-Şudūri

3:120
ar: إِن تَمْسَسْكُمْ حَسَنَةٌۭ تَسُؤْهُمْ وَإِن تُصِبْكُمْ سَيِّئَةٌۭ يَفْرَحُوا۟ بِهَا ۖ وَإِن تَصْبِرُوا۟ وَتَتَّقُوا۟ لَا يَضُرُّكُمْ كَيْدُهُمْ شَيْـًٔا ۗ إِنَّ ٱللَّهَ بِمَا يَعْمَلُونَ مُحِيطٌۭ
fr: Qu'un bien vous touche, ils s'en affligent. Qu'un mal vous atteigne, ils s'en réjouissent. Mais si vous êtes endurants et pieux, leur manigance ne vous causera aucun mal. Allah connaît parfaitement tout ce qu'ils font.
ph: 'In Tamsaskum Ĥasanatun Tasu'uhum Wa 'In Tuşibkum Sayyi'atun Yafraĥū Bihā Wa 'In Taşbirū Wa Tattaqū Lā Yađurrukum Kayduhum Shay'āan 'Inna Allāha Bimā Ya`malūna Muĥīţun

3:121
ar: وَإِذْ غَدَوْتَ مِنْ أَهْلِكَ تُبَوِّئُ ٱلْمُؤْمِنِينَ مَقَٰعِدَ لِلْقِتَالِ ۗ وَٱللَّهُ سَمِيعٌ عَلِيمٌ
fr: Lorsqu'un matin, tu (Muhammad) quittas ta famille, pour assigner aux croyants les postes de combat et Allah est Audient et Omniscient.
ph: Wa 'Idh Ghadawta Min 'Ahlika Tubawwi'u Al-Mu'uminīna Maqā`ida Lilqitāli Wa Allāhu Samī`un `Alīmun

3:122
ar: إِذْ هَمَّت طَّآئِفَتَانِ مِنكُمْ أَن تَفْشَلَا وَٱللَّهُ وَلِيُّهُمَا ۗ وَعَلَى ٱللَّهِ فَلْيَتَوَكَّلِ ٱلْمُؤْمِنُونَ
fr: Quand deux de vos groupes songèrent à fléchir ! Alors qu'Allah est leur allié à tous deux ! Car, c'est en Allah que les croyants doivent placer leur confiance.
ph: 'Idh Hammat Ţā'ifatāni Minkum 'An Tafshalā Wa Allāhu Walīyuhumā Wa `Alá Allāhi Falyatawakkali Al-Mu'uminūna

3:123
ar: وَلَقَدْ نَصَرَكُمُ ٱللَّهُ بِبَدْرٍۢ وَأَنتُمْ أَذِلَّةٌۭ ۖ فَٱتَّقُوا۟ ٱللَّهَ لَعَلَّكُمْ تَشْكُرُونَ
fr: Allah vous a donné la victoire, à Badr, alors que vous étiez humiliés. Craignez Allah donc. Afin que vous soyez reconnaissants !
ph: Wa Laqad Naşarakumu Allāhu Bibadrin Wa 'Antum 'Adhillatun Fa Attaqū Allāha La`allakum Tashkurūna

3:124
ar: إِذْ تَقُولُ لِلْمُؤْمِنِينَ أَلَن يَكْفِيَكُمْ أَن يُمِدَّكُمْ رَبُّكُم بِثَلَٰثَةِ ءَالَٰفٍۢ مِّنَ ٱلْمَلَٰٓئِكَةِ مُنزَلِينَ
fr: (Allah vous a bien donné la victoire) lorsque tu disais aux croyants: « Ne vous suffit-il pas que votre Seigneur vous fasse descendre en aide trois milliers d'Anges ? »
ph: 'Idh Taqūlu Lilmu'uminīna 'Alan Yakfiyakum 'An Yumiddakum Rabbukum Bithalāthati 'Ālāfin Mina Al-Malā'ikati Munzalīna

3:125
ar: بَلَىٰٓ ۚ إِن تَصْبِرُوا۟ وَتَتَّقُوا۟ وَيَأْتُوكُم مِّن فَوْرِهِمْ هَٰذَا يُمْدِدْكُمْ رَبُّكُم بِخَمْسَةِ ءَالَٰفٍۢ مِّنَ ٱلْمَلَٰٓئِكَةِ مُسَوِّمِينَ
fr: Mais oui ! Si vous êtes endurants et pieux, et qu'ils [les ennemis] vous assaillent immédiatement, votre Seigneur vous enverra en renfort cinq mille Anges marqués distinctement.
ph: Balá 'In Taşbirū Wa Tattaqū Wa Ya'tūkum Min Fawrihim Hādhā Yumdidkum Rabbukum Bikhamsati 'Ālāfin Mina Al-Malā'ikati Musawwimīna

3:126
ar: وَمَا جَعَلَهُ ٱللَّهُ إِلَّا بُشْرَىٰ لَكُمْ وَلِتَطْمَئِنَّ قُلُوبُكُم بِهِۦ ۗ وَمَا ٱلنَّصْرُ إِلَّا مِنْ عِندِ ٱللَّهِ ٱلْعَزِيزِ ٱلْحَكِيمِ
fr: Et Allah ne le fit que (pour vous annoncer) une bonne nouvelle, et pour que vos cœurs s'en rassurent. La victoire ne peut venir que d'Allah, le Puissant, le Sage;
ph: Wa Mā Ja`alahu Allāhu 'Illā Bushrá Lakum Wa Litaţma'inna Qulūbukum Bihi Wa Mā An-Naşru 'Illā Min `Indi Allāhi Al-`Azīzi Al-Ĥakīmi

3:127
ar: لِيَقْطَعَ طَرَفًۭا مِّنَ ٱلَّذِينَ كَفَرُوٓا۟ أَوْ يَكْبِتَهُمْ فَيَنقَلِبُوا۟ خَآئِبِينَ
fr: pour anéantir une partie des mécréants ou pour les humilier (par la défaite) et qu'ils en retournent donc déçus.
ph: Liyaqţa`a Ţarafāan Mina Al-Ladhīna Kafarū 'Aw Yakbitahum Fayanqalibū Khā'ibīna

3:128
ar: لَيْسَ لَكَ مِنَ ٱلْأَمْرِ شَىْءٌ أَوْ يَتُوبَ عَلَيْهِمْ أَوْ يُعَذِّبَهُمْ فَإِنَّهُمْ ظَٰلِمُونَ
fr: -Tu n'as (Muhammad) aucune part dans l'ordre (divin) -qu'Il (Allah) accepte leur repentir (en embrassant l'Islam) ou qu'Il les châtie, car ils sont bien des injustes.
ph: Laysa Laka Mina Al-'Amri Shay'un 'Aw Yatūba `Alayhim 'Aw Yu`adhibahum Fa'innahum Žālimūna

3:129
ar: وَلِلَّهِ مَا فِى ٱلسَّمَٰوَٰتِ وَمَا فِى ٱلْأَرْضِ ۚ يَغْفِرُ لِمَن يَشَآءُ وَيُعَذِّبُ مَن يَشَآءُ ۚ وَٱللَّهُ غَفُورٌۭ رَّحِيمٌۭ
fr: À Allah appartient tout ce qui est dans les cieux et sur la terre. Il pardonne à qui Il veut, et Il châtie qui Il veut... Et Allah est Pardonneur et Miséricordieux.
ph: Wa Lillahi Mā Fī As-Samāwāti Wa Mā Fī Al-'Arđi Yaghfiru Liman Yashā'u Wa Yu`adhibu Man Yashā'u Wa Allāhu Ghafūrun Raĥīmun

3:130
ar: يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ لَا تَأْكُلُوا۟ ٱلرِّبَوٰٓا۟ أَضْعَٰفًۭا مُّضَٰعَفَةًۭ ۖ وَٱتَّقُوا۟ ٱللَّهَ لَعَلَّكُمْ تُفْلِحُونَ
fr: Ô les croyants ! Ne pratiquez pas l'usure en multipliant démesurément votre capital. Et craignez Allah afin que vous réussissiez !
ph: Yā 'Ayyuhā Al-Ladhīna 'Āmanū Lā Ta'kulū Ar-Ribā 'Ađ`āfāan Muđā`afatan Wa Attaqū Allāha La`allakum Tufliĥūna

3:131
ar: وَٱتَّقُوا۟ ٱلنَّارَ ٱلَّتِىٓ أُعِدَّتْ لِلْكَٰفِرِينَ
fr: Et craignez le Feu préparé pour les mécréants.
ph: Wa Attaqū An-Nāra Allatī 'U`iddat Lilkāfirīna

3:132
ar: وَأَطِيعُوا۟ ٱللَّهَ وَٱلرَّسُولَ لَعَلَّكُمْ تُرْحَمُونَ
fr: Et obéissez à Allah et au Messager afin qu'il vous soit fait miséricorde !
ph: Wa 'Aţī`ū Allāha Wa Ar-Rasūla La`allakum Turĥamūna

3:133
ar: ۞ وَسَارِعُوٓا۟ إِلَىٰ مَغْفِرَةٍۢ مِّن رَّبِّكُمْ وَجَنَّةٍ عَرْضُهَا ٱلسَّمَٰوَٰتُ وَٱلْأَرْضُ أُعِدَّتْ لِلْمُتَّقِينَ
fr: Et concourez au pardon de votre Seigneur, et à un Jardin (paradis) large comme les cieux et la terre, préparé pour les pieux,
ph: Wa Sāri`ū 'Ilá Maghfiratin Min Rabbikum Wa Jannatin `Arđuhā As-Samāwātu Wa Al-'Arđu 'U`iddat Lilmuttaqīna

3:134
ar: ٱلَّذِينَ يُنفِقُونَ فِى ٱلسَّرَّآءِ وَٱلضَّرَّآءِ وَٱلْكَٰظِمِينَ ٱلْغَيْظَ وَٱلْعَافِينَ عَنِ ٱلنَّاسِ ۗ وَٱللَّهُ يُحِبُّ ٱلْمُحْسِنِينَ
fr: qui dépensent dans l'aisance et dans l'adversité, qui dominent leur rage et pardonnent à autrui -car Allah aime les bienfaisants -
ph: Al-Ladhīna Yunfiqūna Fī As-Sarrā'i Wa Ađ-Đarrā'i Wa Al-Kāžimīna Al-Ghayža Wa Al-`Āfīna `Ani An-Nāsi Wa Allāhu Yuĥibbu Al-Muĥsinīna

3:135
ar: وَٱلَّذِينَ إِذَا فَعَلُوا۟ فَٰحِشَةً أَوْ ظَلَمُوٓا۟ أَنفُسَهُمْ ذَكَرُوا۟ ٱللَّهَ فَٱسْتَغْفَرُوا۟ لِذُنُوبِهِمْ وَمَن يَغْفِرُ ٱلذُّنُوبَ إِلَّا ٱللَّهُ وَلَمْ يُصِرُّوا۟ عَلَىٰ مَا فَعَلُوا۟ وَهُمْ يَعْلَمُونَ
fr: et pour ceux qui, s'ils ont commis quelque turpitude ou causé quelque préjudice à leurs propres âmes (en désobéissant à Allah), se souviennent d'Allah et demandent pardon pour leurs péchés -et qui est-ce qui pardonne les péchés sinon Allah ? -et qui ne persistent pas sciemment dans le mal qu'ils ont fait.
ph: Wa Al-Ladhīna 'Idhā Fa`alū Fāĥishatan 'Aw Žalamū 'Anfusahum Dhakarū Allāha Fāstaghfarū Lidhunūbihim Wa Man Yaghfiru Adh-Dhunūba 'Illā Allāhu Wa Lam Yuşirrū `Alá Mā Fa`alū Wa Hum Ya`lamūna

3:136
ar: أُو۟لَٰٓئِكَ جَزَآؤُهُم مَّغْفِرَةٌۭ مِّن رَّبِّهِمْ وَجَنَّٰتٌۭ تَجْرِى مِن تَحْتِهَا ٱلْأَنْهَٰرُ خَٰلِدِينَ فِيهَا ۚ وَنِعْمَ أَجْرُ ٱلْعَٰمِلِينَ
fr: Ceux-là ont pour récompense le pardon de leur Seigneur, ainsi que les Jardins sous lesquels coulent les ruisseaux, pour y demeurer éternellement. Comme est beau le salaire de ceux qui font le bien !
ph: 'Ūlā'ika Jazā'uuhum Maghfiratun Min Rabbihim Wa Jannātun Tajrī Min Taĥtihā Al-'Anhāru Khālidīna Fīhā Wa Ni`ma 'Ajru Al-`Āmilīna

3:137
ar: قَدْ خَلَتْ مِن قَبْلِكُمْ سُنَنٌۭ فَسِيرُوا۟ فِى ٱلْأَرْضِ فَٱنظُرُوا۟ كَيْفَ كَانَ عَٰقِبَةُ ٱلْمُكَذِّبِينَ
fr: Avant vous, certes, beaucoup d'événements se sont passés. Or, parcourez la terre, et voyez ce qu'il est advenu de ceux qui traitaient (les prophètes) de menteurs.
ph: Qad Khalat Min Qablikum Sunanun Fasīrū Fī Al-'Arđi Fānžurū Kayfa Kāna `Āqibatu Al-Mukadhibīna

3:138
ar: هَٰذَا بَيَانٌۭ لِّلنَّاسِ وَهُدًۭى وَمَوْعِظَةٌۭ لِّلْمُتَّقِينَ
fr: Voilà un exposé pour les gens, un guide, et une exhortation pour les pieux.
ph: Hādhā Bayānun Lilnnāsi Wa Hudáan Wa Maw`ižatun Lilmuttaqīna

3:139
ar: وَلَا تَهِنُوا۟ وَلَا تَحْزَنُوا۟ وَأَنتُمُ ٱلْأَعْلَوْنَ إِن كُنتُم مُّؤْمِنِينَ
fr: Ne vous laissez pas battre, ne vous affligez pas alors que vous êtes les supérieurs, si vous êtes de vrais croyants.
ph: Wa Lā Tahinū Wa Lā Taĥzanū Wa 'Antumu Al-'A`lawna 'In Kuntum Mu'uminīna

3:140
ar: إِن يَمْسَسْكُمْ قَرْحٌۭ فَقَدْ مَسَّ ٱلْقَوْمَ قَرْحٌۭ مِّثْلُهُۥ ۚ وَتِلْكَ ٱلْأَيَّامُ نُدَاوِلُهَا بَيْنَ ٱلنَّاسِ وَلِيَعْلَمَ ٱللَّهُ ٱلَّذِينَ ءَامَنُوا۟ وَيَتَّخِذَ مِنكُمْ شُهَدَآءَ ۗ وَٱللَّهُ لَا يُحِبُّ ٱلظَّٰلِمِينَ
fr: Si une blessure vous atteint, pareille blessure atteint aussi l'ennemi. Ainsi faisons-Nous alterner les jours (bons et mauvais) parmi les gens, afin qu'Allah reconnaisse ceux qui ont cru, et qu'Il choisisse parmi vous des martyrs -et Allah n'aime pas les injustes,
ph: 'In Yamsaskum Qarĥun Faqad Massa Al-Qawma Qarĥun Mithluhu Wa Tilka Al-'Ayyāmu Nudāwiluhā Bayna An-Nāsi Wa Liya`lama Allāhu Al-Ladhīna 'Āmanū Wa Yattakhidha Minkum Shuhadā'a Wa Allāhu Lā Yuĥibbu Až-Žālimīna

3:141
ar: وَلِيُمَحِّصَ ٱللَّهُ ٱلَّذِينَ ءَامَنُوا۟ وَيَمْحَقَ ٱلْكَٰفِرِينَ
fr: et afin qu'Allah purifie ceux qui ont cru, et anéantisse les mécréants.
ph: Wa Liyumaĥĥişa Allāhu Al-Ladhīna 'Āmanū Wa Yamĥaqa Al-Kāfirīna

3:142
ar: أَمْ حَسِبْتُمْ أَن تَدْخُلُوا۟ ٱلْجَنَّةَ وَلَمَّا يَعْلَمِ ٱللَّهُ ٱلَّذِينَ جَٰهَدُوا۟ مِنكُمْ وَيَعْلَمَ ٱلصَّٰبِرِينَ
fr: Comptez-vous entrer au Paradis sans qu'Allah ne distingue parmi vous ceux qui luttent et qui sont endurants ?
ph: 'Am Ĥasibtum 'An Tadkhulū Al-Jannata Wa Lammā Ya`lami Allāhu Al-Ladhīna Jāhadū Minkum Wa Ya`lama Aş-Şābirīna

3:143
ar: وَلَقَدْ كُنتُمْ تَمَنَّوْنَ ٱلْمَوْتَ مِن قَبْلِ أَن تَلْقَوْهُ فَقَدْ رَأَيْتُمُوهُ وَأَنتُمْ تَنظُرُونَ
fr: Bien sûr, vous souhaitiez la mort avant de la rencontrer. Or vous l'avez vue, certes, tandis que vous regardiez !
ph: Wa Laqad Kuntum Tatamannawn Al-Mawta Min Qabli 'An Talqawhu Faqad Ra'aytumūhu Wa 'Antum Tanžurūna

3:144
ar: وَمَا مُحَمَّدٌ إِلَّا رَسُولٌۭ قَدْ خَلَتْ مِن قَبْلِهِ ٱلرُّسُلُ ۚ أَفَإِي۟ن مَّاتَ أَوْ قُتِلَ ٱنقَلَبْتُمْ عَلَىٰٓ أَعْقَٰبِكُمْ ۚ وَمَن يَنقَلِبْ عَلَىٰ عَقِبَيْهِ فَلَن يَضُرَّ ٱللَّهَ شَيْـًۭٔا ۗ وَسَيَجْزِى ٱللَّهُ ٱلشَّٰكِرِينَ
fr: Muhammad n'est qu'un messager -des messagers avant lui sont passés -. S'il mourait, donc, ou s'il était tué, retourneriez-vous sur vos talons ? Quiconque retourne sur ses talons ne nuira en rien à Allah; et Allah récompensera bientôt les reconnaissants.
ph: Wa Mā Muĥammadun 'Illā Rasūlun Qad Khalat Min Qablihi Ar-Rusulu 'Afa'īn Māta 'Aw Qutila Anqalabtum `Alá 'A`qābikum Wa Man Yanqalib `Alá `Aqibayhi Falan Yađurra Allāha Shay'āan Wa Sayajzī Allāhu Ash-Shākirīna

3:145
ar: وَمَا كَانَ لِنَفْسٍ أَن تَمُوتَ إِلَّا بِإِذْنِ ٱللَّهِ كِتَٰبًۭا مُّؤَجَّلًۭا ۗ وَمَن يُرِدْ ثَوَابَ ٱلدُّنْيَا نُؤْتِهِۦ مِنْهَا وَمَن يُرِدْ ثَوَابَ ٱلْءَاخِرَةِ نُؤْتِهِۦ مِنْهَا ۚ وَسَنَجْزِى ٱلشَّٰكِرِينَ
fr: Personne ne peut mourir que par la permission d'Allah, et au moment prédéterminé. Quiconque veut la récompense d'ici-bas, Nous lui en donnons. Quiconque veut la récompense de l'au-delà, Nous lui en donnons, et Nous récompenserons bientôt les reconnaissants.
ph: Wa Mā Kāna Linafsin 'An Tamūta 'Illā Bi'idhni Allāhi Kitābāan Mu'uajjalāan Wa Man Yurid Thawāba Ad-Dunyā Nu'utihi Minhā Wa Man Yurid Thawāba Al-'Ākhirati Nu'utihi Minhā Wa Sanajzī Ash-Shākirīna

3:146
ar: وَكَأَيِّن مِّن نَّبِىٍّۢ قَٰتَلَ مَعَهُۥ رِبِّيُّونَ كَثِيرٌۭ فَمَا وَهَنُوا۟ لِمَآ أَصَابَهُمْ فِى سَبِيلِ ٱللَّهِ وَمَا ضَعُفُوا۟ وَمَا ٱسْتَكَانُوا۟ ۗ وَٱللَّهُ يُحِبُّ ٱلصَّٰبِرِينَ
fr: Combien de prophètes ont combattu, en compagnie de beaucoup de disciples, ceux-ci ne fléchirent pas à cause de ce qui les atteignit dans le sentier d'Allah. Ils ne faiblirent pas et ils ne cédèrent point. Et Allah aime les endurants.
ph: Wa Ka'ayyin Min Nabīyin Qātala Ma`ahu Ribbīyūna Kathīrun Famā Wahanū Limā 'Aşābahum Fī Sabīli Allāhi Wa Mā Đa`ufū Wa Mā Astakānū Wa Allāhu Yuĥibbu Aş-Şābirīna

3:147
ar: وَمَا كَانَ قَوْلَهُمْ إِلَّآ أَن قَالُوا۟ رَبَّنَا ٱغْفِرْ لَنَا ذُنُوبَنَا وَإِسْرَافَنَا فِىٓ أَمْرِنَا وَثَبِّتْ أَقْدَامَنَا وَٱنصُرْنَا عَلَى ٱلْقَوْمِ ٱلْكَٰفِرِينَ
fr: Et ils n'eurent que cette parole: « Seigneur, pardonne-nous nos péchés ainsi que nos excès dans nos comportements, affermis nos pas et donne-nous la victoire sur les gens mécréants. »
ph: Wa Mā Kāna Qawlahum 'Illā 'An Qālū Rabbanā Aghfir Lanā Dhunūbanā Wa 'Isrāfanā Fī 'Amrinā Wa Thabbit 'Aqdāmanā Wa Anşurnā `Alá Al-Qawmi Al-Kāfirīna

3:148
ar: فَـَٔاتَىٰهُمُ ٱللَّهُ ثَوَابَ ٱلدُّنْيَا وَحُسْنَ ثَوَابِ ٱلْءَاخِرَةِ ۗ وَٱللَّهُ يُحِبُّ ٱلْمُحْسِنِينَ
fr: Allah, donc, leur donna la récompense d'ici-bas, ainsi que la belle récompense de l'au-delà. Et Allah aime les gens bienfaisants.
ph: Fa'ātāhumu Allāhu Thawāba Ad-Dunyā Wa Ĥusna Thawābi Al-'Ākhirati Wa Allāhu Yuĥibbu Al-Muĥsinīna

3:149
ar: يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوٓا۟ إِن تُطِيعُوا۟ ٱلَّذِينَ كَفَرُوا۟ يَرُدُّوكُمْ عَلَىٰٓ أَعْقَٰبِكُمْ فَتَنقَلِبُوا۟ خَٰسِرِينَ
fr: Ô les croyants ! Si vous obéissez à ceux qui ne croient pas, ils vous feront retourner en arrière. Et vous reviendrez perdants.
ph: Yā 'Ayyuhā Al-Ladhīna 'Āmanū 'In Tuţī`ū Al-Ladhīna Kafarū Yaruddūkum `Alá 'A`qābikum Fatanqalibū Khāsirīna

3:150
ar: بَلِ ٱللَّهُ مَوْلَىٰكُمْ ۖ وَهُوَ خَيْرُ ٱلنَّٰصِرِينَ
fr: Mais c'est Allah votre Maître. Il est le meilleur des secoureurs.
ph: Bali Allāhu Mawlākum Wa Huwa Khayru An-Nāşirīna

3:151
ar: سَنُلْقِى فِى قُلُوبِ ٱلَّذِينَ كَفَرُوا۟ ٱلرُّعْبَ بِمَآ أَشْرَكُوا۟ بِٱللَّهِ مَا لَمْ يُنَزِّلْ بِهِۦ سُلْطَٰنًۭا ۖ وَمَأْوَىٰهُمُ ٱلنَّارُ ۚ وَبِئْسَ مَثْوَى ٱلظَّٰلِمِينَ
fr: Nous allons jeter l'effroi dans les cœurs des mécréants. Car ils ont associé à Allah (des idoles) sans aucune preuve descendue de Sa part. Le Feu sera leur refuge. Quel mauvais séjour, que celui des injustes !
ph: Sanulqī Fī Qulūbi Al-Ladhīna Kafarū Ar-Ru`ba Bimā 'Ashrakū Billāhi Mā Lam Yunazzil Bihi Sulţānāan Wa Ma'wāhumu An-Nāru Wa Bi'sa Mathwá Až-Žālimīna

3:152
ar: وَلَقَدْ صَدَقَكُمُ ٱللَّهُ وَعْدَهُۥٓ إِذْ تَحُسُّونَهُم بِإِذْنِهِۦ ۖ حَتَّىٰٓ إِذَا فَشِلْتُمْ وَتَنَٰزَعْتُمْ فِى ٱلْأَمْرِ وَعَصَيْتُم مِّنۢ بَعْدِ مَآ أَرَىٰكُم مَّا تُحِبُّونَ ۚ مِنكُم مَّن يُرِيدُ ٱلدُّنْيَا وَمِنكُم مَّن يُرِيدُ ٱلْءَاخِرَةَ ۚ ثُمَّ صَرَفَكُمْ عَنْهُمْ لِيَبْتَلِيَكُمْ ۖ وَلَقَدْ عَفَا عَنكُمْ ۗ وَٱللَّهُ ذُو فَضْلٍ عَلَى ٱلْمُؤْمِنِينَ
fr: Et certes, Allah a tenu Sa promesse envers vous, quand par Sa permission vous les tuiez sans relâche, jusqu'au moment où vous avez fléchi, où vous vous êtes disputés à propos de l'ordre donné, et vous avez désobéi après qu'Il vous eut montré (la victoire) que vous aimez ! Il en était parmi vous qui désiraient la vie d'ici-bas et il en était parmi vous qui désiraient l'au-delà. Puis Il vous a fait reculer devant eux, afin de vous éprouver. Et certes Il vous a pardonné. Et Allah est Détenteur de la grâce envers les croyants.
ph: Wa Laqad Şadaqakumu Allāhu Wa`dahu 'Idh Taĥussūnahum Bi'idhnihi Ĥattá 'Idhā Fashiltum Wa Tanāza`tum Fī Al-'Amri Wa `Aşaytum Min Ba`di Mā 'Arākum Mā Tuĥibbūna Minkum Man Yurīdu Ad-Dunyā Wa Minkum Man Yurīdu Al-'Ākhirata Thumma Şarafakum `Anhum Liyabtaliyakum Wa Laqad `Afā `Ankum Wa Allāhu Dhū Fađlin `Alá Al-Mu'uminīna

3:153
ar: ۞ إِذْ تُصْعِدُونَ وَلَا تَلْوُۥنَ عَلَىٰٓ أَحَدٍۢ وَٱلرَّسُولُ يَدْعُوكُمْ فِىٓ أُخْرَىٰكُمْ فَأَثَٰبَكُمْ غَمًّۢا بِغَمٍّۢ لِّكَيْلَا تَحْزَنُوا۟ عَلَىٰ مَا فَاتَكُمْ وَلَا مَآ أَصَٰبَكُمْ ۗ وَٱللَّهُ خَبِيرٌۢ بِمَا تَعْمَلُونَ
fr: (Rappelez-vous) quand vous fuyiez sans vous retourner vers personne, cependant que, derrière vous, le Messager vous appelait. Alors Il vous infligea angoisse sur angoisse, afin que vous n'ayez pas de chagrin pour ce qui vous a échappé ni pour les revers que vous avez subis. Et Allah est Parfaitement Connaisseur de ce que vous faites.
ph: 'Idh Tuş`idūna Wa Lā Talwūna `Alá 'Aĥadin Wa Ar-Rasūlu Yad`ūkum Fī 'Ukhrākum Fa'athābakum Ghammāan Bighammin Likaylā Taĥzanū `Alá Mā Fātakum Wa Lā Mā 'Aşābakum Wa Allāhu Khabīrun Bimā Ta`malūna

3:154
ar: ثُمَّ أَنزَلَ عَلَيْكُم مِّنۢ بَعْدِ ٱلْغَمِّ أَمَنَةًۭ نُّعَاسًۭا يَغْشَىٰ طَآئِفَةًۭ مِّنكُمْ ۖ وَطَآئِفَةٌۭ قَدْ أَهَمَّتْهُمْ أَنفُسُهُمْ يَظُنُّونَ بِٱللَّهِ غَيْرَ ٱلْحَقِّ ظَنَّ ٱلْجَٰهِلِيَّةِ ۖ يَقُولُونَ هَل لَّنَا مِنَ ٱلْأَمْرِ مِن شَىْءٍۢ ۗ قُلْ إِنَّ ٱلْأَمْرَ كُلَّهُۥ لِلَّهِ ۗ يُخْفُونَ فِىٓ أَنفُسِهِم مَّا لَا يُبْدُونَ لَكَ ۖ يَقُولُونَ لَوْ كَانَ لَنَا مِنَ ٱلْأَمْرِ شَىْءٌۭ مَّا قُتِلْنَا هَٰهُنَا ۗ قُل لَّوْ كُنتُمْ فِى بُيُوتِكُمْ لَبَرَزَ ٱلَّذِينَ كُتِبَ عَلَيْهِمُ ٱلْقَتْلُ إِلَىٰ مَضَاجِعِهِمْ ۖ وَلِيَبْتَلِىَ ٱللَّهُ مَا فِى صُدُورِكُمْ وَلِيُمَحِّصَ مَا فِى قُلُوبِكُمْ ۗ وَٱللَّهُ عَلِيمٌۢ بِذَاتِ ٱلصُّدُورِ
fr: Puis Il fit descendre sur vous, après l'angoisse, la tranquillité, un sommeil qui enveloppa une partie d'entre vous, tandis qu'une autre partie était soucieuse pour elle-même et avait des pensées sur Allah non conformes à la vérité, des pensées dignes de l'époque de l'Ignorance. -Ils disaient: « Est-ce que nous avons une part dans cette affaire ? » Dis: « L'affaire toute entière est à Allah. » Ce qu'ils ne te révèlent pas, ils le cachent en eux-mêmes: « Si nous avions eu un choix quelconque dans cette affaire, disent-ils, nous n'aurions pas été tués ici. » Dis: « Eussiez-vous été dans vos maisons, ceux pour qui la mort était décrétée seraient sortis pour l'endroit où la mort les attendait. Ceci afin qu'Allah éprouve ce que vous avez dans vos poitrines, et qu'Il purifie ce que vous avez dans vos cœurs. Et Allah connaît ce qu'il y a dans les cœurs.
ph: Thumma 'Anzala `Alaykum Min Ba`di Al-Ghammi 'Amanatan Nu`āsāan Yaghshá Ţā'ifatan Minkum Wa Ţā'ifatun Qad 'Ahammat/hum 'Anfusuhum Yažunnūna Billāhi Ghayra Al-Ĥaqqi Žanna Al-Jāhilīyati Yaqūlūna Hal Lanā Mina Al-'Amri Min Shay'in Qul 'Inna Al-'Amra Kullahu Lillāhi Yukhfūna Fī 'Anfusihim Mā Lā Yubdūna Laka Yaqūlūna Law Kāna Lanā Mina Al-'Amri Shay'un Mā Qutilnā Hāhunā Qul Law Kuntum Fī Buyūtikum Labaraza Al-Ladhīna Kutiba `Alayhimu Al-Qatlu 'Ilá Mađāji`ihim Wa Liyabtaliya Allāhu Mā Fī Şudūrikum Wa Liyumaĥĥişa Mā Fī Qulūbikum Wa Allāhu `Alīmun Bidhāti Aş-Şudūri

3:155
ar: إِنَّ ٱلَّذِينَ تَوَلَّوْا۟ مِنكُمْ يَوْمَ ٱلْتَقَى ٱلْجَمْعَانِ إِنَّمَا ٱسْتَزَلَّهُمُ ٱلشَّيْطَٰنُ بِبَعْضِ مَا كَسَبُوا۟ ۖ وَلَقَدْ عَفَا ٱللَّهُ عَنْهُمْ ۗ إِنَّ ٱللَّهَ غَفُورٌ حَلِيمٌۭ
fr: Ceux d'entre vous qui ont tourné le dos, le jour où les deux armées se rencontrèrent, c'est seulement le Diable qui les a fait broncher, à cause d'une partie de leurs (mauvaises) actions. Mais, certes, Allah leur a pardonné. Car vraiment Allah est Pardonneur et Indulgent !
ph: 'Inna Al-Ladhīna Tawallaw Minkum Yawma At-Taqá Al-Jam`āni 'Innamā Astazallahumu Ash-Shayţānu Biba`đi Mā Kasabū Wa Laqad `Afā Allāhu `Anhum 'Inna Allāha Ghafūrun Ĥalīmun

3:156
ar: يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ لَا تَكُونُوا۟ كَٱلَّذِينَ كَفَرُوا۟ وَقَالُوا۟ لِإِخْوَٰنِهِمْ إِذَا ضَرَبُوا۟ فِى ٱلْأَرْضِ أَوْ كَانُوا۟ غُزًّۭى لَّوْ كَانُوا۟ عِندَنَا مَا مَاتُوا۟ وَمَا قُتِلُوا۟ لِيَجْعَلَ ٱللَّهُ ذَٰلِكَ حَسْرَةًۭ فِى قُلُوبِهِمْ ۗ وَٱللَّهُ يُحْىِۦ وَيُمِيتُ ۗ وَٱللَّهُ بِمَا تَعْمَلُونَ بَصِيرٌۭ
fr: Ô les croyants ! Ne soyez pas comme ces mécréants qui dirent à propos de leurs frères partis en voyage ou pour combattre: « S'ils étaient chez nous, ils ne seraient pas morts, et ils n'auraient pas été tués. » Allah en fit un sujet de regret dans leurs cœurs. C'est Allah qui donne la vie et la mort. Et Allah observe bien ce que vous faites.
ph: Yā 'Ayyuhā Al-Ladhīna 'Āmanū Lā Takūnū Kālladhīna Kafarū Wa Qālū Li'khwānihim 'Idhā Đarabū Fī Al-'Arđi 'Aw Kānū Ghuzzáan Law Kānū `Indanā Mā Mātū Wa Mā Qutilū Liyaj`ala Allāhu Dhālika Ĥasratan Fī Qulūbihim Wa Allāhu Yuĥyī Wa Yumītu Wa Allāhu Bimā Ta`malūna Başīrun

3:157
ar: وَلَئِن قُتِلْتُمْ فِى سَبِيلِ ٱللَّهِ أَوْ مُتُّمْ لَمَغْفِرَةٌۭ مِّنَ ٱللَّهِ وَرَحْمَةٌ خَيْرٌۭ مِّمَّا يَجْمَعُونَ
fr: Et si vous êtes tués dans le sentier d'Allah ou si vous mourez, un pardon de la part d'Allah et une miséricorde valent mieux que ce qu'ils amassent.
ph: Wa La'in Qutiltum Fī Sabīli Allāhi 'Aw Muttum Lamaghfiratun Mina Allāhi Wa Raĥmatun Khayrun Mimmā Yajma`ūna

3:158
ar: وَلَئِن مُّتُّمْ أَوْ قُتِلْتُمْ لَإِلَى ٱللَّهِ تُحْشَرُونَ
fr: Que vous mouriez ou que vous soyez tués, c'est vers Allah que vous serez rassemblés.
ph: Wa La'in Muttum 'Aw Qutiltum La'ilá Allāhi Tuĥsharūna

3:159
ar: فَبِمَا رَحْمَةٍۢ مِّنَ ٱللَّهِ لِنتَ لَهُمْ ۖ وَلَوْ كُنتَ فَظًّا غَلِيظَ ٱلْقَلْبِ لَٱنفَضُّوا۟ مِنْ حَوْلِكَ ۖ فَٱعْفُ عَنْهُمْ وَٱسْتَغْفِرْ لَهُمْ وَشَاوِرْهُمْ فِى ٱلْأَمْرِ ۖ فَإِذَا عَزَمْتَ فَتَوَكَّلْ عَلَى ٱللَّهِ ۚ إِنَّ ٱللَّهَ يُحِبُّ ٱلْمُتَوَكِّلِينَ
fr: C'est par quelque miséricorde de la part d'Allah que tu (Muhammad) as été si doux envers eux ! Mais si tu étais rude, au cœur dur, ils se seraient enfuis de ton entourage. Pardonne-leur donc, et implore pour eux le pardon (d'Allah). Et consulte-les à propos des affaires; puis une fois que tu t'es décidé, confie-toi donc à Allah, Allah aime, en vérité, ceux qui Lui font confiance.
ph: Fabimā Raĥmatin Mina Allāhi Linta Lahum Wa Law Kunta Fažžāan Ghalīža Al-Qalbi Lānfađđū Min Ĥawlika Fā`fu `Anhum Wa Astaghfir Lahum Wa Shāwirhum Fī Al-'Amri Fa'idhā `Azamta Fatawakkal `Alá Allāhi 'Inna Allāha Yuĥibbu Al-Mutawakkilīna

3:160
ar: إِن يَنصُرْكُمُ ٱللَّهُ فَلَا غَالِبَ لَكُمْ ۖ وَإِن يَخْذُلْكُمْ فَمَن ذَا ٱلَّذِى يَنصُرُكُم مِّنۢ بَعْدِهِۦ ۗ وَعَلَى ٱللَّهِ فَلْيَتَوَكَّلِ ٱلْمُؤْمِنُونَ
fr: Si Allah vous donne Son secours, nul ne peut vous vaincre. S'Il vous abandonne, qui donc après Lui vous donnera secours ? C'est à Allah que les croyants doivent faire confiance.
ph: 'In Yanşurkumu Allāhu Falā Ghāliba Lakum Wa 'In Yakhdhulkum Faman Dhā Al-Ladhī Yanşurukum Min Ba`dihi Wa `Alá Allāhi Falyatawakkali Al-Mu'uminūna

3:161
ar: وَمَا كَانَ لِنَبِىٍّ أَن يَغُلَّ ۚ وَمَن يَغْلُلْ يَأْتِ بِمَا غَلَّ يَوْمَ ٱلْقِيَٰمَةِ ۚ ثُمَّ تُوَفَّىٰ كُلُّ نَفْسٍۢ مَّا كَسَبَتْ وَهُمْ لَا يُظْلَمُونَ
fr: Un prophète n'est pas quelqu'un à s'approprier du butin. Quiconque s'en approprie, viendra avec ce qu'il se sera approprié le Jour de la Résurrection. Alors, à chaque individu on rétribuera pleinement ce qu'il aura acquis. Et ils ne seront point lésés.
ph: Wa Mā Kāna Linabīyin 'An Yaghulla Wa Man Yaghlul Ya'ti Bimā Ghalla Yawma Al-Qiyāmati Thumma Tuwaffá Kullu Nafsin Mā Kasabat Wa Hum Lā Yužlamūna

3:162
ar: أَفَمَنِ ٱتَّبَعَ رِضْوَٰنَ ٱللَّهِ كَمَنۢ بَآءَ بِسَخَطٍۢ مِّنَ ٱللَّهِ وَمَأْوَىٰهُ جَهَنَّمُ ۚ وَبِئْسَ ٱلْمَصِيرُ
fr: Est-ce que celui qui se conforme à l'agrément d'Allah ressemble à celui qui encourt le courroux d'Allah ? Son refuge sera l'Enfer; et quelle mauvaise destination !
ph: 'Afamani Attaba`a Riđwāna Allāhi Kaman Bā'a Bisakhaţin Mina Allāhi Wa Ma'wāhu Jahannamu Wa Bi'sa Al-Maşīru

3:163
ar: هُمْ دَرَجَٰتٌ عِندَ ٱللَّهِ ۗ وَٱللَّهُ بَصِيرٌۢ بِمَا يَعْمَلُونَ
fr: Ils ont des grades (différents) auprès d'Allah et Allah observe bien ce qu'ils font.
ph: Hum Darajātun `Inda Allāhi Wa Allāhu Başīrun Bimā Ya`malūna

3:164
ar: لَقَدْ مَنَّ ٱللَّهُ عَلَى ٱلْمُؤْمِنِينَ إِذْ بَعَثَ فِيهِمْ رَسُولًۭا مِّنْ أَنفُسِهِمْ يَتْلُوا۟ عَلَيْهِمْ ءَايَٰتِهِۦ وَيُزَكِّيهِمْ وَيُعَلِّمُهُمُ ٱلْكِتَٰبَ وَٱلْحِكْمَةَ وَإِن كَانُوا۟ مِن قَبْلُ لَفِى ضَلَٰلٍۢ مُّبِينٍ
fr: Allah a très certainement fait une faveur aux croyants lorsqu'Il a envoyé chez eux un messager de parmi eux-mêmes, qui leur récite Ses versets, les purifie et leur enseigne le Livre et la Sagesse, bien qu'ils fussent auparavant dans un égarement évident.
ph: Laqad Manna Allāhu `Alá Al-Mu'uminīna 'Idh Ba`atha Fīhim Rasūlāan Min 'Anfusihim Yatlū `Alayhim 'Āyātihi Wa Yuzakkīhim Wa Yu`allimuhumu Al-Kitāba Wa Al-Ĥikmata Wa 'In Kānū Min Qablu Lafī Đalālin Mubīnin

3:165
ar: أَوَلَمَّآ أَصَٰبَتْكُم مُّصِيبَةٌۭ قَدْ أَصَبْتُم مِّثْلَيْهَا قُلْتُمْ أَنَّىٰ هَٰذَا ۖ قُلْ هُوَ مِنْ عِندِ أَنفُسِكُمْ ۗ إِنَّ ٱللَّهَ عَلَىٰ كُلِّ شَىْءٍۢ قَدِيرٌۭ
fr: Quoi ! Quand un malheur vous atteint -mais vous en avez jadis infligé le double -vous dites: « D'où vient cela ? » Réponds-leur: « Il vient de vous-mêmes. » Certes Allah est Omnipotent.
ph: 'Awalammā 'Aşābatkum Muşībatun Qad 'Aşabtum Mithlayhā Qultum 'Anná Hādhā Qul Huwa Min `Indi 'Anfusikum 'Inna Allāha `Alá Kulli Shay'in Qadīrun

3:166
ar: وَمَآ أَصَٰبَكُمْ يَوْمَ ٱلْتَقَى ٱلْجَمْعَانِ فَبِإِذْنِ ٱللَّهِ وَلِيَعْلَمَ ٱلْمُؤْمِنِينَ
fr: Et tout ce que vous avez subi, le jour où les deux troupes se rencontrèrent, c'est par permission d'Allah, et afin qu'Il distingue les croyants,
ph: Wa Mā 'Aşābakum Yawma At-Taqá Al-Jam`āni Fabi'idhni Allāhi Wa Liya`lama Al-Mu'uminīna

3:167
ar: وَلِيَعْلَمَ ٱلَّذِينَ نَافَقُوا۟ ۚ وَقِيلَ لَهُمْ تَعَالَوْا۟ قَٰتِلُوا۟ فِى سَبِيلِ ٱللَّهِ أَوِ ٱدْفَعُوا۟ ۖ قَالُوا۟ لَوْ نَعْلَمُ قِتَالًۭا لَّٱتَّبَعْنَٰكُمْ ۗ هُمْ لِلْكُفْرِ يَوْمَئِذٍ أَقْرَبُ مِنْهُمْ لِلْإِيمَٰنِ ۚ يَقُولُونَ بِأَفْوَٰهِهِم مَّا لَيْسَ فِى قُلُوبِهِمْ ۗ وَٱللَّهُ أَعْلَمُ بِمَا يَكْتُمُونَ
fr: et qu'Il distingue les hypocrites. On avait dit à ceux-ci: « Venez combattre dans le sentier d'Allah, ou repoussez [l'ennemi] », ils dirent: « Bien sûr que nous vous suivrions si nous étions sûrs qu'il y aurait une guerre. » Ils étaient, ce jour-là, plus près de la mécréance que de la foi. Ils disaient de leurs bouches ce qui n'était pas dans leurs cœurs. Et Allah sait fort bien ce qu'ils cachaient.
ph: Wa Liya`lama Al-Ladhīna Nāfaqū Wa Qīla Lahum Ta`ālaw Qātilū Fī Sabīli Allāhi 'Aw Adfa`ū Qālū Law Na`lamu Qitālāan Lāttaba`nākum Hum Lilkufri Yawma'idhin 'Aqrabu Minhum Lil'īmāni Yaqūlūna Bi'afwhihim Mā Laysa Fī Qulūbihim Wa Allāhu 'A`lamu Bimā Yaktumūna

3:168
ar: ٱلَّذِينَ قَالُوا۟ لِإِخْوَٰنِهِمْ وَقَعَدُوا۟ لَوْ أَطَاعُونَا مَا قُتِلُوا۟ ۗ قُلْ فَٱدْرَءُوا۟ عَنْ أَنفُسِكُمُ ٱلْمَوْتَ إِن كُنتُمْ صَٰدِقِينَ
fr: Ceux qui sont restés dans leurs foyers dirent à leurs frères: « S'ils nous avaient obéi, ils n'auraient pas été tués. » Dis: « Ecartez donc de vous la mort, si vous êtes véridiques. »
ph: Al-Ladhīna Qālū Li'khwānihim Wa Qa`adū Law 'Aţā`ūnā Mā Qutilū Qul Fādra'ū `An 'Anfusikumu Al-Mawta 'In Kuntum Şādiqīna

3:169
ar: وَلَا تَحْسَبَنَّ ٱلَّذِينَ قُتِلُوا۟ فِى سَبِيلِ ٱللَّهِ أَمْوَٰتًۢا ۚ بَلْ أَحْيَآءٌ عِندَ رَبِّهِمْ يُرْزَقُونَ
fr: Ne pense pas que ceux qui ont été tués dans le sentier d'Allah, soient morts. Au contraire, ils sont vivants, auprès de leur Seigneur, bien pourvus
ph: Wa Lā Taĥsabanna Al-Ladhīna Qutilū Fī Sabīli Allāhi 'Amwātāan Bal 'Aĥyā'un `Inda Rabbihim Yurzaqūna

3:170
ar: فَرِحِينَ بِمَآ ءَاتَىٰهُمُ ٱللَّهُ مِن فَضْلِهِۦ وَيَسْتَبْشِرُونَ بِٱلَّذِينَ لَمْ يَلْحَقُوا۟ بِهِم مِّنْ خَلْفِهِمْ أَلَّا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُونَ
fr: et joyeux de la faveur qu'Allah leur a accordée, et ravis que ceux qui sont restés derrière eux et ne les ont pas encore rejoints, ne connaîtront aucune crainte et ne seront point affligés.
ph: Fariĥīna Bimā 'Ātāhumu Allāhu Min Fađlihi Wa Yastabshirūna Bial-Ladhīna Lam Yalĥaqū Bihim Min Khalfihim 'Allā Khawfun `Alayhim Wa Lā Hum Yaĥzanūna

3:171
ar: ۞ يَسْتَبْشِرُونَ بِنِعْمَةٍۢ مِّنَ ٱللَّهِ وَفَضْلٍۢ وَأَنَّ ٱللَّهَ لَا يُضِيعُ أَجْرَ ٱلْمُؤْمِنِينَ
fr: Ils sont ravis d'un bienfait d'Allah et d'une faveur, et du fait qu'Allah ne laisse pas perdre la récompense des croyants.
ph: Yastabshirūna Bini`matin Mina Allāhi Wa Fađlin Wa 'Anna Allāha Lā Yuđī`u 'Ajra Al-Mu'uminīna

3:172
ar: ٱلَّذِينَ ٱسْتَجَابُوا۟ لِلَّهِ وَٱلرَّسُولِ مِنۢ بَعْدِ مَآ أَصَابَهُمُ ٱلْقَرْحُ ۚ لِلَّذِينَ أَحْسَنُوا۟ مِنْهُمْ وَٱتَّقَوْا۟ أَجْرٌ عَظِيمٌ
fr: Ceux qui, quoiqu'atteints de blessure, répondirent à l'appel d'Allah et du Messager, il y aura une énorme récompense pour ceux d'entre eux qui ont agi en bien et pratiqué la piété.
ph: Al-Ladhīna Astajābū Lillāhi Wa Ar-Rasūli Min Ba`di Mā 'Aşābahumu Al-Qarĥu Lilladhīna 'Aĥsanū Minhum Wa Attaqaw 'Ajrun `Ažīmun

3:173
ar: ٱلَّذِينَ قَالَ لَهُمُ ٱلنَّاسُ إِنَّ ٱلنَّاسَ قَدْ جَمَعُوا۟ لَكُمْ فَٱخْشَوْهُمْ فَزَادَهُمْ إِيمَٰنًۭا وَقَالُوا۟ حَسْبُنَا ٱللَّهُ وَنِعْمَ ٱلْوَكِيلُ
fr: Certes ceux auxquels l'on disait: « Les gens se sont rassemblés contre vous; craignez-les » -cela accrut leur foi -et ils dirent: « Allah nous suffit; Il est notre meilleur garant. »
ph: Al-Ladhīna Qāla Lahumu An-Nāsu 'Inna An-Nāsa Qad Jama`ū Lakum Fākhshawhum Fazādahum 'Īmānāan Wa Qālū Ĥasbunā Allāhu Wa Ni`ma Al-Wakīlu

3:174
ar: فَٱنقَلَبُوا۟ بِنِعْمَةٍۢ مِّنَ ٱللَّهِ وَفَضْلٍۢ لَّمْ يَمْسَسْهُمْ سُوٓءٌۭ وَٱتَّبَعُوا۟ رِضْوَٰنَ ٱللَّهِ ۗ وَٱللَّهُ ذُو فَضْلٍ عَظِيمٍ
fr: Ils revinrent donc avec un bienfait de la part d'Allah et une grâce. Nul mal ne les toucha et ils suivirent ce qui satisfait Allah. Et Allah est Détenteur d'une grâce immense.
ph: Fānqalabū Bini`matin Mina Allāhi Wa Fađlin Lam Yamsas/hum Sū'un Wa Attaba`ū Riđwāna Allāhi Wa Allāhu Dhū Fađlin `Ažīmin

3:175
ar: إِنَّمَا ذَٰلِكُمُ ٱلشَّيْطَٰنُ يُخَوِّفُ أَوْلِيَآءَهُۥ فَلَا تَخَافُوهُمْ وَخَافُونِ إِن كُنتُم مُّؤْمِنِينَ
fr: C'est le Diable qui vous fait peur de ses adhérents. N'ayez donc pas peur d'eux. Mais ayez peur de Moi, si vous êtes croyants.
ph: 'Innamā Dhalikumu Ash-Shayţānu Yukhawwifu 'Awliyā'ahu Falā Takhāfūhum Wa Khāfūni 'In Kuntum Mu'uminīna

3:176
ar: وَلَا يَحْزُنكَ ٱلَّذِينَ يُسَٰرِعُونَ فِى ٱلْكُفْرِ ۚ إِنَّهُمْ لَن يَضُرُّوا۟ ٱللَّهَ شَيْـًۭٔا ۗ يُرِيدُ ٱللَّهُ أَلَّا يَجْعَلَ لَهُمْ حَظًّۭا فِى ٱلْءَاخِرَةِ ۖ وَلَهُمْ عَذَابٌ عَظِيمٌ
fr: N'aie (Ô Muhammad) aucun chagrin pour ceux qui se jettent rapidement dans la mécréance. En vérité, ils ne nuiront en rien à Allah. Allah tient à ne leur assigner aucune part de biens dans l'au-delà. Et pour eux il y aura un énorme châtiment.
ph: Wa Lā Yaĥzunka Al-Ladhīna Yusāri`ūna Fī Al-Kufri 'Innahum Lan Yađurrū Allāha Shay'āan Yurīdu Allāhu 'Allā Yaj`ala Lahum Ĥažžāan Fī Al-'Ākhirati Wa Lahum `Adhābun `Ažīmun

3:177
ar: إِنَّ ٱلَّذِينَ ٱشْتَرَوُا۟ ٱلْكُفْرَ بِٱلْإِيمَٰنِ لَن يَضُرُّوا۟ ٱللَّهَ شَيْـًۭٔا وَلَهُمْ عَذَابٌ أَلِيمٌۭ
fr: Ceux qui auront troqué la croyance contre la mécréance ne nuiront en rien à Allah. Et pour eux un châtiment douloureux.
ph: 'Inna Al-Ladhīna Ashtaraw Al-Kufra Bil-'Īmāni Lan Yađurrū Allāha Shay'āan Wa Lahum `Adhābun 'Alīmun

3:178
ar: وَلَا يَحْسَبَنَّ ٱلَّذِينَ كَفَرُوٓا۟ أَنَّمَا نُمْلِى لَهُمْ خَيْرٌۭ لِّأَنفُسِهِمْ ۚ إِنَّمَا نُمْلِى لَهُمْ لِيَزْدَادُوٓا۟ إِثْمًۭا ۚ وَلَهُمْ عَذَابٌۭ مُّهِينٌۭ
fr: Que ceux qui n'ont pas cru ne comptent pas que ce délai que Nous leur accordons soit à leur avantage. Si Nous leur accordons un délai, c'est seulement pour qu'ils augmentent leurs péchés. Et pour eux un châtiment avilissant.
ph: Wa Lā Yaĥsabanna Al-Ladhīna Kafarū 'Annamā Numlī Lahum Khayrun Li'anfusihim 'Innamā Numlī Lahum Liyazdādū 'Ithmāan Wa Lahum `Adhābun Muhīnun

3:179
ar: مَّا كَانَ ٱللَّهُ لِيَذَرَ ٱلْمُؤْمِنِينَ عَلَىٰ مَآ أَنتُمْ عَلَيْهِ حَتَّىٰ يَمِيزَ ٱلْخَبِيثَ مِنَ ٱلطَّيِّبِ ۗ وَمَا كَانَ ٱللَّهُ لِيُطْلِعَكُمْ عَلَى ٱلْغَيْبِ وَلَٰكِنَّ ٱللَّهَ يَجْتَبِى مِن رُّسُلِهِۦ مَن يَشَآءُ ۖ فَـَٔامِنُوا۟ بِٱللَّهِ وَرُسُلِهِۦ ۚ وَإِن تُؤْمِنُوا۟ وَتَتَّقُوا۟ فَلَكُمْ أَجْرٌ عَظِيمٌۭ
fr: Allah n'est point tel qu'Il laisse les croyants dans l'état où vous êtes jusqu'à ce qu'Il distingue le mauvais du bon. Et Allah n'est point tel qu'Il vous dévoile l'Inconnaissable. Mais Allah choisit parmi Ses messagers qui Il veut. Croyez donc en Allah et en Ses messagers. Et si vous avez la foi et la piété, vous aurez alors une récompense énorme.
ph: Mā Kāna Allāhu Liyadhara Al-Mu'uminīna `Alá Mā 'Antum `Alayhi Ĥattá Yamīza Al-Khabītha Mina Aţ-Ţayyibi Wa Mā Kāna Allāhu Liyuţli`akum `Alá Al-Ghaybi Wa Lakinna Allāha Yajtabī Min Rusulihi Man Yashā'u Fa'āminū Billāhi Wa Rusulihi Wa 'In Tu'uminū Wa Tattaqū Falakum 'Ajrun `Ažīmun

3:180
ar: وَلَا يَحْسَبَنَّ ٱلَّذِينَ يَبْخَلُونَ بِمَآ ءَاتَىٰهُمُ ٱللَّهُ مِن فَضْلِهِۦ هُوَ خَيْرًۭا لَّهُم ۖ بَلْ هُوَ شَرٌّۭ لَّهُمْ ۖ سَيُطَوَّقُونَ مَا بَخِلُوا۟ بِهِۦ يَوْمَ ٱلْقِيَٰمَةِ ۗ وَلِلَّهِ مِيرَٰثُ ٱلسَّمَٰوَٰتِ وَٱلْأَرْضِ ۗ وَٱللَّهُ بِمَا تَعْمَلُونَ خَبِيرٌۭ
fr: Que ceux qui gardent avec avarice ce qu'Allah leur donne par Sa grâce, ne comptent point cela comme bon pour eux. Au contraire, c'est mauvais pour eux: au Jour de la Résurrection, on leur attachera autour du cou ce qu'ils ont gardé avec avarice. C'est Allah qui a l'héritage des cieux et de la terre. Et Allah est Parfaitement Connaisseur de ce que vous faites.
ph: Wa Lā Yaĥsabanna Al-Ladhīna Yabkhalūna Bimā 'Ātāhumu Allāhu Min Fađlihi Huwa Khayrāan Lahum Bal Huwa Sharrun Lahum Sayuţawwaqūna Mā Bakhilū Bihi Yawma Al-Qiyāmati Wa Lillahi Mīrāthu As-Samāwāti Wa Al-'Arđi Wa Allāhu Bimā Ta`malūna Khabīrun

3:181
ar: لَّقَدْ سَمِعَ ٱللَّهُ قَوْلَ ٱلَّذِينَ قَالُوٓا۟ إِنَّ ٱللَّهَ فَقِيرٌۭ وَنَحْنُ أَغْنِيَآءُ ۘ سَنَكْتُبُ مَا قَالُوا۟ وَقَتْلَهُمُ ٱلْأَنۢبِيَآءَ بِغَيْرِ حَقٍّۢ وَنَقُولُ ذُوقُوا۟ عَذَابَ ٱلْحَرِيقِ
fr: Allah a certainement entendu la parole de ceux qui ont dit: « Allah est pauvre et nous sommes riches. » Nous enregistrons leur parole, ainsi que leur meurtre, sans droit, des prophètes. Et Nous leur dirons: « Goûtez au châtiment de la fournaise.
ph: Laqad Sami`a Allāhu Qawla Al-Ladhīna Qālū 'Inna Allāha Faqīrun Wa Naĥnu 'Aghniyā'u Sanaktubu Mā Qālū Wa Qatlahumu Al-'Anbiyā'a Bighayri Ĥaqqin Wa Naqūlu Dhūqū `Adhāba Al-Ĥarīqi

3:182
ar: ذَٰلِكَ بِمَا قَدَّمَتْ أَيْدِيكُمْ وَأَنَّ ٱللَّهَ لَيْسَ بِظَلَّامٍۢ لِّلْعَبِيدِ
fr: Cela, à cause de ce que vos mains ont accompli (antérieurement) ! » Car Allah ne fait point de tort aux serviteurs.
ph: Dhālika Bimā Qaddamat 'Aydīkum Wa 'Anna Allāha Laysa Bižallāmin Lil`abīdi

3:183
ar: ٱلَّذِينَ قَالُوٓا۟ إِنَّ ٱللَّهَ عَهِدَ إِلَيْنَآ أَلَّا نُؤْمِنَ لِرَسُولٍ حَتَّىٰ يَأْتِيَنَا بِقُرْبَانٍۢ تَأْكُلُهُ ٱلنَّارُ ۗ قُلْ قَدْ جَآءَكُمْ رُسُلٌۭ مِّن قَبْلِى بِٱلْبَيِّنَٰتِ وَبِٱلَّذِى قُلْتُمْ فَلِمَ قَتَلْتُمُوهُمْ إِن كُنتُمْ صَٰدِقِينَ
fr: Ceux-là mêmes qui ont dit: « Vraiment Allah nous a enjoint de ne pas croire en un messager tant qu'Il ne nous a pas apporté une offrande que le feu consume. » -Dis: « Des messagers avant moi vous sont, certes, venus avec des preuves, et avec ce que vous avez dit [demandé]. Pourquoi donc les avez-vous tués, si vous êtes véridiques ? »
ph: Al-Ladhīna Qālū 'Inna Allāha `Ahida 'Ilaynā 'Allā Nu'umina Lirasūlin Ĥattá Ya'tiyanā Biqurbānin Ta'kuluhu An-Nāru Qul Qad Jā'akum Rusulun Min Qablī Bil-Bayyināti Wa Bial-Ladhī Qultum Falima Qataltumūhum 'In Kuntum Şādiqīna

3:184
ar: فَإِن كَذَّبُوكَ فَقَدْ كُذِّبَ رُسُلٌۭ مِّن قَبْلِكَ جَآءُو بِٱلْبَيِّنَٰتِ وَٱلزُّبُرِ وَٱلْكِتَٰبِ ٱلْمُنِيرِ
fr: S'ils te (Muhammad) traitent de menteur, des prophètes avant toi, ont certes été traités de menteurs. Ils étaient venus avec les preuves claires, les Psaumes et le Livre lumineux.
ph: Fa'in Kadhabūka Faqad Kudhiba Rusulun Min Qablika Jā'ū Bil-Bayyināti Wa Az-Zuburi Wa Al-Kitābi Al-Munīri

3:185
ar: كُلُّ نَفْسٍۢ ذَآئِقَةُ ٱلْمَوْتِ ۗ وَإِنَّمَا تُوَفَّوْنَ أُجُورَكُمْ يَوْمَ ٱلْقِيَٰمَةِ ۖ فَمَن زُحْزِحَ عَنِ ٱلنَّارِ وَأُدْخِلَ ٱلْجَنَّةَ فَقَدْ فَازَ ۗ وَمَا ٱلْحَيَوٰةُ ٱلدُّنْيَآ إِلَّا مَتَٰعُ ٱلْغُرُورِ
fr: Toute âme goûtera la mort. Mais c'est seulement au Jour de la Résurrection que vous recevrez votre entière rétribution. Quiconque donc est écarté du Feu et introduit au Paradis, a certes réussi. Et la vie présente n'est qu'un objet de jouissance trompeuse.
ph: Kullu Nafsin Dhā'iqatu Al-Mawti Wa 'Innamā Tuwaffawna 'Ujūrakum Yawma Al-Qiyāmati Faman Zuĥziĥa `Ani An-Nāri Wa 'Udkhila Al-Jannata Faqad Fāza Wa Mā Al-Ĥayāatu Ad-Dunyā 'Illā Matā`u Al-Ghurūri

3:186
ar: ۞ لَتُبْلَوُنَّ فِىٓ أَمْوَٰلِكُمْ وَأَنفُسِكُمْ وَلَتَسْمَعُنَّ مِنَ ٱلَّذِينَ أُوتُوا۟ ٱلْكِتَٰبَ مِن قَبْلِكُمْ وَمِنَ ٱلَّذِينَ أَشْرَكُوٓا۟ أَذًۭى كَثِيرًۭا ۚ وَإِن تَصْبِرُوا۟ وَتَتَّقُوا۟ فَإِنَّ ذَٰلِكَ مِنْ عَزْمِ ٱلْأُمُورِ
fr: Certes vous serez éprouvés dans vos biens et vos personnes; et certes vous entendrez de la part de ceux à qui le Livre a été donné avant vous, et de la part des Associateurs, beaucoup de propos désagréables. Mais si vous êtes endurants et pieux... voilà bien la meilleure résolution à prendre.
ph: Latublawunna Fī 'Amwālikum Wa 'Anfusikum Wa Latasma`unna Mina Al-Ladhīna 'Ūtū Al-Kitāba Min Qablikum Wa Mina Al-Ladhīna 'Ashrakū 'Adháan Kathīrāan Wa 'In Taşbirū Wa Tattaqū Fa'inna Dhālika Min `Azmi Al-'Umūri

3:187
ar: وَإِذْ أَخَذَ ٱللَّهُ مِيثَٰقَ ٱلَّذِينَ أُوتُوا۟ ٱلْكِتَٰبَ لَتُبَيِّنُنَّهُۥ لِلنَّاسِ وَلَا تَكْتُمُونَهُۥ فَنَبَذُوهُ وَرَآءَ ظُهُورِهِمْ وَٱشْتَرَوْا۟ بِهِۦ ثَمَنًۭا قَلِيلًۭا ۖ فَبِئْسَ مَا يَشْتَرُونَ
fr: Allah prit, de ceux auxquels le Livre était donné, cet engagement: « Exposez-le, certes, aux gens et ne le cachez pas. » Mais ils l'ont jeté derrière leur dos et l'ont vendu à vil prix. Quel mauvais commerce ils ont fait !
ph: Wa 'Idh 'Akhadha Allāhu Mīthāqa Al-Ladhīna 'Ūtū Al-Kitāba Latubayyinunnahu Lilnnāsi Wa Lā Taktumūnahu Fanabadhūhu Warā'a Žuhūrihim Wa Ashtaraw Bihi Thamanāan Qalīlāan Fabi'sa Mā Yashtarūna

3:188
ar: لَا تَحْسَبَنَّ ٱلَّذِينَ يَفْرَحُونَ بِمَآ أَتَوا۟ وَّيُحِبُّونَ أَن يُحْمَدُوا۟ بِمَا لَمْ يَفْعَلُوا۟ فَلَا تَحْسَبَنَّهُم بِمَفَازَةٍۢ مِّنَ ٱلْعَذَابِ ۖ وَلَهُمْ عَذَابٌ أَلِيمٌۭ
fr: Ne pense point que ceux-là qui exultent de ce qu'ils ont fait, et qui aiment qu'on les loue pour ce qu'ils n'ont pas fait, ne pense point donc, qu'ils trouvent une échappatoire au châtiment. Pour eux, il y aura un châtiment douloureux !
ph: Lā Taĥsabanna Al-Ladhīna Yafraĥūna Bimā 'Ataw Wa Yuĥibbūna 'An Yuĥmadū Bimā Lam Yaf`alū Falā Taĥsabannahum Bimafāzatin Mina Al-`Adhābi Wa Lahum `Adhābun 'Alīmun

3:189
ar: وَلِلَّهِ مُلْكُ ٱلسَّمَٰوَٰتِ وَٱلْأَرْضِ ۗ وَٱللَّهُ عَلَىٰ كُلِّ شَىْءٍۢ قَدِيرٌ
fr: À Allah appartient le royaume des cieux et de la terre. Et Allah est Omnipotent.
ph: Wa Lillahi Mulku As-Samāwāti Wa Al-'Arđi Wa Allāhu `Alá Kulli Shay'in Qadīrun

3:190
ar: إِنَّ فِى خَلْقِ ٱلسَّمَٰوَٰتِ وَٱلْأَرْضِ وَٱخْتِلَٰفِ ٱلَّيْلِ وَٱلنَّهَارِ لَءَايَٰتٍۢ لِّأُو۟لِى ٱلْأَلْبَٰبِ
fr: En vérité, dans la création des cieux et de la terre, et dans l'alternance de la nuit et du jour, il y a certes des signes pour les doués d'intelligence,
ph: 'Inna Fī Khalqi As-Samāwāti Wa Al-'Arđi Wa Akhtilāfi Al-Layli Wa An-Nahāri La'āyātin Li'wlī Al-'Albābi

3:191
ar: ٱلَّذِينَ يَذْكُرُونَ ٱللَّهَ قِيَٰمًۭا وَقُعُودًۭا وَعَلَىٰ جُنُوبِهِمْ وَيَتَفَكَّرُونَ فِى خَلْقِ ٱلسَّمَٰوَٰتِ وَٱلْأَرْضِ رَبَّنَا مَا خَلَقْتَ هَٰذَا بَٰطِلًۭا سُبْحَٰنَكَ فَقِنَا عَذَابَ ٱلنَّارِ
fr: qui, debout, assis, couchés sur leurs côtés, invoquent Allah et méditent sur la création des cieux et de la terre (disant): « Notre Seigneur ! Tu n'as pas créé cela en vain. Gloire à Toi ! Garde-nous du châtiment du Feu.
ph: Al-Ladhīna Yadhkurūna Allāha Qiyāmāan Wa Qu`ūdāan Wa `Alá Junūbihim Wa Yatafakkarūna Fī Khalqi As-Samāwāti Wa Al-'Arđi Rabbanā Mā Khalaqta Hādhā Bāţilāan Subĥānaka Faqinā `Adhāba An-Nāri

3:192
ar: رَبَّنَآ إِنَّكَ مَن تُدْخِلِ ٱلنَّارَ فَقَدْ أَخْزَيْتَهُۥ ۖ وَمَا لِلظَّٰلِمِينَ مِنْ أَنصَارٍۢ
fr: Seigneur ! Quiconque Tu fais entrer dans le Feu, Tu le couvres vraiment d'ignominie. Et pour les injustes, il n'y a pas de secoureurs !
ph: Rabbanā 'Innaka Man Tudkhili An-Nāra Faqad 'Akhzaytahu Wa Mā Lilžžālimīna Min 'Anşārin

3:193
ar: رَّبَّنَآ إِنَّنَا سَمِعْنَا مُنَادِيًۭا يُنَادِى لِلْإِيمَٰنِ أَنْ ءَامِنُوا۟ بِرَبِّكُمْ فَـَٔامَنَّا ۚ رَبَّنَا فَٱغْفِرْ لَنَا ذُنُوبَنَا وَكَفِّرْ عَنَّا سَيِّـَٔاتِنَا وَتَوَفَّنَا مَعَ ٱلْأَبْرَارِ
fr: Seigneur ! Nous avons entendu l'appel de celui qui a appelé ainsi à la foi: « Croyez en votre Seigneur » et dès lors nous avons cru. Seigneur, pardonne-nous nos péchés, efface de nous nos méfaits, et place nous, à notre mort, avec les gens de bien.
ph: Rabbanā 'Innanā Sami`nā Munādīāan Yunādī Lil'īmāni 'An 'Āminū Birabbikum Fa'āmannā Rabbanā Fāghfir Lanā Dhunūbanā Wa Kaffir `Annā Sayyi'ātinā Wa Tawaffanā Ma`a Al-'Abrāri

3:194
ar: رَبَّنَا وَءَاتِنَا مَا وَعَدتَّنَا عَلَىٰ رُسُلِكَ وَلَا تُخْزِنَا يَوْمَ ٱلْقِيَٰمَةِ ۗ إِنَّكَ لَا تُخْلِفُ ٱلْمِيعَادَ
fr: Seigneur ! Donne-nous ce que Tu nous as promis par Tes messagers. Et ne nous couvre pas d'ignominie au Jour de la Résurrection. Car Toi, Tu ne manques pas à Ta promesse. »
ph: Rabbanā Wa 'Ātinā Mā Wa`adtanā `Alá Rusulika Wa Lā Tukhzinā Yawma Al-Qiyāmati 'Innaka Lā Tukhlifu Al-Mī`āda

3:195
ar: فَٱسْتَجَابَ لَهُمْ رَبُّهُمْ أَنِّى لَآ أُضِيعُ عَمَلَ عَٰمِلٍۢ مِّنكُم مِّن ذَكَرٍ أَوْ أُنثَىٰ ۖ بَعْضُكُم مِّنۢ بَعْضٍۢ ۖ فَٱلَّذِينَ هَاجَرُوا۟ وَأُخْرِجُوا۟ مِن دِيَٰرِهِمْ وَأُوذُوا۟ فِى سَبِيلِى وَقَٰتَلُوا۟ وَقُتِلُوا۟ لَأُكَفِّرَنَّ عَنْهُمْ سَيِّـَٔاتِهِمْ وَلَأُدْخِلَنَّهُمْ جَنَّٰتٍۢ تَجْرِى مِن تَحْتِهَا ٱلْأَنْهَٰرُ ثَوَابًۭا مِّنْ عِندِ ٱللَّهِ ۗ وَٱللَّهُ عِندَهُۥ حُسْنُ ٱلثَّوَابِ
fr: Leur Seigneur les a alors exaucés (disant): « En vérité, Je ne laisse pas perdre le bien que quiconque parmi vous a fait, homme ou femme, car vous êtes les uns des autres. Ceux donc qui ont émigré, qui ont été expulsés de leurs demeures, qui ont été persécutés dans Mon chemin, qui ont combattu, qui ont été tués, Je tiendrai certes pour expiées leurs mauvaises actions, et les ferai entrer dans les Jardins sous lesquels coulent les ruisseaux, comme récompense de la part d'Allah. » Quant à Allah, c'est auprès de Lui qu'est la plus belle récompense.
ph: Fāstajāba Lahum Rabbuhum 'Annī Lā 'Uđī`u `Amala `Āmilin Minkum Min Dhakarin 'Aw 'Unthá Ba`đukum Min Ba`đin Fa-Al-Ladhīna Hājarū Wa 'Ukhrijū Min Diyārihim Wa 'Ūdhū Fī Sabīlī Wa Qātalū Wa Qutilū La'ukaffiranna `Anhum Sayyi'ātihim Wa La'udkhilannahum Jannātin Tajrī Min Taĥtihā Al-'Anhāru Thawābāan Min `Indi Allāhi Wa Allāhu `Indahu Ĥusnu Ath-Thawābi

3:196
ar: لَا يَغُرَّنَّكَ تَقَلُّبُ ٱلَّذِينَ كَفَرُوا۟ فِى ٱلْبِلَٰدِ
fr: Que ne t'abuse point la versatilité [pour la prospérité] dans le pays, de ceux qui sont infidèles.
ph: Lā Yaghurrannaka Taqallubu Al-Ladhīna Kafarū Fī Al-Bilādi

3:197
ar: مَتَٰعٌۭ قَلِيلٌۭ ثُمَّ مَأْوَىٰهُمْ جَهَنَّمُ ۚ وَبِئْسَ ٱلْمِهَادُ
fr: Piètre jouissance ! Puis leur refuge sera l'Enfer. Et quelle détestable couche !
ph: Matā`un Qalīlun Thumma Ma'wāhum Jahannamu Wa Bi'sa Al-Mihādu

3:198
ar: لَٰكِنِ ٱلَّذِينَ ٱتَّقَوْا۟ رَبَّهُمْ لَهُمْ جَنَّٰتٌۭ تَجْرِى مِن تَحْتِهَا ٱلْأَنْهَٰرُ خَٰلِدِينَ فِيهَا نُزُلًۭا مِّنْ عِندِ ٱللَّهِ ۗ وَمَا عِندَ ٱللَّهِ خَيْرٌۭ لِّلْأَبْرَارِ
fr: Mais quant à ceux qui craignent leur Seigneur, ils auront des Jardins sous lesquels coulent les ruisseaux, pour y demeurer éternellement, un lieu d'accueil de la part d'Allah. Et ce qu'il y a auprès d'Allah est meilleur, pour les pieux.
ph: Lakini Al-Ladhīna Attaqaw Rabbahum Lahum Jannātun Tajrī Min Taĥtihā Al-'Anhāru Khālidīna Fīhā Nuzulāan Min `Indi Allāhi Wa Mā `Inda Allāhi Khayrun Lil'abrāri

3:199
ar: وَإِنَّ مِنْ أَهْلِ ٱلْكِتَٰبِ لَمَن يُؤْمِنُ بِٱللَّهِ وَمَآ أُنزِلَ إِلَيْكُمْ وَمَآ أُنزِلَ إِلَيْهِمْ خَٰشِعِينَ لِلَّهِ لَا يَشْتَرُونَ بِـَٔايَٰتِ ٱللَّهِ ثَمَنًۭا قَلِيلًا ۗ أُو۟لَٰٓئِكَ لَهُمْ أَجْرُهُمْ عِندَ رَبِّهِمْ ۗ إِنَّ ٱللَّهَ سَرِيعُ ٱلْحِسَابِ
fr: Il y a certes, parmi les gens du Livre ceux qui croient en Allah et en ce qu'on a fait descendre vers vous et en ce qu'on a fait descendre vers eux. Ils sont humbles envers Allah, et ne vendent point les versets d'Allah à vil prix. Voilà ceux dont la récompense est auprès de leur Seigneur. En vérité, Allah est prompt à faire les comptes.
ph: Wa 'Inna Min 'Ahli Al-Kitābi Laman Yu'uminu Billāhi Wa Mā 'Unzila 'Ilaykum Wa Mā 'Unzila 'Ilayhim Khāshi`īna Lillāhi Lā Yashtarūna Bi'āyāti Allāhi Thamanāan Qalīlāan 'Ūlā'ika Lahum 'Ajruhum `Inda Rabbihim 'Inna Allāha Sarī`u Al-Ĥisābi

3:200
ar: يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ ٱصْبِرُوا۟ وَصَابِرُوا۟ وَرَابِطُوا۟ وَٱتَّقُوا۟ ٱللَّهَ لَعَلَّكُمْ تُفْلِحُونَ
fr: Ô les croyants ! Soyez endurants. Incitez-vous à l'endurance. Luttez constamment (contre l'ennemi) et craignez Allah, afin que vous réussissiez !
ph: Yā 'Ayyuhā Al-Ladhīna 'Āmanū Aşbirū Wa Şābirū Wa Rābiţū Wa Attaqū Allāha La`allakum Tufliĥūna 

# ---------- Sourate 12 · Yusuf ----------

12:1
ar: الٓر ۚ تِلْكَ ءَايَٰتُ ٱلْكِتَٰبِ ٱلْمُبِينِ
fr: Alif, Lam, Ra. Tels sont les versets du Livre explicite.
ph: 'Alif-Lām-Rā Tilka 'Āyātu Al-Kitābi Al-Mubīni

12:2
ar: إِنَّآ أَنزَلْنَٰهُ قُرْءَٰنًا عَرَبِيًّۭا لَّعَلَّكُمْ تَعْقِلُونَ
fr: Nous l'avons fait descendre, un Coran en [langue] arabe, afin que vous raisonniez.
ph: 'Innā 'Anzalnāhu Qur'ānāan `Arabīyāan La`allakum Ta`qilūna

12:3
ar: نَحْنُ نَقُصُّ عَلَيْكَ أَحْسَنَ ٱلْقَصَصِ بِمَآ أَوْحَيْنَآ إِلَيْكَ هَٰذَا ٱلْقُرْءَانَ وَإِن كُنتَ مِن قَبْلِهِۦ لَمِنَ ٱلْغَٰفِلِينَ
fr: Nous te racontons le meilleur récit, grâce à la révélation que Nous te faisons dans ce Coran même si tu étais auparavant du nombre des inattentifs (à ces récits).
ph: Naĥnu Naquşşu `Alayka 'Aĥsana Al-Qaşaşi Bimā 'Awĥaynā 'Ilayka Hādhā Al-Qur'āna Wa 'In Kunta Min Qablihi Lamina Al-Ghāfilīna

12:4
ar: إِذْ قَالَ يُوسُفُ لِأَبِيهِ يَٰٓأَبَتِ إِنِّى رَأَيْتُ أَحَدَ عَشَرَ كَوْكَبًۭا وَٱلشَّمْسَ وَٱلْقَمَرَ رَأَيْتُهُمْ لِى سَٰجِدِينَ
fr: Quand Yusuf (Joseph) dit à son père: « Ô mon père, j'ai vu [en songe], onze étoiles, et aussi le soleil et la lune; je les ai vus prosternés devant moi. »
ph: 'Idh Qāla Yūsufu Li'abīhi Yā 'Abati 'Innī Ra'aytu 'Aĥada `Ashara Kawkabāan Wa Ash-Shamsa Wa Al-Qamara Ra'aytuhum Lī Sājidīna

12:5
ar: قَالَ يَٰبُنَىَّ لَا تَقْصُصْ رُءْيَاكَ عَلَىٰٓ إِخْوَتِكَ فَيَكِيدُوا۟ لَكَ كَيْدًا ۖ إِنَّ ٱلشَّيْطَٰنَ لِلْإِنسَٰنِ عَدُوٌّۭ مُّبِينٌۭ
fr: « Ô mon fils, dit-il, ne raconte pas ta vision à tes frères car ils monteraient un complot contre toi; le Diable est certainement pour l'homme un ennemi déclaré.
ph: Qāla Yā Bunayya Lā Taqşuş Ru'uyā Ka `Alá 'Ikhwatika Fayakīdū Laka Kaydāan 'Inna Ash-Shayţāna Lil'insāni `Adūwun Mubīnun

12:6
ar: وَكَذَٰلِكَ يَجْتَبِيكَ رَبُّكَ وَيُعَلِّمُكَ مِن تَأْوِيلِ ٱلْأَحَادِيثِ وَيُتِمُّ نِعْمَتَهُۥ عَلَيْكَ وَعَلَىٰٓ ءَالِ يَعْقُوبَ كَمَآ أَتَمَّهَا عَلَىٰٓ أَبَوَيْكَ مِن قَبْلُ إِبْرَٰهِيمَ وَإِسْحَٰقَ ۚ إِنَّ رَبَّكَ عَلِيمٌ حَكِيمٌۭ
fr: Ainsi ton Seigneur te choisira et t'enseignera l'interprétation des rêves, et Il parfera Son bienfait sur toi et sur la famille de Ya'qub (Jacob), tout comme Il l'a parfait auparavant sur tes deux ancêtres, Ibrahim (Abraham) et Ishaq (Isaac), car ton Seigneur est Omniscient et Sage.
ph: Wa Kadhalika Yajtabīka Rabbuka Wa Yu`allimuka Min Ta'wīli Al-'Aĥādīthi Wa Yutimmu Ni`matahu `Alayka Wa `Alá 'Āli Ya`qūba Kamā 'Atammahā `Alá 'Abawayka Min Qablu 'Ibrāhīma Wa 'Isĥāqa 'Inna Rabbaka `Alīmun Ĥakīmun

12:7
ar: ۞ لَّقَدْ كَانَ فِى يُوسُفَ وَإِخْوَتِهِۦٓ ءَايَٰتٌۭ لِّلسَّآئِلِينَ
fr: Il y avait certainement, en Yusuf (Joseph) et ses frères, des exhortations pour ceux qui interrogent,
ph: Laqad Kāna Fī Yūsufa Wa 'Ikhwatihi 'Āyātun Lilssā'ilīna

12:8
ar: إِذْ قَالُوا۟ لَيُوسُفُ وَأَخُوهُ أَحَبُّ إِلَىٰٓ أَبِينَا مِنَّا وَنَحْنُ عُصْبَةٌ إِنَّ أَبَانَا لَفِى ضَلَٰلٍۢ مُّبِينٍ
fr: quand ceux-ci dirent: « Yusuf (Joseph) et son frère sont plus aimés de notre père que nous, alors que nous sommes un groupe bien fort. Notre père est vraiment dans un tort évident.
ph: 'Idh Qālū Layūsufu Wa 'Akhūhu 'Aĥabbu 'Ilá 'Abīnā Minnā Wa Naĥnu `Uşbatun 'Inna 'Abānā Lafī Đalālin Mubīnin

12:9
ar: ٱقْتُلُوا۟ يُوسُفَ أَوِ ٱطْرَحُوهُ أَرْضًۭا يَخْلُ لَكُمْ وَجْهُ أَبِيكُمْ وَتَكُونُوا۟ مِنۢ بَعْدِهِۦ قَوْمًۭا صَٰلِحِينَ
fr: Tuez Yusuf (Joseph) ou bien éloignez-le dans n'importe quel pays, afin que le visage de votre père se tourne exclusivement vers vous, et que vous soyez après cela des gens de bien ».
ph: Aqtulū Yūsufa 'Awi Aţraĥūhu 'Arđāan Yakhlu Lakum Wajhu 'Abīkum Wa Takūnū Min Ba`dihi Qawmāan Şāliĥīna

12:10
ar: قَالَ قَآئِلٌۭ مِّنْهُمْ لَا تَقْتُلُوا۟ يُوسُفَ وَأَلْقُوهُ فِى غَيَٰبَتِ ٱلْجُبِّ يَلْتَقِطْهُ بَعْضُ ٱلسَّيَّارَةِ إِن كُنتُمْ فَٰعِلِينَ
fr: L'un d'eux dit: « Ne tuez pas Yusuf (Joseph), mais jetez-le si vous êtes disposés à agir, au fond du puits afin que quelque caravane le recueille. »
ph: Qāla Qā'ilun Minhum Lā Taqtulū Yūsufa Wa 'Alqūhu Fī Ghayābati Al-Jubbi Yaltaqiţhu Ba`đu As-Sayyārati 'In Kuntum Fā`ilīna

12:11
ar: قَالُوا۟ يَٰٓأَبَانَا مَا لَكَ لَا تَأْمَ۫نَّا عَلَىٰ يُوسُفَ وَإِنَّا لَهُۥ لَنَٰصِحُونَ
fr: Ils dirent: « Ô notre père, qu'as-tu à ne pas te fier à nous au sujet de Yusuf (Joseph) ? Nous sommes cependant bien intentionnés à son égard.
ph: Qālū Yā 'Abānā Mā Laka Lā Ta'mannā `Alá Yūsufa Wa 'Innā Lahu Lanāşiĥūna

12:12
ar: أَرْسِلْهُ مَعَنَا غَدًۭا يَرْتَعْ وَيَلْعَبْ وَإِنَّا لَهُۥ لَحَٰفِظُونَ
fr: Envoie-le demain avec nous faire une promenade et jouer. Et nous veillerons sur lui. »
ph: 'Arsilhu Ma`anā Ghadāan Yarta` Wa Yal`ab Wa 'Innā Lahu Laĥāfižūna

12:13
ar: قَالَ إِنِّى لَيَحْزُنُنِىٓ أَن تَذْهَبُوا۟ بِهِۦ وَأَخَافُ أَن يَأْكُلَهُ ٱلذِّئْبُ وَأَنتُمْ عَنْهُ غَٰفِلُونَ
fr: Il dit: « Certes, je m'attristerai que vous l'emmeniez; et je crains que le loup ne le dévore dans un moment où vous ne ferez pas attention à lui. »
ph: Qāla 'Innī Layaĥzununī 'An Tadh/habū Bihi Wa 'Akhāfu 'An Ya'kulahu Adh-Dhi'bu Wa 'Antum `Anhu Ghāfilūna

12:14
ar: قَالُوا۟ لَئِنْ أَكَلَهُ ٱلذِّئْبُ وَنَحْنُ عُصْبَةٌ إِنَّآ إِذًۭا لَّخَٰسِرُونَ
fr: Ils dirent: « Si le loup le dévore alors que nous sommes nombreux, nous serons vraiment les perdants. »
ph: Qālū La'in 'Akalahu Adh-Dhi'bu Wa Naĥnu `Uşbatun 'Innā 'Idhāan Lakhāsirūna

12:15
ar: فَلَمَّا ذَهَبُوا۟ بِهِۦ وَأَجْمَعُوٓا۟ أَن يَجْعَلُوهُ فِى غَيَٰبَتِ ٱلْجُبِّ ۚ وَأَوْحَيْنَآ إِلَيْهِ لَتُنَبِّئَنَّهُم بِأَمْرِهِمْ هَٰذَا وَهُمْ لَا يَشْعُرُونَ
fr: Et lorsqu'ils l'eurent emmené, et se furent mis d'accord pour le jeter dans les profondeurs invisibles du puits, Nous lui révélâmes: « Tu les informeras sûrement de cette affaire sans qu'ils s'en rendent compte. »
ph: Falammā Dhahabū Bihi Wa 'Ajma`ū 'An Yaj`alūhu Fī Ghayābati Al-Jubbi Wa 'Awĥaynā 'Ilayhi Latunabbi'annahum Bi'amrihim Hādhā Wa Hum Lā Yash`urūna

12:16
ar: وَجَآءُوٓ أَبَاهُمْ عِشَآءًۭ يَبْكُونَ
fr: Et ils vinrent à leur père, le soir, en pleurant.
ph: Wa Jā'ū 'Abāhum `Ishā'an Yabkūna

12:17
ar: قَالُوا۟ يَٰٓأَبَانَآ إِنَّا ذَهَبْنَا نَسْتَبِقُ وَتَرَكْنَا يُوسُفَ عِندَ مَتَٰعِنَا فَأَكَلَهُ ٱلذِّئْبُ ۖ وَمَآ أَنتَ بِمُؤْمِنٍۢ لَّنَا وَلَوْ كُنَّا صَٰدِقِينَ
fr: Ils dirent: « Ô notre père, nous sommes allés faire une course, et nous avons laissé Yusuf (Joseph) auprès de nos effets; et le loup l'a dévoré. Tu ne nous croiras pas, même si nous disons la vérité. »
ph: Qālū Yā 'Abānā 'Innā Dhahabnā Nastabiqu Wa Taraknā Yūsufa `Inda Matā`inā Fa'akalahu Adh-Dhi'bu Wa Mā 'Anta Bimu'uminin Lanā Wa Law Kunnā Şādiqīna

12:18
ar: وَجَآءُو عَلَىٰ قَمِيصِهِۦ بِدَمٍۢ كَذِبٍۢ ۚ قَالَ بَلْ سَوَّلَتْ لَكُمْ أَنفُسُكُمْ أَمْرًۭا ۖ فَصَبْرٌۭ جَمِيلٌۭ ۖ وَٱللَّهُ ٱلْمُسْتَعَانُ عَلَىٰ مَا تَصِفُونَ
fr: Ils apportèrent sa tunique tachée d'un faux sang. Il dit: « Vos âmes, plutôt, vous ont suggéré quelque chose... [Il ne me reste plus donc] qu'une belle patience ! C'est Allah qu'il faut appeler au secours contre ce que vous racontez ! »
ph: Wa Jā'ū `Alá Qamīşihi Bidamin Kadhibin Qāla Bal Sawwalat Lakum 'Anfusukum 'Amrāan Faşabrun Jamīlun Wa Allāhu Al-Musta`ānu `Alá Mā Taşifūna

12:19
ar: وَجَآءَتْ سَيَّارَةٌۭ فَأَرْسَلُوا۟ وَارِدَهُمْ فَأَدْلَىٰ دَلْوَهُۥ ۖ قَالَ يَٰبُشْرَىٰ هَٰذَا غُلَٰمٌۭ ۚ وَأَسَرُّوهُ بِضَٰعَةًۭ ۚ وَٱللَّهُ عَلِيمٌۢ بِمَا يَعْمَلُونَ
fr: Or, vint une caravane. Ils envoyèrent leur chercheur d'eau, qui fit descendre son seau. Il dit: « Bonne nouvelle ! Voilà un garçon ! » Et ils le dissimulèrent [pour le vendre] telle une marchandise. Allah cependant savait fort bien ce qu'ils faisaient.
ph: Wa Jā'at Sayyāratun Fa'arsalū Wa Aridahum Fa'adlá Dalwahu Qāla Yā Bushrá Hādhā Ghulāmun Wa 'Asarrūhu Biđā`atan Wa Allāhu `Alīmun Bimā Ya`malūna

12:20
ar: وَشَرَوْهُ بِثَمَنٍۭ بَخْسٍۢ دَرَٰهِمَ مَعْدُودَةٍۢ وَكَانُوا۟ فِيهِ مِنَ ٱلزَّٰهِدِينَ
fr: Et ils le vendirent à vil prix: pour quelques dirhams comptés. Ils le considéraient comme indésirable.
ph: Wa Sharawhu Bithamanin Bakhsin Darāhima Ma`dūdatin Wa Kānū Fīhi Mina Az-Zāhidīna

12:21
ar: وَقَالَ ٱلَّذِى ٱشْتَرَىٰهُ مِن مِّصْرَ لِٱمْرَأَتِهِۦٓ أَكْرِمِى مَثْوَىٰهُ عَسَىٰٓ أَن يَنفَعَنَآ أَوْ نَتَّخِذَهُۥ وَلَدًۭا ۚ وَكَذَٰلِكَ مَكَّنَّا لِيُوسُفَ فِى ٱلْأَرْضِ وَلِنُعَلِّمَهُۥ مِن تَأْوِيلِ ٱلْأَحَادِيثِ ۚ وَٱللَّهُ غَالِبٌ عَلَىٰٓ أَمْرِهِۦ وَلَٰكِنَّ أَكْثَرَ ٱلنَّاسِ لَا يَعْلَمُونَ
fr: Et celui qui l'acheta était de l'Egypte. Il dit à sa femme : « Accorde lui une généreuse hospitalité. Il se peut qu'il nous soit utile ou que nous l'adoptions comme notre enfant. » Ainsi avons-nous raffermi Yusuf (Joseph) dans le pays et nous lui avons appris l'interprétation des rêves. Et Allah est souverain en Son Commandement: mais la plupart des gens ne savent pas.
ph: Wa Qāla Al-Ladhī Ashtarāhu Min Mişra Li'imra'atihi 'Akrimī Mathwāhu `Asá 'An Yanfa`anā 'Aw Nattakhidhahu Waladāan Wa Kadhalika Makkannā Liyūsufa Fī Al-'Arđi Wa Linu`allimahu Min Ta'wīli Al-'Aĥādīthi Wa Allāhu Ghālibun `Alá 'Amrihi Wa Lakinna 'Akthara An-Nāsi Lā Ya`lamūna

12:22
ar: وَلَمَّا بَلَغَ أَشُدَّهُۥٓ ءَاتَيْنَٰهُ حُكْمًۭا وَعِلْمًۭا ۚ وَكَذَٰلِكَ نَجْزِى ٱلْمُحْسِنِينَ
fr: Et quand il eut atteint sa maturité Nous lui accordâmes sagesse et savoir. C'est ainsi que nous récompensons les bienfaisants.
ph: Wa Lammā Balagha 'Ashuddahu 'Ātaynāhu Ĥukmāan Wa `Ilmāan Wa Kadhalika Najzī Al-Muĥsinīna

12:23
ar: وَرَٰوَدَتْهُ ٱلَّتِى هُوَ فِى بَيْتِهَا عَن نَّفْسِهِۦ وَغَلَّقَتِ ٱلْأَبْوَٰبَ وَقَالَتْ هَيْتَ لَكَ ۚ قَالَ مَعَاذَ ٱللَّهِ ۖ إِنَّهُۥ رَبِّىٓ أَحْسَنَ مَثْوَاىَ ۖ إِنَّهُۥ لَا يُفْلِحُ ٱلظَّٰلِمُونَ
fr: Or celle [Zulikha] qui l'avait reçu dans sa maison essaya de le séduire. Et elle ferma bien les portes et dit: « Viens, (je suis prête pour toi ! ) » -Il dit: « Qu'Allah me protège ! C'est mon maître qui m'a accordé un bon asile. Vraiment les injustes ne réussissent pas. »
ph: Wa Rāwadat/hu Allatī Huwa Fī Baytihā `An Nafsihi Wa Ghallaqati Al-'Abwāba Wa Qālat Hayta Laka Qāla Ma`ādha Allāhi 'Innahu Rabbī 'Aĥsana Mathwāya 'Innahu Lā Yufliĥu Až-Žālimūna

12:24
ar: وَلَقَدْ هَمَّتْ بِهِۦ ۖ وَهَمَّ بِهَا لَوْلَآ أَن رَّءَا بُرْهَٰنَ رَبِّهِۦ ۚ كَذَٰلِكَ لِنَصْرِفَ عَنْهُ ٱلسُّوٓءَ وَٱلْفَحْشَآءَ ۚ إِنَّهُۥ مِنْ عِبَادِنَا ٱلْمُخْلَصِينَ
fr: Et, elle le désira. Et il l'aurait désirée n'eût été ce qu'il vit comme preuve évidente de son Seigneur. Ainsi [Nous avons agi] pour écarter de lui le mal et la turpitude. Il était certes un de Nos serviteurs élus.
ph: Wa Laqad Hammat Bihi Wa Hamma Bihā Lawlā 'An Ra'á Burhāna Rabbihi Kadhālika Linaşrifa `Anhu As-Sū'a Wa Al-Faĥshā'a 'Innahu Min `Ibādinā Al-Mukhlaşīna

12:25
ar: وَٱسْتَبَقَا ٱلْبَابَ وَقَدَّتْ قَمِيصَهُۥ مِن دُبُرٍۢ وَأَلْفَيَا سَيِّدَهَا لَدَا ٱلْبَابِ ۚ قَالَتْ مَا جَزَآءُ مَنْ أَرَادَ بِأَهْلِكَ سُوٓءًا إِلَّآ أَن يُسْجَنَ أَوْ عَذَابٌ أَلِيمٌۭ
fr: Et tous deux coururent vers la porte, et elle lui déchira sa tunique par derrière. Ils trouvèrent le mari [de cette femme] à la porte. Elle dit: « Quelle serait la punition de quiconque a voulu faire du mal à ta famille, sinon la prison, ou un châtiment douloureux ? »
ph: Wa Astabaqā Al-Bāba Wa Qaddat Qamīşahu Min Duburin Wa 'Alfayā Sayyidahā Ladá Al-Bābi Qālat Mā Jazā'u Man 'Arāda Bi'ahlika Sū'āan 'Illā 'An Yusjana 'Aw `Adhābun 'Alīmun

12:26
ar: قَالَ هِىَ رَٰوَدَتْنِى عَن نَّفْسِى ۚ وَشَهِدَ شَاهِدٌۭ مِّنْ أَهْلِهَآ إِن كَانَ قَمِيصُهُۥ قُدَّ مِن قُبُلٍۢ فَصَدَقَتْ وَهُوَ مِنَ ٱلْكَٰذِبِينَ
fr: [Yusuf (Joseph)] dit: « C'est elle qui a voulu me séduire. » Et un témoin, de la famille de celle-ci témoigna: « Si sa tunique [à lui] est déchirée par devant, alors c'est elle qui dit la vérité, tandis qu'il est du nombre des menteurs.
ph: Qāla Hiya Rāwadatnī `An Nafsī Wa Shahida Shāhidun Min 'Ahlihā 'In Kāna Qamīşuhu Qudda Min Qubulin Faşadaqat Wa Huwa Mina Al-Kādhibīna

12:27
ar: وَإِن كَانَ قَمِيصُهُۥ قُدَّ مِن دُبُرٍۢ فَكَذَبَتْ وَهُوَ مِنَ ٱلصَّٰدِقِينَ
fr: Mais si sa tunique est déchirée par derrière, alors c'est elle qui mentit, tandis qu'il est du nombre des véridiques. »
ph: Wa 'In Kāna Qamīşuhu Qudda Min Duburin Fakadhabat Wa Huwa Mina Aş-Şādiqīna

12:28
ar: فَلَمَّا رَءَا قَمِيصَهُۥ قُدَّ مِن دُبُرٍۢ قَالَ إِنَّهُۥ مِن كَيْدِكُنَّ ۖ إِنَّ كَيْدَكُنَّ عَظِيمٌۭ
fr: Puis, quand il (le mari) vit la tunique déchirée par derrière, il dit: « C'est bien de votre ruse de femmes ! Vos ruses sont vraiment énormes !
ph: Falammā Ra'á Qamīşahu Qudda Min Duburin Qāla 'Innahu Min Kaydikunna 'Inna Kaydakunna `Ažīmun

12:29
ar: يُوسُفُ أَعْرِضْ عَنْ هَٰذَا ۚ وَٱسْتَغْفِرِى لِذَنۢبِكِ ۖ إِنَّكِ كُنتِ مِنَ ٱلْخَاطِـِٔينَ
fr: Yusuf (Joseph), ne pense plus à cela ! Et toi, (femme), implore le pardon pour ton péché car tu es fautive. »
ph: Yūsufu 'A`riđ `An Hādhā Wa Astaghfirī Lidhanbiki 'Innaki Kunti Mina Al-Khāţi'īna

12:30
ar: ۞ وَقَالَ نِسْوَةٌۭ فِى ٱلْمَدِينَةِ ٱمْرَأَتُ ٱلْعَزِيزِ تُرَٰوِدُ فَتَىٰهَا عَن نَّفْسِهِۦ ۖ قَدْ شَغَفَهَا حُبًّا ۖ إِنَّا لَنَرَىٰهَا فِى ضَلَٰلٍۢ مُّبِينٍۢ
fr: Et dans la ville, des femmes dirent: « la femme d'Al-'Azize essaye de séduire son valet ! Il l'a vraiment rendue folle d'amour. Nous la trouvons certes dans un égarement évident.
ph: Wa Qāla Niswatun Fī Al-Madīnati Amra'atu Al-`Azīzi Turāwidu Fatāhā `An Nafsihi Qad Shaghafahā Ĥubbāan 'Innā Lanarāhā Fī Đalālin Mubīnin

12:31
ar: فَلَمَّا سَمِعَتْ بِمَكْرِهِنَّ أَرْسَلَتْ إِلَيْهِنَّ وَأَعْتَدَتْ لَهُنَّ مُتَّكَـًۭٔا وَءَاتَتْ كُلَّ وَٰحِدَةٍۢ مِّنْهُنَّ سِكِّينًۭا وَقَالَتِ ٱخْرُجْ عَلَيْهِنَّ ۖ فَلَمَّا رَأَيْنَهُۥٓ أَكْبَرْنَهُۥ وَقَطَّعْنَ أَيْدِيَهُنَّ وَقُلْنَ حَٰشَ لِلَّهِ مَا هَٰذَا بَشَرًا إِنْ هَٰذَآ إِلَّا مَلَكٌۭ كَرِيمٌۭ
fr: Lorsqu'elle eut entendu leur fourberie, elle leur envoya [des invitations,] et prépara pour elles une collation; et elle remit à chacune d'elles un couteau. Puis elle dit: « Sors devant elles, (Yusuf (Joseph) ! ) » -Lorsqu'elles le virent, elles l'admirèrent, se coupèrent les mains et dirent: « À Allah ne plaise ! Ce n'est pas un être humain, ce n'est qu'un ange noble ! »
ph: Falammā Sami`at Bimakrihinna 'Arsalat 'Ilayhinna Wa 'A`tadat Lahunna Muttaka'an Wa 'Ātat Kulla Wāĥidatin Minhunna Sikkīnāan Wa Qālati Akhruj `Alayhinna Falammā Ra'aynahu 'Akbarnahu Wa Qaţţa`na 'Aydiyahunna Wa Qulna Ĥāsha Lillāhi Mā Hādhā Basharāan 'In Hādhā 'Illā Malakun Karīmun

12:32
ar: قَالَتْ فَذَٰلِكُنَّ ٱلَّذِى لُمْتُنَّنِى فِيهِ ۖ وَلَقَدْ رَٰوَدتُّهُۥ عَن نَّفْسِهِۦ فَٱسْتَعْصَمَ ۖ وَلَئِن لَّمْ يَفْعَلْ مَآ ءَامُرُهُۥ لَيُسْجَنَنَّ وَلَيَكُونًۭا مِّنَ ٱلصَّٰغِرِينَ
fr: Elle dit: « Voilà donc celui à propos duquel vous me blâmiez. J'ai essayé de le séduire mais il s'en défendit fermement. Or, s'il ne fait pas ce que je lui commande, il sera très certainement emprisonné et sera certes parmi les humiliés. »
ph: Qālat Fadhālikunna Al-Ladhī Lumtunnanī Fīhi Wa Laqad Rāwadttuhu `An Nafsihi Fāsta`şama Wa La'in Lam Yaf`al Mā 'Āmuruhu Layusjananna Wa Layakūnāan Mina Aş-Şāghirīna

12:33
ar: قَالَ رَبِّ ٱلسِّجْنُ أَحَبُّ إِلَىَّ مِمَّا يَدْعُونَنِىٓ إِلَيْهِ ۖ وَإِلَّا تَصْرِفْ عَنِّى كَيْدَهُنَّ أَصْبُ إِلَيْهِنَّ وَأَكُن مِّنَ ٱلْجَٰهِلِينَ
fr: Il dit: « Ô mon Seigneur, la prison m'est préférable à ce à quoi elles m'invitent. Et si Tu n'écartes pas de moi leur ruse, je pencherai vers elles et serai du nombre des ignorants » [des pécheurs].
ph: Qāla Rabbi As-Sijnu 'Aĥabbu 'Ilayya Mimmā Yad`ūnanī 'Ilayhi Wa 'Illā Taşrif `Annī Kaydahunna 'Aşbu 'Ilayhinna Wa 'Akun Mina Al-Jāhilīna

12:34
ar: فَٱسْتَجَابَ لَهُۥ رَبُّهُۥ فَصَرَفَ عَنْهُ كَيْدَهُنَّ ۚ إِنَّهُۥ هُوَ ٱلسَّمِيعُ ٱلْعَلِيمُ
fr: Son Seigneur l'exauça donc, et éloigna de lui leur ruse. C'est Lui, vraiment, qui est l'Audient et l'Omniscient.
ph: Fāstajāba Lahu Rabbuhu Faşarafa `Anhu Kaydahunna 'Innahu Huwa As-Samī`u Al-`Alīmu

12:35
ar: ثُمَّ بَدَا لَهُم مِّنۢ بَعْدِ مَا رَأَوُا۟ ٱلْءَايَٰتِ لَيَسْجُنُنَّهُۥ حَتَّىٰ حِينٍۢ
fr: Puis, après qu'ils eurent vu les preuves (de son innocence), il leur sembla qu'ils devaient l'emprisonner pour un temps.
ph: Thumma Badā Lahum Min Ba`di Mā Ra'aw Al-'Āyāti Layasjununnahu Ĥattá Ĥīnin

12:36
ar: وَدَخَلَ مَعَهُ ٱلسِّجْنَ فَتَيَانِ ۖ قَالَ أَحَدُهُمَآ إِنِّىٓ أَرَىٰنِىٓ أَعْصِرُ خَمْرًۭا ۖ وَقَالَ ٱلْءَاخَرُ إِنِّىٓ أَرَىٰنِىٓ أَحْمِلُ فَوْقَ رَأْسِى خُبْزًۭا تَأْكُلُ ٱلطَّيْرُ مِنْهُ ۖ نَبِّئْنَا بِتَأْوِيلِهِۦٓ ۖ إِنَّا نَرَىٰكَ مِنَ ٱلْمُحْسِنِينَ
fr: Deux valets entrèrent avec lui en prison. L'un d'eux dit: « Je me voyais [en rêve] pressant du raisin... » Et l'autre dit: « Et moi, je me voyais portant sur ma tête du pain dont les oiseaux mangeaient. Apprends-nous l'interprétation (de nos rêves), nous te voyons au nombre des bienfaisants. »
ph: Wa Dakhala Ma`ahu As-Sijna Fatayāni Qāla 'Aĥaduhumā 'Innī 'Arānī 'A`şiru Khamrāan Wa Qāla Al-'Ākharu 'Innī 'Arānī 'Aĥmilu Fawqa Ra'sī Khubzāan Ta'kulu Aţ-Ţayru Minhu Nabbi'nā Bita'wīlihi 'Innā Narāka Mina Al-Muĥsinīna

12:37
ar: قَالَ لَا يَأْتِيكُمَا طَعَامٌۭ تُرْزَقَانِهِۦٓ إِلَّا نَبَّأْتُكُمَا بِتَأْوِيلِهِۦ قَبْلَ أَن يَأْتِيَكُمَا ۚ ذَٰلِكُمَا مِمَّا عَلَّمَنِى رَبِّىٓ ۚ إِنِّى تَرَكْتُ مِلَّةَ قَوْمٍۢ لَّا يُؤْمِنُونَ بِٱللَّهِ وَهُم بِٱلْءَاخِرَةِ هُمْ كَٰفِرُونَ
fr: « La nourriture qui vous est attribuée ne vous parviendra point, dit-il, que je ne vous aie avisés de son interprétation [de votre nourriture] avant qu'elle ne vous arrive. Cela fait partie de ce que mon Seigneur m'a enseigné. Certes, j'ai abandonné la religion d'un peuple qui ne croit pas en Allah et qui nie la vie future. »
ph: Qāla Lā Ya'tīkumā Ţa`āmun Turzaqānihi 'Illā Nabba'tukumā Bita'wīlihi Qabla 'An Ya'tiyakumā Dhālikumā Mimmā `Allamanī Rabbī 'Innī Taraktu Millata Qawmin Lā Yu'uminūna Billāhi Wa Hum Bil-'Ākhirati Hum Kāfirūna

12:38
ar: وَٱتَّبَعْتُ مِلَّةَ ءَابَآءِىٓ إِبْرَٰهِيمَ وَإِسْحَٰقَ وَيَعْقُوبَ ۚ مَا كَانَ لَنَآ أَن نُّشْرِكَ بِٱللَّهِ مِن شَىْءٍۢ ۚ ذَٰلِكَ مِن فَضْلِ ٱللَّهِ عَلَيْنَا وَعَلَى ٱلنَّاسِ وَلَٰكِنَّ أَكْثَرَ ٱلنَّاسِ لَا يَشْكُرُونَ
fr: Et j'ai suivi la religion de mes ancêtres, Ibrahim (Abraham), Ishaq (Isaac) et Ya'qub (Jacob). Il ne nous convient pas d'associer à Allah quoi que ce soit. Ceci est une grâce d'Allah sur nous et sur tout le monde; mais la plupart des gens ne sont pas reconnaissants.
ph: Wa Attaba`tu Millata 'Ābā'ī 'Ibrāhīma Wa 'Isĥāqa Wa Ya`qūba Mā Kāna Lanā 'An Nushrika Billāhi Min Shay'in Dhālika Min Fađli Allāhi `Alaynā Wa `Alá An-Nāsi Wa Lakinna 'Akthara An-Nāsi Lā Yashkurūna

12:39
ar: يَٰصَىٰحِبَىِ ٱلسِّجْنِ ءَأَرْبَابٌۭ مُّتَفَرِّقُونَ خَيْرٌ أَمِ ٱللَّهُ ٱلْوَٰحِدُ ٱلْقَهَّارُ
fr: Ô mes deux compagnons de prison ! Qui est le meilleur: des Seigneurs éparpillés ou Allah, l'Unique, le Dominateur suprême ?
ph: Yā Şāĥibayi As-Sijni 'A'arbābun Mutafarriqūna Khayrun 'Ami Allāhu Al-Wāĥidu Al-Qahhāru

12:40
ar: مَا تَعْبُدُونَ مِن دُونِهِۦٓ إِلَّآ أَسْمَآءًۭ سَمَّيْتُمُوهَآ أَنتُمْ وَءَابَآؤُكُم مَّآ أَنزَلَ ٱللَّهُ بِهَا مِن سُلْطَٰنٍ ۚ إِنِ ٱلْحُكْمُ إِلَّا لِلَّهِ ۚ أَمَرَ أَلَّا تَعْبُدُوٓا۟ إِلَّآ إِيَّاهُ ۚ ذَٰلِكَ ٱلدِّينُ ٱلْقَيِّمُ وَلَٰكِنَّ أَكْثَرَ ٱلنَّاسِ لَا يَعْلَمُونَ
fr: Vous n'adorez, en dehors de Lui, que des noms que vous avez inventés, vous et vos ancêtres, et à l'appui desquels Allah n'a fait descendre aucune preuve. Le pouvoir n'appartient qu'à Allah. Il vous a commandé de n'adorer que Lui. Telle est la religion droite; mais la plupart des gens ne savent pas.
ph: Mā Ta`budūna Min Dūnihi 'Illā 'Asmā'an Sammaytumūhā 'Antum Wa 'Ābā'uukum Mā 'Anzala Allāhu Bihā Min Sulţānin 'Ini Al-Ĥukmu 'Illā Lillāhi 'Amara 'Allā Ta`budū 'Illā 'Īyāhu Dhālika Ad-Dīnu Al-Qayyimu Wa Lakinna 'Akthara An-Nāsi Lā Ya`lamūna

12:41
ar: يَٰصَىٰحِبَىِ ٱلسِّجْنِ أَمَّآ أَحَدُكُمَا فَيَسْقِى رَبَّهُۥ خَمْرًۭا ۖ وَأَمَّا ٱلْءَاخَرُ فَيُصْلَبُ فَتَأْكُلُ ٱلطَّيْرُ مِن رَّأْسِهِۦ ۚ قُضِىَ ٱلْأَمْرُ ٱلَّذِى فِيهِ تَسْتَفْتِيَانِ
fr: Ô mes deux compagnons de prison ! L'un de vous donnera du vin à boire à son maître; quant à l'autre, il sera crucifié, et les oiseaux mangeront de sa tête. L'affaire sur laquelle vous me consultez est déjà décidée. »
ph: Yā Şāĥibayi As-Sijni 'Ammā 'Aĥadukumā Fayasqī Rabbahu Khamrāan Wa 'Ammā Al-'Ākharu Fayuşlabu Fata'kulu Aţ-Ţayru Min Ra'sihi Quđiya Al-'Amru Al-Ladhī Fīhi Tastaftiyāni

12:42
ar: وَقَالَ لِلَّذِى ظَنَّ أَنَّهُۥ نَاجٍۢ مِّنْهُمَا ٱذْكُرْنِى عِندَ رَبِّكَ فَأَنسَىٰهُ ٱلشَّيْطَٰنُ ذِكْرَ رَبِّهِۦ فَلَبِثَ فِى ٱلسِّجْنِ بِضْعَ سِنِينَ
fr: Et il dit à celui des deux dont il pensait qu'il serait délivré: « Parle de moi auprès de ton maître ». Mais le Diable fit qu'il oublia de rappeler (le cas de Yusuf (Joseph)) à son maître. Yusuf (Joseph) resta donc en prison quelques années.
ph: Wa Qāla Lilladhī Žanna 'Annahu Nājin Minhumā Adhkurnī `Inda Rabbika Fa'ansāhu Ash-Shayţānu Dhikra Rabbihi Falabitha Fī As-Sijni Biđ`a Sinīna

12:43
ar: وَقَالَ ٱلْمَلِكُ إِنِّىٓ أَرَىٰ سَبْعَ بَقَرَٰتٍۢ سِمَانٍۢ يَأْكُلُهُنَّ سَبْعٌ عِجَافٌۭ وَسَبْعَ سُنۢبُلَٰتٍ خُضْرٍۢ وَأُخَرَ يَابِسَٰتٍۢ ۖ يَٰٓأَيُّهَا ٱلْمَلَأُ أَفْتُونِى فِى رُءْيَٰىَ إِن كُنتُمْ لِلرُّءْيَا تَعْبُرُونَ
fr: Et le roi dit: « En vérité, je voyais (en rêve) sept vaches grasses mangées par sept maigres; et sept épis verts, et autant d'autres, secs. ô conseil de notables, donnez-moi une explication de ma vision, si vous savez interpréter le rêve. »
ph: Wa Qāla Al-Maliku 'Innī 'Ará Sab`a Baqarātin Simānin Ya'kuluhunna Sab`un `Ijāfun Wa Sab`a Sunbulātin Khuđrin Wa 'Ukhara Yā Bisātin Yā 'Ayyuhā Al-Mala'u 'Aftūnī Fī Ru'uyā Ya 'In Kuntum Lilrru'uyā Ta`burūna

12:44
ar: قَالُوٓا۟ أَضْغَٰثُ أَحْلَٰمٍۢ ۖ وَمَا نَحْنُ بِتَأْوِيلِ ٱلْأَحْلَٰمِ بِعَٰلِمِينَ
fr: Ils dirent: « C'est un amas de rêves ! Et nous ne savons pas interpréter les rêves ! »
ph: Qālū 'Ađghāthu 'Aĥlāmin Wa Mā Naĥnu Bita'wīli Al-'Aĥlāmi Bi`ālimīna

12:45
ar: وَقَالَ ٱلَّذِى نَجَا مِنْهُمَا وَٱدَّكَرَ بَعْدَ أُمَّةٍ أَنَا۠ أُنَبِّئُكُم بِتَأْوِيلِهِۦ فَأَرْسِلُونِ
fr: Or, celui des deux qui avait été délivré et qui, après quelque temps se rappela, dit: « Je vous en donnerai l'interprétation. Envoyez-moi donc. »
ph: Wa Qāla Al-Ladhī Najā Minhumā Wa Aiddakara Ba`da 'Ummatin 'Anā 'Unabbi'ukum Bita'wīlihi Fa'arsilūni

12:46
ar: يُوسُفُ أَيُّهَا ٱلصِّدِّيقُ أَفْتِنَا فِى سَبْعِ بَقَرَٰتٍۢ سِمَانٍۢ يَأْكُلُهُنَّ سَبْعٌ عِجَافٌۭ وَسَبْعِ سُنۢبُلَٰتٍ خُضْرٍۢ وَأُخَرَ يَابِسَٰتٍۢ لَّعَلِّىٓ أَرْجِعُ إِلَى ٱلنَّاسِ لَعَلَّهُمْ يَعْلَمُونَ
fr: « Ô toi, Yusuf (Joseph), le véridique ! Eclaire-nous au sujet de sept vaches grasses que mangent sept très maigres, et sept épis verts et autant d'autres, secs, afin que je retourne aux gens et qu'ils sachent [l'interprétation exacte du rêve]. »
ph: Yūsufu 'Ayyuhā Aş-Şiddīqu 'Aftinā Fī Sab`i Baqarātin Simānin Ya'kuluhunna Sab`un `Ijāfun Wa Sab`i Sunbulātin Khuđrin Wa 'Ukhara Yā Bisātin La`allī 'Arji`u 'Ilá An-Nāsi La`allahum Ya`lamūna

12:47
ar: قَالَ تَزْرَعُونَ سَبْعَ سِنِينَ دَأَبًۭا فَمَا حَصَدتُّمْ فَذَرُوهُ فِى سُنۢبُلِهِۦٓ إِلَّا قَلِيلًۭا مِّمَّا تَأْكُلُونَ
fr: Alors [Yusuf (Joseph) dit]: « Vous sèmerez pendant sept années consécutives. Tout ce que vous aurez moissonné, laissez-le en épi, sauf le peu que vous consommerez.
ph: Qāla Tazra`ūna Sab`a Sinīna Da'abāan Famā Ĥaşadtum Fadharūhu Fī Sunbulihi 'Illā Qalīlāan Mimmā Ta'kulūna

12:48
ar: ثُمَّ يَأْتِى مِنۢ بَعْدِ ذَٰلِكَ سَبْعٌۭ شِدَادٌۭ يَأْكُلْنَ مَا قَدَّمْتُمْ لَهُنَّ إِلَّا قَلِيلًۭا مِّمَّا تُحْصِنُونَ
fr: Viendront ensuite sept années de disette qui consommeront tout ce que vous aurez amassé pour elles sauf le peu que vous aurez réservé [comme semence].
ph: Thumma Ya'tī Min Ba`di Dhālika Sab`un Shidādun Ya'kulna Mā Qaddamtum Lahunna 'Illā Qalīlāan Mimmā Tuĥşinūna

12:49
ar: ثُمَّ يَأْتِى مِنۢ بَعْدِ ذَٰلِكَ عَامٌۭ فِيهِ يُغَاثُ ٱلنَّاسُ وَفِيهِ يَعْصِرُونَ
fr: Puis, viendra après cela une année où les gens seront secourus [par la pluie] et iront au pressoir. »
ph: Thumma Ya'tī Min Ba`di Dhālika `Āmun Fīhi Yughāthu An-Nāsu Wa Fīhi Ya`şirūna

12:50
ar: وَقَالَ ٱلْمَلِكُ ٱئْتُونِى بِهِۦ ۖ فَلَمَّا جَآءَهُ ٱلرَّسُولُ قَالَ ٱرْجِعْ إِلَىٰ رَبِّكَ فَسْـَٔلْهُ مَا بَالُ ٱلنِّسْوَةِ ٱلَّٰتِى قَطَّعْنَ أَيْدِيَهُنَّ ۚ إِنَّ رَبِّى بِكَيْدِهِنَّ عَلِيمٌۭ
fr: Et le roi dit: « Amenez-le moi. » Puis, lorsque l'émissaire arriva auprès de lui, [Yusuf (Joseph)] dit: « Retourne auprès de ton maître et demande-lui: « Quelle était la raison qui poussa les femmes à se couper les mains ? Mon Seigneur connaît bien leur ruse. »
ph: Wa Qāla Al-Maliku A'tūnī Bihi Falammā Jā'ahu Ar-Rasūlu Qāla Arji` 'Ilá Rabbika Fās'alhu Mā Bālu An-Niswati Al-Lātī Qaţţa`na 'Aydiyahunna 'Inna Rabbī Bikaydihinna `Alīmun

12:51
ar: قَالَ مَا خَطْبُكُنَّ إِذْ رَٰوَدتُّنَّ يُوسُفَ عَن نَّفْسِهِۦ ۚ قُلْنَ حَٰشَ لِلَّهِ مَا عَلِمْنَا عَلَيْهِ مِن سُوٓءٍۢ ۚ قَالَتِ ٱمْرَأَتُ ٱلْعَزِيزِ ٱلْـَٰٔنَ حَصْحَصَ ٱلْحَقُّ أَنَا۠ رَٰوَدتُّهُۥ عَن نَّفْسِهِۦ وَإِنَّهُۥ لَمِنَ ٱلصَّٰدِقِينَ
fr: Alors, [le roi leur] dit: « Qu'est-ce donc qui vous a poussées à essayer de séduire Yusuf (Joseph) ? » Elles dirent: « À Allah ne plaise ! Nous ne connaissons rien de mauvais contre lui. » Et la femme d'Al-'Azize dit: « Maintenant la vérité s'est manifestée. C'est moi qui ai voulu le séduire. Et c'est lui, vraiment, qui est du nombre des véridiques ! »
ph: Qāla Mā Khaţbukunna 'Idh Rāwadttunna Yūsufa `An Nafsihi Qulna Ĥāsha Lillāhi Mā `Alimnā `Alayhi Min Sū'in Qālati Amra'atu Al-`Azīzi Al-'Āna Ĥaşĥaşa Al-Ĥaqqu 'Anā Rāwadttuhu `An Nafsihi Wa 'Innahu Lamina Aş-Şādiqīna

12:52
ar: ذَٰلِكَ لِيَعْلَمَ أَنِّى لَمْ أَخُنْهُ بِٱلْغَيْبِ وَأَنَّ ٱللَّهَ لَا يَهْدِى كَيْدَ ٱلْخَآئِنِينَ
fr: « Cela afin qu'il sache que je ne l'ai pas trahi en son absence, et qu'en vérité Allah ne guide pas la ruse des traîtres.
ph: Dhālika Liya`lama 'Annī Lam 'Akhunhu Bil-Ghaybi Wa 'Anna Allāha Lā Yahdī Kayda Al-Khā'inīna

12:53
ar: ۞ وَمَآ أُبَرِّئُ نَفْسِىٓ ۚ إِنَّ ٱلنَّفْسَ لَأَمَّارَةٌۢ بِٱلسُّوٓءِ إِلَّا مَا رَحِمَ رَبِّىٓ ۚ إِنَّ رَبِّى غَفُورٌۭ رَّحِيمٌۭ
fr: Je ne m'innocente cependant pas, car l'âme est très incitatrice au mal, à moins que mon Seigneur, par miséricorde, [ne la préserve du péché]. Mon Seigneur est certes Pardonneur et très Miséricordieux. »
ph: Wa Mā 'Ubarri'u Nafsī 'Inna An-Nafsa La'ammāratun Bis-Sū'i 'Illā Mā Raĥima Rabbī 'Inna Rabbī Ghafūrun Raĥīmun

12:54
ar: وَقَالَ ٱلْمَلِكُ ٱئْتُونِى بِهِۦٓ أَسْتَخْلِصْهُ لِنَفْسِى ۖ فَلَمَّا كَلَّمَهُۥ قَالَ إِنَّكَ ٱلْيَوْمَ لَدَيْنَا مَكِينٌ أَمِينٌۭ
fr: Et le roi dit: « Amenez-le moi: je me le réserve pour moi-même. » Et lorsqu'il lui eut parlé, il dit: « Tu es dès aujourd'hui près de nous, en une position d'autorité et de confiance. »
ph: Wa Qāla Al-Maliku A'tūnī Bihi 'Astakhlişhu Linafsī Falammā Kallamahu Qāla 'Innaka Al-Yawma Ladaynā Makīnun 'Amīnun

12:55
ar: قَالَ ٱجْعَلْنِى عَلَىٰ خَزَآئِنِ ٱلْأَرْضِ ۖ إِنِّى حَفِيظٌ عَلِيمٌۭ
fr: Et [Yusuf (Joseph)] dit: « Assigne-moi les dépôts du territoire: je suis bon gardien et connaisseur. »
ph: Qāla Aj`alnī `Alá Khazā'ini Al-'Arđi 'Innī Ĥafīžun `Alīmun

12:56
ar: وَكَذَٰلِكَ مَكَّنَّا لِيُوسُفَ فِى ٱلْأَرْضِ يَتَبَوَّأُ مِنْهَا حَيْثُ يَشَآءُ ۚ نُصِيبُ بِرَحْمَتِنَا مَن نَّشَآءُ ۖ وَلَا نُضِيعُ أَجْرَ ٱلْمُحْسِنِينَ
fr: Ainsi avons-nous affermi (l'autorité de) Yusuf (Joseph) dans ce territoire et il s'y installait là où il le voulait. Nous touchons de Notre miséricorde qui Nous voulons et ne faisons pas perdre aux hommes de bien le mérite [de leurs œuvres].
ph: Wa Kadhalika Makkannā Liyūsufa Fī Al-'Arđi Yatabawwa'u Minhā Ĥaythu Yashā'u Nuşību Biraĥmatinā Man Nashā'u Wa Lā Nuđī`u 'Ajra Al-Muĥsinīna

12:57
ar: وَلَأَجْرُ ٱلْءَاخِرَةِ خَيْرٌۭ لِّلَّذِينَ ءَامَنُوا۟ وَكَانُوا۟ يَتَّقُونَ
fr: Et la récompense de l'au-delà est meilleure pour ceux qui ont cru et ont pratiqué la piété.
ph: Wa La'ajru Al-'Ākhirati Khayrun Lilladhīna 'Āmanū Wa Kānū Yattaqūna

12:58
ar: وَجَآءَ إِخْوَةُ يُوسُفَ فَدَخَلُوا۟ عَلَيْهِ فَعَرَفَهُمْ وَهُمْ لَهُۥ مُنكِرُونَ
fr: Et les frères de Yusuf (Joseph) vinrent et entrèrent auprès de lui. Il les reconnut, mais eux ne le reconnurent pas.
ph: Wa Jā'a 'Ikhwatu Yūsufa Fadakhalū `Alayhi Fa`arafahum Wa Hum Lahu Munkirūna

12:59
ar: وَلَمَّا جَهَّزَهُم بِجَهَازِهِمْ قَالَ ٱئْتُونِى بِأَخٍۢ لَّكُم مِّنْ أَبِيكُمْ ۚ أَلَا تَرَوْنَ أَنِّىٓ أُوفِى ٱلْكَيْلَ وَأَنَا۠ خَيْرُ ٱلْمُنزِلِينَ
fr: Et quand il leur eut fourni leur provision, il dit: « Amenez-moi un frère que vous avez de votre père. Ne voyez-vous pas que je donne la pleine mesure et que je suis le meilleur des hôtes ?
ph: Wa Lammā Jahhazahum Bijahāzihim Qāla A'tūnī Bi'akhin Lakum Min 'Abīkum 'Alā Tarawna 'Annī 'Ūfī Al-Kayla Wa 'Anā Khayru Al-Munzilīna

12:60
ar: فَإِن لَّمْ تَأْتُونِى بِهِۦ فَلَا كَيْلَ لَكُمْ عِندِى وَلَا تَقْرَبُونِ
fr: Et si vous ne me l'amenez pas, alors il n'y aura plus de provision pour vous, chez moi; et vous ne m'approcherez plus. »
ph: Fa'in Lam Ta'tūnī Bihi Falā Kayla Lakum `Indī Wa Lā Taqrabūni

12:61
ar: قَالُوا۟ سَنُرَٰوِدُ عَنْهُ أَبَاهُ وَإِنَّا لَفَٰعِلُونَ
fr: Ils dirent: « Nous essayerons de persuader son père. Certes, nous le ferons. »
ph: Qālū Sanurāwidu `Anhu 'Abāhu Wa 'Innā Lafā`ilūna

12:62
ar: وَقَالَ لِفِتْيَٰنِهِ ٱجْعَلُوا۟ بِضَٰعَتَهُمْ فِى رِحَالِهِمْ لَعَلَّهُمْ يَعْرِفُونَهَآ إِذَا ٱنقَلَبُوٓا۟ إِلَىٰٓ أَهْلِهِمْ لَعَلَّهُمْ يَرْجِعُونَ
fr: Et il dit à ses serviteurs: « Remettez leurs marchandises dans leurs sacs: peut-être les reconnaîtront-ils quand ils seront de retour vers leur famille et peut-être qu'ils reviendront ».
ph: Wa Qāla Lifityānihi Aj`alū Biđā`atahum Fī Riĥālihim La`allahum Ya`rifūnahā 'Idhā Anqalabū 'Ilá 'Ahlihim La`allahum Yarji`ūna

12:63
ar: فَلَمَّا رَجَعُوٓا۟ إِلَىٰٓ أَبِيهِمْ قَالُوا۟ يَٰٓأَبَانَا مُنِعَ مِنَّا ٱلْكَيْلُ فَأَرْسِلْ مَعَنَآ أَخَانَا نَكْتَلْ وَإِنَّا لَهُۥ لَحَٰفِظُونَ
fr: Et lorsqu'ils revinrent à leur père, ils dirent: « Ô notre père, il nous sera refusé [à l'avenir] de nous ravitailler [en grain]. Envoie donc avec nous notre frère, afin que nous obtenions des provisions. Nous le surveillerons bien. »
ph: Falammā Raja`ū 'Ilá 'Abīhim Qālū Yā 'Abānā Muni`a Minnā Al-Kaylu Fa'arsil Ma`anā 'Akhānā Naktal Wa 'Innā Lahu Laĥāfižūna

12:64
ar: قَالَ هَلْ ءَامَنُكُمْ عَلَيْهِ إِلَّا كَمَآ أَمِنتُكُمْ عَلَىٰٓ أَخِيهِ مِن قَبْلُ ۖ فَٱللَّهُ خَيْرٌ حَٰفِظًۭا ۖ وَهُوَ أَرْحَمُ ٱلرَّٰحِمِينَ
fr: Il dit: « Vais-je vous le confier comme, auparavant, je vous ai confié son frère ? Mais Allah est le meilleur gardien, et Il est Le plus Miséricordieux des miséricordieux ! »
ph: Qāla Hal 'Āmanukum `Alayhi 'Illā Kamā 'Amintukum `Alá 'Akhīhi Min Qablu Fa-Allāhu Khayrun Ĥāfižāan Wa Huwa 'Arĥamu Ar-Rāĥimīna

12:65
ar: وَلَمَّا فَتَحُوا۟ مَتَٰعَهُمْ وَجَدُوا۟ بِضَٰعَتَهُمْ رُدَّتْ إِلَيْهِمْ ۖ قَالُوا۟ يَٰٓأَبَانَا مَا نَبْغِى ۖ هَٰذِهِۦ بِضَٰعَتُنَا رُدَّتْ إِلَيْنَا ۖ وَنَمِيرُ أَهْلَنَا وَنَحْفَظُ أَخَانَا وَنَزْدَادُ كَيْلَ بَعِيرٍۢ ۖ ذَٰلِكَ كَيْلٌۭ يَسِيرٌۭ
fr: Et lorsqu'ils ouvrirent leurs bagages, ils trouvèrent qu'on leur avait rendu leurs marchandises. Ils dirent: « Ô notre père. Que désirons-nous [de plus] ? Voici que nos marchandises nous ont été rendues. Et ainsi nous approvisionnerons notre famille, nous veillerons à la sécurité de notre frère et nous nous ajouterons la charge d'un chameau et c'est une charge facile. »
ph: Wa Lammā Fataĥū Matā`ahum Wa Jadū Biđā`atahum Ruddat 'Ilayhim Qālū Yā 'Abānā Mā Nabghī Hadhihi Biđā`atunā Ruddat 'Ilaynā Wa Namīru 'Ahlanā Wa Naĥfažu 'Akhānā Wa Nazdādu Kayla Ba`īrin Dhālika Kaylun Yasīrun

12:66
ar: قَالَ لَنْ أُرْسِلَهُۥ مَعَكُمْ حَتَّىٰ تُؤْتُونِ مَوْثِقًۭا مِّنَ ٱللَّهِ لَتَأْتُنَّنِى بِهِۦٓ إِلَّآ أَن يُحَاطَ بِكُمْ ۖ فَلَمَّآ ءَاتَوْهُ مَوْثِقَهُمْ قَالَ ٱللَّهُ عَلَىٰ مَا نَقُولُ وَكِيلٌۭ
fr: -Il dit: « Jamais je ne l'enverrai avec vous, jusqu'à ce que vous m'apportiez l'engagement formel au nom d'Allah que vous me le ramènerez à moins que vous ne soyez cernés. » Lorsqu'ils lui eurent apporté l'engagement, il dit: « Allah est garant de ce que nous disons. »
ph: Qāla Lan 'Ursilahu Ma`akum Ĥattá Tu'utūni Mawthiqāan Mina Allāhi Lata'tunanī Bihi 'Illā 'An Yuĥāţa Bikum Falammā 'Ātawhu Mawthiqahum Qāla Allāhu `Alá Mā Naqūlu Wa Kīlun

12:67
ar: وَقَالَ يَٰبَنِىَّ لَا تَدْخُلُوا۟ مِنۢ بَابٍۢ وَٰحِدٍۢ وَٱدْخُلُوا۟ مِنْ أَبْوَٰبٍۢ مُّتَفَرِّقَةٍۢ ۖ وَمَآ أُغْنِى عَنكُم مِّنَ ٱللَّهِ مِن شَىْءٍ ۖ إِنِ ٱلْحُكْمُ إِلَّا لِلَّهِ ۖ عَلَيْهِ تَوَكَّلْتُ ۖ وَعَلَيْهِ فَلْيَتَوَكَّلِ ٱلْمُتَوَكِّلُونَ
fr: Et il dit: « Ô mes fils, n'entrez pas par une seule porte, mais entrez par portes séparées. Je ne peux cependant vous être d'aucune utilité contre les desseins d'Allah. La décision n'appartient qu'à Allah: en Lui je place ma confiance. Et que ceux qui placent leur confiance la placent en Lui. »
ph: Wa Qāla Yā Banīya Lā Tadkhulū Min Bābin Wāĥidin Wa Adkhulū Min 'Abwābin Mutafarriqatin Wa Mā 'Ughnī `Ankum Mina Allāhi Min Shay'in 'Ini Al-Ĥukmu 'Illā Lillāhi `Alayhi Tawakkaltu Wa `Alayhi Falyatawakkali Al-Mutawakkilūna

12:68
ar: وَلَمَّا دَخَلُوا۟ مِنْ حَيْثُ أَمَرَهُمْ أَبُوهُم مَّا كَانَ يُغْنِى عَنْهُم مِّنَ ٱللَّهِ مِن شَىْءٍ إِلَّا حَاجَةًۭ فِى نَفْسِ يَعْقُوبَ قَضَىٰهَا ۚ وَإِنَّهُۥ لَذُو عِلْمٍۢ لِّمَا عَلَّمْنَٰهُ وَلَٰكِنَّ أَكْثَرَ ٱلنَّاسِ لَا يَعْلَمُونَ
fr: Etant entrés comme leur père le leur avait commandé [cela] ne leur servit à rien contre (les décrets d') Allah. Ce n'était [au reste] qu'une précaution que Ya'qub (Jacob) avait jugé [de leur recommander]. Il avait pleine connaissance de ce que Nous lui avions enseigné. Mais la plupart des gens ne savent pas.
ph: Wa Lammā Dakhalū Min Ĥaythu 'Amarahum 'Abūhum Mmā Kāna Yughnī `Anhum Mmina Allāhi Min Shay'in 'Illā Ĥājatan Fī Nafsi Ya`qūba Qađāhā Wa 'Innahu Ladhū `Ilmin Limā `Allamnāhu Wa Lakinna 'Akthara An-Nāsi Lā Ya`lamūna

12:69
ar: وَلَمَّا دَخَلُوا۟ عَلَىٰ يُوسُفَ ءَاوَىٰٓ إِلَيْهِ أَخَاهُ ۖ قَالَ إِنِّىٓ أَنَا۠ أَخُوكَ فَلَا تَبْتَئِسْ بِمَا كَانُوا۟ يَعْمَلُونَ
fr: Et quand ils furent entrés auprès de Yusuf (Joseph), [celui-ci] retint son frère auprès de lui en disant: « Je suis ton frère. Ne te chagrine donc pas pour ce qu'ils faisaient. »
ph: Wa Lammā Dakhalū `Alá Yūsufa 'Āwá 'Ilayhi 'Akhāhu Qāla 'Innī 'Anā 'Akhūka Falā Tabta'is Bimā Kānū Ya`malūna

12:70
ar: فَلَمَّا جَهَّزَهُم بِجَهَازِهِمْ جَعَلَ ٱلسِّقَايَةَ فِى رَحْلِ أَخِيهِ ثُمَّ أَذَّنَ مُؤَذِّنٌ أَيَّتُهَا ٱلْعِيرُ إِنَّكُمْ لَسَٰرِقُونَ
fr: Puis, quand il leur eut fourni leurs provisions, il mit la coupe dans le sac de son frère. Ensuite un crieur annonça: « Caravaniers ! Vous êtes des voleurs. »
ph: Falammā Jahhazahum Bijahāzihim Ja`ala As-Siqāyata Fī Raĥli 'Akhīhi Thumma 'Adhana Mu'uadhinun 'Ayyatuhā Al-`Īru 'Innakum Lasāriqūna

12:71
ar: قَالُوا۟ وَأَقْبَلُوا۟ عَلَيْهِم مَّاذَا تَفْقِدُونَ
fr: Ils se retournèrent en disant: « Qu'avez-vous perdu ? »
ph: Qālū Wa 'Aqbalū `Alayhim Mādhā Tafqidūna

12:72
ar: قَالُوا۟ نَفْقِدُ صُوَاعَ ٱلْمَلِكِ وَلِمَن جَآءَ بِهِۦ حِمْلُ بَعِيرٍۢ وَأَنَا۠ بِهِۦ زَعِيمٌۭ
fr: Ils répondirent: « Nous cherchons la grande coupe du roi. La charge d'un chameau à qui l'apportera et j'en suis garant. »
ph: Qālū Nafqidu Şuwā`a Al-Maliki Wa Liman Jā'a Bihi Ĥimlu Ba`īrin Wa 'Anā Bihi Za`īmun

12:73
ar: قَالُوا۟ تَٱللَّهِ لَقَدْ عَلِمْتُم مَّا جِئْنَا لِنُفْسِدَ فِى ٱلْأَرْضِ وَمَا كُنَّا سَٰرِقِينَ
fr: « Par Allah, dirent-ils, vous savez certes que nous ne sommes pas venus pour semer la corruption sur le territoire et que nous ne sommes pas des voleurs. »
ph: Qālū Ta-Allāhi Laqad `Alimtum Mā Ji'nā Linufsida Fī Al-'Arđi Wa Mā Kunnā Sāriqīna

12:74
ar: قَالُوا۟ فَمَا جَزَٰٓؤُهُۥٓ إِن كُنتُمْ كَٰذِبِينَ
fr: -Quelle sera donc la sanction si vous êtes des menteurs ? (dirent-ils).
ph: Qālū Famā Jazā'uuhu 'In Kuntum Kādhibīna

12:75
ar: قَالُوا۟ جَزَٰٓؤُهُۥ مَن وُجِدَ فِى رَحْلِهِۦ فَهُوَ جَزَٰٓؤُهُۥ ۚ كَذَٰلِكَ نَجْزِى ٱلظَّٰلِمِينَ
fr: Ils dirent: « La sanction infligée à celui dont les bagages de qui la coupe sera retrouvée est: [qu'il soit livré] lui-même [à titre d'esclave à la victime du vol]. C'est ainsi que nous punissons les malfaiteurs. »
ph: Qālū Jazā'uuhu Man Wujida Fī Raĥlihi Fahuwa Jazā'uuhu Kadhālika Najzī Až-Žālimīna

12:76
ar: فَبَدَأَ بِأَوْعِيَتِهِمْ قَبْلَ وِعَآءِ أَخِيهِ ثُمَّ ٱسْتَخْرَجَهَا مِن وِعَآءِ أَخِيهِ ۚ كَذَٰلِكَ كِدْنَا لِيُوسُفَ ۖ مَا كَانَ لِيَأْخُذَ أَخَاهُ فِى دِينِ ٱلْمَلِكِ إِلَّآ أَن يَشَآءَ ٱللَّهُ ۚ نَرْفَعُ دَرَجَٰتٍۢ مَّن نَّشَآءُ ۗ وَفَوْقَ كُلِّ ذِى عِلْمٍ عَلِيمٌۭ
fr: [Yusuf (Joseph)] commença par les sacs des autres avant celui de son frère; puis il la fit sortir du sac de son frère. Ainsi suggérâmes-Nous cet artifice à Yusuf (Joseph). Car il ne pouvait pas se saisir de son frère, selon la justice du roi, à moins qu'Allah ne l'eût voulu. Nous élevons en rang qui Nous voulons. Et au-dessus de tout homme détenant la science il y a un savant [plus docte que lui].
ph: Fabada'a Bi'aw`iyatihim Qabla Wi`ā'i 'Akhīhi Thumma Astakhrajahā Min Wi`ā'i 'Akhīhi Kadhālika Kidnā Liyūsufa Mā Kāna Liya'khudha 'Akhāhu Fī Dīni Al-Maliki 'Illā 'An Yashā'a Allāhu Narfa`u Darajātin Man Nashā'u Wa Fawqa Kulli Dhī `Ilmin `Alīmun

12:77
ar: ۞ قَالُوٓا۟ إِن يَسْرِقْ فَقَدْ سَرَقَ أَخٌۭ لَّهُۥ مِن قَبْلُ ۚ فَأَسَرَّهَا يُوسُفُ فِى نَفْسِهِۦ وَلَمْ يُبْدِهَا لَهُمْ ۚ قَالَ أَنتُمْ شَرٌّۭ مَّكَانًۭا ۖ وَٱللَّهُ أَعْلَمُ بِمَا تَصِفُونَ
fr: Ils dirent: « S'il a commis un vol, un frère à lui auparavant a volé aussi. » Mais Yusuf (Joseph) tint sa pensée secrète, et ne la leur dévoila pas. Il dit [en lui même]: « Votre position est bien pire encore ! Et Allah connaît mieux ce que vous décrivez. »
ph: Qālū 'In Yasriq Faqad Saraqa 'Akhun Lahu Min Qablu Fa'asarrahā Yūsufu Fī Nafsihi Wa Lam Yubdihā Lahum Qāla 'Antum Sharrun Makānāan Wa Allāhu 'A`lamu Bimā Taşifūna

12:78
ar: قَالُوا۟ يَٰٓأَيُّهَا ٱلْعَزِيزُ إِنَّ لَهُۥٓ أَبًۭا شَيْخًۭا كَبِيرًۭا فَخُذْ أَحَدَنَا مَكَانَهُۥٓ ۖ إِنَّا نَرَىٰكَ مِنَ ٱلْمُحْسِنِينَ
fr: -Ils dirent.: « Ô Al-'Azize, il a un père très vieux; saisis-toi donc de l'un de nous, à sa place. Nous voyons que tu es vraiment du nombre des gens bienfaisants. »
ph: Qālū Yā 'Ayyuhā Al-`Azīzu 'Inna Lahu 'Abāan Shaykhāan Kabīrāan Fakhudh 'Aĥadanā Makānahu 'Innā Narāka Mina Al-Muĥsinīna

12:79
ar: قَالَ مَعَاذَ ٱللَّهِ أَن نَّأْخُذَ إِلَّا مَن وَجَدْنَا مَتَٰعَنَا عِندَهُۥٓ إِنَّآ إِذًۭا لَّظَٰلِمُونَ
fr: -Il dit: « Qu'Allah nous garde de prendre un autre que celui chez qui nous avons trouvé notre bien ! Nous serions alors vraiment injustes. »
ph: Qāla Ma`ādha Allāhi 'An Na'khudha 'Illā Man Wajadnā Matā`anā `Indahu 'Innā 'Idhāan Lažālimūna

12:80
ar: فَلَمَّا ٱسْتَيْـَٔسُوا۟ مِنْهُ خَلَصُوا۟ نَجِيًّۭا ۖ قَالَ كَبِيرُهُمْ أَلَمْ تَعْلَمُوٓا۟ أَنَّ أَبَاكُمْ قَدْ أَخَذَ عَلَيْكُم مَّوْثِقًۭا مِّنَ ٱللَّهِ وَمِن قَبْلُ مَا فَرَّطتُمْ فِى يُوسُفَ ۖ فَلَنْ أَبْرَحَ ٱلْأَرْضَ حَتَّىٰ يَأْذَنَ لِىٓ أَبِىٓ أَوْ يَحْكُمَ ٱللَّهُ لِى ۖ وَهُوَ خَيْرُ ٱلْحَٰكِمِينَ
fr: Puis, lorsqu'ils eurent perdu tout espoir [de ramener Benyamin] ils se concertèrent en secret. Leur aîné dit: « Ne savez-vous pas que votre père a pris de vous un engagement formel au nom d'Allah, et que déjà vous y avez manqué autrefois à propos de Yusuf (Joseph) ? Je ne quitterai point le territoire, jusqu'à ce que mon père me le permette ou qu'Allah juge en ma faveur, et Il est le meilleur des juges.
ph: Falammā Astay'asū Minhu Khalaşū Najīyāan Qāla Kabīruhum 'Alam Ta`lamū 'Anna 'Abākum Qad 'Akhadha `Alaykum Mawthiqāan Mina Allāhi Wa Min Qablu Mā Farraţtum Fī Yūsufa Falan 'Abraĥa Al-'Arđa Ĥattá Ya'dhana Lī 'Abī 'Aw Yaĥkuma Allāhu Lī Wa Huwa Khayru Al-Ĥākimīna

12:81
ar: ٱرْجِعُوٓا۟ إِلَىٰٓ أَبِيكُمْ فَقُولُوا۟ يَٰٓأَبَانَآ إِنَّ ٱبْنَكَ سَرَقَ وَمَا شَهِدْنَآ إِلَّا بِمَا عَلِمْنَا وَمَا كُنَّا لِلْغَيْبِ حَٰفِظِينَ
fr: Retournez à votre père et dites: « Ô notre père, ton fils a volé. Et nous n'attestons que ce que nous savons. Et nous n'étions nullement au courant de l'inconnu.
ph: Arji`ū 'Ilá 'Abīkum Faqūlū Yā 'Abānā 'Inna Abnaka Saraqa Wa Mā Shahidnā 'Illā Bimā `Alimnā Wa Mā Kunnā Lilghaybi Ĥāfižīna

12:82
ar: وَسْـَٔلِ ٱلْقَرْيَةَ ٱلَّتِى كُنَّا فِيهَا وَٱلْعِيرَ ٱلَّتِىٓ أَقْبَلْنَا فِيهَا ۖ وَإِنَّا لَصَٰدِقُونَ
fr: Et interroge la ville où nous étions, ainsi que la caravane dans laquelle nous sommes arrivés. Nous disons réellement la vérité. »
ph: Wa As'ali Al-Qaryata Allatī Kunnā Fīhā Wa Al-`Īra Allatī 'Aqbalnā Fīhā Wa 'Innā Laşādiqūna

12:83
ar: قَالَ بَلْ سَوَّلَتْ لَكُمْ أَنفُسُكُمْ أَمْرًۭا ۖ فَصَبْرٌۭ جَمِيلٌ ۖ عَسَى ٱللَّهُ أَن يَأْتِيَنِى بِهِمْ جَمِيعًا ۚ إِنَّهُۥ هُوَ ٱلْعَلِيمُ ٱلْحَكِيمُ
fr: Alors [Ya'qub (Jacob)] dit: Vos âmes plutôt vous ont inspiré [d'entreprendre] quelque chose !.. Oh ! belle patience. Il se peut qu'Allah me les ramènera tous les deux. Car c'est Lui l'Omniscient, le Sage. »
ph: Qāla Bal Sawwalat Lakum 'Anfusukum 'Amrāan Faşabrun Jamīlun `Asá Allāhu 'An Ya'tiyanī Bihim Jamī`āan 'Innahu Huwa Al-`Alīmu Al-Ĥakīmu

12:84
ar: وَتَوَلَّىٰ عَنْهُمْ وَقَالَ يَٰٓأَسَفَىٰ عَلَىٰ يُوسُفَ وَٱبْيَضَّتْ عَيْنَاهُ مِنَ ٱلْحُزْنِ فَهُوَ كَظِيمٌۭ
fr: Et il se détourna d'eux et dit: « Que mon chagrin est grand pour Yusuf (Joseph) ! » Et ses yeux blanchirent d'affliction. Et il était accablé.
ph: Wa Tawallá `Anhum Wa Qāla Yā 'Asafá `Alá Yūsufa Wa Abyađđat `Aynāhu Mina Al-Ĥuzni Fahuwa Kažīmun

12:85
ar: قَالُوا۟ تَٱللَّهِ تَفْتَؤُا۟ تَذْكُرُ يُوسُفَ حَتَّىٰ تَكُونَ حَرَضًا أَوْ تَكُونَ مِنَ ٱلْهَٰلِكِينَ
fr: -Ils dirent: « Par Allah ! Tu ne cesseras pas d'évoquer Yusuf (Joseph), jusqu'à ce que tu t'épuises ou que tu sois parmi les morts. »
ph: Qālū Ta-Allāhi Tafta'u Tadhkuru Yūsufa Ĥattá Takūna Ĥarađāan 'Aw Takūna Mina Al-Hālikīna

12:86
ar: قَالَ إِنَّمَآ أَشْكُوا۟ بَثِّى وَحُزْنِىٓ إِلَى ٱللَّهِ وَأَعْلَمُ مِنَ ٱللَّهِ مَا لَا تَعْلَمُونَ
fr: -Il dit: « Je ne me plains qu'à Allah de mon déchirement et de mon chagrin. Et, je sais de la part d'Allah, ce que vous ne savez pas.
ph: Qāla 'Innamā 'Ashkū Baththī Wa Ĥuznī 'Ilá Allāhi Wa 'A`lamu Mina Allāhi Mā Lā Ta`lamūna

12:87
ar: يَٰبَنِىَّ ٱذْهَبُوا۟ فَتَحَسَّسُوا۟ مِن يُوسُفَ وَأَخِيهِ وَلَا تَا۟يْـَٔسُوا۟ مِن رَّوْحِ ٱللَّهِ ۖ إِنَّهُۥ لَا يَا۟يْـَٔسُ مِن رَّوْحِ ٱللَّهِ إِلَّا ٱلْقَوْمُ ٱلْكَٰفِرُونَ
fr: Ô mes fils ! Partez et enquérez-vous de Yusuf (Joseph) et de son frère. Et ne désespérez pas de la miséricorde d'Allah. Ce sont seulement les gens mécréants qui désespèrent de la miséricorde d'Allah. »
ph: Yā Banīya Adh/habū Fataĥassasū Min Yūsufa Wa 'Akhīhi Wa Lā Tay'asū Min Rawĥi Allāhi 'Innahu Lā Yay'asu Min Rawĥi Allāhi 'Illā Al-Qawmu Al-Kāfirūna

12:88
ar: فَلَمَّا دَخَلُوا۟ عَلَيْهِ قَالُوا۟ يَٰٓأَيُّهَا ٱلْعَزِيزُ مَسَّنَا وَأَهْلَنَا ٱلضُّرُّ وَجِئْنَا بِبِضَٰعَةٍۢ مُّزْجَىٰةٍۢ فَأَوْفِ لَنَا ٱلْكَيْلَ وَتَصَدَّقْ عَلَيْنَآ ۖ إِنَّ ٱللَّهَ يَجْزِى ٱلْمُتَصَدِّقِينَ
fr: Et lorsqu'ils s'introduisirent auprès de [Yusuf (Joseph),] ils dirent: « Ô al-'Azize, la famine nous a touchés, nous et notre famille; et nous venons avec une marchandise sans grande valeur. Donne-nous une pleine mesure, et fais-nous la charité. Certes, Allah récompense les charitables ! »
ph: Falammā Dakhalū `Alayhi Qālū Yā 'Ayyuhā Al-`Azīzu Massanā Wa 'Ahlanā Ađ-Đurru Wa Ji'nā Bibiđā`atin Muzjāatin Fa'awfi Lanā Al-Kayla Wa Taşaddaq `Alaynā 'Inna Allāha Yajzī Al-Mutaşaddiqīna

12:89
ar: قَالَ هَلْ عَلِمْتُم مَّا فَعَلْتُم بِيُوسُفَ وَأَخِيهِ إِذْ أَنتُمْ جَٰهِلُونَ
fr: -Il dit: « Savez-vous ce que vous avez fait de Yusuf (Joseph) et de son frère alors que vous étiez ignorants ? [injustes]. »
ph: Qāla Hal `Alimtum Mā Fa`altum Biyūsufa Wa 'Akhīhi 'Idh 'Antum Jāhilūna

12:90
ar: قَالُوٓا۟ أَءِنَّكَ لَأَنتَ يُوسُفُ ۖ قَالَ أَنَا۠ يُوسُفُ وَهَٰذَآ أَخِى ۖ قَدْ مَنَّ ٱللَّهُ عَلَيْنَآ ۖ إِنَّهُۥ مَن يَتَّقِ وَيَصْبِرْ فَإِنَّ ٱللَّهَ لَا يُضِيعُ أَجْرَ ٱلْمُحْسِنِينَ
fr: -Ils dirent: « Est-ce que tu es... Certes, tu es Yusuf (Joseph) ! » -Il dit: « Je suis Yusuf (Joseph), et voici mon frère. Certes, Allah nous a favorisés. Quiconque craint et patiente... Et très certainement, Allah ne fait pas perdre la récompense des bienfaisants. »
ph: Qālū 'A'innaka La'anta Yūsufu Qāla 'Anā Yūsufu Wa Hadhā 'Akhī Qad Manna Allāhu `Alaynā 'Innahu Man Yattaqi Wa Yaşbir Fa'inna Allāha Lā Yuđī`u 'Ajra Al-Muĥsinīna

12:91
ar: قَالُوا۟ تَٱللَّهِ لَقَدْ ءَاثَرَكَ ٱللَّهُ عَلَيْنَا وَإِن كُنَّا لَخَٰطِـِٔينَ
fr: -Ils dirent: « Par Allah ! Vraiment Allah t'a préféré à nous et nous avons été fautifs. »
ph: Qālū Ta-Allāhi Laqad 'Ātharaka Allāhu `Alaynā Wa 'In Kunnā Lakhāţi'īna

12:92
ar: قَالَ لَا تَثْرِيبَ عَلَيْكُمُ ٱلْيَوْمَ ۖ يَغْفِرُ ٱللَّهُ لَكُمْ ۖ وَهُوَ أَرْحَمُ ٱلرَّٰحِمِينَ
fr: -Il dit: « Pas de récrimination contre vous aujourd'hui ! Qu'Allah vous pardonne. C'est Lui Le plus Miséricordieux des miséricordieux.
ph: Qāla Lā Tathrība `Alaykumu Al-Yawma Yaghfiru Allāhu Lakum Wa Huwa 'Arĥamu Ar-Rāĥimīna

12:93
ar: ٱذْهَبُوا۟ بِقَمِيصِى هَٰذَا فَأَلْقُوهُ عَلَىٰ وَجْهِ أَبِى يَأْتِ بَصِيرًۭا وَأْتُونِى بِأَهْلِكُمْ أَجْمَعِينَ
fr: Emportez ma tunique que voici, et appliquez-la sur le visage de mon père: il recouvrera [aussitôt] la vue. Et amenez-moi toute votre famille. »
ph: Adh/habū Biqamīşī Hādhā Fa'alqūhu `Alá Wajhi 'Abī Ya'ti Başīrāan Wa 'Tūnī Bi'ahlikum 'Ajma`īna

12:94
ar: وَلَمَّا فَصَلَتِ ٱلْعِيرُ قَالَ أَبُوهُمْ إِنِّى لَأَجِدُ رِيحَ يُوسُفَ ۖ لَوْلَآ أَن تُفَنِّدُونِ
fr: -Et dès que la caravane franchit la frontière [de Canâan], leur père dit: « Je décèle, certes, l'odeur de Yusuf (Joseph), même si vous dites que je radote. »
ph: Wa Lammā Faşalati Al-`Īru Qāla 'Abūhum 'Innī La'ajidu Rīĥa Yūsufa Lawlā 'An Tufannidūni

12:95
ar: قَالُوا۟ تَٱللَّهِ إِنَّكَ لَفِى ضَلَٰلِكَ ٱلْقَدِيمِ
fr: Ils Lui dirent: « Par Allah te voilà bien dans ton ancien égarement. »
ph: Qālū Ta-Allāhi 'Innaka Lafī Đalālika Al-Qadīmi

12:96
ar: فَلَمَّآ أَن جَآءَ ٱلْبَشِيرُ أَلْقَىٰهُ عَلَىٰ وَجْهِهِۦ فَٱرْتَدَّ بَصِيرًۭا ۖ قَالَ أَلَمْ أَقُل لَّكُمْ إِنِّىٓ أَعْلَمُ مِنَ ٱللَّهِ مَا لَا تَعْلَمُونَ
fr: Puis quand arriva le porteur de bonne annonce, il l'appliqua [la tunique] sur le visage de Ya'qub (Jacob). Celui-ci recouvra [aussitôt] la vue, et dit: « Ne vous ai-je pas dit que je sais, par Allah, ce que vous ne savez pas ? »
ph: Falammā 'An Jā'a Al-Bashīru 'Alqāhu `Alá Wajhihi Fārtadda Başīrāan Qāla 'Alam 'Aqul Lakum 'Innī 'A`lamu Mina Allāhi Mā Lā Ta`lamūna

12:97
ar: قَالُوا۟ يَٰٓأَبَانَا ٱسْتَغْفِرْ لَنَا ذُنُوبَنَآ إِنَّا كُنَّا خَٰطِـِٔينَ
fr: -Ils dirent: « Ô notre père, implore pour nous la rémission de nos péchés. Nous étions vraiment fautifs. »
ph: Qālū Yā 'Abānā Astaghfir Lanā Dhunūbanā 'Innā Kunnā Khāţi'īna

12:98
ar: قَالَ سَوْفَ أَسْتَغْفِرُ لَكُمْ رَبِّىٓ ۖ إِنَّهُۥ هُوَ ٱلْغَفُورُ ٱلرَّحِيمُ
fr: -Il dit: « J'implorerai pour vous le pardon de mon Seigneur. Car c'est Lui le Pardonneur, le Très Miséricordieux. »
ph: Qāla Sawfa 'Astaghfiru Lakum Rabbī 'Innahu Huwa Al-Ghafūru Ar-Raĥīmu

12:99
ar: فَلَمَّا دَخَلُوا۟ عَلَىٰ يُوسُفَ ءَاوَىٰٓ إِلَيْهِ أَبَوَيْهِ وَقَالَ ٱدْخُلُوا۟ مِصْرَ إِن شَآءَ ٱللَّهُ ءَامِنِينَ
fr: Lorsqu'ils s'introduisirent auprès de Yusuf (Joseph), celui-ci accueillit ses père et mère, et leur dit: « Entrez en Egypte, en toute sécurité, si Allah le veut ! »
ph: Falammā Dakhalū `Alá Yūsufa 'Āwá 'Ilayhi 'Abawayhi Wa Qāla Adkhulū Mişra 'In Shā'a Allāhu 'Āminīna

12:100
ar: وَرَفَعَ أَبَوَيْهِ عَلَى ٱلْعَرْشِ وَخَرُّوا۟ لَهُۥ سُجَّدًۭا ۖ وَقَالَ يَٰٓأَبَتِ هَٰذَا تَأْوِيلُ رُءْيَٰىَ مِن قَبْلُ قَدْ جَعَلَهَا رَبِّى حَقًّۭا ۖ وَقَدْ أَحْسَنَ بِىٓ إِذْ أَخْرَجَنِى مِنَ ٱلسِّجْنِ وَجَآءَ بِكُم مِّنَ ٱلْبَدْوِ مِنۢ بَعْدِ أَن نَّزَغَ ٱلشَّيْطَٰنُ بَيْنِى وَبَيْنَ إِخْوَتِىٓ ۚ إِنَّ رَبِّى لَطِيفٌۭ لِّمَا يَشَآءُ ۚ إِنَّهُۥ هُوَ ٱلْعَلِيمُ ٱلْحَكِيمُ
fr: Et il éleva ses parents sur le trône, et tous tombèrent devant lui, prosternés. Et il dit: « Ô mon père, voilà l'interprétation de mon rêve de jadis. Allah l'a bel et bien réalisé... Et Il m'a certainement fait du bien quand Il m'a fait sortir de prison et qu'Il vous a fait venir de la campagne, [du désert], après que le Diable ait suscité la discorde entre mes frères et moi. Mon Seigneur est plein de douceur pour ce qu'Il veut. Et c'est Lui l'Omniscient, le Sage.
ph: Wa Rafa`a 'Abawayhi `Alá Al-`Arshi Wa Kharrū Lahu Sujjadāan Wa Qāla Yā 'Abati Hādhā Ta'wīlu Ru'uyā Y Min Qablu Qad Ja`alahā Rabbī Ĥaqqāan Wa Qad 'Aĥsana Bī 'Idh 'Akhrajanī Mina As-Sijni Wa Jā'a Bikum Mina Al-Badwi Min Ba`di 'An Nazagha Ash-Shayţānu Baynī Wa Bayna 'Ikhwatī 'Inna Rabbī Laţīfun Limā Yashā'u 'Innahu Huwa Al-`Alīmu Al-Ĥakīmu

12:101
ar: ۞ رَبِّ قَدْ ءَاتَيْتَنِى مِنَ ٱلْمُلْكِ وَعَلَّمْتَنِى مِن تَأْوِيلِ ٱلْأَحَادِيثِ ۚ فَاطِرَ ٱلسَّمَٰوَٰتِ وَٱلْأَرْضِ أَنتَ وَلِىِّۦ فِى ٱلدُّنْيَا وَٱلْءَاخِرَةِ ۖ تَوَفَّنِى مُسْلِمًۭا وَأَلْحِقْنِى بِٱلصَّٰلِحِينَ
fr: Ô mon Seigneur, Tu m'as donné du pouvoir et m'as enseigné l'interprétation des rêves. [C'est Toi Le] Créateur des cieux et de la terre, Tu es mon patron, ici-bas et dans l'au-delà. Fais-moi mourir en parfaite soumission et fais moi rejoindre les vertueux.
ph: Rabbi Qad 'Ātaytanī Mina Al-Mulki Wa `Allamtanī Min Ta'wīli Al-'Aĥādīthi Fāţira As-Samāwāti Wa Al-'Arđi 'Anta Wa Līyi Fī Ad-Dunyā Wa Al-'Ākhirati Tawaffanī Muslimāan Wa 'Alĥiqnī Biş-Şāliĥīna

12:102
ar: ذَٰلِكَ مِنْ أَنۢبَآءِ ٱلْغَيْبِ نُوحِيهِ إِلَيْكَ ۖ وَمَا كُنتَ لَدَيْهِمْ إِذْ أَجْمَعُوٓا۟ أَمْرَهُمْ وَهُمْ يَمْكُرُونَ
fr: Ce sont là des récits inconnus que Nous te révélons. Et tu n'étais pas auprès d'eux quand ils se mirent d'accord pour comploter.
ph: Dhālika Min 'Anbā'i Al-Ghaybi Nūĥīhi 'Ilayka Wa Mā Kunta Ladayhim 'Idh 'Ajma`ū 'Amrahum Wa Hum Yamkurūna

12:103
ar: وَمَآ أَكْثَرُ ٱلنَّاسِ وَلَوْ حَرَصْتَ بِمُؤْمِنِينَ
fr: Et la plupart des gens ne sont pas croyants malgré ton désir ardent.
ph: Wa Mā 'Aktharu An-Nāsi Wa Law Ĥaraşta Bimu'uminīna

12:104
ar: وَمَا تَسْـَٔلُهُمْ عَلَيْهِ مِنْ أَجْرٍ ۚ إِنْ هُوَ إِلَّا ذِكْرٌۭ لِّلْعَٰلَمِينَ
fr: Et tu ne leur demandes aucun salaire pour cela. Ce n'est là qu'un rappel adressé à l'univers.
ph: Wa Mā Tas'aluhum `Alayhi Min 'Ajrin 'In Huwa 'Illā Dhikrun Lil`ālamīna

12:105
ar: وَكَأَيِّن مِّنْ ءَايَةٍۢ فِى ٱلسَّمَٰوَٰتِ وَٱلْأَرْضِ يَمُرُّونَ عَلَيْهَا وَهُمْ عَنْهَا مُعْرِضُونَ
fr: Et dans les cieux et sur la terre, que de signes auprès desquels les gens passent, en s'en détournant !
ph: Wa Ka'ayyin Min 'Āyatin Fī As-Samāwāti Wa Al-'Arđi Yamurrūna `Alayhā Wa Hum `Anhā Mu`riđūna

12:106
ar: وَمَا يُؤْمِنُ أَكْثَرُهُم بِٱللَّهِ إِلَّا وَهُم مُّشْرِكُونَ
fr: Et la plupart d'entre eux ne croient en Allah, qu'en lui donnant des associés.
ph: Wa Mā Yu'uminu 'Aktharuhum Billāhi 'Illā Wa Hum Mushrikūna

12:107
ar: أَفَأَمِنُوٓا۟ أَن تَأْتِيَهُمْ غَٰشِيَةٌۭ مِّنْ عَذَابِ ٱللَّهِ أَوْ تَأْتِيَهُمُ ٱلسَّاعَةُ بَغْتَةًۭ وَهُمْ لَا يَشْعُرُونَ
fr: Est-ce qu'ils sont sûrs que le châtiment d'Allah ne viendra pas les couvrir ou que l'Heure ne leur viendra pas soudainement, sans qu'ils s'en rendent compte ?
ph: 'Afa'aminū 'An Ta'tiyahum Ghāshiyatun Min `Adhābi Allāhi 'Aw Ta'tiyahumu As-Sā`atu Baghtatan Wa Hum Lā Yash`urūna

12:108
ar: قُلْ هَٰذِهِۦ سَبِيلِىٓ أَدْعُوٓا۟ إِلَى ٱللَّهِ ۚ عَلَىٰ بَصِيرَةٍ أَنَا۠ وَمَنِ ٱتَّبَعَنِى ۖ وَسُبْحَٰنَ ٱللَّهِ وَمَآ أَنَا۠ مِنَ ٱلْمُشْرِكِينَ
fr: Dis: « Voici ma voie, j'appelle les gens à [la religion] d'Allah, moi et ceux qui me suivent, nous basant sur une preuve évidente. Gloire à Allah ! Et je ne suis point du nombre des associateurs.
ph: Qul Hadhihi Sabīlī 'Ad`ū 'Ilá Allāhi `Alá Başīratin 'Anā Wa Mani Attaba`anī Wa Subĥāna Allāhi Wa Mā 'Anā Mina Al-Mushrikīna

12:109
ar: وَمَآ أَرْسَلْنَا مِن قَبْلِكَ إِلَّا رِجَالًۭا نُّوحِىٓ إِلَيْهِم مِّنْ أَهْلِ ٱلْقُرَىٰٓ ۗ أَفَلَمْ يَسِيرُوا۟ فِى ٱلْأَرْضِ فَيَنظُرُوا۟ كَيْفَ كَانَ عَٰقِبَةُ ٱلَّذِينَ مِن قَبْلِهِمْ ۗ وَلَدَارُ ٱلْءَاخِرَةِ خَيْرٌۭ لِّلَّذِينَ ٱتَّقَوْا۟ ۗ أَفَلَا تَعْقِلُونَ
fr: Nous n'avons envoyé avant toi que des hommes originaires des cités, à qui Nous avons fait des révélations. [Ces gens là] n'ont-ils pas parcouru la terre et considéré quelle fut la fin de ceux qui ont vécu avant eux ? La demeure de l'au-delà est assurément meilleure pour ceux qui craignent [Allah]. Ne raisonnerez-vous donc pas ?
ph: Wa Mā 'Arsalnā Min Qablika 'Illā Rijālāan Nūĥī 'Ilayhim Min 'Ahli Al-Qurá 'Afalam Yasīrū Fī Al-'Arđi Fayanžurū Kayfa Kāna `Āqibatu Al-Ladhīna Min Qablihim Wa Ladāru Al-'Ākhirati Khayrun Lilladhīna Attaqaw 'Afalā Ta`qilūna

12:110
ar: حَتَّىٰٓ إِذَا ٱسْتَيْـَٔسَ ٱلرُّسُلُ وَظَنُّوٓا۟ أَنَّهُمْ قَدْ كُذِبُوا۟ جَآءَهُمْ نَصْرُنَا فَنُجِّىَ مَن نَّشَآءُ ۖ وَلَا يُرَدُّ بَأْسُنَا عَنِ ٱلْقَوْمِ ٱلْمُجْرِمِينَ
fr: Quand les messagers faillirent perdre espoir (et que leurs adeptes) eurent pensé qu'ils étaient dupés voilà que vint à eux Notre secours. Et furent sauvés ceux que Nous voulûmes. Mais Notre rigueur ne saurait être détournée des gens criminels.
ph: Ĥattá 'Idhā Astay'asa Ar-Rusulu Wa Žannū 'Annahum Qad Kudhibū Jā'ahum Naşrunā Fanujjiya Man Nashā'u Wa Lā Yuraddu Ba'sunā `Ani Al-Qawmi Al-Mujrimīna

12:111
ar: لَقَدْ كَانَ فِى قَصَصِهِمْ عِبْرَةٌۭ لِّأُو۟لِى ٱلْأَلْبَٰبِ ۗ مَا كَانَ حَدِيثًۭا يُفْتَرَىٰ وَلَٰكِن تَصْدِيقَ ٱلَّذِى بَيْنَ يَدَيْهِ وَتَفْصِيلَ كُلِّ شَىْءٍۢ وَهُدًۭى وَرَحْمَةًۭ لِّقَوْمٍۢ يُؤْمِنُونَ
fr: Dans leurs récits il y a certes une leçon pour les gens doués d'intelligence. Ce n'est point là un récit fabriqué. C'est au contraire la confirmation de ce qui existait déjà avant lui, un exposé détaillé de toute chose, un guide et une miséricorde pour des gens qui croient.
ph: Laqad Kāna Fī Qaşaşihim `Ibratun Li'wlī Al-'Albābi Mā Kāna Ĥadīthāan Yuftará Wa Lakin Taşdīqa Al-Ladhī Bayna Yadayhi Wa Tafşīla Kulli Shay'in Wa Hudáan Wa Raĥmatan Liqawmin Yu'uminūna 

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

# ---------- Sourate 21 · Al-Anbiyā ----------

21:1
ar: ٱقْتَرَبَ لِلنَّاسِ حِسَابُهُمْ وَهُمْ فِى غَفْلَةٍۢ مُّعْرِضُونَ
fr: [L'échéance] du règlement de leur compte approche pour les hommes, alors que dans leur insouciance ils s'en détournent.
ph: Aqtaraba Lilnnāsi Ĥisābuhum Wa Hum Fī Ghaflatin Mu`riđūna

21:2
ar: مَا يَأْتِيهِم مِّن ذِكْرٍۢ مِّن رَّبِّهِم مُّحْدَثٍ إِلَّا ٱسْتَمَعُوهُ وَهُمْ يَلْعَبُونَ
fr: Aucun rappel [de révélation] récente ne leur vient de leur Seigneur, sans qu'ils ne l'entendent en s'amusant,
ph: Mā Ya'tīhim Min Dhikrin Min Rabbihim Muĥdathin 'Illā Astama`ūhu Wa Hum Yal`abūna

21:3
ar: لَاهِيَةًۭ قُلُوبُهُمْ ۗ وَأَسَرُّوا۟ ٱلنَّجْوَى ٱلَّذِينَ ظَلَمُوا۟ هَلْ هَٰذَآ إِلَّا بَشَرٌۭ مِّثْلُكُمْ ۖ أَفَتَأْتُونَ ٱلسِّحْرَ وَأَنتُمْ تُبْصِرُونَ
fr: leurs cœurs distraits; et les injustes tiennent des conversations secrètes et disent: « Ce n'est là qu'un être humain semblable à vous ? Allez-vous donc vous adonner à la magie alors que vous voyez clair ? »
ph: Lāhiyatan Qulūbuhum Wa 'Asarrū An-Najwá Al-Ladhīna Žalamū Hal Hādhā 'Illā Basharun Mithlukum 'Afata'tūna As-Siĥra Wa 'Antum Tubşirūna

21:4
ar: قَالَ رَبِّى يَعْلَمُ ٱلْقَوْلَ فِى ٱلسَّمَآءِ وَٱلْأَرْضِ ۖ وَهُوَ ٱلسَّمِيعُ ٱلْعَلِيمُ
fr: Il a répondu: « Mon Seigneur sait tout ce qui se dit au ciel et sur la terre; et Il est l'Audient, l'Omniscient. »
ph: Qāla Rabbī Ya`lamu Al-Qawla Fī As-Samā'i Wa Al-'Arđi Wa Huwa As-Samī`u Al-`Alīmu

21:5
ar: بَلْ قَالُوٓا۟ أَضْغَٰثُ أَحْلَٰمٍۭ بَلِ ٱفْتَرَىٰهُ بَلْ هُوَ شَاعِرٌۭ فَلْيَأْتِنَا بِـَٔايَةٍۢ كَمَآ أُرْسِلَ ٱلْأَوَّلُونَ
fr: Mais ils dirent: « Voilà plutôt un amas de rêves ! Ou bien il l'a inventé. Ou, c'est plutôt un poète. Qu'il nous apporte donc un signe [identique] à celui dont furent chargés les premiers envoyés. »
ph: Bal Qālū 'Ađghāthu 'Aĥlāmin Bal Aftarāhu Bal Huwa Shā`irun Falya'tinā Bi'āyatin Kamā 'Ursila Al-'Awwalūna

21:6
ar: مَآ ءَامَنَتْ قَبْلَهُم مِّن قَرْيَةٍ أَهْلَكْنَٰهَآ ۖ أَفَهُمْ يُؤْمِنُونَ
fr: Pas une seule cité parmi celles que Nous avons fait périr avant eux n'avait cru [à la vue des miracles]. Ceux-ci croiront-ils donc ?
ph: Mā 'Āmanat Qablahum Min Qaryatin 'Ahlaknāhā 'Afahum Yu'uminūna

21:7
ar: وَمَآ أَرْسَلْنَا قَبْلَكَ إِلَّا رِجَالًۭا نُّوحِىٓ إِلَيْهِمْ ۖ فَسْـَٔلُوٓا۟ أَهْلَ ٱلذِّكْرِ إِن كُنتُمْ لَا تَعْلَمُونَ
fr: Nous n'avons envoyé avant toi que des hommes à qui Nous faisions des révélations. Demandez donc aux érudits du Livre, si vous ne savez pas.
ph: Wa Mā 'Arsalnā Qablaka 'Illā Rijālāan Nūĥī 'Ilayhim Fās'alū 'Ahla Adh-Dhikri 'In Kuntum Lā Ta`lamūna

21:8
ar: وَمَا جَعَلْنَٰهُمْ جَسَدًۭا لَّا يَأْكُلُونَ ٱلطَّعَامَ وَمَا كَانُوا۟ خَٰلِدِينَ
fr: Et Nous n'en avons pas fait des corps qui ne consommaient pas de nourriture. Et ils n'étaient pas éternels.
ph: Wa Mā Ja`alnāhum Jasadāan Lā Ya'kulūna Aţ-Ţa`āma Wa Mā Kānū Khālidīna

21:9
ar: ثُمَّ صَدَقْنَٰهُمُ ٱلْوَعْدَ فَأَنجَيْنَٰهُمْ وَمَن نَّشَآءُ وَأَهْلَكْنَا ٱلْمُسْرِفِينَ
fr: Puis Nous réalisâmes la promesse (qui leur avait été faite). Nous les sauvâmes avec ceux que Nous voulûmes [sauver]. Et Nous fîmes périr les outranciers.
ph: Thumma Şadaqnāhumu Al-Wa`da Fa'anjaynāhum Wa Man Nashā'u Wa 'Ahlaknā Al-Musrifīna

21:10
ar: لَقَدْ أَنزَلْنَآ إِلَيْكُمْ كِتَٰبًۭا فِيهِ ذِكْرُكُمْ ۖ أَفَلَا تَعْقِلُونَ
fr: Nous avons assurément fait descendre vers vous un livre où se trouve votre rappel [ou votre renom]. Ne comprenez-vous donc pas ?
ph: Laqad 'Anzalnā 'Ilaykum Kitābāan Fīhi Dhikrukum 'Afalā Ta`qilūna

21:11
ar: وَكَمْ قَصَمْنَا مِن قَرْيَةٍۢ كَانَتْ ظَالِمَةًۭ وَأَنشَأْنَا بَعْدَهَا قَوْمًا ءَاخَرِينَ
fr: Et que de cités qui ont commis des injustices, Nous avons brisées; et Nous avons créé d'autres peuples après eux.
ph: Wa Kam Qaşamnā Min Qaryatin Kānat Žālimatan Wa 'Ansha'nā Ba`dahā Qawmāan 'Ākharīna

21:12
ar: فَلَمَّآ أَحَسُّوا۟ بَأْسَنَآ إِذَا هُم مِّنْهَا يَرْكُضُونَ
fr: Quand [ces gens] sentirent Notre rigueur ils s'en enfuirent hâtivement.
ph: Falammā 'Aĥassū Ba'sanā 'Idhā Hum Minhā Yarkuđūna

21:13
ar: لَا تَرْكُضُوا۟ وَٱرْجِعُوٓا۟ إِلَىٰ مَآ أُتْرِفْتُمْ فِيهِ وَمَسَٰكِنِكُمْ لَعَلَّكُمْ تُسْـَٔلُونَ
fr: Ne galopez point. Retournez plutôt au grand luxe où vous étiez et dans vos demeures, afin que vous soyez interrogés.
ph: Lā Tarkuđū Wa Arji`ū 'Ilá Mā 'Utriftum Fīhi Wa Masākinikum La`allakum Tus'alūna

21:14
ar: قَالُوا۟ يَٰوَيْلَنَآ إِنَّا كُنَّا ظَٰلِمِينَ
fr: Ils dirent: « Malheur à nous ! Nous étions vraiment injustes. »
ph: Qālū Yā Waylanā 'Innā Kunnā Žālimīna

21:15
ar: فَمَا زَالَت تِّلْكَ دَعْوَىٰهُمْ حَتَّىٰ جَعَلْنَٰهُمْ حَصِيدًا خَٰمِدِينَ
fr: Telle ne cessa d'être leur lamentation jusqu'à ce que Nous les eûmes moissonnés et éteints.
ph: Famā Zālat Tilka Da`wāhum Ĥattá Ja`alnāhum Ĥaşīdāan Khāmidīna

21:16
ar: وَمَا خَلَقْنَا ٱلسَّمَآءَ وَٱلْأَرْضَ وَمَا بَيْنَهُمَا لَٰعِبِينَ
fr: Ce n'est pas par jeu que Nous avons créé le ciel et la terre et ce qui est entre eux.
ph: Wa Mā Khalaqnā As-Samā'a Wa Al-'Arđa Wa Mā Baynahumā Lā`ibīna

21:17
ar: لَوْ أَرَدْنَآ أَن نَّتَّخِذَ لَهْوًۭا لَّٱتَّخَذْنَٰهُ مِن لَّدُنَّآ إِن كُنَّا فَٰعِلِينَ
fr: Si Nous avions voulu prendre une distraction, Nous l'aurions prise de Nous-mêmes, si vraiment Nous avions voulu le faire.
ph: Law 'Aradnā 'An Nattakhidha Lahwan Lāttakhadhnāhu Min Ladunnā 'In Kunnā Fā`ilīna

21:18
ar: بَلْ نَقْذِفُ بِٱلْحَقِّ عَلَى ٱلْبَٰطِلِ فَيَدْمَغُهُۥ فَإِذَا هُوَ زَاهِقٌۭ ۚ وَلَكُمُ ٱلْوَيْلُ مِمَّا تَصِفُونَ
fr: Bien au contraire, Nous lançons contre le faux la vérité qui le subjugue, et le voilà qui disparaît. Et malheur à vous pour ce que vous attribuez [injustement à Allah].
ph: Bal Naqdhifu Bil-Ĥaqqi `Alá Al-Bāţili Fayadmaghuhu Fa'idhā Huwa Zāhiqun Wa Lakumu Al-Waylu Mimmā Taşifūna

21:19
ar: وَلَهُۥ مَن فِى ٱلسَّمَٰوَٰتِ وَٱلْأَرْضِ ۚ وَمَنْ عِندَهُۥ لَا يَسْتَكْبِرُونَ عَنْ عِبَادَتِهِۦ وَلَا يَسْتَحْسِرُونَ
fr: À Lui seul appartiennent tous ceux qui sont dans les cieux et sur la terre. Ceux qui sont auprès de Lui [les Anges] ne se considèrent point trop grands pour L'adorer et ne s'en lassent pas.
ph: Wa Lahu Man Fī As-Samāwāti Wa Al-'Arđi Wa Man `Indahu Lā Yastakbirūna `An `Ibādatihi Wa Lā Yastaĥsirūna

21:20
ar: يُسَبِّحُونَ ٱلَّيْلَ وَٱلنَّهَارَ لَا يَفْتُرُونَ
fr: Ils exaltent Sa Gloire nuit et jour et ne s'interrompent point.
ph: Yusabbiĥūna Al-Layla Wa An-Nahāra Lā Yafturūna

21:21
ar: أَمِ ٱتَّخَذُوٓا۟ ءَالِهَةًۭ مِّنَ ٱلْأَرْضِ هُمْ يُنشِرُونَ
fr: Ont-ils pris des divinités qui peuvent ressusciter (les morts) de la terre ?
ph: 'Am Attakhadhū 'Ālihatan Mina Al-'Arđi Hum Yunshirūna

21:22
ar: لَوْ كَانَ فِيهِمَآ ءَالِهَةٌ إِلَّا ٱللَّهُ لَفَسَدَتَا ۚ فَسُبْحَٰنَ ٱللَّهِ رَبِّ ٱلْعَرْشِ عَمَّا يَصِفُونَ
fr: S'il y avait dans le ciel et la terre des divinités autre qu'Allah, tous deux seraient certes dans le désordre. Gloire, donc à Allah, Seigneur du Trône; Il est au-dessus de ce qu'ils Lui attribuent !
ph: Law Kāna Fīhimā 'Ālihatun 'Illā Allāhu Lafasadatā Fasubĥāna Allāhi Rabbi Al-`Arshi `Ammā Yaşifūna

21:23
ar: لَا يُسْـَٔلُ عَمَّا يَفْعَلُ وَهُمْ يُسْـَٔلُونَ
fr: Il n'est pas interrogé sur ce qu'Il fait, mais ce sont eux qui devront rendre compte [de leurs actes].
ph: Lā Yus'alu `Ammā Yaf`alu Wa Hum Yus'alūna

21:24
ar: أَمِ ٱتَّخَذُوا۟ مِن دُونِهِۦٓ ءَالِهَةًۭ ۖ قُلْ هَاتُوا۟ بُرْهَٰنَكُمْ ۖ هَٰذَا ذِكْرُ مَن مَّعِىَ وَذِكْرُ مَن قَبْلِى ۗ بَلْ أَكْثَرُهُمْ لَا يَعْلَمُونَ ٱلْحَقَّ ۖ فَهُم مُّعْرِضُونَ
fr: Ont-ils pris des divinités en dehors de Lui ? Dis: « Apportez votre preuve. » Ceci est la révélation de ceux qui sont avec moi et de ceux qui étaient avant moi. Mais la plupart d'entre eux ne connaissent pas la vérité et s'en écartent.
ph: 'Am Attakhadhū Min Dūnihi 'Ālihatan Qul Hātū Burhānakum Hādhā Dhikru Man Ma`iya Wa Dhikru Man Qablī Bal 'Aktharuhum Lā Ya`lamūna Al-Ĥaqqa Fahum Mu`riđūna

21:25
ar: وَمَآ أَرْسَلْنَا مِن قَبْلِكَ مِن رَّسُولٍ إِلَّا نُوحِىٓ إِلَيْهِ أَنَّهُۥ لَآ إِلَٰهَ إِلَّآ أَنَا۠ فَٱعْبُدُونِ
fr: Et Nous n'avons envoyé avant toi aucun Messager à qui Nous n'ayons révélé: « Point de divinité en dehors de Moi. Adorez-Moi donc. »
ph: Wa Mā 'Arsalnā Min Qablika Min Rasūl 'Iinillā Nūĥī 'Ilayhi 'Annahu Lā 'Ilāha 'Illā 'Anā Fā`budūni

21:26
ar: وَقَالُوا۟ ٱتَّخَذَ ٱلرَّحْمَٰنُ وَلَدًۭا ۗ سُبْحَٰنَهُۥ ۚ بَلْ عِبَادٌۭ مُّكْرَمُونَ
fr: Et ils dirent: « Le Tout Miséricordieux s'est donné un enfant. » Pureté à Lui ! Mais ce sont plutôt des serviteurs honorés.
ph: Wa Qālū Attakhadha Ar-Raĥmānu Waladāan Subĥānahu Bal `Ibādun Mukramūna

21:27
ar: لَا يَسْبِقُونَهُۥ بِٱلْقَوْلِ وَهُم بِأَمْرِهِۦ يَعْمَلُونَ
fr: Ils ne devancent pas Son Commandement et agissent selon Ses ordres.
ph: Lā Yasbiqūnahu Bil-Qawli Wa Hum Bi'amrihi Ya`malūna

21:28
ar: يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يَشْفَعُونَ إِلَّا لِمَنِ ٱرْتَضَىٰ وَهُم مِّنْ خَشْيَتِهِۦ مُشْفِقُونَ
fr: Il sait ce qui est devant eux et ce qui est derrière eux. Et ils n'intercèdent qu'en faveur de ceux qu'Il a agréés [tout en étant] pénétrés de Sa crainte.
ph: Ya`lamu Mā Bayna 'Aydīhim Wa Mā Khalfahum Wa Lā Yashfa`ūna 'Illā Limani Artađá Wa Hum Min Khashyatihi Mushfiqūna

21:29
ar: ۞ وَمَن يَقُلْ مِنْهُمْ إِنِّىٓ إِلَٰهٌۭ مِّن دُونِهِۦ فَذَٰلِكَ نَجْزِيهِ جَهَنَّمَ ۚ كَذَٰلِكَ نَجْزِى ٱلظَّٰلِمِينَ
fr: Et quiconque d'entre eux dirait: « Je suis une divinité en dehors de Lui. » Nous le rétribuerons de l'Enfer. C'est ainsi que Nous rétribuons les injustes.
ph: Wa Man Yaqul Minhum 'Innī 'Ilahun Min Dūnihi Fadhālika Najzīhi Jahannama Kadhālika Najzī Až-Žālimīna

21:30
ar: أَوَلَمْ يَرَ ٱلَّذِينَ كَفَرُوٓا۟ أَنَّ ٱلسَّمَٰوَٰتِ وَٱلْأَرْضَ كَانَتَا رَتْقًۭا فَفَتَقْنَٰهُمَا ۖ وَجَعَلْنَا مِنَ ٱلْمَآءِ كُلَّ شَىْءٍ حَىٍّ ۖ أَفَلَا يُؤْمِنُونَ
fr: Ceux qui ont mécru, n'ont-ils pas vu que les cieux et la terre formaient une masse compacte ? Ensuite Nous les avons séparés et fait de l'eau toute chose vivante. Ne croiront-ils donc pas ?
ph: 'Awalam Yará Al-Ladhīna Kafarū 'Anna As-Samāwāti Wa Al-'Arđa Kānatā Ratqāan Fafataqnāhumā Wa Ja`alnā Mina Al-Mā'i Kulla Shay'in Ĥayyin 'Afalā Yu'uminūna

21:31
ar: وَجَعَلْنَا فِى ٱلْأَرْضِ رَوَٰسِىَ أَن تَمِيدَ بِهِمْ وَجَعَلْنَا فِيهَا فِجَاجًۭا سُبُلًۭا لَّعَلَّهُمْ يَهْتَدُونَ
fr: Et Nous avons placé des montagnes fermes dans la terre, afin qu'elle ne s'ébranle pas en les [entraînant]. Et Nous y avons placé des défilés servant de chemins afin qu'ils se guident.
ph: Wa Ja`alnā Fī Al-'Arđi Rawāsiya 'An Tamīda Bihim Wa Ja`alnā Fīhā Fijājāan Subulāan La`allahum Yahtadūna

21:32
ar: وَجَعَلْنَا ٱلسَّمَآءَ سَقْفًۭا مَّحْفُوظًۭا ۖ وَهُمْ عَنْ ءَايَٰتِهَا مُعْرِضُونَ
fr: Et Nous avons fait du ciel un toit protégé. Et cependant ils se détournent de ses merveilles.
ph: Wa Ja`alnā As-Samā'a Saqfāan Maĥfūžāan Wa Hum `An 'Āyātihā Mu`riđūna

21:33
ar: وَهُوَ ٱلَّذِى خَلَقَ ٱلَّيْلَ وَٱلنَّهَارَ وَٱلشَّمْسَ وَٱلْقَمَرَ ۖ كُلٌّۭ فِى فَلَكٍۢ يَسْبَحُونَ
fr: Et c'est Lui qui a créé la nuit et le jour, le soleil et la lune; chacun voguant dans une orbite.
ph: Wa Huwa Al-Ladhī Khalaqa Al-Layla Wa An-Nahāra Wa Ash-Shamsa Wa Al-Qamara Kullun Fī Falakin Yasbaĥūna

21:34
ar: وَمَا جَعَلْنَا لِبَشَرٍۢ مِّن قَبْلِكَ ٱلْخُلْدَ ۖ أَفَإِي۟ن مِّتَّ فَهُمُ ٱلْخَٰلِدُونَ
fr: Et Nous n'avons attribué l'immortalité à nul homme avant toi. Est-ce que si tu meurs, toi, ils seront, eux, éternels ?
ph: Wa Mā Ja`alnā Libasharin Min Qablika Al-Khulda 'Afa'īn Mitta Fahumu Al-Khālidūna

21:35
ar: كُلُّ نَفْسٍۢ ذَآئِقَةُ ٱلْمَوْتِ ۗ وَنَبْلُوكُم بِٱلشَّرِّ وَٱلْخَيْرِ فِتْنَةًۭ ۖ وَإِلَيْنَا تُرْجَعُونَ
fr: Toute âme doit goûter la mort. Nous vous éprouverons par le mal et par le bien [à titre] de tentation. Et c'est à Nous que vous serez ramenés.
ph: Kullu Nafsin Dhā'iqatu Al-Mawti Wa Nablūkum Bish-Sharri Wa Al-Khayri Fitnatan Wa 'Ilaynā Turja`ūna

21:36
ar: وَإِذَا رَءَاكَ ٱلَّذِينَ كَفَرُوٓا۟ إِن يَتَّخِذُونَكَ إِلَّا هُزُوًا أَهَٰذَا ٱلَّذِى يَذْكُرُ ءَالِهَتَكُمْ وَهُم بِذِكْرِ ٱلرَّحْمَٰنِ هُمْ كَٰفِرُونَ
fr: Quand les mécréants te voient, ils ne te prennent qu'en dérision (disant): « Quoi ! Est-ce-là celui qui médit de vos divinités ? » Et ils nient [tout] rappel du Tout Miséricordieux.
ph: Wa 'Idhā Ra'āka Al-Ladhīna Kafarū 'In Yattakhidhūnaka 'Illā Huzūan 'Ahadhā Al-Ladhī Yadhkuru 'Ālihatakum Wa Hum Bidhikri Ar-Raĥmāni Hum Kāfirūna

21:37
ar: خُلِقَ ٱلْإِنسَٰنُ مِنْ عَجَلٍۢ ۚ سَأُو۟رِيكُمْ ءَايَٰتِى فَلَا تَسْتَعْجِلُونِ
fr: L'homme a été créé prompt dans sa nature. Je vous montrerai Mes signes [la réalisation de Mes menaces]. Ne me hâtez donc pas.
ph: Khuliqa Al-'Insānu Min `Ajalin Sa'urīkum 'Āyātī Falā Tasta`jilūni

21:38
ar: وَيَقُولُونَ مَتَىٰ هَٰذَا ٱلْوَعْدُ إِن كُنتُمْ صَٰدِقِينَ
fr: Et ils disent: « À quand cette promesse si vous êtes véridiques ? »
ph: Wa Yaqūlūna Matá Hādhā Al-Wa`du 'In Kuntum Şādiqīna

21:39
ar: لَوْ يَعْلَمُ ٱلَّذِينَ كَفَرُوا۟ حِينَ لَا يَكُفُّونَ عَن وُجُوهِهِمُ ٱلنَّارَ وَلَا عَن ظُهُورِهِمْ وَلَا هُمْ يُنصَرُونَ
fr: Si [seulement] les mécréants connaissaient le moment où ils ne pourront empêcher le feu de leur visage ni de leur dos, et où ils ne seront point secourus.
ph: Law Ya`lamu Al-Ladhīna Kafarū Ĥīna Lā Yakuffūna `An Wujūhihimu An-Nāra Wa Lā `An Žuhūrihim Wa Lā Hum Yunşarūna

21:40
ar: بَلْ تَأْتِيهِم بَغْتَةًۭ فَتَبْهَتُهُمْ فَلَا يَسْتَطِيعُونَ رَدَّهَا وَلَا هُمْ يُنظَرُونَ
fr: Mais non, cela leur viendra subitement et ils seront alors stupéfaits; ils ne pourront pas le repousser et on ne leur donnera pas de répit.
ph: Bal Ta'tīhim Baghtatan Fatabhatuhum Falā Yastaţī`ūna Raddahā Wa Lā Hum Yunžarūna

21:41
ar: وَلَقَدِ ٱسْتُهْزِئَ بِرُسُلٍۢ مِّن قَبْلِكَ فَحَاقَ بِٱلَّذِينَ سَخِرُوا۟ مِنْهُم مَّا كَانُوا۟ بِهِۦ يَسْتَهْزِءُونَ
fr: On s'est moqué de messagers venus avant toi. Et ceux qui se sont moqués d'eux, se virent frapper de toutes parts par l'objet même de leurs moqueries.
ph: Wa Laqadi Astuhzi'a Birusulin Min Qablika Faĥāqa Bial-Ladhīna Sakhirū Minhum Mā Kānū Bihi Yastahzi'ūn

21:42
ar: قُلْ مَن يَكْلَؤُكُم بِٱلَّيْلِ وَٱلنَّهَارِ مِنَ ٱلرَّحْمَٰنِ ۗ بَلْ هُمْ عَن ذِكْرِ رَبِّهِم مُّعْرِضُونَ
fr: Dis: « Qui vous protège la nuit et le jour, contre le [châtiment] du Tout Miséricordieux ? » Pourtant ils se détournent du rappel de leur Seigneur.
ph: Qul Man Yakla'uukum Bil-Layli Wa An-Nahāri Mina Ar-Raĥmāni Bal Hum `An Dhikri Rabbihim Mu`riđūna

21:43
ar: أَمْ لَهُمْ ءَالِهَةٌۭ تَمْنَعُهُم مِّن دُونِنَا ۚ لَا يَسْتَطِيعُونَ نَصْرَ أَنفُسِهِمْ وَلَا هُم مِّنَّا يُصْحَبُونَ
fr: Ont-ils donc des divinités en dehors de Nous, qui peuvent les protéger ? Mais celles-ci ne peuvent ni se secourir elles-mêmes, ni se faire assister contre Nous.
ph: 'Am Lahum 'Ālihatun Tamna`uhum Min Dūninā Lā Yastaţī`ūna Naşra 'Anfusihim Wa Lā Hum Minnā Yuşĥabūna

21:44
ar: بَلْ مَتَّعْنَا هَٰٓؤُلَآءِ وَءَابَآءَهُمْ حَتَّىٰ طَالَ عَلَيْهِمُ ٱلْعُمُرُ ۗ أَفَلَا يَرَوْنَ أَنَّا نَأْتِى ٱلْأَرْضَ نَنقُصُهَا مِنْ أَطْرَافِهَآ ۚ أَفَهُمُ ٱلْغَٰلِبُونَ
fr: Au contraire Nous avons accordé une jouissance [temporaire] à ceux-là comme à leurs ancêtres jusqu'à un âge avancé. Ne voient-ils pas que Nous venons à la terre que Nous réduisons de tous côtés ? Seront-ils alors les vainqueurs ?
ph: Bal Matta`nā Hā'uulā' Wa 'Ābā'ahum Ĥattá Ţāla `Alayhimu Al-`Umuru 'Afalā Yarawna 'Annā Na'tī Al-'Arđa Nanquşuhā Min 'Aţrāfihā 'Afahumu Al-Ghālibūna

21:45
ar: قُلْ إِنَّمَآ أُنذِرُكُم بِٱلْوَحْىِ ۚ وَلَا يَسْمَعُ ٱلصُّمُّ ٱلدُّعَآءَ إِذَا مَا يُنذَرُونَ
fr: Dis: « Je vous avertis par ce qui m'est révélé. » Les sourds, cependant, n'entendent pas l'appel quand on les avertit.
ph: Qul 'Innamā 'Undhirukum Bil-Waĥyi Wa Lā Yasma`u Aş-Şummu Ad-Du`ā'a 'Idhā Mā Yundharūna

21:46
ar: وَلَئِن مَّسَّتْهُمْ نَفْحَةٌۭ مِّنْ عَذَابِ رَبِّكَ لَيَقُولُنَّ يَٰوَيْلَنَآ إِنَّا كُنَّا ظَٰلِمِينَ
fr: Si un souffle du châtiment de ton Seigneur les effleurait, ils diraient alors: « Malheur à nous ! Nous étions vraiment injustes. »
ph: Wa La'in Massat/hum Nafĥatun Min `Adhābi Rabbika Layaqūlunna Yā Waylanā 'Innā Kunnā Žālimīna

21:47
ar: وَنَضَعُ ٱلْمَوَٰزِينَ ٱلْقِسْطَ لِيَوْمِ ٱلْقِيَٰمَةِ فَلَا تُظْلَمُ نَفْسٌۭ شَيْـًۭٔا ۖ وَإِن كَانَ مِثْقَالَ حَبَّةٍۢ مِّنْ خَرْدَلٍ أَتَيْنَا بِهَا ۗ وَكَفَىٰ بِنَا حَٰسِبِينَ
fr: Au Jour de la Résurrection, Nous placerons les balances exactes. Nulle âme ne sera lésée en rien, fût-ce du poids d'un grain de moutarde que Nous ferons venir. Nous suffisons largement pour dresser les comptes.
ph: Wa Nađa`u Al-Mawāzīna Al-Qisţa Liyawmi Al-Qiyāmati Falā Tužlamu Nafsun Shay'āan Wa 'In Kāna Mithqāla Ĥabbatin Min Khardalin 'Ataynā Bihā Wa Kafá Binā Ĥāsibīna

21:48
ar: وَلَقَدْ ءَاتَيْنَا مُوسَىٰ وَهَٰرُونَ ٱلْفُرْقَانَ وَضِيَآءًۭ وَذِكْرًۭا لِّلْمُتَّقِينَ
fr: Nous avons déjà apporté à Musa (Moïse) et Harun (Aaron) le Livre du discernement (la Thora) ainsi qu'une lumière et un rappel pour les gens pieux,
ph: Wa Laqad 'Ātaynā Mūsá Wa Hārūna Al-Furqāna Wa Điyā'an Wa Dhikrāan Lilmuttaqīna

21:49
ar: ٱلَّذِينَ يَخْشَوْنَ رَبَّهُم بِٱلْغَيْبِ وَهُم مِّنَ ٱلسَّاعَةِ مُشْفِقُونَ
fr: qui craignent leur Seigneur malgré qu'ils ne Le voient pas, et redoutent l'Heure (la fin du monde).
ph: Al-Ladhīna Yakhshawna Rabbahum Bil-Ghaybi Wa Hum Mina As-Sā`ati Mushfiqūna

21:50
ar: وَهَٰذَا ذِكْرٌۭ مُّبَارَكٌ أَنزَلْنَٰهُ ۚ أَفَأَنتُمْ لَهُۥ مُنكِرُونَ
fr: Et ceci [le Coran] est un rappel béni que Nous avons fait descendre. Allez-vous donc le renier ?
ph: Wa Hadhā Dhikrun Mubārakun 'Anzalnāhu 'Afa'antum Lahu Munkirūna

21:51
ar: ۞ وَلَقَدْ ءَاتَيْنَآ إِبْرَٰهِيمَ رُشْدَهُۥ مِن قَبْلُ وَكُنَّا بِهِۦ عَٰلِمِينَ
fr: En effet, Nous avons mis auparavant Ibrahim (Abraham) sur le droit chemin. Et Nous en avions bonne connaissance.
ph: Wa Laqad 'Ātaynā 'Ibrāhīma Rushdahu Min Qablu Wa Kunnā Bihi `Ālimīna

21:52
ar: إِذْ قَالَ لِأَبِيهِ وَقَوْمِهِۦ مَا هَٰذِهِ ٱلتَّمَاثِيلُ ٱلَّتِىٓ أَنتُمْ لَهَا عَٰكِفُونَ
fr: Quand il dit à son père et à son peuple: « Que sont ces statues auxquelles vous vous attachez ? »
ph: 'Idh Qāla Li'abīhi Wa Qawmihi Mā Hadhihi At-Tamāthīlu Allatī 'Antum Lahā `Ākifūna

21:53
ar: قَالُوا۟ وَجَدْنَآ ءَابَآءَنَا لَهَا عَٰبِدِينَ
fr: ils dirent: « Nous avons trouvé nos ancêtres les adorant. »
ph: Qālū Wajadnā 'Ābā'anā Lahā `Ābidīna

21:54
ar: قَالَ لَقَدْ كُنتُمْ أَنتُمْ وَءَابَآؤُكُمْ فِى ضَلَٰلٍۢ مُّبِينٍۢ
fr: Il dit: « Certainement, vous avez été, vous et vos ancêtres, dans un égarement évident. »
ph: Qāla Laqad Kuntum 'Antum Wa 'Ābā'uukum Fī Đalālin Mubīnin

21:55
ar: قَالُوٓا۟ أَجِئْتَنَا بِٱلْحَقِّ أَمْ أَنتَ مِنَ ٱللَّٰعِبِينَ
fr: Ils dirent: « Viens-tu à nous avec la vérité ou plaisantes-tu ? »
ph: Qālū 'Aji'tanā Bil-Ĥaqqi 'Am 'Anta Mina Al-Lā`ibīna

21:56
ar: قَالَ بَل رَّبُّكُمْ رَبُّ ٱلسَّمَٰوَٰتِ وَٱلْأَرْضِ ٱلَّذِى فَطَرَهُنَّ وَأَنَا۠ عَلَىٰ ذَٰلِكُم مِّنَ ٱلشَّٰهِدِينَ
fr: Il dit: « Mais votre Seigneur est plutôt le Seigneur des cieux et de la terre, et c'est Lui qui les a créés. Et je suis un de ceux qui en témoignent.
ph: Qāla Bal Rabbukum Rabbu As-Samāwāti Wa Al-'Arđi Al-Ladhī Faţarahunna Wa 'Anā `Alá Dhālikum Mina Ash-Shāhidīna

21:57
ar: وَتَٱللَّهِ لَأَكِيدَنَّ أَصْنَٰمَكُم بَعْدَ أَن تُوَلُّوا۟ مُدْبِرِينَ
fr: Et par Allah ! Je ruserai certes contre vos idoles une fois que vous serez partis. »
ph: Wa Tālllahi La'akīdanna 'Aşnāmakum Ba`da 'An Tuwallū Mudbirīna

21:58
ar: فَجَعَلَهُمْ جُذَٰذًا إِلَّا كَبِيرًۭا لَّهُمْ لَعَلَّهُمْ إِلَيْهِ يَرْجِعُونَ
fr: Il les mit en pièces, hormis [la statue] la plus grande. Peut-être qu'ils reviendraient vers elle.
ph: Faja`alahum Judhādhāan 'Illā Kabīrāan Lahum La`allahum 'Ilayhi Yarji`ūna

21:59
ar: قَالُوا۟ مَن فَعَلَ هَٰذَا بِـَٔالِهَتِنَآ إِنَّهُۥ لَمِنَ ٱلظَّٰلِمِينَ
fr: Ils dirent: « Qui a fait cela à nos divinités ? Il est certes parmi les injustes. »
ph: Qālū Man Fa`ala Hādhā Bi'ālihatinā 'Innahu Lamina Až-Žālimīna

21:60
ar: قَالُوا۟ سَمِعْنَا فَتًۭى يَذْكُرُهُمْ يُقَالُ لَهُۥٓ إِبْرَٰهِيمُ
fr: (Certains) dirent: « Nous avons entendu un jeune homme médire d'elles; il s'appelle Ibrahim (Abraham). »
ph: Qālū Sami`nā Fatáan Yadhkuruhum Yuqālu Lahu 'Ibrāhīmu

21:61
ar: قَالُوا۟ فَأْتُوا۟ بِهِۦ عَلَىٰٓ أَعْيُنِ ٱلنَّاسِ لَعَلَّهُمْ يَشْهَدُونَ
fr: Ils dirent: « Amenez-le sous les yeux des gens afin qu'ils puissent témoigner. »
ph: Qālū Fa'tū Bihi `Alá 'A`yuni An-Nāsi La`allahum Yash/hadūna

21:62
ar: قَالُوٓا۟ ءَأَنتَ فَعَلْتَ هَٰذَا بِـَٔالِهَتِنَا يَٰٓإِبْرَٰهِيمُ
fr: (Alors) ils dirent: « Est-ce toi qui as fait cela à nos divinités, Ibrahim (Abraham) ? »
ph: Qālū 'A'anta Fa`alta Hādhā Bi'ālihatinā Yā 'Ibrāhīmu

21:63
ar: قَالَ بَلْ فَعَلَهُۥ كَبِيرُهُمْ هَٰذَا فَسْـَٔلُوهُمْ إِن كَانُوا۟ يَنطِقُونَ
fr: Il dit: « C'est la plus grande d'entre elles que voici, qui l'a fait. Demandez-leur donc, si elles peuvent parler. »
ph: Qāla Bal Fa`alahu Kabīruhum Hādhā Fās'alūhum 'In Kānū Yanţiqūna

21:64
ar: فَرَجَعُوٓا۟ إِلَىٰٓ أَنفُسِهِمْ فَقَالُوٓا۟ إِنَّكُمْ أَنتُمُ ٱلظَّٰلِمُونَ
fr: Se ravisant alors, ils se dirent entre eux: « C'est vous qui êtes les vrais injustes. »
ph: Faraja`ū 'Ilá 'Anfusihim Faqālū 'Innakum 'Antumu Až-Žālimūna

21:65
ar: ثُمَّ نُكِسُوا۟ عَلَىٰ رُءُوسِهِمْ لَقَدْ عَلِمْتَ مَا هَٰٓؤُلَآءِ يَنطِقُونَ
fr: Puis ils firent volte-face et dirent: « Tu sais bien que celles-ci ne parlent pas. »
ph: Thumma Nukisū `Alá Ru'ūsihim Laqad `Alimta Mā Hā'uulā' Yanţiqūna

21:66
ar: قَالَ أَفَتَعْبُدُونَ مِن دُونِ ٱللَّهِ مَا لَا يَنفَعُكُمْ شَيْـًۭٔا وَلَا يَضُرُّكُمْ
fr: Il dit: « Adorez-vous donc, en dehors d'Allah, ce qui ne saurait en rien vous être utile ni vous nuire non plus.
ph: Qāla 'Afata`budūna Min Dūni Allāhi Mā Lā Yanfa`ukum Shay'āan Wa Lā Yađurrukum

21:67
ar: أُفٍّۢ لَّكُمْ وَلِمَا تَعْبُدُونَ مِن دُونِ ٱللَّهِ ۖ أَفَلَا تَعْقِلُونَ
fr: Fi de vous et de ce que vous adorez en dehors d'Allah ! Ne raisonnez-vous pas ? »
ph: 'Uffin Lakum Wa Limā Ta`budūna Min Dūni Allāhi 'Afalā Ta`qilūna

21:68
ar: قَالُوا۟ حَرِّقُوهُ وَٱنصُرُوٓا۟ ءَالِهَتَكُمْ إِن كُنتُمْ فَٰعِلِينَ
fr: Ils dirent: « Brûlez-le. Secourez vos divinités si vous voulez faire quelque chose (pour elles). »
ph: Qālū Ĥarriqūhu Wa Anşurū 'Ālihatakum 'In Kuntum Fā`ilīna

21:69
ar: قُلْنَا يَٰنَارُ كُونِى بَرْدًۭا وَسَلَٰمًا عَلَىٰٓ إِبْرَٰهِيمَ
fr: Nous dîmes: « Ô feu, sois pour Ibrahim (Abraham) une fraîcheur salutaire. »
ph: Qulnā Yā Nāru Kūnī Bardāan Wa Salāmāan `Alá 'Ibrāhīma

21:70
ar: وَأَرَادُوا۟ بِهِۦ كَيْدًۭا فَجَعَلْنَٰهُمُ ٱلْأَخْسَرِينَ
fr: Ils voulaient ruser contre lui, mais ce sont eux que Nous rendîmes les plus grands perdants.
ph: Wa 'Arādū Bihi Kaydāan Faja`alnāhumu Al-'Akhsarīna

21:71
ar: وَنَجَّيْنَٰهُ وَلُوطًا إِلَى ٱلْأَرْضِ ٱلَّتِى بَٰرَكْنَا فِيهَا لِلْعَٰلَمِينَ
fr: Et Nous le sauvâmes, ainsi que Lut (Loth), vers une terre que Nous avions bénie pour tout l'univers.
ph: Wa Najjaynāhu Wa Lūţāan 'Ilá Al-'Arđi Allatī Bāraknā Fīhā Lil`ālamīna

21:72
ar: وَوَهَبْنَا لَهُۥٓ إِسْحَٰقَ وَيَعْقُوبَ نَافِلَةًۭ ۖ وَكُلًّۭا جَعَلْنَا صَٰلِحِينَ
fr: Et Nous lui donnâmes Ishaq (Isaac) et, de surcroît Ya'qub (Jacob), desquels Nous fîmes des gens de bien.
ph: Wa Wahabnā Lahu 'Isĥāqa Wa Ya`qūba Nāfilatan Wa Kullāan Ja`alnā Şāliĥīna

21:73
ar: وَجَعَلْنَٰهُمْ أَئِمَّةًۭ يَهْدُونَ بِأَمْرِنَا وَأَوْحَيْنَآ إِلَيْهِمْ فِعْلَ ٱلْخَيْرَٰتِ وَإِقَامَ ٱلصَّلَوٰةِ وَإِيتَآءَ ٱلزَّكَوٰةِ ۖ وَكَانُوا۟ لَنَا عَٰبِدِينَ
fr: Nous les fîmes des dirigeants qui guidaient par Notre ordre. Et Nous leur révélâmes de faire le bien, d'accomplir la prière et d'acquitter la Zakat. Et ils étaient Nos adorateurs.
ph: Wa Ja`alnāhum 'A'immatan Yahdūna Bi'amrinā Wa 'Awĥaynā 'Ilayhim Fi`la Al-Khayrāti Wa 'Iqāma Aş-Şalāati Wa 'Ītā'a Az-Zakāati Wa Kānū Lanā `Ābidīna

21:74
ar: وَلُوطًا ءَاتَيْنَٰهُ حُكْمًۭا وَعِلْمًۭا وَنَجَّيْنَٰهُ مِنَ ٱلْقَرْيَةِ ٱلَّتِى كَانَت تَّعْمَلُ ٱلْخَبَٰٓئِثَ ۗ إِنَّهُمْ كَانُوا۟ قَوْمَ سَوْءٍۢ فَٰسِقِينَ
fr: Et Lut (Loth) ! Nous lui avons apporté la capacité de juger et le savoir, et Nous l'avons sauvé de la cité où se commettaient les vices; ces gens étaient vraiment des gens du mal, des pervers.
ph: Wa Lūţāan 'Ātaynāhu Ĥukmāan Wa `Ilmāan Wa Najjaynāhu Mina Al-Qaryati Allatī Kānat Ta`malu Al-Khabā'itha 'Innahum Kānū Qawma Saw'in Fāsiqīna

21:75
ar: وَأَدْخَلْنَٰهُ فِى رَحْمَتِنَآ ۖ إِنَّهُۥ مِنَ ٱلصَّٰلِحِينَ
fr: Et Nous l'avons fait entrer en Notre miséricorde. Il était vraiment du nombre des gens de bien.
ph: Wa 'Adkhalnāhu Fī Raĥmatinā 'Innahu Mina Aş-Şāliĥīna

21:76
ar: وَنُوحًا إِذْ نَادَىٰ مِن قَبْلُ فَٱسْتَجَبْنَا لَهُۥ فَنَجَّيْنَٰهُ وَأَهْلَهُۥ مِنَ ٱلْكَرْبِ ٱلْعَظِيمِ
fr: Et Nuh (Noé), quand auparavant il fit son appel. Nous l'exauçâmes et Nous le sauvâmes, ainsi que sa famille, de la grande angoisse,
ph: Wa Nūĥāan 'Idh Nādá Min Qablu Fāstajabnā Lahu Fanajjaynāhu Wa 'Ahlahu Mina Al-Karbi Al-`Ažīmi

21:77
ar: وَنَصَرْنَٰهُ مِنَ ٱلْقَوْمِ ٱلَّذِينَ كَذَّبُوا۟ بِـَٔايَٰتِنَآ ۚ إِنَّهُمْ كَانُوا۟ قَوْمَ سَوْءٍۢ فَأَغْرَقْنَٰهُمْ أَجْمَعِينَ
fr: et Nous le secourûmes contre le peuple qui traitait Nos prodiges de mensonges. Ils furent vraiment des gens du Mal. Nous les noyâmes donc tous.
ph: Wa Naşarnāhu Mina Al-Qawmi Al-Ladhīna Kadhabū Bi'āyātinā 'Innahum Kānū Qawma Saw'in Fa'aghraqnāhum 'Ajma`īna

21:78
ar: وَدَاوُۥدَ وَسُلَيْمَٰنَ إِذْ يَحْكُمَانِ فِى ٱلْحَرْثِ إِذْ نَفَشَتْ فِيهِ غَنَمُ ٱلْقَوْمِ وَكُنَّا لِحُكْمِهِمْ شَٰهِدِينَ
fr: Et Dawud (David), et Sulayman (Salomon), quand ils eurent à juger au sujet d'un champ cultivé où des moutons appartenant à une peuplade étaient allés paître, la nuit. Et Nous étions témoin de leur jugement.
ph: Wa Dāwūda Wa Sulaymāna 'Idh Yaĥkumāni Fī Al-Ĥarthi 'Idh Nafashat Fīhi Ghanamu Al-Qawmi Wa Kunnā Liĥukmihim Shāhidīna

21:79
ar: فَفَهَّمْنَٰهَا سُلَيْمَٰنَ ۚ وَكُلًّا ءَاتَيْنَا حُكْمًۭا وَعِلْمًۭا ۚ وَسَخَّرْنَا مَعَ دَاوُۥدَ ٱلْجِبَالَ يُسَبِّحْنَ وَٱلطَّيْرَ ۚ وَكُنَّا فَٰعِلِينَ
fr: Nous la fîmes comprendre à Sulayman (Salomon). Et à chacun Nous donnâmes la faculté de juger et le savoir. Et Nous asservîmes les montagnes à exalter Notre Gloire en compagnie de Dawud (David), ainsi que les oiseaux. Et c'est Nous qui sommes le Faiseur.
ph: Fafahhamnāhā Sulaymāna Wa Kullāan 'Ātaynā Ĥukmāan Wa `Ilmāan Wa Sakhkharnā Ma`a Dāwūda Al-Jibāla Yusabbiĥna Wa Aţ-Ţayra Wa Kunnā Fā`ilīna

21:80
ar: وَعَلَّمْنَٰهُ صَنْعَةَ لَبُوسٍۢ لَّكُمْ لِتُحْصِنَكُم مِّنۢ بَأْسِكُمْ ۖ فَهَلْ أَنتُمْ شَٰكِرُونَ
fr: Nous lui (Dawud (David)) apprîmes la fabrication des cottes de mailles afin qu'elles vous protègent contre vos violences mutuelles (la guerre). En êtes-vous donc reconnaissants ?
ph: Wa `Allamnāhu Şan`ata Labūsin Lakum Lituĥşinakum Min Ba'sikum Fahal 'Antum Shākirūna

21:81
ar: وَلِسُلَيْمَٰنَ ٱلرِّيحَ عَاصِفَةًۭ تَجْرِى بِأَمْرِهِۦٓ إِلَى ٱلْأَرْضِ ٱلَّتِى بَٰرَكْنَا فِيهَا ۚ وَكُنَّا بِكُلِّ شَىْءٍ عَٰلِمِينَ
fr: Et (Nous avons soumis) à Sulayman (Salomon) le vent impétueux qui, par son ordre, se dirigea vers la terre que Nous avions bénie. Et Nous sommes à même de tout savoir,
ph: Wa Lisulaymāna Ar-Rīĥa `Āşifatan Tajrī Bi'amrihi 'Ilá Al-'Arđi Allatī Bāraknā Fīhā Wa Kunnā Bikulli Shay'in `Ālimīna

21:82
ar: وَمِنَ ٱلشَّيَٰطِينِ مَن يَغُوصُونَ لَهُۥ وَيَعْمَلُونَ عَمَلًۭا دُونَ ذَٰلِكَ ۖ وَكُنَّا لَهُمْ حَٰفِظِينَ
fr: et parmi les diables il en était qui plongeaient pour lui et faisaient d'autres travaux encore, et Nous les surveillions Nous-mêmes.
ph: Wa Mina Ash-Shayāţīni Man Yaghūşūna Lahu Wa Ya`malūna `Amalāan Dūna Dhālika Wa Kunnā Lahum Ĥāfižīna

21:83
ar: ۞ وَأَيُّوبَ إِذْ نَادَىٰ رَبَّهُۥٓ أَنِّى مَسَّنِىَ ٱلضُّرُّ وَأَنتَ أَرْحَمُ ٱلرَّٰحِمِينَ
fr: Et Ayyub (Job), quand il implora son Seigneur: « Le mal m'a touché. Mais Toi, tu es le plus miséricordieux des miséricordieux » !
ph: Wa 'Ayyūba 'Idh Nādá Rabbahu 'Annī Massanī Ađ-Đurru Wa 'Anta 'Arĥamu Ar-Rāĥimīna

21:84
ar: فَٱسْتَجَبْنَا لَهُۥ فَكَشَفْنَا مَا بِهِۦ مِن ضُرٍّۢ ۖ وَءَاتَيْنَٰهُ أَهْلَهُۥ وَمِثْلَهُم مَّعَهُمْ رَحْمَةًۭ مِّنْ عِندِنَا وَذِكْرَىٰ لِلْعَٰبِدِينَ
fr: Nous l'exauçâmes, enlevâmes le mal qu'il avait, lui rendîmes les siens et autant qu'eux avec eux, par miséricorde de Notre part et en tant que rappel aux adorateurs.
ph: Fāstajabnā Lahu Fakashafnā Mā Bihi Min Đurrin Wa 'Ātaynāhu 'Ahlahu Wa Mithlahum Ma`ahum Raĥmatan Min `Indinā Wa Dhikrá Lil`ābidīna

21:85
ar: وَإِسْمَٰعِيلَ وَإِدْرِيسَ وَذَا ٱلْكِفْلِ ۖ كُلٌّۭ مِّنَ ٱلصَّٰبِرِينَ
fr: Et Isma'il (Ismaël), Idris, et Dhul-Kifl ! Qui étaient tous endurants;
ph: Wa 'Ismā`īla Wa 'Idrīsa Wa Dhā Al-Kifli Kullun Mina Aş-Şābirīna

21:86
ar: وَأَدْخَلْنَٰهُمْ فِى رَحْمَتِنَآ ۖ إِنَّهُم مِّنَ ٱلصَّٰلِحِينَ
fr: que Nous fîmes entrer en Notre miséricorde car ils étaient vraiment du nombre des gens de bien.
ph: Wa 'Adkhalnāhum Fī Raĥmatinā 'Innahum Mina Aş-Şāliĥīna

21:87
ar: وَذَا ٱلنُّونِ إِذ ذَّهَبَ مُغَٰضِبًۭا فَظَنَّ أَن لَّن نَّقْدِرَ عَلَيْهِ فَنَادَىٰ فِى ٱلظُّلُمَٰتِ أَن لَّآ إِلَٰهَ إِلَّآ أَنتَ سُبْحَٰنَكَ إِنِّى كُنتُ مِنَ ٱلظَّٰلِمِينَ
fr: Et Dhun-Nun (Yunus (Jonas)) quand il partit, irrité. Il pensa que Nous n'allions pas l'éprouver. Puis il fit, dans les ténèbres, l'appel que voici: « Pas de divinité à part Toi ! Pureté à Toi ! J'ai été vraiment du nombre des injustes. »
ph: Wa Dhā An-Nūni 'Idh Dhahaba Mughāđibāan Fažanna 'An Lan Naqdira `Alayhi Fanādá Fī Až-Žulumāti 'An Lā 'Ilāha 'Illā 'Anta Subĥānaka 'Innī Kuntu Mina Až-Žālimīna

21:88
ar: فَٱسْتَجَبْنَا لَهُۥ وَنَجَّيْنَٰهُ مِنَ ٱلْغَمِّ ۚ وَكَذَٰلِكَ نُۨجِى ٱلْمُؤْمِنِينَ
fr: Nous l'exauçâmes et le sauvâmes de son angoisse. Et c'est ainsi que Nous sauvons les croyants.
ph: Fāstajabnā Lahu Wa Najjaynāhu Mina Al-Ghammi Wa Kadhalika Nunjī Al-Mu'uminīna

21:89
ar: وَزَكَرِيَّآ إِذْ نَادَىٰ رَبَّهُۥ رَبِّ لَا تَذَرْنِى فَرْدًۭا وَأَنتَ خَيْرُ ٱلْوَٰرِثِينَ
fr: Et Zakariyya (Zacharie), quand il implora son Seigneur: « Ne me laisse pas seul, Seigneur, alors que Tu es le meilleur des héritiers. »
ph: Wa Zakarīyā 'Idh Nādá Rabbahu Rabbi Lā Tadharnī Fardāan Wa 'Anta Khayru Al-Wārithīna

21:90
ar: فَٱسْتَجَبْنَا لَهُۥ وَوَهَبْنَا لَهُۥ يَحْيَىٰ وَأَصْلَحْنَا لَهُۥ زَوْجَهُۥٓ ۚ إِنَّهُمْ كَانُوا۟ يُسَٰرِعُونَ فِى ٱلْخَيْرَٰتِ وَيَدْعُونَنَا رَغَبًۭا وَرَهَبًۭا ۖ وَكَانُوا۟ لَنَا خَٰشِعِينَ
fr: Nous l'exauçâmes, lui donnâmes Yahya (Jean Baptiste) et guérîmes son épouse. Ils concouraient au bien et Nous invoquaient par amour et par crainte. Et ils étaient humbles devant Nous.
ph: Fāstajabnā Lahu Wa Wahabnā Lahu Yaĥyá Wa 'Aşlaĥnā Lahu Zawjahu 'Innahum Kānū Yusāri`ūna Fī Al-Khayrāti Wa Yad`ūnanā Raghabāan Wa Rahabāan Wa Kānū Lanā Khāshi`īna

21:91
ar: وَٱلَّتِىٓ أَحْصَنَتْ فَرْجَهَا فَنَفَخْنَا فِيهَا مِن رُّوحِنَا وَجَعَلْنَٰهَا وَٱبْنَهَآ ءَايَةًۭ لِّلْعَٰلَمِينَ
fr: Et celle [la vierge Maryam (Marie)] qui avait préservé sa chasteté ! Nous insufflâmes en elle un souffle (de vie) venant de Nous et fîmes d'elle ainsi que de son fils, un signe [miracle] pour l'univers.
ph: Wa A-Atī 'Aĥşanat Farjahā Fanafakhnā Fīhā Min Rūĥinā Wa Ja`alnāhā Wa Abnahā 'Āyatan Lil`ālamīna

21:92
ar: إِنَّ هَٰذِهِۦٓ أُمَّتُكُمْ أُمَّةًۭ وَٰحِدَةًۭ وَأَنَا۠ رَبُّكُمْ فَٱعْبُدُونِ
fr: Certes, cette communauté qui est la vôtre est une communauté unique, et Je suis votre Seigneur. Adorez-Moi donc.
ph: 'Inna Hadhihi 'Ummatukum 'Ummatan Wāĥidatan Wa 'Anā Rabbukum Fā`budūni

21:93
ar: وَتَقَطَّعُوٓا۟ أَمْرَهُم بَيْنَهُمْ ۖ كُلٌّ إِلَيْنَا رَٰجِعُونَ
fr: Ils se sont divisés en sectes. Mais tous, retourneront à Nous.
ph: Wa Taqaţţa`ū 'Amrahum Baynahum Kullun 'Ilaynā Rāji`ūna

21:94
ar: فَمَن يَعْمَلْ مِنَ ٱلصَّٰلِحَٰتِ وَهُوَ مُؤْمِنٌۭ فَلَا كُفْرَانَ لِسَعْيِهِۦ وَإِنَّا لَهُۥ كَٰتِبُونَ
fr: Quiconque fait de bonnes œuvres tout en étant croyant, on ne méconnaîtra pas son effort, et Nous le lui inscrivons [à son actif].
ph: Faman Ya`mal Mina Aş-Şāliĥāti Wa Huwa Mu'uminun Falā Kufrāna Lisa`yihi Wa 'Innā Lahu Kātibūna

21:95
ar: وَحَرَٰمٌ عَلَىٰ قَرْيَةٍ أَهْلَكْنَٰهَآ أَنَّهُمْ لَا يَرْجِعُونَ
fr: Il est défendu [aux habitants] d'une cité que Nous avons fait périr de revenir [à la vie d'ici-bas] !
ph: Wa Ĥarāmun `Alá Qaryatin 'Ahlaknāhā 'Annahum Lā Yarji`ūna

21:96
ar: حَتَّىٰٓ إِذَا فُتِحَتْ يَأْجُوجُ وَمَأْجُوجُ وَهُم مِّن كُلِّ حَدَبٍۢ يَنسِلُونَ
fr: Jusqu'à ce que soient relâchés les Yaʾjuj (Gog) et les Maʾjuj (Magog) et qu'ils se précipiteront de chaque hauteur;
ph: Ĥattá 'Idhā Futiĥat Ya'jūju Wa Ma'jūju Wa Hum Min Kulli Ĥadabin Yansilūna

21:97
ar: وَٱقْتَرَبَ ٱلْوَعْدُ ٱلْحَقُّ فَإِذَا هِىَ شَٰخِصَةٌ أَبْصَٰرُ ٱلَّذِينَ كَفَرُوا۟ يَٰوَيْلَنَا قَدْ كُنَّا فِى غَفْلَةٍۢ مِّنْ هَٰذَا بَلْ كُنَّا ظَٰلِمِينَ
fr: c'est alors que la vraie promesse s'approchera, tandis que les regards de ceux qui ont mécru se figent: « Malheur à nous ! Nous y avons été inattentifs. Bien plus, nous étions des injustes. »
ph: Wāqtaraba Al-Wa`du Al-Ĥaqqu Fa'idhā Hiya Shākhişatun 'Abşāru Al-Ladhīna Kafarū Yā Waylanā Qad Kunnā Fī Ghaflatin Min Hādhā Bal Kunnā Žālimīna

21:98
ar: إِنَّكُمْ وَمَا تَعْبُدُونَ مِن دُونِ ٱللَّهِ حَصَبُ جَهَنَّمَ أَنتُمْ لَهَا وَٰرِدُونَ
fr: « Vous serez, vous et ce que vous adoriez en dehors d'Allah, le combustible de l'Enfer, vous vous y rendrez tous.
ph: 'Innakum Wa Mā Ta`budūna Min Dūni Allāhi Ĥaşabu Jahannama 'Antum Lahā Wa Aridūna

21:99
ar: لَوْ كَانَ هَٰٓؤُلَآءِ ءَالِهَةًۭ مَّا وَرَدُوهَا ۖ وَكُلٌّۭ فِيهَا خَٰلِدُونَ
fr: Si ceux-là étaient vraiment des divinités, ils n'y entreraient pas; et tous y demeureront éternellement.
ph: Law Kāna Hā'uulā' 'Ālihatan Mā Waradūhā Wa Kullun Fīhā Khālidūna

21:100
ar: لَهُمْ فِيهَا زَفِيرٌۭ وَهُمْ فِيهَا لَا يَسْمَعُونَ
fr: Ils y pousseront des gémissements, et n'y entendront rien.
ph: Lahum Fīhā Zafīrun Wa Hum Fīhā Lā Yasma`ūna

21:101
ar: إِنَّ ٱلَّذِينَ سَبَقَتْ لَهُم مِّنَّا ٱلْحُسْنَىٰٓ أُو۟لَٰٓئِكَ عَنْهَا مُبْعَدُونَ
fr: En seront écartés, ceux à qui étaient précédemment promises de belles récompenses de Notre part.
ph: 'Inna Al-Ladhīna Sabaqat Lahum Minnā Al-Ĥusná 'Ūlā'ika `Anhā Mub`adūna

21:102
ar: لَا يَسْمَعُونَ حَسِيسَهَا ۖ وَهُمْ فِى مَا ٱشْتَهَتْ أَنفُسُهُمْ خَٰلِدُونَ
fr: Ils n'entendront pas son sifflement et jouiront éternellement de ce que leurs âmes désirent.
ph: Lā Yasma`ūna Ĥasīsahā Wa Hum Fī Mā Ashtahat 'Anfusuhum Khālidūna

21:103
ar: لَا يَحْزُنُهُمُ ٱلْفَزَعُ ٱلْأَكْبَرُ وَتَتَلَقَّىٰهُمُ ٱلْمَلَٰٓئِكَةُ هَٰذَا يَوْمُكُمُ ٱلَّذِى كُنتُمْ تُوعَدُونَ
fr: La grande terreur ne les affligera pas, et les Anges les accueilleront: « Voici le jour qui vous a été promis. »
ph: Lā Yaĥzunuhumu Al-Faza`u Al-'Akbaru Wa Tatalaqqāhumu Al-Malā'ikatu Hādhā Yawmukumu Al-Ladhī Kuntum Tū`adūna

21:104
ar: يَوْمَ نَطْوِى ٱلسَّمَآءَ كَطَىِّ ٱلسِّجِلِّ لِلْكُتُبِ ۚ كَمَا بَدَأْنَآ أَوَّلَ خَلْقٍۢ نُّعِيدُهُۥ ۚ وَعْدًا عَلَيْنَآ ۚ إِنَّا كُنَّا فَٰعِلِينَ
fr: Le jour où Nous plierons le ciel comme on plie le rouleau des livres. Tout comme Nous avons commencé la première création, ainsi Nous la répéterons; c'est une promesse qui Nous incombe et Nous l'accomplirons !
ph: Yawma Naţwī As-Samā'a Kaţayyi As-Sijilli Lilkutubi Kamā Bada'nā 'Awwala Khalqin Nu`īduhu Wa`dāan `Alaynā 'Innā Kunnā Fā`ilīna

21:105
ar: وَلَقَدْ كَتَبْنَا فِى ٱلزَّبُورِ مِنۢ بَعْدِ ٱلذِّكْرِ أَنَّ ٱلْأَرْضَ يَرِثُهَا عِبَادِىَ ٱلصَّٰلِحُونَ
fr: Et Nous avons certes écrit dans le Zabur, après l'avoir mentionné (dans le Livre céleste), que la terre sera héritée par Mes bons serviteurs ».
ph: Wa Laqad Katabnā Fī Az-Zabūri Min Ba`di Adh-Dhikri 'Anna Al-'Arđa Yarithuhā `Ibādiya Aş-Şāliĥūna

21:106
ar: إِنَّ فِى هَٰذَا لَبَلَٰغًۭا لِّقَوْمٍ عَٰبِدِينَ
fr: Il y a en cela [ces enseignements] une communication à un peuple d'adorateurs !
ph: 'Inna Fī Hādhā Labalāghāan Liqawmin `Ābidīna

21:107
ar: وَمَآ أَرْسَلْنَٰكَ إِلَّا رَحْمَةًۭ لِّلْعَٰلَمِينَ
fr: Et Nous ne t'avons envoyé qu'en miséricorde pour l'univers.
ph: Wa Mā 'Arsalnāka 'Illā Raĥmatan Lil`ālamīna

21:108
ar: قُلْ إِنَّمَا يُوحَىٰٓ إِلَىَّ أَنَّمَآ إِلَٰهُكُمْ إِلَٰهٌۭ وَٰحِدٌۭ ۖ فَهَلْ أَنتُم مُّسْلِمُونَ
fr: Dis: « Voilà ce qui m'est révélé: Votre Dieu est un Dieu unique; Êtes-vous Soumis ? » [décidés à embrasser l'Islam]
ph: Qul 'Innamā Yūĥá 'Ilayya 'Annamā 'Ilahukum 'Ilahun Wāĥidun Fahal 'Antum Muslimūna

21:109
ar: فَإِن تَوَلَّوْا۟ فَقُلْ ءَاذَنتُكُمْ عَلَىٰ سَوَآءٍۢ ۖ وَإِنْ أَدْرِىٓ أَقَرِيبٌ أَم بَعِيدٌۭ مَّا تُوعَدُونَ
fr: Si ensuite ils se détournent dis alors: « Je vous ai avertis en toute équité; je ne sais si ce qui vous est promis est proche ou lointain.
ph: Fa'in Tawallaw Faqul 'Ādhantukum `Alá Sawā'in Wa 'In 'Adrī 'Aqarībun 'Am Ba`īdun Mā Tū`adūna

21:110
ar: إِنَّهُۥ يَعْلَمُ ٱلْجَهْرَ مِنَ ٱلْقَوْلِ وَيَعْلَمُ مَا تَكْتُمُونَ
fr: Il connaît ce que vous dites à haute voix et ce que vous cachez.
ph: 'Innahu Ya`lamu Al-Jahra Mina Al-Qawli Wa Ya`lamu Mā Taktumūna

21:111
ar: وَإِنْ أَدْرِى لَعَلَّهُۥ فِتْنَةٌۭ لَّكُمْ وَمَتَٰعٌ إِلَىٰ حِينٍۢ
fr: Et je ne sais pas; ceci est peut-être une tentation pour vous et une jouissance pour un certain temps ! »
ph: Wa 'In 'Adrī La`allahu Fitnatun Lakum Wa Matā`un 'Ilá Ĥīnin

21:112
ar: قَٰلَ رَبِّ ٱحْكُم بِٱلْحَقِّ ۗ وَرَبُّنَا ٱلرَّحْمَٰنُ ٱلْمُسْتَعَانُ عَلَىٰ مَا تَصِفُونَ
fr: Il dit: « Seigneur, juge en toute justice ! Et Notre Seigneur le Tout Miséricordieux, c'est Lui dont le secours est imploré contre vos assertions ».
ph: Qāla Rabbi Aĥkum Bil-Ĥaqqi Wa Rabbunā Ar-Raĥmānu Al-Musta`ānu `Alá Mā Taşifūna 

# ---------- Sourate 50 · Qāf ----------

50:1
ar: قٓ ۚ وَٱلْقُرْءَانِ ٱلْمَجِيدِ
fr: Qaf. Par le Coran glorieux !
ph: Qāf Wa Al-Qur'āni Al-Majīdi

50:2
ar: بَلْ عَجِبُوٓا۟ أَن جَآءَهُم مُّنذِرٌۭ مِّنْهُمْ فَقَالَ ٱلْكَٰفِرُونَ هَٰذَا شَىْءٌ عَجِيبٌ
fr: Mais ils s'étonnent que l'un des leurs leur vint comme avertisseur; et les mécréants dirent: « Ceci est une chose étonnante.
ph: Bal `Ajibū 'An Jā'ahum Mundhirun Minhum Faqāla Al-Kāfirūna Hādhā Shay'un `Ajībun

50:3
ar: أَءِذَا مِتْنَا وَكُنَّا تُرَابًۭا ۖ ذَٰلِكَ رَجْعٌۢ بَعِيدٌۭ
fr: Quoi ! Quand nous serons morts et réduits en poussière... ? Ce serait revenir de loin ! »
ph: 'A'idhā Mitnā Wa Kunnā Turābāan Dhālika Raj`un Ba`īdun

50:4
ar: قَدْ عَلِمْنَا مَا تَنقُصُ ٱلْأَرْضُ مِنْهُمْ ۖ وَعِندَنَا كِتَٰبٌ حَفِيظٌۢ
fr: Certes, Nous savons ce que la terre rongera d'eux [de leurs corps]; et Nous avons un Livre où tout est conservé.
ph: Qad `Alimnā Mā Tanquşu Al-'Arđu Minhum Wa `Indanā Kitābun Ĥafīžun

50:5
ar: بَلْ كَذَّبُوا۟ بِٱلْحَقِّ لَمَّا جَآءَهُمْ فَهُمْ فِىٓ أَمْرٍۢ مَّرِيجٍ
fr: Plutôt, ils traitent de mensonge la vérité qui leur est venue: les voilà donc dans une situation confuse.
ph: Bal Kadhabū Bil-Ĥaqqi Lammā Jā'ahum Fahum Fī 'Amrin Marījin

50:6
ar: أَفَلَمْ يَنظُرُوٓا۟ إِلَى ٱلسَّمَآءِ فَوْقَهُمْ كَيْفَ بَنَيْنَٰهَا وَزَيَّنَّٰهَا وَمَا لَهَا مِن فُرُوجٍۢ
fr: N'ont-ils donc pas observé le ciel au-dessus d'eux, comment Nous l'avons bâti et embelli; et comment il est sans fissures ?
ph: 'Afalam Yanžurū 'Ilá As-Samā'i Fawqahum Kayfa Banaynāhā Wa Zayyannāhā Wa Mā Lahā Min Furūjin

50:7
ar: وَٱلْأَرْضَ مَدَدْنَٰهَا وَأَلْقَيْنَا فِيهَا رَوَٰسِىَ وَأَنۢبَتْنَا فِيهَا مِن كُلِّ زَوْجٍۭ بَهِيجٍۢ
fr: Et la terre, Nous l'avons étendue et Nous y avons enfoncé fermement des montagnes et y avons fait pousser toutes sortes de magnifiques couples de [végétaux],
ph: Wa Al-'Arđa Madadnāhā Wa 'Alqaynā Fīhā Rawāsiya Wa 'Anbatnā Fīhā Min Kulli Zawjin Bahījin

50:8
ar: تَبْصِرَةًۭ وَذِكْرَىٰ لِكُلِّ عَبْدٍۢ مُّنِيبٍۢ
fr: à titre d'appel à la clairvoyance et un rappel pour tout serviteur repentant.
ph: Tabşiratan Wa Dhikrá Likulli `Abdin Munībin

50:9
ar: وَنَزَّلْنَا مِنَ ٱلسَّمَآءِ مَآءًۭ مُّبَٰرَكًۭا فَأَنۢبَتْنَا بِهِۦ جَنَّٰتٍۢ وَحَبَّ ٱلْحَصِيدِ
fr: Et Nous avons fait descendre du ciel une eau bénie, avec laquelle Nous avons fait pousser des jardins et le grain qu'on moissonne,
ph: Wa Nazzalnā Mina As-Samā'i Mā'an Mubārakāan Fa'anbatnā Bihi Jannātin Wa Ĥabba Al-Ĥaşīdi

50:10
ar: وَٱلنَّخْلَ بَاسِقَٰتٍۢ لَّهَا طَلْعٌۭ نَّضِيدٌۭ
fr: ainsi que les hauts palmiers aux régimes superposés,
ph: Wa An-Nakhla Bāsiqātin Lahā Ţal`un Nađīdun

50:11
ar: رِّزْقًۭا لِّلْعِبَادِ ۖ وَأَحْيَيْنَا بِهِۦ بَلْدَةًۭ مَّيْتًۭا ۚ كَذَٰلِكَ ٱلْخُرُوجُ
fr: comme subsistance pour les serviteurs. Et par elle (l'eau) Nous avons redonné la vie à une contrée morte. Ainsi se fera la résurrection.
ph: Rizqāan Lil`ibādi Wa 'Aĥyaynā Bihi Baldatan Maytāan Kadhālika Al-Khurūju

50:12
ar: كَذَّبَتْ قَبْلَهُمْ قَوْمُ نُوحٍۢ وَأَصْحَٰبُ ٱلرَّسِّ وَثَمُودُ
fr: Avant eux, le peuple de Nuh (Noé), les gens d'Ar-Rass et les Thamud crièrent au mensonge,
ph: Kadhabat Qablahum Qawmu Nūĥin Wa 'Aşĥābu Ar-Rassi Wa Thamūdu

50:13
ar: وَعَادٌۭ وَفِرْعَوْنُ وَإِخْوَٰنُ لُوطٍۢ
fr: de même que les 'Ad et Fir'awn (Pharaon) et les frères de Lut (Loth),
ph: Wa `Ādun Wa Fir`awnu Wa 'Ikhwānu Lūţin

50:14
ar: وَأَصْحَٰبُ ٱلْأَيْكَةِ وَقَوْمُ تُبَّعٍۢ ۚ كُلٌّۭ كَذَّبَ ٱلرُّسُلَ فَحَقَّ وَعِيدِ
fr: et les gens d'Al-Aykah et le peuple de Tubba'. Tous traitèrent les Messagers de menteurs. C'est ainsi que Ma menace se justifia.
ph: Wa 'Aşĥābu Al-'Aykati Wa Qawmu Tubba`in Kullun Kadhaba Ar-Rusula Faĥaqqa Wa`īdi

50:15
ar: أَفَعَيِينَا بِٱلْخَلْقِ ٱلْأَوَّلِ ۚ بَلْ هُمْ فِى لَبْسٍۢ مِّنْ خَلْقٍۢ جَدِيدٍۢ
fr: Quoi ? Avons-Nous été fatigué par la première création ? Mais ils sont dans la confusion [au sujet] d'une création nouvelle.
ph: 'Afa`ayīnā Bil-Khalqi Al-'Awwali Bal Hum Fī Labsin Min Khalqin Jadīdin

50:16
ar: وَلَقَدْ خَلَقْنَا ٱلْإِنسَٰنَ وَنَعْلَمُ مَا تُوَسْوِسُ بِهِۦ نَفْسُهُۥ ۖ وَنَحْنُ أَقْرَبُ إِلَيْهِ مِنْ حَبْلِ ٱلْوَرِيدِ
fr: Nous avons effectivement créé l'homme et Nous savons ce que son âme lui suggère et Nous sommes plus près de lui que sa veine jugulaire
ph: Wa Laqad Khalaqnā Al-'Insāna Wa Na`lamu Mā Tuwaswisu Bihi Nafsuhu Wa Naĥnu 'Aqrabu 'Ilayhi Min Ĥabli Al-Warīdi

50:17
ar: إِذْ يَتَلَقَّى ٱلْمُتَلَقِّيَانِ عَنِ ٱلْيَمِينِ وَعَنِ ٱلشِّمَالِ قَعِيدٌۭ
fr: quand les deux recueillants, assis à droite et à gauche, recueillent.
ph: 'Idh Yatalaqqá Al-Mutalaqqiyāni `Ani Al-Yamīni Wa `Ani Ash-Shimāli Qa`īdun

50:18
ar: مَّا يَلْفِظُ مِن قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌۭ
fr: Il ne prononce pas une parole sans avoir auprès de lui un observateur prêt à l'inscrire.
ph: Mā Yalfižu Min Qawlin 'Illā Ladayhi Raqībun `Atīdun

50:19
ar: وَجَآءَتْ سَكْرَةُ ٱلْمَوْتِ بِٱلْحَقِّ ۖ ذَٰلِكَ مَا كُنتَ مِنْهُ تَحِيدُ
fr: L'agonie de la mort fait apparaître la vérité: « Voilà ce dont tu t'écartais. »
ph: Wa Jā'at Sakratu Al-Mawti Bil-Ĥaqqi Dhālika Mā Kunta Minhu Taĥīdu

50:20
ar: وَنُفِخَ فِى ٱلصُّورِ ۚ ذَٰلِكَ يَوْمُ ٱلْوَعِيدِ
fr: Et l'on soufflera dans la Trompe: voilà le jour de la Menace.
ph: Wa Nufikha Fī Aş-Şūri Dhālika Yawmu Al-Wa`īdi

50:21
ar: وَجَآءَتْ كُلُّ نَفْسٍۢ مَّعَهَا سَآئِقٌۭ وَشَهِيدٌۭ
fr: Alors chaque âme viendra accompagnée d'un conducteur et d'un témoin.
ph: Wa Jā'at Kullu Nafsin Ma`ahā Sā'iqun Wa Shahīdun

50:22
ar: لَّقَدْ كُنتَ فِى غَفْلَةٍۢ مِّنْ هَٰذَا فَكَشَفْنَا عَنكَ غِطَآءَكَ فَبَصَرُكَ ٱلْيَوْمَ حَدِيدٌۭ
fr: « Tu restais indifférent à cela. Et bien, Nous ôtons ton voile; ta vue est perçante aujourd'hui. »
ph: Laqad Kunta Fī Ghaflatin Min Hādhā Fakashafnā `Anka Ghiţā'aka Fabaşaruka Al-Yawma Ĥadīdun

50:23
ar: وَقَالَ قَرِينُهُۥ هَٰذَا مَا لَدَىَّ عَتِيدٌ
fr: Et son compagnon dira: « Voilà ce qui est avec moi, tout prêt ».
ph: Wa Qāla Qarīnuhu Hādhā Mā Ladayya `Atīdun

50:24
ar: أَلْقِيَا فِى جَهَنَّمَ كُلَّ كَفَّارٍ عَنِيدٍۢ
fr: « Vous deux, jetez dans l'Enfer tout mécréant endurci et rebelle,
ph: 'Alqiyā Fī Jahannama Kulla Kaffārin `Anīdin

50:25
ar: مَّنَّاعٍۢ لِّلْخَيْرِ مُعْتَدٍۢ مُّرِيبٍ
fr: acharné à empêcher le bien, transgresseur, douteur,
ph: Mannā`in Lilkhayri Mu`tadin Murībin

50:26
ar: ٱلَّذِى جَعَلَ مَعَ ٱللَّهِ إِلَٰهًا ءَاخَرَ فَأَلْقِيَاهُ فِى ٱلْعَذَابِ ٱلشَّدِيدِ
fr: celui qui plaçait à côté d'Allah une autre divinité. Jetez-le donc dans le dur châtiment. »
ph: Al-Ladhī Ja`ala Ma`a Allāhi 'Ilahāan 'Ākhara Fa'alqiyāhu Fī Al-`Adhābi Ash-Shadīdi

50:27
ar: ۞ قَالَ قَرِينُهُۥ رَبَّنَا مَآ أَطْغَيْتُهُۥ وَلَٰكِن كَانَ فِى ضَلَٰلٍۭ بَعِيدٍۢ
fr: Son camarade (le Diable) dira: « Seigneur, ce n'est pas moi qui l'ai fait transgresser; mais il était déjà dans un profond égarement. »
ph: Qāla Qarīnuhu Rabbanā Mā 'Aţghaytuhu Wa Lakin Kāna Fī Đalālin Ba`īdin

50:28
ar: قَالَ لَا تَخْتَصِمُوا۟ لَدَىَّ وَقَدْ قَدَّمْتُ إِلَيْكُم بِٱلْوَعِيدِ
fr: Alors [Allah] dira: « Ne vous disputez pas devant moi ! Alors que Je vous ai déjà fait part de la menace.
ph: Qāla Lā Takhtaşimū Ladayya Wa Qad Qaddamtu 'Ilaykum Bil-Wa`īdi

50:29
ar: مَا يُبَدَّلُ ٱلْقَوْلُ لَدَىَّ وَمَآ أَنَا۠ بِظَلَّٰمٍۢ لِّلْعَبِيدِ
fr: Chez Moi, la parole ne change pas; et Je n'opprime nullement les serviteurs. »
ph: Mā Yubaddalu Al-Qawlu Ladayya Wa Mā 'Anā Bižallāmin Lil`abīdi

50:30
ar: يَوْمَ نَقُولُ لِجَهَنَّمَ هَلِ ٱمْتَلَأْتِ وَتَقُولُ هَلْ مِن مَّزِيدٍۢ
fr: Le jour où Nous dirons à l'Enfer: « Es-tu rempli ? » Il dira: « Y en a-t-il encore ? »
ph: Yawma Naqūlu Lijahannama Hal Amtala'ti Wa Taqūlu Hal Min Mazīdin

50:31
ar: وَأُزْلِفَتِ ٱلْجَنَّةُ لِلْمُتَّقِينَ غَيْرَ بَعِيدٍ
fr: Le Paradis sera rapproché à proximité des pieux.
ph: Wa 'Uzlifati Al-Jannatu Lilmuttaqīna Ghayra Ba`īdin

50:32
ar: هَٰذَا مَا تُوعَدُونَ لِكُلِّ أَوَّابٍ حَفِيظٍۢ
fr: « Voilà ce qui vous a été promis, [ainsi qu'] à tout homme plein de repentir et respectueux [des prescriptions divines]
ph: Hādhā Mā Tū`adūna Likulli 'Awwābin Ĥafīžin

50:33
ar: مَّنْ خَشِىَ ٱلرَّحْمَٰنَ بِٱلْغَيْبِ وَجَآءَ بِقَلْبٍۢ مُّنِيبٍ
fr: qui redoute le Tout Miséricordieux bien qu'il ne Le voit pas, et qui vient [vers Lui] avec un cœur porté à l'obéissance.
ph: Man Khashiya Ar-Raĥmana Bil-Ghaybi Wa Jā'a Biqalbin Munībin

50:34
ar: ٱدْخُلُوهَا بِسَلَٰمٍۢ ۖ ذَٰلِكَ يَوْمُ ٱلْخُلُودِ
fr: Entrez-y en toute sécurité. » Voilà le jour de l'éternité !
ph: Adkhulūhā Bisalāmin Dhālika Yawmu Al-Khulūdi

50:35
ar: لَهُم مَّا يَشَآءُونَ فِيهَا وَلَدَيْنَا مَزِيدٌۭ
fr: Il y aura là pour eux tout ce qu'ils voudront. Et auprès de Nous il y a davantage encore.
ph: Lahum Mā Yashā'ūna Fīhā Wa Ladaynā Mazīdun

50:36
ar: وَكَمْ أَهْلَكْنَا قَبْلَهُم مِّن قَرْنٍ هُمْ أَشَدُّ مِنْهُم بَطْشًۭا فَنَقَّبُوا۟ فِى ٱلْبِلَٰدِ هَلْ مِن مَّحِيصٍ
fr: Combien avons-Nous fait périr, avant eux, de générations bien plus fortes qu'eux. Ils avaient parcouru les contrées, cherchant [vainement] où fuir.
ph: Wa Kam 'Ahlaknā Qablahum Min Qarnin Hum 'Ashaddu Minhum Baţshāan Fanaqqabū Fī Al-Bilādi Hal Min Maĥīşin

50:37
ar: إِنَّ فِى ذَٰلِكَ لَذِكْرَىٰ لِمَن كَانَ لَهُۥ قَلْبٌ أَوْ أَلْقَى ٱلسَّمْعَ وَهُوَ شَهِيدٌۭ
fr: Il y a bien là un rappel pour quiconque a un cœur, prête l'oreille tout en étant témoin.
ph: 'Inna Fī Dhālika Ladhikrá Liman Kāna Lahu Qalbun 'Aw 'Alqá As-Sam`a Wa Huwa Shahīdun

50:38
ar: وَلَقَدْ خَلَقْنَا ٱلسَّمَٰوَٰتِ وَٱلْأَرْضَ وَمَا بَيْنَهُمَا فِى سِتَّةِ أَيَّامٍۢ وَمَا مَسَّنَا مِن لُّغُوبٍۢ
fr: En effet Nous avons créé les cieux et la terre et ce qui existe entre eux en six jours, sans éprouver la moindre lassitude.
ph: Wa Laqad Khalaqnā As-Samāwāti Wa Al-'Arđa Wa Mā Baynahumā Fī Sittati 'Ayyāmin Wa Mā Massanā Min Lughūbin

50:39
ar: فَٱصْبِرْ عَلَىٰ مَا يَقُولُونَ وَسَبِّحْ بِحَمْدِ رَبِّكَ قَبْلَ طُلُوعِ ٱلشَّمْسِ وَقَبْلَ ٱلْغُرُوبِ
fr: Endure donc ce qu'ils disent; et célèbre la louange de ton Seigneur avant le lever du soleil et avant [son] coucher;
ph: Fāşbir `Alá Mā Yaqūlūna Wa Sabbiĥ Biĥamdi Rabbika Qabla Ţulū`i Ash-Shamsi Wa Qabla Al-Ghurūbi

50:40
ar: وَمِنَ ٱلَّيْلِ فَسَبِّحْهُ وَأَدْبَٰرَ ٱلسُّجُودِ
fr: et célèbre Sa gloire, une partie de la nuit et à la suite des prosternations [prières].
ph: Wa Mina Al-Layli Fasabbiĥhu Wa 'Adbāra As-Sujūdi

50:41
ar: وَٱسْتَمِعْ يَوْمَ يُنَادِ ٱلْمُنَادِ مِن مَّكَانٍۢ قَرِيبٍۢ
fr: Et sois à l'écoute, le jour où le Crieur criera d'un endroit proche,
ph: Wa Astami` Yawma Yunādi Al-Munādi Min Makānin Qarībin

50:42
ar: يَوْمَ يَسْمَعُونَ ٱلصَّيْحَةَ بِٱلْحَقِّ ۚ ذَٰلِكَ يَوْمُ ٱلْخُرُوجِ
fr: le jour où ils entendront en toute vérité le Cri. Voilà le Jour de la Résurrection.
ph: Yawma Yasma`ūna Aş-Şayĥata Bil-Ĥaqqi Dhālika Yawmu Al-Khurūji

50:43
ar: إِنَّا نَحْنُ نُحْىِۦ وَنُمِيتُ وَإِلَيْنَا ٱلْمَصِيرُ
fr: C'est Nous qui donnons la vie et donnons la mort, et vers Nous sera la destination,
ph: 'Innā Naĥnu Nuĥyī Wa Numītu Wa 'Ilaynā Al-Maşīru

50:44
ar: يَوْمَ تَشَقَّقُ ٱلْأَرْضُ عَنْهُمْ سِرَاعًۭا ۚ ذَٰلِكَ حَشْرٌ عَلَيْنَا يَسِيرٌۭ
fr: le jour où la terre se fendra, les [rejetant] précipitamment. Ce sera un rassemblement facile pour Nous.
ph: Yawma Tashaqqaqu Al-'Arđu `Anhum Sirā`āan Dhālika Ĥashrun `Alaynā Yasīrun

50:45
ar: نَّحْنُ أَعْلَمُ بِمَا يَقُولُونَ ۖ وَمَآ أَنتَ عَلَيْهِم بِجَبَّارٍۢ ۖ فَذَكِّرْ بِٱلْقُرْءَانِ مَن يَخَافُ وَعِيدِ
fr: Nous savons mieux ce qu'ils disent. Tu n'as pas pour mission d'exercer sur eux une contrainte. Rappelle donc, par le Coran celui qui craint Ma menace.
ph: Naĥnu 'A`lamu Bimā Yaqūlūna Wa Mā 'Anta `Alayhim Bijabbārin Fadhakkir Bil-Qur'āni Man Yakhāfu Wa`īdi 

# ---------- Sourate 56 · Al-Wāqiʿa ----------

56:1
ar: إِذَا وَقَعَتِ ٱلْوَاقِعَةُ
fr: Quand l'événement (le Jugement) arrivera,
ph: 'Idhā Waqa`ati Al-Wāqi`ahu

56:2
ar: لَيْسَ لِوَقْعَتِهَا كَاذِبَةٌ
fr: nul ne traitera sa venue de mensonge.
ph: Laysa Liwaq`atihā Kādhibahun

56:3
ar: خَافِضَةٌۭ رَّافِعَةٌ
fr: Il abaissera (les uns), il élèvera (les autres).
ph: Khāfiđatun Rāfi`ahun

56:4
ar: إِذَا رُجَّتِ ٱلْأَرْضُ رَجًّۭا
fr: Quand la terre sera secouée violemment,
ph: 'Idhā Rujjati Al-'Arđu Rajjāan

56:5
ar: وَبُسَّتِ ٱلْجِبَالُ بَسًّۭا
fr: et les montagnes seront réduites en miettes,
ph: Wa Bussati Al-Jibālu Bassāan

56:6
ar: فَكَانَتْ هَبَآءًۭ مُّنۢبَثًّۭا
fr: et qu'elles deviendront poussière éparpillée
ph: Fakānat Habā'an Munbaththāan

56:7
ar: وَكُنتُمْ أَزْوَٰجًۭا ثَلَٰثَةًۭ
fr: alors vous serez trois catégories:
ph: Wa Kuntum 'Azwājāan Thalāthahan

56:8
ar: فَأَصْحَٰبُ ٱلْمَيْمَنَةِ مَآ أَصْحَٰبُ ٱلْمَيْمَنَةِ
fr: les gens de la droite -que sont les gens de la droite ?
ph: Fa'aşĥābu Al-Maymanati Mā 'Aşĥābu Al-Maymanahi

56:9
ar: وَأَصْحَٰبُ ٱلْمَشْـَٔمَةِ مَآ أَصْحَٰبُ ٱلْمَشْـَٔمَةِ
fr: Et les gens de la gauche -que sont les gens de la gauche ?
ph: Wa 'Aşĥābu Al-Mash'amati Mā 'Aşĥābu Al-Mash'amahi

56:10
ar: وَٱلسَّٰبِقُونَ ٱلسَّٰبِقُونَ
fr: Les premiers (à suivre les ordres d'Allah sur la terre) ce sont eux qui seront les premiers (dans l'au-delà)
ph: Wa As-Sābiqūna As-Sābiqūna

56:11
ar: أُو۟لَٰٓئِكَ ٱلْمُقَرَّبُونَ
fr: Ce sont ceux-là les plus rapprochés d'Allah
ph: 'Ūlā'ika Al-Muqarrabūna

56:12
ar: فِى جَنَّٰتِ ٱلنَّعِيمِ
fr: dans les Jardins des délices,
ph: Fī Jannāti An-Na`īmi

56:13
ar: ثُلَّةٌۭ مِّنَ ٱلْأَوَّلِينَ
fr: une multitude d'élus parmi les premières [générations],
ph: Thullatun Mina Al-'Awwalīna

56:14
ar: وَقَلِيلٌۭ مِّنَ ٱلْءَاخِرِينَ
fr: et un petit nombre parmi les dernières [générations],
ph: Wa Qalīlun Mina Al-'Ākhirīna

56:15
ar: عَلَىٰ سُرُرٍۢ مَّوْضُونَةٍۢ
fr: sur des lits ornés [d'or et de pierreries],
ph: `Alá Sururin Mawđūnahin

56:16
ar: مُّتَّكِـِٔينَ عَلَيْهَا مُتَقَٰبِلِينَ
fr: s'y accoudant et se faisant face.
ph: Muttaki'īna `Alayhā Mutaqābilīna

56:17
ar: يَطُوفُ عَلَيْهِمْ وِلْدَٰنٌۭ مُّخَلَّدُونَ
fr: Parmi eux circuleront des garçons éternellement jeunes,
ph: Yaţūfu `Alayhim Wildānun Mukhalladūna

56:18
ar: بِأَكْوَابٍۢ وَأَبَارِيقَ وَكَأْسٍۢ مِّن مَّعِينٍۢ
fr: avec des coupes, des aiguières et un verre [rempli] d'une liqueur de source
ph: Bi'akwābin Wa 'Abārīqa Wa Ka'sin Min Ma`īnin

56:19
ar: لَّا يُصَدَّعُونَ عَنْهَا وَلَا يُنزِفُونَ
fr: qui ne leur provoquera ni maux de tête ni étourdissement;
ph: Lā Yuşadda`ūna `Anhā Wa Lā Yunzifūna

56:20
ar: وَفَٰكِهَةٍۢ مِّمَّا يَتَخَيَّرُونَ
fr: et des fruits de leur choix,
ph: Wa Fākihatin Mimmā Yatakhayyarūna

56:21
ar: وَلَحْمِ طَيْرٍۢ مِّمَّا يَشْتَهُونَ
fr: et toute chair d'oiseau qu'ils désireront.
ph: Wa Laĥmi Ţayrin Mimmā Yashtahūna

56:22
ar: وَحُورٌ عِينٌۭ
fr: Et ils auront des houris aux yeux, grands et beaux,
ph: Wa Ĥūrun `Īnun

56:23
ar: كَأَمْثَٰلِ ٱللُّؤْلُؤِ ٱلْمَكْنُونِ
fr: pareilles à des perles en coquille
ph: Ka'amthāli Al-Lu'ulu'ui Al-Maknūni

56:24
ar: جَزَآءًۢ بِمَا كَانُوا۟ يَعْمَلُونَ
fr: en récompense pour ce qu'ils faisaient.
ph: Jazā'an Bimā Kānū Ya`malūna

56:25
ar: لَا يَسْمَعُونَ فِيهَا لَغْوًۭا وَلَا تَأْثِيمًا
fr: Ils n'y entendront ni futilité ni blasphème;
ph: Lā Yasma`ūna Fīhā Laghwan Wa Lā Ta'thīmāan

56:26
ar: إِلَّا قِيلًۭا سَلَٰمًۭا سَلَٰمًۭا
fr: mais seulement les propos: « Salâm ! Salâm ! »... [Paix ! Paix ! ]
ph: 'Illā Qīlāan Salāmāan Salāmāan

56:27
ar: وَأَصْحَٰبُ ٱلْيَمِينِ مَآ أَصْحَٰبُ ٱلْيَمِينِ
fr: Et les gens de la droite; que sont les gens de la droite ?
ph: Wa 'Aşĥābu Al-Yamīni Mā 'Aşĥābu Al-Yamīni

56:28
ar: فِى سِدْرٍۢ مَّخْضُودٍۢ
fr: [Ils seront parmi] des jujubiers sans épines,
ph: Fī Sidrin Makhđūdin

56:29
ar: وَطَلْحٍۢ مَّنضُودٍۢ
fr: et parmi des bananiers aux régimes bien fournis,
ph: Wa Ţalĥin Manđūdin

56:30
ar: وَظِلٍّۢ مَّمْدُودٍۢ
fr: dans une ombre étendue
ph: Wa Žillin Mamdūdin

56:31
ar: وَمَآءٍۢ مَّسْكُوبٍۢ
fr: [près] d'une eau coulant continuellement,
ph: Wa Mā'in Maskūbin

56:32
ar: وَفَٰكِهَةٍۢ كَثِيرَةٍۢ
fr: et des fruits abondants
ph: Wa Fākihatin Kathīrahin

56:33
ar: لَّا مَقْطُوعَةٍۢ وَلَا مَمْنُوعَةٍۢ
fr: ni interrompus ni défendus,
ph: Lā Maqţū`atin Wa Lā Mamnū`ahin

56:34
ar: وَفُرُشٍۢ مَّرْفُوعَةٍ
fr: sur des lits surélevés,
ph: Wa Furushin Marfū`ahin

56:35
ar: إِنَّآ أَنشَأْنَٰهُنَّ إِنشَآءًۭ
fr: C'est Nous qui les avons créées à la perfection,
ph: 'Innā 'Ansha'nāhunna 'Inshā'an

56:36
ar: فَجَعَلْنَٰهُنَّ أَبْكَارًا
fr: et Nous les avons faites vierges,
ph: Faja`alnāhunna 'Abkārāan

56:37
ar: عُرُبًا أَتْرَابًۭا
fr: gracieuses, toutes de même âge,
ph: `Urubāan 'Atrābāan

56:38
ar: لِّأَصْحَٰبِ ٱلْيَمِينِ
fr: pour les gens de la droite,
ph: Li'aşĥābi Al-Yamīni

56:39
ar: ثُلَّةٌۭ مِّنَ ٱلْأَوَّلِينَ
fr: une multitude d'élus parmi les premières [générations],
ph: Thullatun Mina Al-'Awwalīna

56:40
ar: وَثُلَّةٌۭ مِّنَ ٱلْءَاخِرِينَ
fr: et une multitude d'élus parmi les dernières [générations].
ph: Wa Thullatun Mina Al-'Ākhirīna

56:41
ar: وَأَصْحَٰبُ ٱلشِّمَالِ مَآ أَصْحَٰبُ ٱلشِّمَالِ
fr: Et les gens de la gauche; que sont les gens de la gauche ?
ph: Wa 'Aşĥābu Ash-Shimāli Mā 'Aşĥābu Ash-Shimāli

56:42
ar: فِى سَمُومٍۢ وَحَمِيمٍۢ
fr: ils seront au milieu d'un souffle brûlant et d'une eau bouillante,
ph: Fī Samūmin Wa Ĥamīmin

56:43
ar: وَظِلٍّۢ مِّن يَحْمُومٍۢ
fr: à l'ombre d'une fumée noire
ph: Wa Žillin Min Yaĥmūmin

56:44
ar: لَّا بَارِدٍۢ وَلَا كَرِيمٍ
fr: ni fraîche, ni douce.
ph: Lā Bāridin Wa Lā Karīmin

56:45
ar: إِنَّهُمْ كَانُوا۟ قَبْلَ ذَٰلِكَ مُتْرَفِينَ
fr: Ils vivaient auparavant dans le luxe.
ph: 'Innahum Kānū Qabla Dhālika Mutrafīna

56:46
ar: وَكَانُوا۟ يُصِرُّونَ عَلَى ٱلْحِنثِ ٱلْعَظِيمِ
fr: Ils persistaient dans le grand péché [le polythéisme]
ph: Wa Kānū Yuşirrūna `Alá Al-Ĥinthi Al-`Ažīmi

56:47
ar: وَكَانُوا۟ يَقُولُونَ أَئِذَا مِتْنَا وَكُنَّا تُرَابًۭا وَعِظَٰمًا أَءِنَّا لَمَبْعُوثُونَ
fr: et disaient: « Quand nous mourrons et serons poussière et ossements, serons-nous ressuscités ?
ph: Wa Kānū Yaqūlūna 'A'idhā Mitnā Wa Kunnā Turābāan Wa `Ižāmāan 'A'innā Lamab`ūthūna

56:48
ar: أَوَءَابَآؤُنَا ٱلْأَوَّلُونَ
fr: ainsi que nos anciens ancêtres ?... »
ph: 'Awa 'Ābā'uunā Al-'Awwalūna

56:49
ar: قُلْ إِنَّ ٱلْأَوَّلِينَ وَٱلْءَاخِرِينَ
fr: Dis: « En vérité les premiers et les derniers
ph: Qul 'Inna Al-'Awwalīna Wa Al-'Ākhirīna

56:50
ar: لَمَجْمُوعُونَ إِلَىٰ مِيقَٰتِ يَوْمٍۢ مَّعْلُومٍۢ
fr: seront réunis pour le rendez-vous d'un jour connu. »
ph: Lamajmū`ūna 'Ilá Mīqāti Yawmin Ma`lūmin

56:51
ar: ثُمَّ إِنَّكُمْ أَيُّهَا ٱلضَّآلُّونَ ٱلْمُكَذِّبُونَ
fr: Et puis, vous, les égarés, qui traitiez (la Résurrection) de mensonge,
ph: Thumma 'Innakum 'Ayyuhā Ađ-Đāllūna Al-Mukadhibūna

56:52
ar: لَءَاكِلُونَ مِن شَجَرٍۢ مِّن زَقُّومٍۢ
fr: vous mangerez certainement d'un arbre de Zaqqûm.
ph: La'ākilūna Min Shajarin Min Zaqqūmin

56:53
ar: فَمَالِـُٔونَ مِنْهَا ٱلْبُطُونَ
fr: Vous vous en remplirez le ventre,
ph: Famāli'ūna Minhā Al-Buţūna

56:54
ar: فَشَٰرِبُونَ عَلَيْهِ مِنَ ٱلْحَمِيمِ
fr: puis vous boirez par-dessus cela de l'eau bouillante,
ph: Fashāribūna `Alayhi Mina Al-Ĥamīmi

56:55
ar: فَشَٰرِبُونَ شُرْبَ ٱلْهِيمِ
fr: vous en boirez comme boivent les chameaux assoiffés.
ph: Fashāribūna Shurba Al-Hīmi

56:56
ar: هَٰذَا نُزُلُهُمْ يَوْمَ ٱلدِّينِ
fr: Voilà le repas d'accueil qui leur sera servi, au jour de la Rétribution.
ph: Hādhā Nuzuluhum Yawma Ad-Dīni

56:57
ar: نَحْنُ خَلَقْنَٰكُمْ فَلَوْلَا تُصَدِّقُونَ
fr: C'est Nous qui vous avons créés. Pourquoi ne croiriez-vous donc pas [à la résurrection] ?
ph: Naĥnu Khalaqnākum Falawlā Tuşaddiqūna

56:58
ar: أَفَرَءَيْتُم مَّا تُمْنُونَ
fr: Voyez-vous donc ce que vous éjaculez:
ph: 'Afara'aytum Mā Tumnūna

56:59
ar: ءَأَنتُمْ تَخْلُقُونَهُۥٓ أَمْ نَحْنُ ٱلْخَٰلِقُونَ
fr: est-ce vous qui le créez ou [en] sommes Nous le Créateur ?
ph: 'A'antum Takhluqūnahu 'Am Naĥnu Al-Khāliqūna

56:60
ar: نَحْنُ قَدَّرْنَا بَيْنَكُمُ ٱلْمَوْتَ وَمَا نَحْنُ بِمَسْبُوقِينَ
fr: Nous avons prédéterminé la mort parmi vous. Nous ne serons point empêchés
ph: Naĥnu Qaddarnā Baynakumu Al-Mawta Wa Mā Naĥnu Bimasbūqīna

56:61
ar: عَلَىٰٓ أَن نُّبَدِّلَ أَمْثَٰلَكُمْ وَنُنشِئَكُمْ فِى مَا لَا تَعْلَمُونَ
fr: de vous remplacer par vos semblables, et vous faire renaître dans [un état] que vous ne savez pas.
ph: `Alá 'An Nubaddila 'Amthālakum Wa Nunshi'akum Fī Mā Lā Ta`lamūna

56:62
ar: وَلَقَدْ عَلِمْتُمُ ٱلنَّشْأَةَ ٱلْأُولَىٰ فَلَوْلَا تَذَكَّرُونَ
fr: Vous avez connu la première création. Ne vous rappelez-vous donc pas ?
ph: Wa Laqad `Alimtumu An-Nash'ata Al-'Ūlá Falawlā Tadhkkarūna

56:63
ar: أَفَرَءَيْتُم مَّا تَحْرُثُونَ
fr: Voyez-vous donc ce que vous labourez ?
ph: 'Afara'aytum Mā Taĥruthūna

56:64
ar: ءَأَنتُمْ تَزْرَعُونَهُۥٓ أَمْ نَحْنُ ٱلزَّٰرِعُونَ
fr: Est-ce vous qui le cultivez ? Ou [en] sommes Nous le cultivateur ?
ph: 'A'antum Tazra`ūnahu 'Am Naĥnu Az-Zāri`ūna

56:65
ar: لَوْ نَشَآءُ لَجَعَلْنَٰهُ حُطَٰمًۭا فَظَلْتُمْ تَفَكَّهُونَ
fr: Si Nous voulions, Nous le réduirions en débris. Et vous ne cesseriez pas de vous étonner et [de crier]:
ph: Law Nashā'u Laja`alnāhu Ĥuţāmāan Fažalaltum Tafakkahūna

56:66
ar: إِنَّا لَمُغْرَمُونَ
fr: « Nous voilà endettés !
ph: 'Innā Lamughramūna

56:67
ar: بَلْ نَحْنُ مَحْرُومُونَ
fr: ou plutôt, exposés aux privations. »
ph: Bal Naĥnu Maĥrūmūna

56:68
ar: أَفَرَءَيْتُمُ ٱلْمَآءَ ٱلَّذِى تَشْرَبُونَ
fr: Voyez-vous donc l'eau que vous buvez ?
ph: 'Afara'aytumu Al-Mā'a Al-Ladhī Tashrabūna

56:69
ar: ءَأَنتُمْ أَنزَلْتُمُوهُ مِنَ ٱلْمُزْنِ أَمْ نَحْنُ ٱلْمُنزِلُونَ
fr: Est-ce vous qui l'avez fait descendre du nuage ? Ou [en] sommes Nous le descendeur ?
ph: 'A'antum 'Anzaltumūhu Mina Al-Muzni 'Am Naĥnu Al-Munzilūna

56:70
ar: لَوْ نَشَآءُ جَعَلْنَٰهُ أُجَاجًۭا فَلَوْلَا تَشْكُرُونَ
fr: Si Nous voulions, Nous la rendrions salée. Pourquoi n'êtes-vous donc pas reconnaissants ?
ph: Law Nashā'u Ja`alnāhu 'Ujājāan Falawlā Tashkurūna

56:71
ar: أَفَرَءَيْتُمُ ٱلنَّارَ ٱلَّتِى تُورُونَ
fr: Voyez-vous donc le feu que vous obtenez par frottement ?
ph: 'Afara'aytumu An-Nāra Allatī Tūrūna

56:72
ar: ءَأَنتُمْ أَنشَأْتُمْ شَجَرَتَهَآ أَمْ نَحْنُ ٱلْمُنشِـُٔونَ
fr: Est-ce vous qui avez créé son arbre ou [en] sommes Nous le Créateur ?
ph: 'A'antum 'Ansha'tum Shajaratahā 'Am Naĥnu Al-Munshi'ūna

56:73
ar: نَحْنُ جَعَلْنَٰهَا تَذْكِرَةًۭ وَمَتَٰعًۭا لِّلْمُقْوِينَ
fr: Nous en avons fait un rappel (de l'Enfer), et un élément utile pour ceux qui en ont besoin.
ph: Naĥnu Ja`alnāhā Tadhkiratan Wa Matā`āan Lilmuqwīna

56:74
ar: فَسَبِّحْ بِٱسْمِ رَبِّكَ ٱلْعَظِيمِ
fr: Glorifie donc le nom de ton Seigneur, le Très Grand !
ph: Fasabbiĥ Biāsmi Rabbika Al-`Ažīmi

56:75
ar: ۞ فَلَآ أُقْسِمُ بِمَوَٰقِعِ ٱلنُّجُومِ
fr: Non !.. Je jure par les positions des étoiles (dans le firmament).
ph: Falā 'Uqsimu Bimawāqi`i An-Nujūmi

56:76
ar: وَإِنَّهُۥ لَقَسَمٌۭ لَّوْ تَعْلَمُونَ عَظِيمٌ
fr: Et c'est vraiment un serment solennel, si vous saviez.
ph: Wa 'Innahu Laqasamun Law Ta`lamūna `Ažīmun

56:77
ar: إِنَّهُۥ لَقُرْءَانٌۭ كَرِيمٌۭ
fr: Et c'est certainement un Coran noble,
ph: 'Innahu Laqur'ānun Karīmun

56:78
ar: فِى كِتَٰبٍۢ مَّكْنُونٍۢ
fr: dans un Livre bien gardé
ph: Fī Kitābin Maknūnin

56:79
ar: لَّا يَمَسُّهُۥٓ إِلَّا ٱلْمُطَهَّرُونَ
fr: que seuls les purifiés touchent;
ph: Lā Yamassuhu 'Illā Al-Muţahharūna

56:80
ar: تَنزِيلٌۭ مِّن رَّبِّ ٱلْعَٰلَمِينَ
fr: C'est une révélation de la part du Seigneur de l'Univers.
ph: Tanzīlun Min Rabbi Al-`Ālamīna

56:81
ar: أَفَبِهَٰذَا ٱلْحَدِيثِ أَنتُم مُّدْهِنُونَ
fr: Est-ce ce discours-là que vous traitez de mensonge ?
ph: 'Afabihadhā Al-Ĥadīthi 'Antum Mud/hinūna

56:82
ar: وَتَجْعَلُونَ رِزْقَكُمْ أَنَّكُمْ تُكَذِّبُونَ
fr: Et est-ce pour vous [une façon d'être reconnaissant] à votre subsistance que de traiter (le Coran) de mensonge ?
ph: Wa Taj`alūna Rizqakum 'Annakum Tukadhibūna

56:83
ar: فَلَوْلَآ إِذَا بَلَغَتِ ٱلْحُلْقُومَ
fr: Lorsque le souffle de la vie remonte à la gorge (d'un moribond),
ph: Falawlā 'Idhā Balaghati Al-Ĥulqūma

56:84
ar: وَأَنتُمْ حِينَئِذٍۢ تَنظُرُونَ
fr: et qu'à ce moment là vous regardez,
ph: Wa 'Antum Ĥīna'idhin Tanžurūna

56:85
ar: وَنَحْنُ أَقْرَبُ إِلَيْهِ مِنكُمْ وَلَٰكِن لَّا تُبْصِرُونَ
fr: et que Nous sommes plus proche de lui que vous [qui l'entourez] mais vous ne [le] voyez point.
ph: Wa Naĥnu 'Aqrabu 'Ilayhi Minkum Wa Lakin Lā Tubşirūna

56:86
ar: فَلَوْلَآ إِن كُنتُمْ غَيْرَ مَدِينِينَ
fr: Pourquoi donc, si vous croyez que vous n'avez pas de compte à rendre,
ph: Falawlā 'In Kuntum Ghayra Madīnīna

56:87
ar: تَرْجِعُونَهَآ إِن كُنتُمْ صَٰدِقِينَ
fr: ne la faites-vous pas revenir [cette âme], si vous êtes véridiques ?
ph: Tarji`ūnahā 'In Kuntum Şādiqīna

56:88
ar: فَأَمَّآ إِن كَانَ مِنَ ٱلْمُقَرَّبِينَ
fr: Si celui-ci est du nombre des rapprochés (d'Allah),
ph: Fa'ammā 'In Kāna Mina Al-Muqarrabīna

56:89
ar: فَرَوْحٌۭ وَرَيْحَانٌۭ وَجَنَّتُ نَعِيمٍۢ
fr: alors (il aura) du repos, de la grâce et un Jardin de délices.
ph: Farawĥun Wa Rayĥānun Wa Jannatu Na`īmin

56:90
ar: وَأَمَّآ إِن كَانَ مِنْ أَصْحَٰبِ ٱلْيَمِينِ
fr: Et s'il est du nombre des gens de la droite,
ph: Wa 'Ammā 'In Kāna Min 'Aşĥābi Al-Yamīni

56:91
ar: فَسَلَٰمٌۭ لَّكَ مِنْ أَصْحَٰبِ ٱلْيَمِينِ
fr: il sera [accueilli par ces mots]: « Paix à toi » de la part des gens de la droite.
ph: Fasalāmun Laka Min 'Aşĥābi Al-Yamīni

56:92
ar: وَأَمَّآ إِن كَانَ مِنَ ٱلْمُكَذِّبِينَ ٱلضَّآلِّينَ
fr: Et s'il est de ceux qui avaient traité de mensonge (la résurrection) et s'étaient égarés,
ph: Wa 'Ammā 'In Kāna Mina Al-Mukadhibīna Ađ-Đāllīna

56:93
ar: فَنُزُلٌۭ مِّنْ حَمِيمٍۢ
fr: alors, il sera installé dans une eau bouillante,
ph: Fanuzulun Min Ĥamīmin

56:94
ar: وَتَصْلِيَةُ جَحِيمٍ
fr: et il brûlera dans la Fournaise.
ph: Wa Taşliyatu Jaĥīmin

56:95
ar: إِنَّ هَٰذَا لَهُوَ حَقُّ ٱلْيَقِينِ
fr: C'est cela la pleine certitude.
ph: 'Inna Hādhā Lahuwa Ĥaqqu Al-Yaqīni

56:96
ar: فَسَبِّحْ بِٱسْمِ رَبِّكَ ٱلْعَظِيمِ
fr: Glorifie donc le nom de ton Seigneur, le Très Grand !
ph: Fasabbiĥ Biāsmi Rabbika Al-`Ažīmi 

# ---------- Sourate 112 · Al-Ikhlāṣ ----------

112:1
ar: قُلْ هُوَ ٱللَّهُ أَحَدٌ
fr: Dis : « Lui, Allah, est Un.
ph: Qul Huwa Allāhu 'Aĥadun

112:2
ar: ٱللَّهُ ٱلصَّمَدُ
fr: Allah, l'Absolu, dont tout dépend et qui ne dépend de rien.
ph: Allāhu Aş-Şamadu

112:3
ar: لَمْ يَلِدْ وَلَمْ يُولَدْ
fr: Il n'a pas engendré et n'a pas été engendré,
ph: Lam Yalid Wa Lam Yūlad

112:4
ar: وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ
fr: et nul n'est son égal. »
ph: Walam Yakun Lahu Kufūan 'Aĥadun

# ---------- Sourate 113 · Al-Falaq ----------

113:1
ar: قُلْ أَعُوذُ بِرَبِّ ٱلْفَلَقِ
fr: Dis : « Je cherche protection auprès du Seigneur de l'aube naissante,
ph: Qul 'A`ūdhu Birabbi Al-Falaqi

113:2
ar: مِن شَرِّ مَا خَلَقَ
fr: contre le mal de ce qu'Il a créé,
ph: Min Sharri Mā Khalaqa

113:3
ar: وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ
fr: contre le mal de l'obscurité quand elle s'installe,
ph: Wa Min Sharri Ghāsiqin 'Idhā Waqaba

113:4
ar: وَمِن شَرِّ ٱلنَّفَّٰثَٰتِ فِى ٱلْعُقَدِ
fr: contre le mal de celles qui soufflent sur les nœuds,
ph: Wa Min Sharri An-Naffāthāti Fī Al-`Uqadi

113:5
ar: وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ
fr: et contre le mal de l'envieux quand il envie. »
ph: Wa Min Sharri Ĥāsidin 'Idhā Ĥasada

# ---------- Sourate 114 · An-Nās ----------

114:1
ar: قُلْ أَعُوذُ بِرَبِّ ٱلنَّاسِ
fr: Dis : « Je cherche protection auprès du Seigneur des hommes,
ph: Qul 'A`ūdhu Birabbi An-Nāsi

114:2
ar: مَلِكِ ٱلنَّاسِ
fr: le Souverain des hommes,
ph: Maliki An-Nāsi

114:3
ar: إِلَٰهِ ٱلنَّاسِ
fr: le Dieu des hommes,
ph: 'Ilahi An-Nāsi

114:4
ar: مِن شَرِّ ٱلْوَسْوَاسِ ٱلْخَنَّاسِ
fr: contre le mal de celui qui souffle le doute puis se dérobe,
ph: Min Sharri Al-Waswāsi Al-Khannāsi

114:5
ar: ٱلَّذِى يُوَسْوِسُ فِى صُدُورِ ٱلنَّاسِ
fr: celui qui souffle le doute dans les poitrines des hommes,
ph: Al-Ladhī Yuwaswisu Fī Şudūri An-Nāsi

114:6
ar: مِنَ ٱلْجِنَّةِ وَٱلنَّاسِ
fr: qu'il soit d'entre les djinns ou les hommes. »
ph: Mina Al-Jinnati Wa An-Nāsi

`;
