(function(){

  const MOODS = {
    happy: {
      label: "Happy",
      tag: "Because your joy matters.",
      icon: "☀️",
      photo: "images/happy.png",
      bg: "bg-happy",
      iconClass: "icon-happy",
      verses: [
        ["This is the day that the Lord has made; let us rejoice and be glad in it.", "Psalm 118:24"],
        ["The joy of the Lord is your strength.", "Nehemiah 8:10"],
        ["You make known to me the path of life; in your presence there is fullness of joy.", "Psalm 16:11"],
        ["Every good gift and every perfect gift is from above, coming down from the Father of lights.", "James 1:17"],
        ["Shout for joy to the Lord, all the earth. Worship the Lord with gladness.", "Psalm 100:1-2"],
        ["A joyful heart is good medicine, but a crushed spirit dries up the bones.", "Proverbs 17:22"],
        ["The Lord your God is with you, the Mighty Warrior who saves. He will rejoice over you with gladness.", "Zephaniah 3:17"],
        ["The Lord is my strength and my shield; my heart trusts in him, and he helps me. My heart leaps for joy.", "Psalm 28:7"],
        ["I have told you this so that my joy may be in you and that your joy may be complete.", "John 15:11"],
        ["Rejoice in the Lord always. I will say it again: Rejoice!", "Philippians 4:4"],
        ["Weeping may stay for the night, but rejoicing comes in the morning.", "Psalm 30:5"],
        ["Let the heavens rejoice, let the earth be glad; let them say among the nations, the Lord reigns!", "1 Chronicles 16:31"],
        ["But let all who take refuge in you be glad; let them ever sing for joy.", "Psalm 5:11"],
        ["I delight greatly in the Lord; my soul rejoices in my God.", "Isaiah 61:10"],
        ["May the God of hope fill you with all joy and peace as you trust in him.", "Romans 15:13"],
        ["Sing unto God, sing praises to his name: extol him that rideth upon the heavens, and rejoice before him.", "Psalm 68:4"],
        ["Thou hast turned for me my mourning into dancing: thou hast put off my sackcloth, and girded me with gladness.", "Psalm 30:11"],
        ["Then was our mouth filled with laughter, and our tongue with singing.", "Psalm 126:2"],
        ["Serve the Lord with gladness: come before his presence with singing.", "Psalm 100:2"],
        ["Restore unto me the joy of thy salvation; and uphold me with thy free spirit.", "Psalm 51:12"],
        ["Let the righteous be glad; let them rejoice before God: yea, let them exceedingly rejoice.", "Psalm 68:3"],
        ["Light is sown for the righteous, and gladness for the upright in heart.", "Psalm 97:11"],
        ["There is nothing better for a man than that he should eat and drink, and make his soul enjoy good in his labour.", "Ecclesiastes 2:24"],
        ["He that is of a merry heart hath a continual feast.", "Proverbs 15:15"],
        ["For thou, Lord, hast made me glad through thy work: I will triumph in the works of thy hands.", "Psalm 92:4"],
        ["Yet I will rejoice in the Lord, I will joy in the God of my salvation.", "Habakkuk 3:18"],
        ["Thou hast made him exceeding glad with thy countenance.", "Psalm 21:6"],
        ["Therefore with joy shall ye draw water out of the wells of salvation.", "Isaiah 12:3"],
        ["Fear not: for, behold, I bring you good tidings of great joy, which shall be to all people.", "Luke 2:10"],
        ["Rejoice evermore.", "1 Thessalonians 5:16"]
      ]
    },
    thankful: {
      label: "Thankful",
      tag: "Gratitude changes everything.",
      icon: "🙏",
      photo: "images/thankful.png",
      bg: "bg-thankful",
      iconClass: "icon-thankful",
      verses: [
        ["Give thanks to the Lord, for he is good; his love endures forever.", "Psalm 136:1"],
        ["Give thanks in all circumstances; for this is God's will for you in Christ Jesus.", "1 Thessalonians 5:18"],
        ["And be thankful.", "Colossians 3:15"],
        ["Enter his gates with thanksgiving and his courts with praise; give thanks to him and praise his name.", "Psalm 100:4"],
        ["Give thanks to the Lord, for he is good. His love endures forever.", "Psalm 107:1"],
        ["Give thanks to the Lord, for he is good; his love endures forever.", "1 Chronicles 16:34"],
        ["Give thanks to the Lord, for he is good; his love endures forever.", "Psalm 118:1"],
        ["Always giving thanks to God the Father for everything, in the name of our Lord Jesus Christ.", "Ephesians 5:20"],
        ["It is good to praise the Lord and make music to your name, O Most High.", "Psalm 92:1"],
        ["Whatever you do, whether in word or deed, do it all in the name of the Lord Jesus, giving thanks to God.", "Colossians 3:17"],
        ["Let us come before him with thanksgiving and extol him with music and song.", "Psalm 95:2"],
        ["I will give thanks to the Lord with my whole heart.", "Psalm 9:1"],
        ["Let us be thankful, and so worship God acceptably with reverence and awe.", "Hebrews 12:28"],
        ["Give thanks to the God of heaven. His love endures forever.", "Psalm 136:26"],
        ["Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.", "Philippians 4:6"],
        ["O Lord my God, I will give thanks unto thee for ever.", "Psalm 30:12"],
        ["O give thanks unto the Lord; call upon his name: make known his deeds among the people.", "Psalm 105:1"],
        ["O give thanks unto the Lord; for he is good: for his mercy endureth for ever.", "Psalm 106:1"],
        ["Oh that men would praise the Lord for his goodness, and for his wonderful works to the children of men!", "Psalm 107:8"],
        ["O give thanks unto the Lord; for he is good: for his mercy endureth for ever.", "Psalm 118:29"],
        ["Thanks be unto God for his unspeakable gift.", "2 Corinthians 9:15"],
        ["But thanks be to God, which giveth us the victory through our Lord Jesus Christ.", "1 Corinthians 15:57"],
        ["I will offer to thee the sacrifice of thanksgiving, and will call upon the name of the Lord.", "Psalm 116:17"],
        ["Rooted and built up in him, and established in the faith, abounding therein with thanksgiving.", "Colossians 2:7"],
        ["I will praise the name of God with a song, and will magnify him with thanksgiving.", "Psalm 69:30"],
        ["I will sacrifice unto thee with the voice of thanksgiving; I will pay that that I have vowed.", "Jonah 2:9"],
        ["Offer unto God thanksgiving; and pay thy vows unto the most High.", "Psalm 50:14"],
        ["I cease not to give thanks for you, making mention of you in my prayers.", "Ephesians 1:16"],
        ["For every creature of God is good, and nothing to be refused, if it be received with thanksgiving.", "1 Timothy 4:4"],
        ["Sing unto the Lord with thanksgiving; sing praise upon the harp unto our God.", "Psalm 147:7"]
      ]
    },
    angry: {
      label: "Angry",
      tag: "Choose peace, not pride.",
       photo: "images/angry.png",
      icon: "😠",
      bg: "bg-angry",
      iconClass: "icon-angry",
      verses: [
        ["Be angry and do not sin; do not let the sun go down on your anger.", "Ephesians 4:26"],
        ["Everyone should be quick to listen, slow to speak and slow to become angry.", "James 1:19"],
        ["A gentle answer turns away wrath, but a harsh word stirs up anger.", "Proverbs 15:1"],
        ["A person's wisdom yields patience; it is to one's glory to overlook an offense.", "Proverbs 19:11"],
        ["Refrain from anger and turn from wrath; do not fret—it leads only to evil.", "Psalm 37:8"],
        ["Better a patient person than a warrior, one with self-control than one who takes a city.", "Proverbs 16:32"],
        ["Anger resides in the lap of fools.", "Ecclesiastes 7:9"],
        ["Whoever is patient has great understanding, but one who is quick-tempered displays folly.", "Proverbs 14:29"],
        ["Now you must also rid yourselves of all such things as these: anger, rage, malice, slander, and filthy language.", "Colossians 3:8"],
        ["Do not take revenge, my dear friends, but leave room for God's wrath.", "Romans 12:19"],
        ["A hot-tempered person stirs up conflict, but the one who is patient calms a quarrel.", "Proverbs 15:18"],
        ["But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness and self-control.", "Galatians 5:22-23"],
        ["Fathers, do not exasperate your children; instead, bring them up in the training and instruction of the Lord.", "Ephesians 6:4"],
        ["He must not be quick-tempered, not overbearing, not given to anger.", "Titus 1:7"],
        ["Let all bitterness, wrath, anger, clamor, and slander be put away from you, along with all malice.", "Ephesians 4:31"],
        ["A fool uttereth all his mind: but a wise man keepeth it in till afterwards.", "Proverbs 29:11"],
        ["Make no friendship with an angry man; and with a furious man thou shalt not go.", "Proverbs 22:24"],
        ["For the wrath of man worketh not the righteousness of God.", "James 1:20"],
        ["He that hath no rule over his own spirit is like a city that is broken down, and without walls.", "Proverbs 25:28"],
        ["A fool's wrath is presently known: but a prudent man covereth shame.", "Proverbs 12:16"],
        ["Whosoever is angry with his brother without a cause shall be in danger of the judgment.", "Matthew 5:22"],
        ["An angry man stirreth up strife, and a furious man aboundeth in transgression.", "Proverbs 29:22"],
        ["The Lord is slow to anger, and great in power, and will not at all acquit the wicked.", "Nahum 1:3"],
        ["The Lord is merciful and gracious, slow to anger, and plenteous in mercy.", "Psalm 103:8"],
        ["If any man among you seem to be religious, and bridleth not his tongue, this man's religion is vain.", "James 1:26"],
        ["He that hath knowledge spareth his words: and a man of understanding is of an excellent spirit.", "Proverbs 17:27"],
        ["Charity suffereth long, and is kind... is not easily provoked.", "1 Corinthians 13:4-5"],
        ["Stand in awe, and sin not: commune with your own heart upon your bed, and be still.", "Psalm 4:4"],
        ["The forcing of wrath bringeth forth strife.", "Proverbs 30:33"],
        ["If it be possible, as much as lieth in you, live peaceably with all men.", "Romans 12:18"]
      ]
    },
    anxious: {
      label: "Anxious",
      tag: "Give your worries to God.",
      icon: "🍃",
      photo: "images/anxious.png",
      bg: "bg-anxious",
      iconClass: "icon-anxious",
      verses: [
        ["Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.", "Philippians 4:6"],
        ["Therefore do not worry about tomorrow, for tomorrow will worry about itself.", "Matthew 6:34"],
        ["Cast all your anxiety on him because he cares for you.", "1 Peter 5:7"],
        ["When anxiety was great within me, your consolation brought me joy.", "Psalm 94:19"],
        ["So do not fear, for I am with you; do not be dismayed, for I am your God.", "Isaiah 41:10"],
        ["Cast your cares on the Lord and he will sustain you.", "Psalm 55:22"],
        ["Peace I leave with you; my peace I give you. Do not let your hearts be troubled.", "John 14:27"],
        ["I sought the Lord, and he answered me; he delivered me from all my fears.", "Psalm 34:4"],
        ["Anxiety weighs down the heart, but a kind word cheers it up.", "Proverbs 12:25"],
        ["Come to me, all you who are weary and burdened, and I will give you rest.", "Matthew 11:28"],
        ["God is our refuge and strength, an ever-present help in trouble.", "Psalm 46:1"],
        ["You will keep in perfect peace those whose minds are steadfast, because they trust in you.", "Isaiah 26:3"],
        ["The Lord is my light and my salvation—whom shall I fear?", "Psalm 27:1"],
        ["For God has not given us a spirit of fear, but of power and of love and of a sound mind.", "2 Timothy 1:7"],
        ["Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged.", "Joshua 1:9"],
        ["The Lord is on my side; I will not fear: what can man do unto me?", "Psalm 118:6"],
        ["For I the Lord thy God will hold thy right hand, saying unto thee, Fear not; I will help thee.", "Isaiah 41:13"],
        ["Why art thou cast down, O my soul? hope thou in God: for I shall yet praise him.", "Psalm 42:5"],
        ["Take no thought for your life, what ye shall eat, or what ye shall drink.", "Matthew 6:25"],
        ["I will lift up mine eyes unto the hills, from whence cometh my help.", "Psalm 121:1"],
        ["Trust in the Lord with all thine heart; and lean not unto thine own understanding.", "Proverbs 3:5-6"],
        ["And the peace of God, which passeth all understanding, shall keep your hearts and minds through Christ Jesus.", "Philippians 4:7"],
        ["What time I am afraid, I will trust in thee.", "Psalm 56:3"],
        ["But they that wait upon the Lord shall renew their strength; they shall mount up with wings as eagles.", "Isaiah 40:31"],
        ["Wait on the Lord: be of good courage, and he shall strengthen thine heart.", "Psalm 27:14"],
        ["The Lord, he it is that doth go before thee; he will be with thee, he will not fail thee.", "Deuteronomy 31:8"],
        ["There is no fear in love; but perfect love casteth out fear.", "1 John 4:18"],
        ["Fear not: for I am with thee.", "Isaiah 43:5"],
        ["He that dwelleth in the secret place of the most High shall abide under the shadow of the Almighty.", "Psalm 91:1"],
        ["And we know that all things work together for good to them that love God.", "Romans 8:28"]
      ]
    },
    lonely: {
      label: "Lonely",
      tag: "You are never alone.",
      icon: "🌙",
      photo: "images/lonely.png",
      bg: "bg-lonely",
      iconClass: "icon-lonely",
      verses: [
        ["The Lord is near to the brokenhearted and saves those who are crushed in spirit.", "Psalm 34:18"],
        ["The Lord himself goes before you and will be with you; he will never leave you nor forsake you.", "Deuteronomy 31:6"],
        ["So do not fear, for I am with you; do not be dismayed, for I am your God.", "Isaiah 41:10"],
        ["A father to the fatherless, a defender of widows, is God in his holy dwelling.", "Psalm 68:5"],
        ["Never will I leave you; never will I forsake you.", "Hebrews 13:5"],
        ["And surely I am with you always, to the very end of the age.", "Matthew 28:20"],
        ["Though my father and mother forsake me, the Lord will receive me.", "Psalm 27:10"],
        ["Turn to me and be gracious to me, for I am lonely and afflicted.", "Psalm 25:16"],
        ["He heals the brokenhearted and binds up their wounds.", "Psalm 147:3"],
        ["When you pass through the waters, I will be with you; I will not let the rivers overwhelm you.", "Isaiah 43:2"],
        ["I will not leave you as orphans; I will come to you.", "John 14:18"],
        ["Yet I am always with you; you hold me by my right hand.", "Psalm 73:23"],
        ["The Lord your God is with you, the Mighty Warrior who saves.", "Zephaniah 3:17"],
        ["Even though I walk through the darkest valley, I will fear no evil, for you are with me.", "Psalm 23:4"],
        ["Neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God.", "Romans 8:38-39"],
        ["Whither shall I go from thy spirit? or whither shall I flee from thy presence?", "Psalm 139:7"],
        ["Behold, I have graven thee upon the palms of my hands.", "Isaiah 49:16"],
        ["Behold, I am with thee, and will keep thee in all places whither thou goest.", "Genesis 28:15"],
        ["They that know thy name will put their trust in thee: for thou, Lord, hast not forsaken them that seek thee.", "Psalm 9:10"],
        ["The mountains shall depart, and the hills be removed; but my kindness shall not depart from thee.", "Isaiah 54:10"],
        ["Yet I am not alone, because the Father is with me.", "John 16:32"],
        ["God setteth the solitary in families.", "Psalm 68:6"],
        ["We have not an high priest which cannot be touched with the feeling of our infirmities.", "Hebrews 4:15"],
        ["Truly my soul waiteth upon God: from him cometh my salvation.", "Psalm 62:1"],
        ["I the Lord will hear them, I the God of Israel will not forsake them.", "Isaiah 41:17"],
        ["I cried unto thee, O Lord: I said, Thou art my refuge and my portion in the land of the living.", "Psalm 142:5"],
        ["For where two or three are gathered together in my name, there am I in the midst of them.", "Matthew 18:20"],
        ["Fear not: for I have redeemed thee, I have called thee by thy name; thou art mine.", "Isaiah 43:1"],
        ["Draw nigh to God, and he will draw nigh to you.", "James 4:8"],
        ["Behold, I stand at the door, and knock: if any man hear my voice, and open the door, I will come in to him.", "Revelation 3:20"]
      ]
    },
    sad: {
      label: "Sad",
      tag: "He sees your tears.",
      icon: "🌧️",
      photo: "images/sad.png",
      bg: "bg-sad",
      iconClass: "icon-sad",
      verses: [
        ["He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain, for the old order of things has passed away.", "Revelation 21:4"],
        ["The Lord is close to the brokenhearted and saves those who are crushed in spirit.", "Psalm 34:18"],
        ["He heals the brokenhearted and binds up their wounds.", "Psalm 147:3"],
        ["Blessed are those who mourn, for they will be comforted.", "Matthew 5:4"],
        ["Weeping may stay for the night, but rejoicing comes in the morning.", "Psalm 30:5"],
        ["Now is your time of grief, but I will see you again and you will rejoice.", "John 16:22"],
        ["Record my misery; list my tears on your scroll—are they not in your record?", "Psalm 56:8"],
        ["Those who sow with tears will reap with songs of joy.", "Psalm 126:5"],
        ["Praise be to the God of all comfort, who comforts us in all our troubles.", "2 Corinthians 1:3-4"],
        ["The righteous cry out, and the Lord hears them; he delivers them from all their troubles.", "Psalm 34:17"],
        ["He has sent me to bind up the brokenhearted, to comfort all who mourn.", "Isaiah 61:1-2"],
        ["Why, my soul, are you downcast? Put your hope in God, for I will yet praise him.", "Psalm 42:11"],
        ["Because of the Lord's great love we are not consumed, for his compassions never fail.", "Lamentations 3:22"],
        ["Jesus wept.", "John 11:35"],
        ["You keep track of all my sorrows. You have collected all my tears in your bottle.", "Psalm 56:8"],
        ["The Lord hath heard my supplication; the Lord will receive my prayer.", "Psalm 6:9"],
        ["Surely he hath borne our griefs, and carried our sorrows.", "Isaiah 53:4"],
        ["Many are the afflictions of the righteous: but the Lord delivereth him out of them all.", "Psalm 34:19"],
        ["Thou, which hast shewed me great and sore troubles, shalt quicken me again.", "Psalm 71:20"],
        ["O Lord my God, I cried unto thee, and thou hast healed me.", "Psalm 30:2"],
        ["We are troubled on every side, yet not distressed; we are perplexed, but not in despair.", "2 Corinthians 4:8"],
        ["Hear me speedily, O Lord: my spirit faileth: hide not thy face from me.", "Psalm 143:7"],
        ["As one whom his mother comforteth, so will I comfort you.", "Isaiah 66:13"],
        ["My soul melteth for heaviness: strengthen thou me according unto thy word.", "Psalm 119:28"],
        ["I reckon that the sufferings of this present time are not worthy to be compared with the glory which shall be revealed in us.", "Romans 8:18"],
        ["The God of all grace... shall himself perfect, stablish, strengthen, settle you.", "1 Peter 5:10"],
        ["I waited patiently for the Lord; and he inclined unto me, and heard my cry.", "Psalm 40:1"],
        ["Let not your heart be troubled: ye believe in God, believe also in me.", "John 14:1"],
        ["Hear my cry, O God; attend unto my prayer... lead me to the rock that is higher than I.", "Psalm 61:1-2"],
        ["He will swallow up death in victory; and the Lord God will wipe away tears off all faces.", "Isaiah 25:8"]
      ]
    }
  };

  const FAV_KEY = 'readMeWhenFavorites';

  function loadFavorites(){
    try{
      const raw = localStorage.getItem(FAV_KEY);
      return raw ? JSON.parse(raw) : [];
    }catch(e){
      return [];
    }
  }

  function saveFavorites(list){
    try{
      localStorage.setItem(FAV_KEY, JSON.stringify(list));
    }catch(e){ /* storage unavailable, fail silently */ }
  }

  let favorites = loadFavorites();

  const grid = document.getElementById('moodGrid');
  Object.keys(MOODS).forEach(key => {
    const m = MOODS[key];
    const card = document.createElement('button');
    card.className = 'mood-card ' + key;
    const iconInner = m.photo
      ? `<img src="${m.photo}" alt="" class="icon-photo">`
      : m.icon;
    card.innerHTML = `<span class="icon">${iconInner}</span><span>${m.label}</span>`;
    card.addEventListener('click', () => openMood(key));
    grid.appendChild(card);
  });

  const overlay = document.getElementById('overlay');
  const detailBg = document.getElementById('detailBg');
  const moodIconLg = document.getElementById('moodIconLg');
  const moodName = document.getElementById('moodName');
  const moodTag = document.getElementById('moodTag');
  const verseCard = document.getElementById('verseCard');
  const verseText = document.getElementById('verseText');
  const verseRef = document.getElementById('verseRef');
  const dotsWrap = document.getElementById('dots');
  const saveBtn = document.getElementById('saveBtn');
  const heartIcon = document.getElementById('heartIcon');
  const nextBtn = document.getElementById('nextBtn');
  const backBtn = document.getElementById('backBtn');
  const toast = document.getElementById('toast');

  const favFab = document.getElementById('favFab');
  const favFabHeart = document.getElementById('favFabHeart');
  const favFabCount = document.getElementById('favFabCount');
  const favOverlay = document.getElementById('favOverlay');
  const favBackBtn = document.getElementById('favBackBtn');
  const favList = document.getElementById('favList');

  let currentMood = null;
  let currentIndex = 0;

  function pickRandomIndex(total, exceptIndex){
    if(total <= 1) return 0;
    let idx;
    do { idx = Math.floor(Math.random() * total); } while (idx === exceptIndex);
    return idx;
  }

  function renderDots(total, active){
    dotsWrap.innerHTML = '';
    const maxDots = Math.min(total, 6);
    for(let i=0;i<maxDots;i++){
      const d = document.createElement('span');
      if(i === (active % maxDots)) d.className = 'on';
      dotsWrap.appendChild(d);
    }
  }

  function favIndex(moodKey, idx){
    return favorites.findIndex(v => v.mood === moodKey && v.idx === idx);
  }

  function isFavorited(moodKey, idx){
    return favIndex(moodKey, idx) !== -1;
  }

  function updateFavFab(){
    if(favorites.length > 0){
      favFabHeart.innerHTML = '&#9829;';
      favFabHeart.style.color = '#E0453B';
      favFabCount.hidden = false;
      favFabCount.textContent = favorites.length;
    } else {
      favFabHeart.innerHTML = '&#9825;';
      favFabHeart.style.color = '';
      favFabCount.hidden = true;
    }
  }

  function updateSaveBtn(){
    if(isFavorited(currentMood, currentIndex)){
      saveBtn.classList.add('filled');
      heartIcon.innerHTML = '&#9829;';
      saveBtn.setAttribute('aria-label', 'Remove this verse from favorites');
    } else {
      saveBtn.classList.remove('filled');
      heartIcon.innerHTML = '&#9825;';
      saveBtn.setAttribute('aria-label', 'Save this verse to favorites');
    }
  }

  function showVerse(moodKey, idx, animate){
    const m = MOODS[moodKey];
    const [text, ref] = m.verses[idx];
    const render = () => {
      verseText.textContent = '“' + text + '”';
      verseRef.textContent = ref;
      renderDots(m.verses.length, idx);
      updateSaveBtn();
      if(animate) verseCard.classList.remove('swap');
    };
    if(animate){
      verseCard.classList.add('swap');
      setTimeout(render, 180);
    } else {
      render();
    }
  }

  function openMood(key, forcedIndex){
    const m = MOODS[key];
    currentMood = key;
    currentIndex = (typeof forcedIndex === 'number') ? forcedIndex : Math.floor(Math.random() * m.verses.length);

    detailBg.className = 'detail-bg ' + m.bg;
    moodIconLg.className = 'mood-icon-lg ' + m.iconClass + (m.photo ? ' has-photo' : '');
    moodIconLg.innerHTML = m.photo ? `<img src="${m.photo}" alt="" class="icon-photo">` : m.icon;
    moodName.textContent = m.label;
    moodTag.textContent = m.tag;

    showVerse(key, currentIndex, false);
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDetail(){
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  // close when clicking the dimmed backdrop (not the modal itself)
  overlay.addEventListener('click', (e) => {
    if(e.target === overlay) closeDetail();
  });

  // close on Escape
  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape'){
      if(overlay.classList.contains('active')) closeDetail();
      if(favOverlay.classList.contains('active')) closeFavorites();
    }
  });

  nextBtn.addEventListener('click', () => {
    const m = MOODS[currentMood];
    currentIndex = pickRandomIndex(m.verses.length, currentIndex);
    showVerse(currentMood, currentIndex, true);
  });

  saveBtn.addEventListener('click', () => {
    const idxInFavs = favIndex(currentMood, currentIndex);
    if(idxInFavs !== -1){
      favorites.splice(idxInFavs, 1);
      saveFavorites(favorites);
      updateSaveBtn();
      updateFavFab();
      showToast('Removed from favorites');
    } else {
      const [text, ref] = MOODS[currentMood].verses[currentIndex];
      favorites.push({ mood: currentMood, idx: currentIndex, text, ref, label: MOODS[currentMood].label });
      saveFavorites(favorites);
      updateSaveBtn();
      updateFavFab();
      showToast('Saved to favorites');
    }
  });

  backBtn.addEventListener('click', closeDetail);

  // ---------- FAVORITES LIST ----------
  function renderFavList(){
    favList.innerHTML = '';
    if(favorites.length === 0){
      const empty = document.createElement('div');
      empty.className = 'fav-empty';
      empty.textContent = "You haven't saved any verses yet. Tap the heart on a verse to keep it here.";
      favList.appendChild(empty);
      return;
    }
    favorites.forEach((fav, i) => {
      const item = document.createElement('div');
      item.className = 'fav-item';

      const moodLabel = document.createElement('div');
      moodLabel.className = 'fav-item-mood';
      const m = MOODS[fav.mood];
      const favIconInner = m && m.photo
        ? `<img src="${m.photo}" alt="" class="icon-photo fav-item-photo">`
        : (m ? m.icon : '');
      moodLabel.innerHTML = `<span>${favIconInner}</span><span>${fav.label || (m ? m.label : '')}</span>`;

      const text = document.createElement('p');
      text.className = 'fav-item-text';
      text.textContent = '“' + fav.text + '”';

      const ref = document.createElement('p');
      ref.className = 'fav-item-ref';
      ref.textContent = fav.ref;

      const removeBtn = document.createElement('button');
      removeBtn.className = 'fav-remove';
      removeBtn.setAttribute('aria-label', 'Remove from favorites');
      removeBtn.innerHTML = '&#10005;';
      removeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        favorites.splice(i, 1);
        saveFavorites(favorites);
        updateFavFab();
        renderFavList();
        if(overlay.classList.contains('active')) updateSaveBtn();
      });

      item.appendChild(moodLabel);
      item.appendChild(text);
      item.appendChild(ref);
      item.appendChild(removeBtn);

      item.addEventListener('click', () => {
        closeFavorites();
        openMood(fav.mood, fav.idx);
      });

      favList.appendChild(item);
    });
  }

  function openFavorites(){
    renderFavList();
    favOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeFavorites(){
    favOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  favFab.addEventListener('click', openFavorites);
  favBackBtn.addEventListener('click', closeFavorites);
  favOverlay.addEventListener('click', (e) => {
    if(e.target === favOverlay) closeFavorites();
  });

  let toastTimer;
  function showToast(msg){
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 1600);
  }

  updateFavFab();

})();
