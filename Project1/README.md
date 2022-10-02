
# Feeling Blue?
file:///Users/youssefaouni/Desktop/connections%20Lab/Project1/index.html
## Concept:
This is a playful website simple and minimalist aimed mainly for teenagers. On scroll the website displays random quotes from historical figure, 
random advice, Kanye quotes and random dad jokes that are all fetched from APIs. Moreover, the website allows the users to submit their name, country 
and advice into a dataset created through ‘sheetsdb’ that would later on be displayed for another user of the website.
The Goal of this website is to uplift the mood of the user and entertain them, while keeping it an interactive experience through allowing users to 
contribute in creating the contact. This will allow the user to feel like a part of a life project in constant shift and evolution.

<img width="1039" alt="Screenshot 2022-10-02 at 19 22 45" src="https://user-images.githubusercontent.com/112507667/193461924-47f0b12b-7ebb-4759-9e5a-80d52f2d2bbb.png">


## Design:
The user experience has been specifically engineered to nudge the user to discover, try and experiment with the intercept. Since the website does not have any instructions, the user is encouraged to 'discover' the content of the website on their own. The buttons have been turned into 'self-explanatory' images to enhance the aesthetic of the website, but they also nudge the user into clicking them, thus making the user experience more fulfilling and playful.
The design of the website is purpucioussly clean cut and minimalistic, since items appear organically with big fonts on the screen as the user scrolls through the website. The gradient of the background color slowlly veirs from dark blue to red as the user scrolls throughout the webpage, thus reflecting 
the mood of the user. 

<img width="1334" alt="Screenshot 2022-10-02 at 19 24 08" src="https://user-images.githubusercontent.com/112507667/193461970-e515994e-7b58-43f3-bd0a-41a4362151bc.png">

<img width="1381" alt="Screenshot 2022-10-02 at 19 23 44" src="https://user-images.githubusercontent.com/112507667/193461959-426cc164-922a-4fc0-9b69-a18c29ba8767.png">



## Technicalities & Challenges:
### APIs:
The website fetches four random APIs from the web and implementing each of them had its own challenges, e.g: Accessing the necessary element from the 
fetched data, getting the proper keys, and fixing 'sheets db'. Having the data transferred to and from the google sheet was a challenge. I used open-source code to solve some of the problems I faced.
Find below some of the codes I used to access certain elements in the fetched api data: 

<img width="520" alt="Screenshot 2022-10-01 at 00 45 57" src="https://user-images.githubusercontent.com/112507667/193353756-c5b96ab0-6d7c-4f61-a085-0c918cd5a9dd.png"> <img width="571" alt="Screenshot 2022-10-01 at 00 48 36" src="https://user-images.githubusercontent.com/112507667/193353964-c8bcfe75-b55e-4846-a143-133883dd9fd0.png">

### Sheetsdb:
I wanted to elevate the website by allowing the users to enter their names, countries and motivational messages. I had to find a way to store the data online. Thanks to a classmate I have been able to implement google's Sheets Db in my project through google pages. See below the code I implemented to use this method:

<img width="665" alt="Screenshot 2022-10-02 at 19 21 08" src="https://user-images.githubusercontent.com/112507667/193461858-2ec68d09-954b-4cd2-9f17-05f7b8f5e2f2.png">
<img width="484" alt="Screenshot 2022-10-02 at 19 21 38" src="https://user-images.githubusercontent.com/112507667/193461881-b91a5943-c319-47ca-9cc6-57e4de5079dc.png">

## Website-Design:
In order to make the text appear on the whole webpage and animate on scroll I used AOS library:https://michalsnik.github.io/aos/. 
This allowed me to animate the text, making it fade in and fade out, zoom in, flip and other animations that keep the user on their feet not xpecting how the next element of the page will show up. The aos library allowed me to wrap the element I wish to download in a div and describe The way I want it to be animated:
<img width="922" alt="Screenshot 2022-10-02 at 18 04 06" src="https://user-images.githubusercontent.com/112507667/193458176-2ea39c79-283c-4574-8864-8a89d7d58167.png">

Furthermore, to design the background and make it change color from blue to red, I wrote this css code:
<img width="843" alt="Screenshot 2022-10-02 at 18 55 17" src="https://user-images.githubusercontent.com/112507667/193460639-507d56de-b4a2-493d-9ab6-6c3ca12d21da.png">

I also attempted to change the style of the button from a normal button format to an image. At first this seemed like a hard task. After further research, however I found a direct and efficient way to turn all the buttons into images that morph on hover:
<img width="674" alt="Screenshot 2022-10-02 at 19 02 59" src="https://user-images.githubusercontent.com/112507667/193461046-cdad135b-5d3f-4985-a3cb-c49fe89b69da.png">
<img width="159" alt="Screenshot 2022-10-02 at 19 04 21" src="https://user-images.githubusercontent.com/112507667/193461111-56308caa-561a-485f-9ee6-df9404fc57b9.png">
## Next steps:
I would like to change the pop up that alerts the user when the input has been recorded in the google sheet.
I would also like to animate the images that serve as the buttons and make them morph, curle up or move when clicked by the user.
I would also like to make the website available on phones, maybe as a widget that generates random advice or quotes.
## PS:
The sheets DB have a ceratain quota, so after a certain number of inputs it will stop functioning proporly. So please notify me if you face any problems with the feature.
So 

