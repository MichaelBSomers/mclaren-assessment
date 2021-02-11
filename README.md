# mclaren-assessment

Created with CodeSandbox

**_Notes_**

\*Because of how the dataset was provided (one section had 1 question, another had 2) and
because a small 2 page form wouldn't show off progress amount well, I decided to split
the sections into different pages.

\*Nothing is set to required. I'm taking the liberty to make them required otherwise the user can submit a blank form.

\*I don't understand what is supposed to go in the bottom 'Sections' from the layout on the google doc, excluding it.
\*\*Edit, I recently understood what it meant and decided to keep the project the way it is as it shows the ability to still split the questions per section utilizing different pages. Page now simply changes base data such as the header while section, sections off each page and question array provides all the questions needed and options provides the different options for each question. Overall this should provide more flexibility in what you can do with data -> display.

\*I'm adding an 'Answer' field to the base data, then returning the same data retrieved
with that field included.

\*generally as a rule I try to avoid using inline CSS but for readability and simplicity sake for this simply project I decided to use it for minor touches alongside BootStrap.
--Removed Inline CSS

\*Although formContext isn't being used, I'll be leaving the file as a show of my thinking on a different way to handle submitting the information. I think the other approach I took is easier / better, but also minipulates the base raw data, which I generally don't want to do.

\*After completing this assessment I can easily say creating my own form using context would have made this signifigantly easier, but by the time I got to that I was already invested.

**_ChangeLog_**

\*\*form.json

\*Added Type field to TextBoxs to ensure customization of fields using html types.

\*Included extra Label to Page 2.

\*Added Placeholder to Textbox fields

\*Added checked default to true to Raffle.
