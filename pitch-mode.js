// Engaging elevator pitch mode for 2-3 minute presentation

document.addEventListener('DOMContentLoaded', function() {
    // Create the splash screen element
    const splashScreen = document.createElement('div');
    splashScreen.className = 'elevator-pitch-splash';
    splashScreen.innerHTML = `
        <div class="splash-content">
            <div class="logo-icon"><span>M</span></div>
            <h1 class="splash-title">ModRoll</h1>
            <div class="splash-divider"></div>
            <p class="elevator-pitch-text">
                "Revolutionizing blockchain development enabling developers to use familiar languages while ensuring enterprise-grade reliability"
            </p>
        </div>
    `;
    document.body.appendChild(splashScreen);
    
    // Create the pitch mode toggle button in your header
    // const headerButtons = document.querySelector('.header-buttons');
    // if (headerButtons) {
    //     const pitchButton = document.createElement('a');
    //     pitchButton.href = '#';
    //     pitchButton.className = 'btn pitch-btn';
    //     pitchButton.style.margin = '0 0 0 10px'; // Add proper spacing
    //     pitchButton.textContent = 'Elevator Pitch';
    //     pitchButton.addEventListener('click', togglePitchMode);
        
    //     // Make it match your existing buttons styling
    //     pitchButton.style.padding = '8px 20px';
    //     pitchButton.style.borderRadius = '4px';
    //     pitchButton.style.background = 'white';
    //     pitchButton.style.color = '#3A36E0';
    //     pitchButton.style.border = '1px solid #3A36E0';
        
    //     headerButtons.appendChild(pitchButton);
    // }

    const pitchButton2 = document.createElement('a');
    pitchButton2.href = '#';
    pitchButton2.className = 'pitch-btn';
    pitchButton2.textContent = 'Elevator Pitch';
    pitchButton2.setAttribute('title', 'Start elevator pitch presentation (Alt+P)');
    pitchButton2.addEventListener('click', togglePitchMode);
    pitchButton2.style.cssText = 'position: fixed; right: 20px; bottom: 20px; padding: 10px 20px; border-radius: 50px; background: #3A36E0; color: white; box-shadow: 0 2px 10px rgba(0,0,0,0.2); z-index: 1000; text-decoration: none; font-weight: bold; cursor: pointer; transition: transform 0.2s;';

    // Add hover effect
    pitchButton2.addEventListener('mouseover', () => {
    pitchButton2.style.transform = 'translateY(-3px)';
    });
    pitchButton2.addEventListener('mouseout', () => {
    pitchButton2.style.transform = 'translateY(0)';
    });

    document.body.appendChild(pitchButton2);

    
    
    // Add pitch mode CSS
    const pitchStyles = document.createElement('style');
    pitchStyles.innerHTML = `
        .pitch-mode-active section:not(.pitch-section),
        .pitch-mode-active .header-content nav,
        .pitch-mode-active .header-buttons a:not(.pitch-btn),
        .pitch-mode-active footer {
            display: none !important;
        }
        
        .pitch-mode-active .pitch-btn {
            background-color: var(--primary);
            color: white;
        }
        
        .pitch-controls {
            position: fixed;
            bottom: 30px;
            right: 30px;
            display: flex;
            gap: 15px;
            z-index: 999;
            opacity: 0;
            transition: opacity 0.3s ease;
            pointer-events: none;
        }
        
        .pitch-mode-active .pitch-controls {
            opacity: 1;
            pointer-events: all;
        }
        
        .pitch-nav-button {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background: var(--primary);
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.8rem;
            cursor: pointer;
            box-shadow: 0 3px 15px rgba(0,0,0,0.2);
            transition: transform 0.2s, box-shadow 0.2s;
        }
        
        .pitch-nav-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 5px 20px rgba(0,0,0,0.3);
        }
        
        .pitch-timer {
            position: fixed;
            top: 100px;
            right: 30px;
            background: var(--primary);
            color: white;
            padding: 10px 20px;
            border-radius: 30px;
            font-size: 1.1rem;
            font-weight: 600;
            box-shadow: 0 3px 10px rgba(0,0,0,0.2);
            opacity: 0;
            transition: opacity 0.3s ease;
            z-index: 999;
        }
        
        .pitch-mode-active .pitch-timer {
            opacity: 1;
        }
        
        .pitch-progress {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 8px;
            background: rgba(0,0,0,0.1);
            z-index: 1000;
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        
        .pitch-mode-active .pitch-progress {
            opacity: 1;
        }
        
        .pitch-progress-bar {
            height: 100%;
            background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
            width: 0%;
            transition: width 0.3s ease;
            border-radius: 0 4px 4px 0;
            box-shadow: 0 0 10px rgba(0, 194, 255, 0.5);
        }
        
        /* Custom pitch slides styling */
        .pitch-slide {
            position: relative;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 80px 20px 60px;
            text-align: center;
            background-color: white;
            overflow: hidden;
        }
        
        .pitch-slide:nth-child(odd) {
            background: linear-gradient(135deg, rgba(58,54,224,0.03) 0%, rgba(0,194,255,0.03) 100%);
        }
        
        .slide-pattern {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: radial-gradient(rgba(58,54,224,0.05) 2px, transparent 2px);
            background-size: 30px 30px;
            pointer-events: none;
            z-index: 0;
        }
        
        .pitch-slide-content {
            position: relative;
            max-width: 1000px;
            margin: 0 auto;
            z-index: 1;
        }
        
        .pitch-slide-number {
            position: absolute;
            top: 20px;
            left: 20px;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: var(--primary);
            color: white;
            font-size: 1.2rem;
            font-weight: 700;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 3px 10px rgba(0,0,0,0.1);
        }
        
        .pitch-slide-title {
            font-size: 3rem;
            margin-bottom: 40px;
            font-weight: 800;
            background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-shadow: 0 5px 10px rgba(0,0,0,0.05);
        }
        
        .pitch-highlight {
            font-size: 1.8rem;
            font-weight: 700;
            margin-bottom: 30px;
            color: var(--dark);
            line-height: 1.4;
        }
        
        .pitch-point {
            display: flex;
            align-items: center;
            margin-bottom: 25px;
            text-align: left;
            background: white;
            padding: 20px 30px;
            border-radius: 12px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.05);
            transform: translateY(0);
            transition: transform 0.3s, box-shadow 0.3s;
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
        }
        
        .pitch-point:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }
        
        .point-icon {
            min-width: 50px;
            height: 50px;
            border-radius: 50%;
            background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.4rem;
            margin-right: 20px;
            box-shadow: 0 5px 10px rgba(0,0,0,0.1);
        }
        
        .point-content {
            flex: 1;
        }
        
        .point-title {
            font-size: 1.4rem;
            font-weight: 700;
            margin-bottom: 5px;
            color: var(--dark);
        }
        
        .point-text {
            font-size: 1.1rem;
            color: var(--grey);
            line-height: 1.4;
        }
        
        .highlight-number {
            display: inline-block;
            font-size: 2.5rem;
            font-weight: 800;
            background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-right: 5px;
            vertical-align: middle;
        }
        
        .market-stats {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 30px;
            margin: 40px 0;
        }
        
        .market-stat {
            background: white;
            padding: 25px;
            border-radius: 15px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.05);
            text-align: center;
            min-width: 220px;
            flex: 1;
            max-width: 300px;
            transition: transform 0.3s, box-shadow 0.3s;
        }
        
        .market-stat:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 30px rgba(0,0,0,0.1);
        }
        
        .stat-number {
            font-size: 3rem;
            font-weight: 800;
            background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 10px;
            line-height: 1;
        }
        
        .stat-label {
            color: var(--dark);
            font-weight: 600;
            font-size: 1.1rem;
        }
        
        .business-model {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 30px;
            margin: 40px 0;
        }
        
        .model-card {
            background: white;
            padding: 30px;
            border-radius: 15px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.05);
            text-align: center;
            min-width: 220px;
            flex: 1;
            max-width: 300px;
            transition: transform 0.3s, box-shadow 0.3s;
        }
        
        .model-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 30px rgba(0,0,0,0.1);
        }
        
        .model-icon {
            width: 70px;
            height: 70px;
            border-radius: 50%;
            background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
            margin: 0 auto 20px;
            box-shadow: 0 8px 20px rgba(0,0,0,0.1);
        }
        
        .model-title {
            font-size: 1.5rem;
            font-weight: 700;
            margin-bottom: 15px;
            color: var(--dark);
        }
        
        .model-description {
            color: var(--grey);
            font-size: 1.1rem;
            line-height: 1.5;
        }
        
        .model-price {
            font-size: 1.8rem;
            font-weight: 800;
            background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin: 15px 0;
        }
        
        .korea-flag {
            display: inline-block;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            background: linear-gradient(135deg, #003478 0%, #003478 45%, #FFFFFF 45%, #FFFFFF 55%, #C60C30 55%, #C60C30 100%);
            vertical-align: middle;
            margin-right: 10px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        
        .token-icon {
            display: inline-block;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
            color: white;
            text-align: center;
            line-height: 24px;
            font-weight: 700;
            vertical-align: middle;
            margin-right: 10px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        
        .cta-container {
            margin-top: 50px;
            padding: 40px;
            background: linear-gradient(135deg, rgba(58,54,224,0.05) 0%, rgba(0,194,255,0.05) 100%);
            border-radius: 20px;
            text-align: center;
        }
        
        .cta-title {
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 20px;
            color: var(--dark);
        }
        
        .cta-button {
            display: inline-block;
            padding: 15px 40px;
            background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
            color: white;
            border-radius: 50px;
            font-size: 1.2rem;
            font-weight: 700;
            text-decoration: none;
            margin-top: 20px;
            box-shadow: 0 8px 20px rgba(58,54,224,0.2);
            transition: transform 0.3s, box-shadow 0.3s;
        }
        
        .cta-button:hover {
            transform: translateY(-5px);
            box-shadow: 0 12px 30px rgba(58,54,224,0.3);
        }
        
        /* Splash screen styles */
        .elevator-pitch-splash {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: var(--primary);
            background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
            z-index: 2000;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.5s ease;
        }
        
        .splash-content {
            max-width: 800px;
            text-align: center;
            padding: 40px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 20px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }
        
        .splash-title {
            font-size: 3.5rem;
            color: white;
            margin: 20px 0;
        }
        
        .splash-divider {
            height: 4px;
            width: 100px;
            background: white;
            margin: 20px auto;
            border-radius: 2px;
        }
        
        .elevator-pitch-text {
            color: white;
            font-size: 1.6rem;
            line-height: 1.5;
            font-weight: 300;
        }
        
        .logo-icon {
            background: white;
            width: 100px;
            height: 100px;
            border-radius: 20px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .logo-icon span {
            color: var(--primary);
            font-weight: 900;
            font-size: 3.5rem;
        }
        
        .show-splash {
            opacity: 1;
            pointer-events: auto;
        }
        
        .slide-in {
            animation: slideIn 0.6s ease forwards;
        }
        
        .fade-in {
            animation: fadeIn 0.8s ease forwards;
        }
        
        @keyframes slideIn {
            from {
                transform: translateY(50px);
                opacity: 0;
            }
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }
        
        @keyframes fadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(pitchStyles);
    
    // Create pitch controls
    const controls = document.createElement('div');
    controls.className = 'pitch-controls';
    controls.innerHTML = `
        <div class="pitch-nav-button prev-btn">←</div>
        <div class="pitch-nav-button next-btn">→</div>
    `;
    document.body.appendChild(controls);
    
    // Create timer
    const timer = document.createElement('div');
    timer.className = 'pitch-timer';
    timer.id = 'pitch-timer';
    timer.textContent = '00:00';
    document.body.appendChild(timer);
    
    // Create progress bar
    const progress = document.createElement('div');
    progress.className = 'pitch-progress';
    progress.innerHTML = '<div class="pitch-progress-bar" id="pitch-progress-bar"></div>';
    document.body.appendChild(progress);
    
    // Create custom pitch slides container
    const pitchContainer = document.createElement('div');
    pitchContainer.className = 'pitch-container';
    pitchContainer.style.display = 'none';
    document.body.appendChild(pitchContainer);
    
    // Create the focused pitch content
    function createPitchSlides() {
        pitchContainer.innerHTML = `
            <!-- Slide 1: Who You Are -->
            <div class="pitch-slide" id="pitch-who">
                <div class="slide-pattern"></div>
                <div class="pitch-slide-number">1</div>
                <div class="pitch-slide-content">
                    <h2 class="pitch-slide-title">Who We Are</h2>
                    
                    <div class="pitch-point slide-in">
                        <div class="point-icon">🔍</div>
                        <div class="point-content">
                            <h3 class="point-title">The Problem</h3>
                            <p class="point-text"><span class="highlight-number">76%</span> of developers cite limited language options as a major barrier to blockchain adoption</p>
                            <p class="point-text"><span class="highlight-number">82%</span> struggle with complex oracle setups for accessing real-world data</p>
                        </div>
                    </div>
                    
                    <div class="pitch-point slide-in" style="animation-delay: 0.2s">
                        <div class="point-icon">💡</div>
                        <div class="point-content">
                            <h3 class="point-title">Our Solution</h3>
                            <p class="point-text">ModRoll is multi-language blockchain middleware that <span class="highlight-number">reduces development time by 47%</span></p>
                        </div>
                    </div>
                    
                    <div class="pitch-point slide-in" style="animation-delay: 0.4s">
                        <div class="point-icon">🤝</div>
                        <div class="point-content">
                            <h3 class="point-title">Strategic Partnership</h3>
                            <p class="point-text">Partnered with <span class="highlight-number">SUI blockchain</span> for access to 120,000 TPS technology</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Slide 2: What You Do -->
            <div class="pitch-slide" id="pitch-what">
                <div class="slide-pattern"></div>
                <div class="pitch-slide-number">2</div>
                <div class="pitch-slide-content">
                    <h2 class="pitch-slide-title">Key Capabilities</h2>
                    
                    <div class="pitch-point slide-in">
                        <div class="point-icon">💻</div>
                        <div class="point-content">
                            <h3 class="point-title">Multi-Language Support</h3>
                            <p class="point-text">Write blockchain apps in Python, JavaScript or Move - languages developers already know</p>
                        </div>
                    </div>
                    
                    <div class="pitch-point slide-in" style="animation-delay: 0.2s">
                        <div class="point-icon">🔌</div>
                        <div class="point-content">
                            <h3 class="point-title">Built-in API Integration</h3>
                            <p class="point-text">Eliminates the need for separate oracles - <span class="highlight-number">saving $5,400+</span> in setup costs</p>
                        </div>
                    </div>
                    
                    <div class="pitch-point slide-in" style="animation-delay: 0.4s">
                        <div class="point-icon">🛡️</div>
                        <div class="point-content">
                            <h3 class="point-title">Enterprise-Grade Reliability</h3>
                            <p class="point-text"><span class="highlight-number">99.9%</span> uptime with automatic 5-second failover to alternative chains</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Slide 3: Market Validation -->
            <div class="pitch-slide" id="pitch-market">
                <div class="slide-pattern"></div>
                <div class="pitch-slide-number">3</div>
                <div class="pitch-slide-content">
                    <h2 class="pitch-slide-title">Market Opportunity</h2>
                    
                    <div class="market-stats fade-in">
                        <div class="market-stat">
                            <div class="stat-number">$145.9B</div>
                            <div class="stat-label">Enterprise Blockchain by 2030</div>
                        </div>
                        
                        <div class="market-stat">
                            <div class="stat-number">$3.4B</div>
                            <div class="stat-label">South Korean Crypto Market</div>
                        </div>
                        
                        <div class="market-stat">
                            <div class="stat-number">22,000+</div>
                            <div class="stat-label">Active Web3 Developers</div>
                        </div>
                    </div>
                    
                    <div class="pitch-highlight fade-in" style="animation-delay: 0.3s">
                        <span class="korea-flag"></span> South Korea Strategic Entry Point
                    </div>
                    
                    <div class="pitch-point slide-in" style="animation-delay: 0.5s">
                        <div class="point-icon">🏢</div>
                        <div class="point-content">
                            <h3 class="point-title">Enterprise Partnerships</h3>
                            <p class="point-text">Strategic relationships with Samsung, LG, and SK tech divisions</p>
                        </div>
                    </div>
                    
                    <div class="pitch-point slide-in" style="animation-delay: 0.7s">
                        <div class="point-icon">📝</div>
                        <div class="point-content">
                            <h3 class="point-title">Favorable Regulations</h3>
                            <p class="point-text">2023 Digital Assets Framework provides clear operational guidelines</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Slide 4: Business Model & Goals -->
            <div class="pitch-slide" id="pitch-business">
                <div class="slide-pattern"></div>
                <div class="pitch-slide-number">4</div>
                <div class="pitch-slide-content">
                    <h2 class="pitch-slide-title">Business Model</h2>
                    
                    <div class="business-model fade-in">
                        <div class="model-card">
                            <div class="model-icon">💼</div>
                            <h3 class="model-title">Subscription Tiers</h3>
                            <div class="model-price">$50-$200/mo</div>
                            <p class="model-description">Three-tier model with enterprise options and usage-based pricing</p>
                        </div>
                        
                        <div class="model-card">
                            <div class="model-icon">🪙</div>
                            <h3 class="model-title">Token Utility</h3>
                            <div class="model-price">60% Burn Rate</div>
                            <p class="model-description">Deflationary token model required for all middleware operations</p>
                        </div>
                        
                        <div class="model-card">
                            <div class="model-icon">📈</div>
                            <h3 class="model-title">Revenue Projection</h3>
                            <div class="model-price">$2.4M by Year 3</div>
                            <p class="model-description">Based on 5% market penetration in targeted segments</p>
                        </div>
                    </div>
                    
                    <div class="pitch-highlight fade-in" style="animation-delay: 0.3s">
                        <span class="token-icon">M</span> Chainlink-Inspired Token Model with Korean Focus
                    </div>
                </div>
            </div>
            
            <!-- Slide 5: Call to Action -->
            <div class="pitch-slide" id="pitch-cta">
                <div class="slide-pattern"></div>
                <div class="pitch-slide-number">5</div>
                <div class="pitch-slide-content">
                    <h2 class="pitch-slide-title">ModRoll Middleware</h2>
                    
                    <div class="pitch-highlight">Revolutionizing Blockchain Development</div>
                    
                    <div class="pitch-point slide-in">
                        <div class="point-icon">💎</div>
                        <div class="point-content">
                            <h3 class="point-title">Our Unique Value</h3>
                            <p class="point-text">Multi-language middleware that reduces development time by 47% while ensuring 99.9% reliability</p>
                        </div>
                    </div>
                    
                    <div class="cta-container fade-in" style="animation-delay: 0.3s">
                        <h3 class="cta-title">Explore Our Complete Solution</h3>
                        <a href="https://zccadle.github.io" target="_blank" class="cta-button">zccadle.github.io</a>
                    </div>
                </div>
            </div>
        `;
    }
    
    // Pitch navigation variables
    let pitchSlides = [];
    let currentSlide = 0;
    let startTime = null;
    let timerInterval = null;
    
    // Toggle pitch mode
    function togglePitchMode(e) {
        e.preventDefault();
        
        // Initialize pitch content if first time
        if (pitchContainer.innerHTML === '') {
            createPitchSlides();
        }
        
        if (!document.body.classList.contains('pitch-mode-active')) {
            // Get the slides after they've been created
            pitchSlides = Array.from(pitchContainer.querySelectorAll('.pitch-slide'));
            
            // Show splash screen first
            splashScreen.classList.add('show-splash');
            
            // After 8 seconds, hide splash and show pitch mode
            setTimeout(() => {
                splashScreen.classList.remove('show-splash');
                document.body.classList.add('pitch-mode-active');
                pitchContainer.style.display = 'block';
                
                // Start pitch mode
                currentSlide = 0;
                showSlide(0);
                startTimer();
                
                // Add event listeners for navigation
                document.querySelector('.prev-btn').addEventListener('click', prevSlide);
                document.querySelector('.next-btn').addEventListener('click', nextSlide);
                document.addEventListener('keydown', handleKeyNavigation);
            }, 8000); // Show for 8 seconds
        } else {
            // Exit pitch mode
            document.body.classList.remove('pitch-mode-active');
            pitchContainer.style.display = 'none';
            stopTimer();
            document.removeEventListener('keydown', handleKeyNavigation);
        }
    }
    
    // Navigation functions
    function prevSlide() {
        if (currentSlide > 0) {
            showSlide(--currentSlide);
        }
    }
    
    function nextSlide() {
        if (currentSlide < pitchSlides.length - 1) {
            showSlide(++currentSlide);
        }
    }
    
    function showSlide(index) {
        pitchSlides.forEach((slide, i) => {
            if (i === index) {
                slide.scrollIntoView({ behavior: 'smooth' });
                
                // Reset animations
                const animElements = slide.querySelectorAll('.slide-in, .fade-in');
                animElements.forEach(el => {
                    el.style.opacity = 0;
                    void el.offsetWidth; // Trigger reflow
                    el.style.opacity = '';
                });
            }
        });
        updateProgressBar();
    }
    function updateProgressBar() {
        const progressBar = document.getElementById('pitch-progress-bar');
        const progress = ((currentSlide + 1) / pitchSlides.length) * 100;
        progressBar.style.width = `${progress}%`;
    }
    
    function handleKeyNavigation(e) {
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
            nextSlide();
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
            prevSlide();
        } else if (e.key === 'Escape') {
            togglePitchMode(new Event('click'));
        }
    }
    
    // Timer functions
    function startTimer() {
        startTime = new Date();
        timerInterval = setInterval(updateTimer, 1000);
    }
    
    function stopTimer() {
        clearInterval(timerInterval);
        document.getElementById('pitch-timer').textContent = '00:00';
        document.getElementById('pitch-timer').style.backgroundColor = 'var(--primary)';
    }
    
    function updateTimer() {
        const currentTime = new Date();
        const elapsedSeconds = Math.floor((currentTime - startTime) / 1000);
        const minutes = Math.floor(elapsedSeconds / 60);
        const seconds = elapsedSeconds % 60;
        
        document.getElementById('pitch-timer').textContent = 
            `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        // Change color when approaching 3 minutes
        if (elapsedSeconds >= 150) { // 2:30
            document.getElementById('pitch-timer').style.backgroundColor = '#FF5757';
        } else if (elapsedSeconds >= 120) { // 2:00
            document.getElementById('pitch-timer').style.backgroundColor = '#FFA500';
        }
        
        // Auto-advance to next slide every 60 seconds if needed
        // Comment this out if you prefer manual navigation
        /*
        if (elapsedSeconds % 60 === 0 && elapsedSeconds > 0 && currentSlide < pitchSlides.length - 1) {
            nextSlide();
        }
        */
    }
    
    // Add keyboard shortcut to quickly activate pitch mode
    document.addEventListener('keydown', function(e) {
        // Alt+P to activate/deactivate pitch mode
        if (e.altKey && e.key === 'p') {
            togglePitchMode(new Event('click'));
        }
    });
    
    // Add hint about keyboard shortcut
    const pitchButton = document.querySelector('.pitch-btn');
    if (pitchButton) {
        pitchButton.setAttribute('title', 'Start elevator pitch presentation (Alt+P)');
    }
    
    // Add slide indicator dots
    function createSlideIndicators() {
        const indicators = document.createElement('div');
        indicators.className = 'slide-indicators';
        indicators.innerHTML = pitchSlides.map((_, i) => 
            `<div class="slide-dot ${i === currentSlide ? 'active' : ''}" data-index="${i}"></div>`
        ).join('');
        
        // Add style for indicators
        const indicatorStyle = document.createElement('style');
        indicatorStyle.innerHTML = `
            .slide-indicators {
                position: fixed;
                bottom: 20px;
                left: 50%;
                transform: translateX(-50%);
                display: flex;
                gap: 10px;
                z-index: 1000;
                opacity: 0;
                transition: opacity 0.3s ease;
            }
            
            .pitch-mode-active .slide-indicators {
                opacity: 1;
            }
            
            .slide-dot {
                width: 12px;
                height: 12px;
                border-radius: 50%;
                background-color: rgba(58, 54, 224, 0.3);
                cursor: pointer;
                transition: all 0.3s ease;
            }
            
            .slide-dot.active {
                background-color: var(--primary);
                transform: scale(1.3);
            }
            
            .slide-dot:hover {
                background-color: rgba(58, 54, 224, 0.6);
            }
        `;
        document.head.appendChild(indicatorStyle);
        document.body.appendChild(indicators);
        
        // Add click events to dots
        indicators.querySelectorAll('.slide-dot').forEach(dot => {
            dot.addEventListener('click', () => {
                const index = parseInt(dot.getAttribute('data-index'));
                currentSlide = index;
                showSlide(index);
                updateSlideIndicators();
            });
        });
    }
    
    function updateSlideIndicators() {
        const dots = document.querySelectorAll('.slide-dot');
        dots.forEach((dot, i) => {
            if (i === currentSlide) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }
    
    // Handle window resize to adjust slide content
    window.addEventListener('resize', () => {
        // Re-trigger animations if needed
        if (pitchSlides.length > 0 && document.body.classList.contains('pitch-mode-active')) {
            const currentSlideEl = pitchSlides[currentSlide];
            const animElements = currentSlideEl.querySelectorAll('.slide-in, .fade-in');
            animElements.forEach(el => {
                el.style.opacity = 0;
                void el.offsetWidth; // Trigger reflow
                el.style.opacity = '';
            });
        }
    });
    
    // Initialize pitch mode when DOM is fully loaded
    document.addEventListener('DOMContentLoaded', function() {
        // If URL has #pitch hash, automatically start pitch mode
        if (window.location.hash === '#pitch') {
            setTimeout(() => {
                togglePitchMode(new Event('click'));
            }, 1000);
        }
    });
});