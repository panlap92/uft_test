Device("Device").App("Home").MobileLabel("Advantage Shopping").Tap
Device("Device").App("Advantage Shopping").MobileLabel("LAPTOPS").Tap
Device("Device").App("Advantage Shopping").MobileObject("com.Advantage.aShopping:").Tap
Device("Device").App("Advantage Shopping").MobileButton("ADD TO CART").Tap
Device("Device").EnterKeys 0,"perftech"
Device("Device").App("Advantage Shopping").MobileLabel("PASSWORD").Tap
Device("Device").EnterKeys 0,"P@ssw0rd"
Device("Device").App("Advantage Shopping").MobileButton("LOGIN").Tap
Device("Device").App("Advantage Shopping").MobileObject("com.Advantage.aShopping:").Tap
Device("Device").App("Advantage Shopping").MobileButton("ADD TO CART").Tap
Device("Device").App("Advantage Shopping").MobileObject("Cart access").Tap
Device("Device").App("Advantage Shopping").MobileObject("MobileObject").Swipe "right",55,24
Device("Device").App("Advantage Shopping").MobileObject("MobileObject_2").Tap
Device("Device").App("Advantage Shopping").MobileLabel("1").Tap
Device("Device").App("Advantage Shopping").MobileObject("MobileObject_3").Tap
Device("Device").App("Advantage Shopping").MobileLabel("APPLY").Tap
Device("Device").App("Advantage Shopping").MobileButton("UPDATE PRODUCT").Tap
Device("Device").App("Advantage Shopping").MobileObject("MobileObject").Swipe "right",51,105
Device("Device").App("Advantage Shopping").MobileLabel("Remove").Tap
Device("Device").App("Advantage Shopping").MobileObject("MobileObject_3").Tap
Device("Device").App("Advantage Shopping").MobileObject("com.Advantage.aShopping:_2").Tap
Device("Device").App("Advantage Shopping").MobileLabel("HOME").Tap
Device("Device").App("Advantage Shopping").MobileObject("com.Advantage.aShopping:_2").Tap
Device("Device").App("Advantage Shopping").MobileLabel("SIGN OUT").Tap
Device("Device").App("Advantage Shopping").MobileButton("YES").Tap
Device("Device").Home
