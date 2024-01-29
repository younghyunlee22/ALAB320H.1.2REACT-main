import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header' 
import Footer from './components/Footer'
import Article from './components/Article'


function App() {

  const article1 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione deleniti numquam voluptatem, temporibus pariatur consectetur. Itaque molestiae natus eligendi recusandae sunt repudiandae ullam non reprehenderit temporibus quae ipsam dolor aliquid doloribus, accusantium odit dolorum praesentium sapiente inventore velit aut. Reiciendis esse eos impedit similique, cum voluptates quos soluta ipsa accusantium labore, dolor excepturi autem, necessitatibus inventore in nihil facilis libero quam fuga quisquam dignissimos reprehenderit temporibus optio ad? Voluptatem nihil numquam, illo, itaque nemo facilis sunt minus sit aspernatur hic ea qui provident recusandae repellendus ducimus aliquam ipsam id exercitationem accusamus unde. Ipsa optio dolorem ea iure quidem, odit eos culpa voluptate totam minus voluptatem libero tenetur, exercitationem harum nam incidunt perferendis. Placeat voluptates commodi molestiae, earum ipsam, illum enim deserunt hic fugit eius nisi. Aspernatur quaerat nisi possimus explicabo qui sit aut ut distinctio dolores, enim odio pariatur nesciunt vel tenetur eum asperiores voluptatum cupiditate officiis natus doloremque ipsam. In sunt voluptatem similique iste quasi doloremque dolores explicabo. Unde voluptatibus provident dicta fuga repudiandae corrupti fugit, voluptatem quos soluta quam, doloribus ducimus quasi ullam cum? Quas cupiditate facilis autem sed culpa. Consequatur harum sint ad perferendis similique voluptatem voluptatum iste blanditiis cumque minus error fugiat quis, amet a vero quam. Dolor facilis culpa esse assumenda sit fugiat quo nisi odio excepturi, earum adipisci ullam, repellat inventore deleniti molestias suscipit quibusdam dicta? Fuga eos dignissimos dicta aperiam ad nulla magni doloribus hic ab maiores error voluptatem, quia tenetur accusantium earum natus vel, quae suscipit quam blanditiis quis id iure inventore!"

  const article2 = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem cum doloremque itaque odio totam atque at eveniet? Corporis optio laudantium veniam sapiente minima magni officiis necessitatibus natus dicta atque! Magni, numquam? Consequatur, ratione itaque. Fugit tempore veritatis nesciunt! Laboriosam itaque necessitatibus nam quidem ducimus, quaerat vel sunt nulla veniam est. Voluptatibus eos tempora optio. Unde quis perspiciatis at asperiores molestias magni provident odit velit natus incidunt in a molestiae recusandae dolorem doloribus repellendus pariatur minus exercitationem, nemo, totam necessitatibus sint quos reiciendis nesciunt! Maxime, distinctio nam repudiandae eum similique quasi itaque iste esse quidem laborum necessitatibus aspernatur cupiditate ducimus fugit aliquid consequuntur reiciendis? Esse est unde, mollitia saepe necessitatibus corrupti quidem cupiditate quibusdam blanditiis eaque harum maiores id laudantium ea cum repellendus ipsam ut voluptas aspernatur incidunt. Beatae numquam ea voluptate at impedit voluptates vel fugiat libero dolores. Repellendus, fugiat repellat officiis velit mollitia accusamus labore alias dolore. Nobis, quis dicta! Laudantium, minima architecto rerum itaque reiciendis tenetur debitis nam magnam accusantium! Rerum est tempore adipisci deleniti perferendis enim cumque et eius, unde explicabo ducimus voluptate distinctio, consectetur libero cum quibusdam dolorum maxime ipsam deserunt totam nobis architecto modi nemo ut! Nihil aspernatur corporis inventore culpa quae quaerat necessitatibus temporibus nisi nobis, ad officiis unde ipsam reprehenderit obcaecati, eos porro. Iusto distinctio a, corporis nam in quia reiciendis iure quos! Architecto optio nihil quod saepe voluptates fugit explicabo debitis numquam minima, dolores, dolorum voluptatum nostrum. Unde neque quaerat omnis debitis fugiat quidem corrupti, tenetur, temporibus doloribus natus quas recusandae. Quae."


  return (
    <>
    <Header/>
    <Article date = "11/12/2020"  text = {article1} img_src ="/assets/blog-image-1.jpg" />
    <Article date = "11/11/2020" text = {article2} img_src = "/assets/blog-image-2.jpg"/>
    <Footer/>
    </>
  )
}

export default App
