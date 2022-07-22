# Outdated Allowlist

**Difficulty**: :star2:

**Description**: Let us redirect you to one of our crypto currency addresses which are not promoted any longer.

**Category**: Unvalidated Redirects

**Tags**: `Code Analysis`

**Solution**:

<!-- Please include screenshots for each step. Remember that the screenshot includes a clock to indicate the time solved. -->

In file `main.js`, I search for the `redirect` pattern which show redirect link to 3 bitcoin wallet

![image](https://user-images.githubusercontent.com/63692190/180374913-a2e7d305-9a41-4516-9b73-ab7619afcd7c.png)

Open the link: http://localhost:3000/redirect?to=https://blockchain.info/address/1AbKfgvw9psQ41NbLi8kufDQTezwG8DRZm and got redirected to

![image](https://user-images.githubusercontent.com/63692190/180376187-d71a8ad2-9a4e-4517-adc2-638157b5f765.png)

Result:

![image](https://user-images.githubusercontent.com/63692190/180376229-3c88ae9e-c05b-491f-b266-58b711a92f3a.png)
