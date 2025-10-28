"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { ChefHat, Star, Utensils } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Home", id: "hero" },
            { name: "About", id: "about" },
            { name: "Menu", id: "menu" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Saveur"
          button={{
            text: "Reserve Table",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Experience Culinary Excellence"
          description="Where fresh ingredients meet passionate craftsmanship to create unforgettable dining experiences"
          tag="Fine Dining"
          tagIcon={ChefHat}
          buttons={[
            {
              text: "View Menu",
              href: "menu"
            },
            {
              text: "Book Now",
              href: "contact"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/34450955/pexels-photo-34450955.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Modern restaurant interior with elegant dining setup"
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Our Story"
          description={[
            "For over a decade, Saveur has been crafting exceptional dining experiences that blend traditional techniques with modern innovation.",
            "Our passionate team of chefs sources the finest local ingredients to create dishes that tell a story of flavor, artistry, and hospitality."
          ]}
          buttons={[
            {
              text: "Meet Our Chef",
              href: "about"
            }
          ]}
          showBorder={true}
        />
      </div>

      <div id="menu" data-section="menu">
        <ProductCardThree
          title="Featured Menu"
          description="Discover our chef's signature creations and seasonal specialties"
          tag="Signature Dishes"
          tagIcon={Utensils}
          products={[
            {
              id: "1",
              name: "Truffle Linguine",
              price: "$32",
              imageSrc: "https://images.pexels.com/photos/750071/pexels-photo-750071.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Truffle linguine with fresh herbs",
              initialQuantity: 1
            },
            {
              id: "2",
              name: "Pan-Seared Salmon",
              price: "$38",
              imageSrc: "https://images.pexels.com/photos/858508/pexels-photo-858508.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Pan-seared salmon with seasonal vegetables",
              initialQuantity: 1
            },
            {
              id: "3",
              name: "Chocolate Soufflé",
              price: "$18",
              imageSrc: "https://images.pexels.com/photos/33033816/pexels-photo-33033816.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Decadent chocolate soufflé",
              initialQuantity: 1
            }
          ]}
          buttons={[
            {
              text: "Full Menu",
              href: "#"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="What Our Guests Say"
          description="Hear from customers who have experienced our culinary excellence"
          tag="Reviews"
          tagIcon={Star}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Food Enthusiast",
              testimonial: "An absolutely incredible dining experience. The attention to detail in every dish is remarkable, and the service is impeccable.",
              imageSrc: "https://images.pexels.com/photos/9826293/pexels-photo-9826293.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Sarah Johnson"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Business Executive",
              testimonial: "Perfect venue for business dinners. The ambiance is sophisticated and the cuisine exceeds expectations every time.",
              imageSrc: "https://images.pexels.com/photos/4254266/pexels-photo-4254266.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Michael Chen"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Culinary Critic",
              testimonial: "Saveur consistently delivers innovative flavors while respecting classical techniques. A true gem in the city's dining scene.",
              imageSrc: "https://images.pexels.com/photos/8775064/pexels-photo-8775064.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Emily Rodriguez"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Restaurant Reviewer",
              testimonial: "From the moment you walk in, you're transported to a world of exceptional hospitality and extraordinary cuisine.",
              imageSrc: "https://images.pexels.com/photos/4350114/pexels-photo-4350114.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of David Kim"
            }
          ]}
        />
      </div>

      <div id="socialproof" data-section="socialproof">
        <SocialProofOne
          title="Featured In"
          description="Recognized by leading publications and industry experts"
          tag="Media"
          logos={[
            "https://images.pexels.com/photos/10142683/pexels-photo-10142683.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/3370333/pexels-photo-3370333.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/4009409/pexels-photo-4009409.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
          speed={40}
          showCard={true}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Reserve Your Table"
          description="Experience exceptional dining with us. Make your reservation today and let us create an unforgettable culinary journey for you."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: true
            },
            {
              name: "date",
              type: "date",
              placeholder: "Preferred Date",
              required: true
            },
            {
              name: "guests",
              type: "number",
              placeholder: "Number of Guests",
              required: true
            }
          ]}
          textarea={{
            name: "special_requests",
            placeholder: "Special requests or dietary restrictions...",
            rows: 4,
            required: false
          }}
          buttonText="Make Reservation"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          columns={[
            {
              items: [
                {
                  label: "Menu",
                  href: "menu"
                },
                {
                  label: "Reservations",
                  href: "contact"
                },
                {
                  label: "Private Events",
                  href: "#"
                }
              ]
            },
            {
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Our Chef",
                  href: "#"
                },
                {
                  label: "Press",
                  href: "#"
                }
              ]
            },
            {
              items: [
                {
                  label: "Contact",
                  href: "contact"
                },
                {
                  label: "Location",
                  href: "#"
                },
                {
                  label: "Hours",
                  href: "#"
                }
              ]
            }
          ]}
          logoText="Saveur"
        />
      </div>
    </ThemeProvider>
  );
}