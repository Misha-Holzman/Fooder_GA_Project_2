import React from 'react';
import Nav from './Nav';
import DefaultLayout from './DefaultLayout';


export default ({ recipe }) => (
<html>	
 		<head>
			<meta charSet="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css" />
      <script defer src="https://use.fontawesome.com/releases/v5.1.0/js/all.js" />
    </head>
    <body>
    	<Nav />
			<section class="section">
				<div class="container is-fluid">
					<div class="container is-fluid" style={{ margin: '7%'}}>
						<div class="notification" style={{ padding: '5%' }}>
							<div style={{ paddingBottom: '10px'}}>
								<h1 style={{ fontSize: '30px' }}>Cooking Tips!</h1>
								<br/>
								
								<h3  style={{ paddingBottom: '20px'}}>
								We've compiled a list of <em>101 Simple Cooking Tips Everyone Should Know</em>! 
								to make every time in the kitchen a successful one.
								</h3>
								<img src='https://i.imgur.com/lh0dslX.png?1' />
								<h4 style={{ paddingBottom: '20px'}}>
								Check them out, learn something new, and share your best tips for surviving in the kitchen:
								</h4>
							</div>
							<ol>
								<li style={{ paddingBottom: '10px'}}>Set up the perfect workspace by gathering clean tools, bowls and utensils. And make sure to keep a trashcan within arm&rsquo;s reach.</li>
								<li style={{ paddingBottom: '10px'}}>To create an egg wash, whisk together a large egg with one tablespoon of water until smooth. Use as a glue to seal pastries, then brush on top for a glossy appearance.</li>
								<li style={{ paddingBottom: '10px'}}>Peel tomatoes with ease! Cut an X in the top, and then simmer in a pot of hot water for 15 to 30 seconds. Cool down and the skin will fall right off.</li>
								<li style={{ paddingBottom: '10px'}}>Get comfortable! Wear comfy clothes and an apron when you work in the kitchen and you won&rsquo;t have to worry about getting dirty.</li>
								<li style={{ paddingBottom: '10px'}}>Invest in a baking scale. Scales are not only an accurate way to measure your cooking ingredients, but they streamline the entire process.</li>
								<li style={{ paddingBottom: '10px'}}>Always read and re-read your recipes before you start cooking.</li>
								<li style={{ paddingBottom: '10px'}}>Clean as you go!</li>
								<li style={{ paddingBottom: '10px'}}>Use two skewers instead of one when grilling or roasting to prevent your food from spinning.</li>
								<li style={{ paddingBottom: '10px'}}>Learn and practice the <a href="http://kitchensavvy.typepad.com/journal/2005/04/grilling_steak_.html">rule of thumb</a> to check the readiness of steak.</li>
								<li style={{ paddingBottom: '10px'}}>To prevent butter from over-browning in your pan, add a little bit of lemon juice.</li>
								<li style={{ paddingBottom: '10px'}}>Embrace salt. Don&rsquo;t be afraid to use salt; it pulls the flavors out of your dishes. Cook with kosher salt and season with sea salt.</li>
								<li style={{ paddingBottom: '10px'}}>No luck finding shallots? Replace with a combination of onions and garlic.</li>
								<li style={{ paddingBottom: '10px'}}>After handling garlic, rub your fingers on stainless steel, like your sink, to get rid of the odor.</li>
								<li style={{ paddingBottom: '10px'}}>Ovens can lie. Place a second thermometer in your oven to ensure proper preheating temperatures.</li>
								<li style={{ paddingBottom: '10px'}}>Ignore cooking times. Check your dishes by using your own senses (smell, taste, touch) to decide when they are done.</li>
								<li style={{ paddingBottom: '10px'}}>The most versatile and important tool is a sharp chef&rsquo;s knife.</li>
								<li style={{ paddingBottom: '10px'}}>Perfect all the different ways to cook an egg.</li>
								<li style={{ paddingBottom: '10px'}}>When poaching an egg, add a teaspoon of white vinegar to simmering water to help keep the yolk from breaking.</li>
								<li style={{ paddingBottom: '10px'}}>For a great hardboiled egg every time, bring your pot to a boil and then turn off the stove. Let your eggs sit in the heated pot for 12 minutes and then transfer to cold water.</li>
								<li style={{ paddingBottom: '10px'}}>Crack eggs on a paper towel on the counter &mdash;no shells and easy cleanup!</li>
								<li style={{ paddingBottom: '10px'}}>Make an <img alt="" class="img-right" height="267" hspace="10" src="/sitekrogersimpletruth/assets/Image/Eggs.jpg" width="200" />ideal sunny-side egg by covering your pan with a lid and letting the steam cook your egg. No flipping required.</li>
								<li style={{ paddingBottom: '10px'}}>Always taste your food before seasoning.</li>
								<li style={{ paddingBottom: '10px'}}>Anchor your cutting board to the counter with a damp paper towel to keep things steady and safe.</li>
								<li style={{ paddingBottom: '10px'}}>Hold a knife properly: pinch the blade instead of gripping the handle.</li>
								<li style={{ paddingBottom: '10px'}}>Don&rsquo;t rinse pasta.</li>
								<li style={{ paddingBottom: '10px'}}>Substitute half a lemon and half an orange as a replacement for a Meyer lemon.</li>
								<li style={{ paddingBottom: '10px'}}>When saut&eacute;ing garlic, use sliced garlic instead of minced to prevent burning.</li>
								<li style={{ paddingBottom: '10px'}}>Invest in a seasoned cast iron skillet. This kitchen staple distributes heat evenly and is easy to clean.</li>
								<li style={{ paddingBottom: '10px'}}>Remove tough stems on leafy greens by pinching the stem and gently pulling off the leaves with your other hand.</li>
								<li style={{ paddingBottom: '10px'}}>If your recipe calls for buttermilk, you can use regular milk with lemon juice.</li>
								<li style={{ paddingBottom: '10px'}}>Prepping salad before serving is a huge time saver. Layer all the ingredients in a bowl and don&rsquo;t add the dressing until it's time to serve.</li>
								<li style={{ paddingBottom: '10px'}}>Keep your spices away from sources of heat like the stove or lights. Herbs and spices can lose their flavor when exposed to humidity and heat.</li>
								<li style={{ paddingBottom: '10px'}}>Save old, stale bread to make breadcrumbs in a food processor; you can freeze them for up to 6 months.</li>
								<li style={{ paddingBottom: '10px'}}>Let steaks come to room temperature before seasoning and grilling.</li>
								<li style={{ paddingBottom: '10px'}}>Store fresh herbs in a glass of water in your refrigerator.</li>
								<li style={{ paddingBottom: '10px'}}>To prevent tears, cut off the root of the onion before you slice.</li>
								<li style={{ paddingBottom: '10px'}}>For crispy fries or chips: slice the potato, then remove the starch by soaking in water for one hour before baking.</li>
								<li style={{ paddingBottom: '10px'}}>Celery getting floppy? Try wrapping it in tin foil before storing in the refrigerator.</li>
								<li style={{ paddingBottom: '10px'}}>Soften up hard brown sugar by placing a piece of dry bread in the bag overnight.</li>
								<li style={{ paddingBottom: '10px'}}>Roll citrus on the counter using the palm of your hand to help release all of the juice pockets.</li>
								<li style={{ paddingBottom: '10px'}}>&ndash; 50. Kitchen Pantry Essentials: Olive Oil, Flour, Broth, Salt, Brown Rice or Pasta, Beans, Vinegar, Sugar, Eggs, Soy Sauce</li>
							</ol>
							
							<ol>
								<li style={{ paddingBottom: '10px'}} value="51">Increase the shelf life of a halved avocado by keeping the pit intact and placing it in your refrigerator.</li>
								<li style={{ paddingBottom: '10px'}} value="52">To prevent sliced apples from browning, lightly squeeze lemon or lime juice on the pieces.</li>
								<li style={{ paddingBottom: '10px'}} value="53">You can store butter in the freezer for up to six months.<img alt="" class="img-right" height="331" hspace="10" src="/sitekrogersimpletruth/assets/Image/honey.jpg" width="290" /></li>
								<li style={{ paddingBottom: '10px'}} value="54">Honey is a natural preservative and will never spoil.</li>
								<li style={{ paddingBottom: '10px'}} value="55">To last longer, opened flour bags can be stored in the freezer.</li>
								<li style={{ paddingBottom: '10px'}} value="56">Mushrooms should be kept dry, as they can easily soak and store water.</li>
								<li style={{ paddingBottom: '10px'}} value="57">Never overcrowd your skillet with food. The heat will not distribute evenly.</li>
								<li style={{ paddingBottom: '10px'}} value="58">Use an egg slicer to cut small fruits like kiwis.</li>
								<li style={{ paddingBottom: '10px'}} value="59">Recipes are only a guideline. Feel free to substitute items that cater to your personal preferences.</li>
								<li style={{ paddingBottom: '10px'}} value="60">To rehydrate sun-dried tomatoes, soak them in hot water or stock for about 20 minutes.</li>
								<li style={{ paddingBottom: '10px'}} value="61">The basic ratio to make a classic vinaigrette is 3 parts oil to 1 part vinegar.</li>
								<li style={{ paddingBottom: '10px'}} value="62">To keep garlic from going rancid, always store it at room temperature.</li>
								<li style={{ paddingBottom: '10px'}} value="63">Keep knives sharp by using a sharpening tool frequently. A sharp knife is important for safety and efficiency.</li>
								<li style={{ paddingBottom: '10px'}} value="64">Purchasing and preparing a whole chicken is cost-effective and resourceful.</li>
								<li style={{ paddingBottom: '10px'}} value="65">Honey stuck in a jam? Place the container in hot water for about 5 minutes to loosen up the sticky residue.</li>
								<li style={{ paddingBottom: '10px'}} value="66">Safely chop odd-shaped vegetables by cutting off both ends for an even surface.</li>
								<li style={{ paddingBottom: '10px'}} value="67">Create simple syrup by simmering 1 cup of water and 1 cup of sugar in a medium heated pot until the sugar dissolves. Bottle and store in your refrigerator for up to 2 weeks.</li>
								<li style={{ paddingBottom: '10px'}} value="68">Freeze leftover tomato paste in small ice cube containers.</li>
								<li style={{ paddingBottom: '10px'}} value="69">To soften butter, cut slices into a bowl and let sit at room temperature for 10&ndash;15 minutes.</li>
								<li style={{ paddingBottom: '10px'}} value="70">When serving ice cream to large groups, ditch the ice cream scoop. Break open the whole container and slice the ice cream into portions.</li>
								<li style={{ paddingBottom: '10px'}} value="71">If you need to grate soft cheeses, freeze the cheese for 30 minutes for a cleaner slice.</li>
								<li style={{ paddingBottom: '10px'}} value="72">A cutting tool called a mandolin can be your best friend. They allow you to perfectly julienne, slice and dice vegetables every time. Always slice slowly and use the safety guard to prevent you from cutting your finger.</li>
								<li style={{ paddingBottom: '10px'}} value="73">When saut&eacute;ing, it is important to first heat the pan, then heat the oil, then add the ingredients.</li>
								<li style={{ paddingBottom: '10px'}} value="74">Moisturize dried coconut by adding a sprinkle of milk and letting it sit for 10 minutes.</li>
								<li style={{ paddingBottom: '10px'}} value="75">Prevent bacteria growth by cooling hot food in a shallow dish.</li>
								<li style={{ paddingBottom: '10px'}} value="76">Make stock in large quantities and freeze in plastic bags for later use.</li>
								<li style={{ paddingBottom: '10px'}} value="77">Use Greek yogurt as a healthy substitute for mayo, sour cream, heavy cream and more.</li>
								<li style={{ paddingBottom: '10px'}} value="78">Before baking, remove butter and eggs from the fridge and let them reach room temperature.</li>
								<li style={{ paddingBottom: '10px'}} value="79">Invest in high-quality extra virgin olive oil for special meals or to drizzle over dishes to accent flavors.</li>
								<li style={{ paddingBottom: '10px'}} value="80">Let cooked or grilled meat rest at room temperature before serving.</li>
								<li style={{ paddingBottom: '10px'}} value="81">Plunge vegetables in ice water after blanching to help maintain a bright color.</li>
								<li style={{ paddingBottom: '10px'}} value="82">For easy clean-up, line baking sheets with parchment paper.</li>
								<li style={{ paddingBottom: '10px'}} value="83">Save money by purchasing in-season fruit and vegetables. You can freeze and store in airtight containers to save for later.</li>
								<li style={{ paddingBottom: '10px'}} value="84">Always taste your dishes before serving.<img alt="" class="img-right" height="141" hspace="10" src="/sitekrogersimpletruth/assets/Image/Salmon.jpg" width="212" /></li>
								<li style={{ paddingBottom: '10px'}} value="85">Never over-season seafood; you want to still be able to taste the flavor of the fish. Simply use lemon juice, salt and pepper.</li>
								<li style={{ paddingBottom: '10px'}} value="86">Look for ground beef that has been freshly ground.</li>
								<li style={{ paddingBottom: '10px'}} value="87">Remember: to preserve flavor and prevent burning, it's important to always cook slow and keep your heat low.</li>
								<li style={{ paddingBottom: '10px'}} value="88">Always, always, always measure when baking. Baking is a science and any wrong measurements can be disastrous.</li>
								<li style={{ paddingBottom: '10px'}} value="89">Rice cookers can be your personal kitchen assistants. Let them do all the tedious work and you will never worry about monitoring and watching water boil.</li>
								<li style={{ paddingBottom: '10px'}} value="90">To make leafy greens last longer, wrap them in damp paper towels and place in a sealable plastic bag before storing.</li>
								<li style={{ paddingBottom: '10px'}} value="91">Test oil in a pan before adding all of your ingredients. Throw a small piece in and make sure it sizzles before adding the rest.</li>
								<li style={{ paddingBottom: '10px'}} value="92">When cooking with chili peppers, protect your hands and eyes by wearing rubber gloves. Or coat your hands in vegetable oil and wash them with soap and water immediately after handling.</li>
								<li style={{ paddingBottom: '10px'}} value="93">Homemade meals are good for the heart and soul. Cook often and cook with others.</li>
								<li style={{ paddingBottom: '10px'}} value="94">To prevent sogginess, do not dress salads for large parties. Serve, then allow guests to add their own dressing.</li>
								<li style={{ paddingBottom: '10px'}} value="95">Seafood should never smell overwhelmingly fishy; that's a sure sign that it&rsquo;s starting to go bad.</li>
								<li style={{ paddingBottom: '10px'}} value="96">Chill cookie dough before putting it on a baking sheet. This will help prevent your butter from flattening and losing its fluffy texture.</li>
								<li style={{ paddingBottom: '10px'}} value="97">Remove seeds from chilies to help reduce heat.</li>
								<li style={{ paddingBottom: '10px'}} value="98">Keep key kitchen appliances, like a blender, on your countertop to encourage frequent use.</li>
								<li style={{ paddingBottom: '10px'}} value="99">Overcooked vegetables lose important enzymes and nutrients.</li>
								<li style={{ paddingBottom: '10px'}} value="100">Disinfect wood cutting boards by hand washing with vinegar.</li>
								<li style={{ paddingBottom: '10px'}} value="101">And always remember - keep it simple!</li>
							</ol>
						</div>
					</div>
				</div>
			</section>
   	</body>
  </html>
);
