# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh





1 -- Esercizio 

Partendo dall’esercizio precedente, utilizziamo le API che abbiamo sviluppato durante il modulo su ExpressJS.
Al caricamento dell’applicazione, sfruttando l’hook useEffect, recuperiamo la lista dei post dal backend e la mostriamo nella pagina.
P.s.: prima di far ciò, ricordatevi di installare e settare il modulo CORS sul vostro server di backend.
E ovviamente poi lanciarlo, sennò difficile possiate richiedergli qualcosa :wink: :rocket:
BONUS:
gestire la possibililtà che non ci siano ancora i post

2 -- Esercizio 

Partendo dall’esercizio precedente, sviluppiamo parte delle CRUD e integriamo le API che abbiamo sviluppato durante il modulo su ExpressJS.
Gestiamo i campi e il submit del form, assicuriamoci che questi dati vengano inviati al backend e correttamente salvati, per creare un nuovo post, e che quindi questo appaia anche in pagina. 
BONUS:
Implementare la funzionalità di cancellazione, assicurandoci che funzioni sia sul frontend che sul backend (il post sparisce sulla pagina ma anche sul server).
Buon lavoro!

3 -- Consegna

Creiamo il frontend del nostro Blog e le sue pagine!
Partiamo installando React Router DOM: npm install react-router-dom
Definiamo almeno 3 pagine: una homepage, una pagina “chi siamo” e una pagina con la lista dei post
Implementiamo una navbar in comune a tutte le pagine per poter navigare tra loro
Bonus
Centralizzare la Navbar grazie a un Layout
Gestire la classe active

4 -- Consegna

Completiamo il nostro routing con l’aggiunta delle pagine di dettaglio!
Aggiungiamo i link alla lista dei post
Facciamo quindi in modo di raggiungere la pagina di dettaglio del singolo post

Bonus
Proviamo a inserire nella pagina di dettaglio una navigazione che ci consenta di andare 
al post precedente e a quello successivo;
tutte le cose in più che abbiamo fatto nel LC del mattino.






