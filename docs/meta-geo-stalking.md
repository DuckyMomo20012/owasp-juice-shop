# Meta Geo Stalking

**Difficulty**: :star2::star2:

**Description**: Determine the answer to John's security question by looking at an upload of him to the Photo Wall and use it to using his password via the [Forgot Password](http://127.0.0.1:3000/#/forgot-password) mechanism.

**Category**: Sensitive Data Exposure

**Tags**: `OSINT`

**Solution**:

Go to `Photo Wall` and download John's photo (John aka J0hNny)
![image](https://user-images.githubusercontent.com/70436051/180357449-e6be9f5f-d2b1-4d92-b565-8683cc0fc00e.png)

Use the `exiftool` to look at the metadata of this photo, you can see the `GPS Position`
![image](https://user-images.githubusercontent.com/70436051/180357966-9ff858b2-940d-4c55-90cc-9b0c036ec1af.png)

Search this position on Google Maps (remember to replace `deg` with `°`), and find a place where you can hike
![image](https://user-images.githubusercontent.com/70436051/180358437-fd290628-8999-4da7-b686-e59e0b0c672f.png)

It's `Daniel Boone National Forest`, go to `Forgot Password` and use email `john@juice-sh.op` and security question is `Daniel Boone National Forest`, give him a new password and click `Change`. We got this challenge!
![image](https://user-images.githubusercontent.com/70436051/180358895-cf34d59f-8073-44f7-9c17-30f49b187f0d.png)




