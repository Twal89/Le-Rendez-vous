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
