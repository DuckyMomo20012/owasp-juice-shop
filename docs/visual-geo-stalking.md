# Visual Geo Stalking

**Difficulty**: :star2::star2:

**Description**: Determine the answer to Emma's security question by looking at an upload of her to the Photo Wall and use it to reset her password via the [Forgot Password](http://localhost:3000/#/forgot-password) mechanism.

**Category**: Sensitive Data Exposure

**Tags**: `OSINT`

**Solution**:

I navigated to the Photo Wall route, I found a picture of `© E=ma²`, which is close to `Emma` name:

![emma photo](https://user-images.githubusercontent.com/64480713/179667454-133b54db-537a-4807-b260-17ff4ba8212d.png)

After downloading the image and some inspection, we can see a banner with text: `IT sec`. 

![text on banner](https://user-images.githubusercontent.com/64480713/179667982-7ef90ff8-f7fe-47af-bbb7-c245776b86c6.png)

Then I tried multiple with: "itsec", "ITSEC" or "ITCsec" but not succeeded. Then I tried `IT sec` then I can reset the password of `Emma`.

![result](https://user-images.githubusercontent.com/64480713/179666998-4e6a7e04-7c1a-41c5-82ce-10d36629db03.png)
