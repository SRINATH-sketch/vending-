import React, { useState, useRef } from 'react';
import './App.css';

const translations = {
  en: {
    title: "SMART PUBLIC DISTRIBUTION SYSTEM",
    subtitle: "SRI SHAKTHI INSTITUTE OF ENGINEERING AND TECHNOLOGY",
    instructionItems: "Select items you want to add to your cart.",
    instructionWeight: "Please enter the required weight.",
    instructionPlaceBag: "Collect your item:",
    bagPlacementTitle: "Bag Placement",
    instructionBag: "Please place your bag in the collection area to continue.",
    bagDetected: "Bag Detected! Proceeding to dispense...",
    countdownLabel: "Time remaining: ",
    placeBagBtn: "Simulate Bag Placement",
    nextItemBtn: "Next Item",
    thankYou: "THANK YOU",
    welcome: "Welcome to our Vending Machine!",
    select: "Please select your preferred language above.",
    startBtn: "Start",
    instructionQr: "Scan your Smart Card or QR Code.",
    scanBtn: "Simulate Scan",
    instructionOtp: "Enter the OTP sent to your registered mobile number.",
    verifyOtp: "Verify OTP",
    otpPlaceholder: "OTP (e.g., 1234)",
    selectItem: "Select Items",
    dispense: "Proceed to Payment",
    addToCart: "Add to Cart",
    cartTitle: "Your Cart",
    cartEmpty: "Your cart is empty.",
    checkout: "Checkout",
    paymentTitle: "Select Payment Mode",
    payUpi: "Pay via UPI (QR)",
    payCash: "Pay with Cash",
    paymentSuccess: "Payment Successful!",
    scanInstructionUpi: "Scan QR with any UPI app to pay",
    verifyPayment: "Payment Completed",
    dispensingTitle: "Dispensing Items...",
    selectAnItem: "Select an Item",
    close: "Close",
    back: "Back",
    home: "Start Over",
    weightLabel: "Enter Weight (Kg):",
    items: [
      { id: 1, name: "Parboiled Rice", min: 1, max: 20, price: 0 },
      { id: 2, name: "Raw Rice", min: 1, max: 10, price: 0 },
      { id: 3, name: "Dhal", min: 0.5, max: 3, price: 10 },
      { id: 4, name: "Sugar", min: 1, max: 5, price: 20 },
      { id: 5, name: "Wheat", min: 1, max: 10, price: 5 }
    ],
    addMore: "+ Add more",
    cardDetailsTitle: "Smart Card Details",
    cardHolderName: "Card Holder Name",
    familyMembers: "No. of Family Members",
    memberCount: "4",
    cardHolderValue: "SRINATH G",
    continue: "Continue",
    capacityTitle: "Machine Capacity Dashboard",
    totalCapacity: "Total Capacity",
    currentStock: "Current Stock",
    unitKg: "Kg",
    lowStockWarning: "Warning: Low Stock Detected!",
    itemLowStock: "capacity is below 15%!",
    totalPaid: "Total Paid",
    amountDue: "Amount Due"
  },
  ta: {
    title: "ஸ்மார்ட் பொது விநியோக அமைப்பு",
    subtitle: "ஸ்ரீ சக்தி பொறியியல் மற்றும் தொழில்நுட்பக் கல்லூரி",
    instructionItems: "உங்கள் வண்டியில் சேர்க்க வேண்டிய பொருட்களைத் தேர்ந்தெடுக்கவும்.",
    instructionWeight: "தேவையான எடையை உள்ளிடவும்.",
    instructionPlaceBag: "உங்கள் பொருளைப் பெற்றுக்கொள்ளவும்:",
    bagPlacementTitle: "பையை வைத்தல்",
    instructionBag: "தொடர உங்கள் பையை சேகரிப்புப் பகுதியில் வைக்கவும்.",
    bagDetected: "பை கண்டறியப்பட்டது! வழங்கல் தொடங்குகிறது...",
    countdownLabel: "மீதமுள்ள நேரம்: ",
    placeBagBtn: "பையை வைப்பதை உருவகப்படுத்து",
    nextItemBtn: "அடுத்த பொருள்",
    thankYou: "நன்றி",
    welcome: "எங்கள் விற்பனை இயந்திரத்திற்கு வரவேற்கிறோம்!",
    select: "உங்கள் விருப்பமான மொழியை மேலே தேர்ந்தெடுக்கவும்.",
    startBtn: "தொடங்கு",
    instructionQr: "உங்கள் ஸ்மார்ட் கார்டு அல்லது QR குறியீட்டை ஸ்கேன் செய்யவும்.",
    scanBtn: "ஸ்கேனை உருவகப்படுத்து",
    instructionOtp: "உங்கள் பதிவு செய்யப்பட்ட மொபைல் எண்ணிற்கு அனுப்பப்பட்ட OTP ஐ உள்ளிடவும்.",
    verifyOtp: "OTP சரிபார்",
    otpPlaceholder: "OTP (உ.ம்., 1234)",
    selectItem: "பொருள்களைத் தேர்ந்தெடு",
    dispense: "பணம் செலுத்த தொடரவும்",
    addToCart: "கூடையில் சேர்",
    cartTitle: "உங்கள் வண்டி",
    cartEmpty: "வண்டி காலியாக உள்ளது.",
    checkout: "சரிபார்",
    paymentTitle: "கட்டண முறையைத் தேர்ந்தெடுக்கவும்",
    payUpi: "UPI வழியே செலுத்து (QR)",
    payCash: "ரொக்கமாக செலுத்து",
    paymentSuccess: "கட்டணம் முடிந்தது!",
    scanInstructionUpi: "பணம் செலுத்த எந்த UPI ஆப் மூலமும் இந்த QR ஐ ஸ்கேன் செய்யவும்",
    verifyPayment: "பணம் செலுத்திவிட்டேன்",
    dispensingTitle: "பொருட்கள் வழங்கப்படுகின்றன...",
    selectAnItem: "ஒரு பொருளைத் தேர்ந்தெடுக்கவும்",
    close: "மூடு",
    back: "பின்செல்",
    home: "மீண்டும் தொடங்கு",
    weightLabel: "எடையை உள்ளிடவும் (கிலோ):",
    items: [
      { id: 1, name: "புழுங்கல் அரிசி", min: 1, max: 20, price: 0 },
      { id: 2, name: "பச்சரிசி", min: 1, max: 10, price: 0 },
      { id: 3, name: "பருப்பு", min: 0.5, max: 3, price: 10 },
      { id: 4, name: "சர்க்கரை", min: 1, max: 5, price: 20 },
      { id: 5, name: "கோதுமை", min: 1, max: 10, price: 5 }
    ],
    addMore: "+ மேலும் சேர்க்க",
    cardDetailsTitle: "ஸ்மார்ட் கார்டு விவரங்கள்",
    cardHolderName: "அட்டைதாரர் பெயர்",
    familyMembers: "குடும்ப உறுப்பினர்களின் எண்ணிக்கை",
    memberCount: "4",
    cardHolderValue: "ஸ்ரீநாத் ஜி",
    continue: "தொடரவும்",
    capacityTitle: "இயந்திரத்தின் கொள்ளளவு",
    totalCapacity: "மொத்த கொள்ளளவு",
    currentStock: "தற்போதைய இருப்பு",
    unitKg: "கிலோ",
    lowStockWarning: "எச்சரிக்கை: குறைந்த இருப்பு!",
    itemLowStock: "இருப்பு 15% க்கும் குறைவாக உள்ளது!",
    totalPaid: "செலுத்தப்பட்ட மொத்த தொகை",
    amountDue: "செலுத்த வேண்டிய தொகை"
  },
  hi: {
    title: "स्मार्ट सार्वजनिक वितरण प्रणाली",
    subtitle: "श्री शक्ति इंस्टीट्यूट ऑफ इंजीनियरिंग एंड टेक्नोलॉजी",
    instructionItems: "कार्ट में जोड़ने के लिए आइटम चुनें।",
    instructionWeight: "कृपया आवश्यक वजन दर्ज करें।",
    instructionPlaceBag: "आइटम प्राप्त करें:",
    bagPlacementTitle: "बैग प्लेसमेंट",
    instructionBag: "कृपया जारी रखने के लिए अपना बैग संग्रह क्षेत्र में रखें।",
    bagDetected: "बैग मिल गया! आइटम दिया जा रहा है...",
    countdownLabel: "शेष समय: ",
    placeBagBtn: "बैग रखने का अनुकरण करें",
    nextItemBtn: "अगला आइटम",
    thankYou: "धन्यवाद",
    welcome: "हमारी वेंडिंग मशीन में आपका स्वागत है!",
    select: "कृपया ऊपर अपनी पसंदीदा भाषा चुनें।",
    startBtn: "शुरू करें",
    instructionQr: "अपना स्मार्ट कार्ड या क्यूआर कोड स्कैन करें।",
    scanBtn: "स्कैन का अनुकरण करें",
    instructionOtp: "अपने पंजीकृत मोबाइल नंबर पर भेजा गया ओटीपी दर्ज करें।",
    verifyOtp: "ओटीपी सत्यापित करें",
    otpPlaceholder: "ओटीपी (जैसे, 1234)",
    selectItem: "आइटम चुनें",
    dispense: "भुगतान के लिए आगे बढ़ें",
    addToCart: "कार्ट में जोड़ें",
    cartTitle: "आपका कार्ट",
    cartEmpty: "आपकी गाड़ी खाली है।",
    checkout: "चेकआउट",
    paymentTitle: "भुगतान मोड चुनें",
    payUpi: "UPI के माध्यम से भुगतान करें",
    payCash: "नकद से भुगतान करें",
    paymentSuccess: "भुगतान सफल!",
    scanInstructionUpi: "भुगतान करने के लिए किसी भी UPI ऐप से स्कैन करें",
    verifyPayment: "मैंने भुगतान कर दिया है",
    dispensingTitle: "आइटम प्रदान किए जा रहे हैं...",
    selectAnItem: "एक आइटम चुनें",
    close: "बंद करें",
    back: "वापस",
    home: "शुरू से शुरू करें",
    weightLabel: "वजन दर्ज करें (किग्रा):",
    items: [
      { id: 1, name: "उबला हुआ चावल", min: 1, max: 20, price: 0 },
      { id: 2, name: "कच्चा चावल", min: 1, max: 10, price: 0 },
      { id: 3, name: "दाल", min: 0.5, max: 3, price: 10 },
      { id: 4, name: "चीनी", min: 1, max: 5, price: 20 },
      { id: 5, name: "गेहूँ", min: 1, max: 10, price: 5 }
    ],
    addMore: "+ और जोड़ें",
    cardDetailsTitle: "स्मार्ट कार्ड विवरण",
    cardHolderName: "कार्ड धारक का नाम",
    familyMembers: "परिवार के सदस्यों की संख्या",
    memberCount: "4",
    cardHolderValue: "श्रीनाथ जी",
    continue: "जारी रखें",
    capacityTitle: "मशीन क्षमता डैशबोर्ड",
    totalCapacity: "कुल क्षमता",
    currentStock: "वर्तमान स्टॉक",
    unitKg: "किग्रा",
    lowStockWarning: "चेतावनी: कम स्टॉक!",
    itemLowStock: "क्षमता 15% से कम है!",
    totalPaid: "कुल भुगतान किया गया",
    amountDue: "देय राशि"
  }
};

