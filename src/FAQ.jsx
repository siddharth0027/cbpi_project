import React from 'react'
import styled from 'styled-components';
import { Button } from './styles/Button';
import { NavLink } from 'react-router-dom';

const FAQ = () => {
  return (
    <Wrapper>
    <div className="container">
      <div className="section-hero-data">
    
        <p className="hero-top-data">Concepts Books Publication India</p>
        <h1 className="hero-heading">Frequently Asked Questions</h1>
               {/* for image  */}
      <div className="section-hero-image">
        <picture>
          <img src="./images/ff.jpg" alt="hero image" className="hero-img " />
        </picture>
      </div>
        <p><b>Book Publishing Related FAQ: -</b></p>
<h2>Que1. What is an ISBN</h2>
        <p className="hero-para">
Ans= An International Standard Book Number (ISBN) 
is a numeric code used to uniquely identify a book, 
right down to the language, publisher, edition –
and whether it is an ebook, paperback or hardcover. 
It makes life easier for booksellers, libraries, schools,
book distributors, and anyone searching for a book to find it.
        </p>
       
        <h2>Que1. What is ePublishing?</h2>
        <p  className="hero-para">
Ans= It is no secret that computers of all types are an integral part of nearly everyone’s life.
 The idea of e-publishing has been the darling of a certain crowd since the early part of the decade. 
 Tens of millions of venture capital dollars have been dumped into the concept that people have grown 
 tired of reading paper bound books and will jump at the idea of staring at a computer screen to fill their 
 reading needs. The first round of epublishing died off the second the venture capital money ran out. Book 
 people were book people—period. The e concept is attractive for a variety of reasons, with the main one
  being that the production costs are pretty much non-existent. The idea of cutting the printer out of the 
  picture is not new. The problem is getting the consumer on board and I just don’t see it happening anytime soon. 
  It’s not that it doesn’t work at all. You might be reading the e-version of the publishing basics book right 
  now but I’ll bet you a dozen donuts that if you are, you have printed out the PDF and are reading a pile of
   printed paper. Another situation perfect for e-books are study guides, such as Cliff ’s Notes. Picture 
   yourself back in college on a Sunday night and you are just getting around to studying for a test in the morning.
    The bookstores are closed so the only way you can get your hands on the material is to go online and buy the 
    e-book. But even in this example, couldn’t the study guide people do just as well offering the same information 
    for a fee, on their Web site?
        </p>
        <p className='hero-para'>

        <h2>Que3. What is a bleed?</h2>
Ans= If you have an image that you want to print to the edge of the book, then that image “bleeds”. This is often done on book covers. For the printer to be able to trim the books so that the image is at the edge there must be some part of the image that gets trimmed off (or else you will have a white stripe of the paper showing). The amount that gets trimmed off is the “bleed”, and printers require a minimum of .125″ (.25″ is preferable especially for children’s book pages). So, be sure that you set up your files so that you have enough image to go beyond your trim. In other words, a 6 x 9″ cover that bleeds all 3 sides on the front will really be a minimum of 6-1/8 x 9-1/4″. And a children’s book that is 8 x 8 will have pages that are 8-1/2 x 8-1/2″.

        </p>
       <p className='hero-para'>
       <h2>Que4. What is the difference between a cover, a jacket and a case wrap?</h2>
Ans= These are related in that they all print and wrap around the text pages of your book. A cover is the term we use to describe what wraps around a paperback book. Jackets and casewraps are on hard cover books. The difference here is that a jacket is loose (i.e., it can be removed from the book) and has flaps. Casewraps are more like a “cover” in that they wrap the binder board, which is what wrap your text pages. Casewraps are typically used on children’s books, field guides, cookbooks and short run hard cover guides.

       </p>
       <p className='hero-para'>
       <h2>Que5. What about the barcode?</h2>
Ans= The ISBN for your book is easily translated into a worldwide compatible bar code format called a Bookland EAN (European Article Number). Every bookstore chain and most smaller bookshops use bar code scanning at the checkout register. If you didn’t know that, you haven’t been to a bookstore in the last ten years, and I’d say it’s time for you to visit one. Putting the bar code on your book is part of the book cover designer’s job, and it’s a simple one. Using a software program, the designer types in your ISBN and out pops the bar code in just the right place on your back cover. You can put your book’s retail price near the bar code on the back cover if you want to. That doesn’t mean that retailers will always have to charge the full amount. Using their computers, they can tie your Bookland EAN code to a sale price, and that’s what will appear on the register when your book is scanned. If you are using a bar code, it must be black or a color dark enough to be scanned. Keep this in mind when counting the number of colors on your cover.

       </p>
       <p><b>
       Thesis Related FAQ: -
        </b></p>
        <h2>
        Que1. What is plagiarism?
        </h2>
        <p className='hero-para'>
        Ans= Plagiarism is when you use somebody else's words or ideas but do not give them credit. When you use any text from a document written by somebody else, you must provide a full citation for the material and write the text in your own words. This is called paraphrasing. Other acceptable methods include placing the copied material in quotations or a block quote.
A block quote is an indented section of text. It is used to indicate that a larger section of text has been copied from another source. Both quotations and block quotes require citations to indicate the source of the material. A block quote is generally appropriate when more than 100 words or eight lines of text have been used from the source material.

        </p>
        <h2>Que2. What is paraphrasing? </h2>
        <p className='hero-para'>
        Ans= Paraphrasing involves re-writing a sentence from someone else using your own words and way of expressing yourself. Paraphrasing includes changing the order of presenting information in addition to the words used.
        </p>
        <h2>
        Que3. How do you check for plagiarism?
        </h2>
        <p className='hero-para'>
        Ans= We make a thorough check for plagiarism in the documents that we review. For this, we take the help of tools, as well as manual editing. Plagiarism may be accidental in your thesis. We double check the citations and references to ensure that the work stays original. All our writers also check their work for accidental plagiarism.
        </p>
        <h2>
        Que4. What is citation?
        </h2>
        <p className='hero-para'>
        Ans= A "citation" is the way you tell your readers that certain material in your work came from another source. citations are extremely helpful to anyone who wants to find out more about your ideas and where they came from.
        </p>
        <h2>
        Que5. What is Research Methodology?
        </h2>
        <p className='hero-para'>
        Ans= Research methodology is a collective term for the structured process of conducting research. There are many different methodologies used in various types of research and the term is usually considered to include research design, data gathering and data analysis.
        </p>
        <h2>
        Que6. What is Literature Review?
        </h2>
        <p className='hero-para'>
        Ans= A literature review is a piece of academic writing demonstrating knowledge and understanding of the academic literature on a specific topic placed in context. A literature review also includes a critical evaluation of the material; this is why it is called a literature review rather than a literature report.
        </p>
        <p><b>GeM Support and Consultant FAQ: -</b></p>
        <h2>
        Que1. What is GeM?
        </h2>
        <p className='hero-para'>
        Ans= Government e-Marketplace (GeM) is a one stop portal to facilitate online procurement of common use Goods & Services required by various Government Departments / Organizations / PSUs. GeM aims to enhance transparency, efficiency and speed in public procurement. It provides the tools of e-bidding, reverse e-auction and demand aggregation to facilitate the government users achieve the best value for their money.
        </p>
        <p><b>eCommerce related FAQ: -</b></p>
        <h2>
        Que1. What is Shipping?
        </h2>
        <p className='hero-para'>
        Ans= Shipping is the physical moving of good from one point to another, such as the moving of merchandise from the warehouse to the customer. The shipping process follows the manufacture and the packing of goods and will be controlled by a shipping or logistics company.
        </p>
        <h2>
        Que2. What is commission fee in Flipkart?
        </h2>
        <p className='hero-para'>
        Ans= Commission fee is a Percentage of Order item value ( depends on category & sub-category).
        </p>
        <h2>
        Que3. What is Collection fee in Flipkart?
        </h2>
        <p className='hero-para'>
        Ans= Collection fee is a Payment gateway or a cash collection charges for every sale.
        </p>
        <h2>
        Que4. What does fulfilment mean in eCommerce sites?
        </h2>
        <p className='hero-para'>
        Ans= The process of receiving, packaging and shipping orders for goods is known as fulfilment. 
        </p>
        <h2>
        Que5. In What Category I can sell without GST?
        </h2>
        <p className='hero-para'>
        Ans= In Books Category you can sell your books or charts without having GST.
        </p>
        <h2>
        Que6. IS this legal to resell on Amazon?
        </h2>
        <p className='hero-para'>
        Ans= It is Completely legal. If you want to hunt around at local thrift stores and then sell those goods on Amazon, that’s your right. You can also buy products off of Amazon and sell them at a higher price—there’s nothing wrong with that.
        </p>
      

        <Button className="btn hireme-btn">
          <NavLink to="/contact"> Reach us</NavLink>
        </Button>
      
      </div>

   
    </div>
  </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 9rem 0;

  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }


  .btn {
    max-width: 16rem;
  }

  .hero-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.helper};
  }

  .hero-heading {
    text-transform: uppercase;
    font-size: 6.4rem;
  }

  .hero-para {
    margin-top: 1.9rem;
    margin-bottom: 3.4rem;
    max-width: 250rem;
  
  }


  .section-hero-image {
    display: flex;
    justify-content: top;
    align-items: top;
  }

  picture {
    text-align: center;
  }

  .hero-img {
    max-width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 7.2rem;
    }
  }
`;
export default FAQ ;