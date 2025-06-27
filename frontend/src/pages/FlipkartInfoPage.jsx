import { motion } from "framer-motion";

const ContentSection = ({ title, content }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white shadow rounded-xl p-6 mb-6"
    >
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h2>
      <p className="text-gray-600 leading-relaxed text-sm whitespace-pre-line">
        {content}
      </p>
    </motion.div>
  );
};

const FlipkartInfoPage = () => {
  const sections = [
    {
      title: "Flipkart: The One-stop Shopping Destination",
      content: `E-commerce is revolutionizing the way we all shop in India. Why hop from one store to another when you can find everything on Flipkart at prices lower than anywhere else? Whether you're looking for mobile phones, laptops, cameras, TVs, appliances, or fashion essentials, Flipkart has it all. With secure payment options, easy returns, and a seamless shopping experience, Flipkart is your trusted online shopping partner.`,
    },
    {
      title: "Flipkart Plus",
      content: `A loyalty program that rewards you for every rupee you spend. Earn coins on every purchase and redeem them for exclusive deals, discounts, and more. Become a Flipkart Plus member today and enjoy extra savings!`,
    },
    {
      title: "No Cost EMI",
      content: `Buy your favorite products without stressing about the price with Flipkart's No Cost EMI option. Available on select products and credit cards, it lets you shop without upfront payments and no extra cost.`,
    },
    {
      title: "SuperCoin Rewards",
      content: `Earn SuperCoins on every order and redeem them for exciting benefits like free subscriptions, coupons, and additional discounts. The more you shop, the more you earn.`,
    },
    {
      title: "Mobile Exchange Offers",
      content: `Looking to upgrade your smartphone? Flipkart's Mobile Exchange Offer lets you exchange your old device for an instant discount on your new phone. Check eligibility and exchange value during checkout.`,
    },
    {
      title: "What Can You Buy From Flipkart?",
      content: `• Mobiles & Tablets\n• Electronics & Accessories\n• TVs & Appliances\n• Fashion (Men, Women, Kids)\n• Beauty, Toys, Sports, and Books\n• Home and Furniture\n• Grocery and Daily Essentials`,
    },
    {
      title: "Large Appliances",
      content: `Upgrade your home with our range of refrigerators, washing machines, air conditioners, and other home appliances from top brands like Samsung, LG, Whirlpool, Haier, and more.`,
    },
    {
      title: "Furniture and Home Decor",
      content: `Redesign your living space with our collection of stylish furniture and home décor — including sofas, beds, dining sets, curtains, and more, available at budget-friendly prices.`,
    },
    {
      title: "Grocery Essentials",
      content: `Shop daily essentials, packaged foods, beverages, household cleaning products, personal care, and more under Flipkart Supermart. Delivered fresh and fast to your doorstep.`,
    },
    {
      title: "Why Shop on Flipkart?",
      content: `• Lowest Prices Guaranteed\n• Free Delivery on Select Items\n• Easy Returns and Refunds\n• Secure Payments\n• 24x7 Customer Support\n• No Cost EMI Options\n• Loyalty Rewards\n• Huge Selection of Trusted Brands`,
    },
  ];

  return (
    <div className="w-full mx-auto p-4 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
        About Flipkart
      </h1>

      {sections.map((section, index) => (
        <ContentSection
          key={index}
          title={section.title}
          content={section.content}
        />
      ))}

      <footer className="text-center text-sm text-gray-500 py-8">
        © {new Date().getFullYear()} Flipkart Clone — For Educational Use Only.
      </footer>
    </div>
  );
};

export default FlipkartInfoPage;
