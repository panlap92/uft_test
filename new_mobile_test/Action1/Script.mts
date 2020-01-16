Device("Device").App("Home").MobileLabel("Advantage Shopping").Tap
Device("Device").App("Advantage Shopping").MobileObject("com.Advantage.aShopping:").Tap
Device("Device").App("Advantage Shopping").MobileLabel("LOGIN").Tap
Device("Device").EnterKeys 0,"perftech"
Device("Device").App("Advantage Shopping").MobileLabel("PASSWORD").Tap
Device("Device").EnterKeys 0,"P@ssw0rd"
Device("Device").App("Advantage Shopping").MobileButton("LOGIN").Tap
Device("Device").App("Advantage Shopping").MobileLabel("TABLETS").Tap
Device("Device").App("Advantage Shopping").MobileObject("com.Advantage.aShopping:_2").Tap
Device("Device").App("Advantage Shopping").MobileButton("ADD TO CART").Tap
Device("Device").App("Advantage Shopping").MobileObject("com.Advantage.aShopping:_3").Tap
Device("Device").App("Advantage Shopping").MobileObject("com.Advantage.aShopping:").Tap
Device("Device").App("Advantage Shopping").MobileLabel("SPEAKERS").Tap
Device("Device").App("Advantage Shopping").MobileObject("com.Advantage.aShopping:_2").Tap
Device("Device").App("Advantage Shopping").MobileObject("com.Advantage.aShopping:_4").Tap
Device("Device").App("Advantage Shopping").MobileObject("MobileObject").Tap
Device("Device").App("Advantage Shopping").MobileButton("ADD TO CART").Tap
Device("Device").App("Advantage Shopping").MobileObject("Cart access").Tap
Device("Device").App("Advantage Shopping").MobileButton("CHECKOUT (PAY $1,278.99)").Tap
Device("Device").App("Advantage Shopping").MobileObject("com.Advantage.aShopping:").Tap
Device("Device").App("Advantage Shopping").MobileLabel("CART").Tap
Device("Device").App("Advantage Shopping").MobileObject("MobileObject_2").Swipe "left",551,78
Device("Device").App("Advantage Shopping").MobileObject("com.Advantage.aShopping:_3").Tap
Device("Device").App("Advantage Shopping").MobileObject("MobileObject_2").Swipe "right",26,114
Device("Device").App("Advantage Shopping").MobileObject("MobileObject_3").Tap
Device("Device").App("Advantage Shopping").MobileObject("MobileObject_2").Swipe "right",51,81
Device("Device").App("Advantage Shopping").MobileObject("MobileObject_3").Tap
Device("Device").App("Advantage Shopping").MobileObject("com.Advantage.aShopping:").Tap
Device("Device").App("Advantage Shopping").MobileLabel("SIGN OUT").Tap
Device("Device").App("Advantage Shopping").MobileButton("YES").Tap
Device("Device").App("Advantage Shopping").MobileObject("com.Advantage.aShopping:").Tap
Device("Device").App("Advantage Shopping").MobileLabel("HOME").Tap
Device("Device").Home