function App() {
  const [lang, setLang] = useState('en');
  const [currentScreen, setCurrentScreen] = useState('home'); // 'home', 'qr', 'otp', 'items', 'weight', 'cart', 'payment', 'dispensing', 'thankyou'
  const [, setSelectedItemId] = useState(null);
  const [, setWeight] = useState('');
  const [otp, setOtp] = useState('');

  // Cart & Sequential Dispense states
  const [cart, setCart] = useState([]);
  const [dispensingIndex, setDispensingIndex] = useState(0);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [activePaymentMode, setActivePaymentMode] = useState(null);
  const [theme, setTheme] = useState('dark');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [rippleOrigin, setRippleOrigin] = useState({ x: '50%', y: '50%' });
  const themeToggleRef = useRef(null);
  const [itemWeights, setItemWeights] = useState({});
  const [inventory] = useState([
    { id: 1, total: 500, current: 345 },
    { id: 2, total: 500, current: 120 },
    { id: 3, total: 200, current: 180 },
    { id: 4, total: 200, current: 20 }, // Sugar is now 10% (below 15% threshold)
    { id: 5, total: 300, current: 210 }
  ]);

  const [bagTimer, setBagTimer] = useState(120);
  const [isBagPlaced, setIsBagPlaced] = useState(false);
  const [activeTimeout, setActiveTimeout] = useState(null);

  React.useEffect(() => {
    let interval;
    if (currentScreen === 'bag-placement' && bagTimer > 0 && !isBagPlaced) {
      interval = setInterval(() => {
        setBagTimer(prev => prev - 1);
      }, 1000);
    } else if (currentScreen === 'bag-placement' && bagTimer === 0) {
      // Reset and go home if timeout
      setCurrentScreen('home');
      setCart([]);
      setBagTimer(120);
      setIsBagPlaced(false);
      setItemWeights({});
    }
    return () => clearInterval(interval);
  }, [currentScreen, bagTimer, isBagPlaced]);

  const toggleTheme = (e) => {
    if (isTransitioning) return;
    // Calculate ripple origin from the button's position
    if (e && e.currentTarget) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = ((rect.left + rect.width / 2) / window.innerWidth) * 100;
      const y = ((rect.top + rect.height / 2) / window.innerHeight) * 100;
      setRippleOrigin({ x: `${x}%`, y: `${y}%` });
    }
    setIsTransitioning(true);
    // Switch theme at the midpoint of the animation
    setTimeout(() => {
      setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    }, 300);
    setTimeout(() => {
      setIsTransitioning(false);
    }, 700);
  };

  const t = translations[lang];
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.selectedWeight * item.price), 0);
  };

  const playSuccessSound = () => {
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

      const playNote = (freq, startTime, duration) => {
        const oscillator = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(freq, startTime);
        gainNode.gain.setValueAtTime(0, startTime);
        gainNode.gain.linearRampToValueAtTime(0.2, startTime + 0.05);
        gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + duration);
        oscillator.start(startTime);
        oscillator.stop(startTime + duration);
      };

      // Dual-tone "Payment Received" chime
      playNote(659.25, audioCtx.currentTime, 0.3); // E5
      playNote(880.00, audioCtx.currentTime + 0.15, 0.4); // A5
    } catch (e) {
      console.error("Audio playback failed", e);
    }
  };

  const startDispensing = () => {
    setIsProcessingPayment(true);
    // Sort cart by ID to ensure fixed dispensing order (1: Parboiled, 2: Raw Rice, 3: Dhal, 4: Sugar, 5: Wheat)
    setCart(prevCart => [...prevCart].sort((a, b) => a.id - b.id));

    setTimeout(() => {
      setIsProcessingPayment(false);
      setActivePaymentMode(null);
      setCurrentScreen('payment-success');
      playSuccessSound();
      setTimeout(() => {
        setBagTimer(120);
        setIsBagPlaced(false);
        setCurrentScreen('bag-placement');
      }, 3000); // Show success animation for 3 seconds
    }, 2000); // Simulate payment processing time
  };

  const processNextDispense = (index) => {
    if (index < cart.length) {
      setDispensingIndex(index);
      const timeout = setTimeout(() => {
        processNextDispense(index + 1);
      }, 60000); // 1 minute to dispense each item
      setActiveTimeout(timeout);
    } else {
      setTimeout(() => {
        setCurrentScreen('thankyou');
      }, 1000);
    }
  };

  const handleNextItem = () => {
    if (activeTimeout) {
      clearTimeout(activeTimeout);
      setActiveTimeout(null);
      processNextDispense(dispensingIndex + 1);
    }
  };

  return (
    <div className={`App theme-${theme}`}>
      {isTransitioning && (
        <div
          className={`theme-ripple-overlay ${theme === 'dark' ? 'to-light' : 'to-dark'}`}
          style={{ '--ripple-x': rippleOrigin.x, '--ripple-y': rippleOrigin.y }}
        />
      )}
      <header className="App-header">
        <div className="capacity-toggle">
          <button
            onClick={() => setCurrentScreen(currentScreen === 'capacity' ? 'home' : 'capacity')}
            title={t.capacityTitle}
            className={currentScreen === 'capacity' ? 'active' : ''}
          >
            📊
          </button>
        </div>

        <div className="language-selector">
          <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>English</button>
          <button className={lang === 'ta' ? 'active' : ''} onClick={() => setLang('ta')}>தமிழ்</button>
          <button className={lang === 'hi' ? 'active' : ''} onClick={() => setLang('hi')}>हिन्दी</button>
        </div>

        <div className="theme-toggle" ref={themeToggleRef}>
          <button onClick={toggleTheme} title={theme === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"} className={isTransitioning ? 'spinning' : ''}>
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>

        <div className="machine-container">
          <div className="header-titles">
            <h1>{t.title}</h1>
            <h3 className="subtitle">{t.subtitle}</h3>
          </div>

          {currentScreen === 'home' && (
            <>
              {inventory.some(item => (item.current / item.total) < 0.15) && (
                <div className="low-stock-alert" onClick={() => setCurrentScreen('capacity')}>
                  <span className="warning-icon">⚠️</span>
                  <div className="warning-content">
                    <strong>{t.lowStockWarning}</strong>
                    <div className="low-stock-items">
                      {inventory
                        .filter(item => (item.current / item.total) < 0.15)
                        .map(item => t.items.find(i => i.id === item.id)?.name)
                        .join(', ')} {t.itemLowStock}
                    </div>
                  </div>
                </div>
              )}
              <p className="welcome-text">{t.welcome}</p>
              <p className="select-text">{t.select}</p>
              <div className="machine-panel">
                <button className="action-btn select-btn" onClick={() => setCurrentScreen('qr')}>{t.startBtn}</button>
              </div>
            </>
          )}

          {currentScreen === 'capacity' && (
            <div className="screen-content capacity-screen">
              <h2>{t.capacityTitle}</h2>
              <div className="inventory-list">
                {inventory.map(itemInv => {
                  const item = t.items.find(i => i.id === itemInv.id);
                  const percentage = (itemInv.current / itemInv.total) * 100;
                  return (
                    <div key={itemInv.id} className="inventory-item">
                      <div className="inventory-header">
                        <span className="inventory-name">{item?.name}</span>
                        <span className="inventory-values">
                          {itemInv.current} / {itemInv.total} {t.unitKg}
                        </span>
                      </div>
                      <div className="progress-container">
                        <div
                          className={`progress-bar ${percentage < 20 ? 'critical' : percentage < 50 ? 'low' : ''}`}
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="machine-panel">
                <button className="action-btn back-btn" onClick={() => setCurrentScreen('home')}>{t.back}</button>
              </div>
            </div>
          )}

          {currentScreen === 'qr' && (
            <div className="screen-content">
              <h2>QR / Smart Card</h2>
              <p className="instruction-text">{t.instructionQr}</p>

              <div className="qr-scanner-mock">
                <div className="qr-frame">
                  <div className="scan-line"></div>
                </div>
              </div>

              <div className="machine-panel">
                <button className="action-btn select-btn" onClick={() => setCurrentScreen('card-details')}>{t.scanBtn}</button>
                <button className="action-btn back-btn" onClick={() => setCurrentScreen('home')}>{t.back}</button>
              </div>
            </div>
          )}

          {currentScreen === 'card-details' && (
            <div className="screen-content">
              <h2>{t.cardDetailsTitle}</h2>
              <div className="card-details-display">
                <div className="detail-row">
                  <span className="detail-label">{t.cardHolderName}</span>
                  <span className="detail-value">{t.cardHolderValue}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">{t.familyMembers}</span>
                  <span className="detail-value">{t.memberCount}</span>
                </div>
              </div>

              <div className="machine-panel">
                <button className="action-btn dispense-btn" onClick={() => setCurrentScreen('otp')}>{t.continue}</button>
                <button className="action-btn back-btn" onClick={() => setCurrentScreen('qr')}>{t.back}</button>
              </div>
            </div>
          )}

          {currentScreen === 'otp' && (
            <div className="screen-content">
              <h2>OTP Authentication</h2>
              <p className="instruction-text">{t.instructionOtp}</p>

              <div className="otp-container">
                <input
                  type="text"
                  maxLength="4"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                  placeholder={t.otpPlaceholder}
                  className="otp-input"
                />
              </div>

              <div className="machine-panel">
                <button
                  className="action-btn dispense-btn"
                  disabled={otp.length !== 4}
                  onClick={() => setCurrentScreen('items')}
                >
                  {t.verifyOtp}
                </button>
                <button className="action-btn back-btn" onClick={() => setCurrentScreen('qr')}>{t.back}</button>
              </div>
            </div>
          )}

          {currentScreen === 'items' && (
            <div className="screen-content items-screen">
              <h2>{t.selectAnItem}</h2>
              <p className="instruction-text">{t.instructionItems}</p>

              {cart.length > 0 && (
                <div className="cart-summary-mini">
                  <span>{cart.length} item(s) in cart</span>
                  <button className="action-btn small-btn" onClick={() => setCurrentScreen('cart')}>View Cart</button>
                </div>
              )}

              <div className="items-horizontal-container">
                <div className="items-list-horizontal">
                  {t.items.map(item => {
                    const isInCart = cart.find(cItem => cItem.id === item.id);
                    const currentWeight = itemWeights[item.id] || '';
                    const isValid = parseFloat(currentWeight) >= item.min && parseFloat(currentWeight) <= item.max;

                    return (
                      <div key={item.id} className={`item-card ${isInCart ? 'in-cart' : ''}`}>
                        <div className="item-card-header">
                          <span className="item-name">{item.name}</span>
                          <span className="item-price-tag">{item.price > 0 ? `₹${item.price}/Kg` : 'FREE'}</span>
                        </div>

                        <div className="item-card-body">
                          <label className="limit-label">Min: {item.min}kg | Max: {item.max}kg</label>
                          <input
                            type="number"
                            placeholder="0.0"
                            value={currentWeight}
                            disabled={isInCart}
                            onChange={(e) => setItemWeights({ ...itemWeights, [item.id]: e.target.value })}
                            className={`card-weight-input ${currentWeight && !isValid ? 'invalid' : ''}`}
                          />
                        </div>

                        <div className="item-card-footer">
                          {isInCart ? (
                            <button className="action-btn added-btn" disabled>Added ✓</button>
                          ) : (
                            <button
                              className="action-btn add-to-cart-btn"
                              disabled={!isValid}
                              onClick={() => {
                                setCart([...cart, { ...item, selectedWeight: parseFloat(currentWeight) }]);
                              }}
                            >
                              {t.addToCart}
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="machine-panel">
                <button className="action-btn back-btn" onClick={() => setCurrentScreen('otp')}>{t.back}</button>
                {cart.length > 0 && (
                  <button className="action-btn dispense-btn" onClick={() => setCurrentScreen('cart')}>{t.checkout}</button>
                )}
              </div>
            </div>
          )}

          {currentScreen === 'cart' && (
            <div className="screen-content">
              <h2>{t.cartTitle}</h2>

              {cart.length === 0 ? (
                <p className="instruction-text">{t.cartEmpty}</p>
              ) : (
                <div className="cart-list">
                  {cart.map((item, idx) => (
                    <div key={idx} className="cart-item">
                      <div className="cart-item-details">
                        <strong>{item.name}</strong>
                        <span className="cart-item-weight">
                          {item.selectedWeight} Kg {item.price > 0 ? `@ ₹${item.price}/Kg` : ''}
                        </span>
                      </div>
                      <span className="cart-item-price">
                        {item.price > 0 ? `₹${(item.selectedWeight * item.price).toFixed(2)}` : 'FREE'}
                      </span>
                    </div>
                  ))}
                  <div className="cart-total">
                    <strong>Total Amount:</strong>
                    <span className="grand-total">₹{calculateTotal().toFixed(2)}</span>
                  </div>
                </div>
              )}

              <div className="machine-panel">
                {cart.length < t.items.length && (
                  <button className="action-btn select-btn" onClick={() => setCurrentScreen('items')}>{t.addMore || "+ Add more"}</button>
                )}
                {cart.length > 0 && (
                  <button
                    className="action-btn dispense-btn"
                    onClick={() => {
                      if (calculateTotal() === 0) {
                        startDispensing();
                      } else {
                        setCurrentScreen('payment');
                      }
                    }}
                  >
                    {t.checkout}
                  </button>
                )}
              </div>
            </div>
          )}

          {currentScreen === 'payment' && (
            <div className="screen-content">
              <h2>{t.paymentTitle}</h2>
              <h3 className="payment-amount">{t.amountDue}: <strong>₹{calculateTotal().toFixed(2)}</strong></h3>

              {isProcessingPayment ? (
                <div className="payment-processing">
                  <div className="loader"></div>
                  <p className="payment-amount-display">{t.amountDue}: <strong>₹{calculateTotal().toFixed(2)}</strong></p>
                  <p className="instruction-text">Processing...</p>
                </div>
              ) : activePaymentMode === 'upi' ? (
                <div className="upi-payment-section">
                  <p className="instruction-text">{t.scanInstructionUpi}</p>
                  <p className="payment-amount-display">{t.amountDue}: <strong>₹{calculateTotal().toFixed(2)}</strong></p>
                  <div className="qr-container">
                    <img
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(`upi://pay?pa=vending@ybl&pn=SMART PDS&am=${calculateTotal().toFixed(2)}&cu=INR`)}`}
                      alt="UPI QR Code"
                      className="payment-qr-image"
                    />
                  </div>
                  <div className="machine-panel">
                    <button className="action-btn dispense-btn" onClick={startDispensing}>{t.verifyPayment}</button>
                    <button className="action-btn back-btn" onClick={() => setActivePaymentMode(null)}>{t.back}</button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="payment-options">
                    <button className="action-btn coin-btn payment-btn" onClick={() => setActivePaymentMode('upi')}>
                      <span className="icon">📱</span> {t.payUpi}
                    </button>
                    <button className="action-btn dispense-btn payment-btn" onClick={startDispensing}>
                      <span className="icon">💵</span> {t.payCash}
                    </button>
                  </div>
                  <div className="machine-panel">
                    <button className="action-btn back-btn" onClick={() => setCurrentScreen('cart')}>{t.back}</button>
                  </div>
                </>
              )}
            </div>
          )}

          {currentScreen === 'payment-success' && (
            <div className="screen-content success-screen">
              <div className="success-animation-container">
                <div className="gpay-circle">
                  <div className="gpay-tick"></div>
                </div>
                <div className="twinkling-stars">
                  <span className="star" style={{ top: '10%', left: '20%', animationDelay: '0s' }}>✨</span>
                  <span className="star" style={{ top: '30%', left: '80%', animationDelay: '0.2s' }}>✨</span>
                  <span className="star" style={{ top: '70%', left: '15%', animationDelay: '0.4s' }}>✨</span>
                  <span className="star" style={{ top: '80%', left: '75%', animationDelay: '0.6s' }}>✨</span>
                  <span className="star" style={{ top: '40%', left: '50%', animationDelay: '0.8s' }}>✨</span>
                </div>
              </div>
              <h2 className="success-text">{t.paymentSuccess}</h2>
              <div className="success-bill">
                <span className="success-bill-label">{t.totalPaid}</span>
                <span className="success-bill-amount">₹{cart.reduce((sum, item) => sum + (item.price * item.selectedWeight), 0).toFixed(2)}</span>
              </div>
            </div>
          )}

          {currentScreen === 'bag-placement' && (
            <div className="screen-content bag-placement-screen">
              <h2>{t.bagPlacementTitle}</h2>
              <p className="instruction-text">{t.instructionBag}</p>

              <div className="bag-timer-container">
                <div className="timer-circle">
                  <svg viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" className="timer-bg" />
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      className="timer-progress"
                      style={{ strokeDashoffset: (440 - (440 * bagTimer) / 120) }}
                    />
                  </svg>
                  <div className="timer-text">
                    {Math.floor(bagTimer / 60)}:{(bagTimer % 60).toString().padStart(2, '0')}
                  </div>
                </div>
              </div>

              <div className={`bag-status-indicator ${isBagPlaced ? 'active' : ''}`}>
                {isBagPlaced ? (
                  <div className="indicator-content">
                    <span className="check-icon">✅</span>
                    <p>{t.bagDetected}</p>
                  </div>
                ) : (
                  <div className="indicator-content">
                    <div className="pulse-dot"></div>
                    <p>Waiting for bag...</p>
                  </div>
                )}
              </div>

              <div className="machine-panel">
                {!isBagPlaced && (
                  <button
                    className="action-btn select-btn"
                    onClick={() => {
                      setIsBagPlaced(true);
                      setTimeout(() => {
                        setCurrentScreen('dispensing');
                        processNextDispense(0);
                      }, 2000);
                    }}
                  >
                    {t.placeBagBtn}
                  </button>
                )}
                <button
                  className="action-btn back-btn"
                  onClick={() => {
                    setCurrentScreen('home');
                    setCart([]);
                    setItemWeights({});
                  }}
                >
                  {t.home}
                </button>
              </div>
            </div>
          )}

          {currentScreen === 'dispensing' && (
            <div className="screen-content">
              <h2>{t.dispensingTitle}</h2>
              <div className="dispensing-status">
                <p className="instruction-text highlight-instruction">{t.instructionPlaceBag}</p>
                <div className="active-dispense">
                  <div className="dispense-loader"></div>
                  <h3><strong>{cart[dispensingIndex]?.name}</strong> ({cart[dispensingIndex]?.selectedWeight} Kg)</h3>
                </div>

                {dispensingIndex < cart.length - 1 && (
                  <div className="manual-next-container">
                    <button className="action-btn dispense-btn green-glow" onClick={handleNextItem}>
                      {t.nextItemBtn}
                    </button>
                  </div>
                )}

                <div className="queue-list">
                  <p>Queue:</p>
                  {cart.map((item, idx) => (
                    <span key={idx} className={`queue-dot ${idx < dispensingIndex ? 'done' : idx === dispensingIndex ? 'active' : ''}`}></span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {currentScreen === 'thankyou' && (
            <div className="screen-content thankyou-screen">
              <p className="instruction-text highlight-instruction">{t.instructionPlaceBag}</p>

              <div className="thankyou-display">
                <h2 className="thankyou-text"><strong>{t.thankYou}</strong></h2>
              </div>

              <div className="machine-panel">
                <button
                  className="action-btn back-btn"
                  onClick={() => {
                    setCurrentScreen('home');
                    setSelectedItemId(null);
                    setWeight('');
                    setCart([]);
                    setDispensingIndex(0);
                    setActivePaymentMode(null);
                  }}
                >
                  {t.home}
                </button>
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
