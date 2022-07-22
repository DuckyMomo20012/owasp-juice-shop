# Forged Review

**Difficulty**: :star2::star2::star2:

**Description**: Post a product review as another user or edit any user's existing review.

**Category**: Broken Access Control

**Tags**: 

**Solution**:

Let's write a review but not submit
![image](https://user-images.githubusercontent.com/70436051/180378660-764261fb-8509-44cf-b982-824680085543.png)

Open Burp Suite and turn on Intercept
![image](https://user-images.githubusercontent.com/70436051/180378825-fbbbbcee-3aef-4355-b43f-74d2b2a1b447.png)

Submit the review and watch the change in Burp Suite
![image](https://user-images.githubusercontent.com/70436051/180380214-ee6ca9ef-6ee7-4bee-a4f8-68a8a3c72f1e.png)

Now we change the name of the author and click forward
![image](https://user-images.githubusercontent.com/70436051/180380311-a5b87034-8704-4931-b79e-81c7270e7277.png)

We got this challenge
![image](https://user-images.githubusercontent.com/70436051/180380435-854b7c0a-280f-4454-8d34-2b6a7b873b46.png)
