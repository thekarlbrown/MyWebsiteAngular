# My Angular Website

This website was created using Angular5 and Bootstrap4. It is mobile-first.

## Deployment to nginx

I swapped out code in the index.html as follows: 

<!-- <base href="/"> -->
<script>document.write('<base href="' + document.location + '" />');</script>

specified that I wanted to use Hash Routing, and built with 
 
 ng build --prod --base-href ./

for an easy drag and drop deployment experience using nginx.