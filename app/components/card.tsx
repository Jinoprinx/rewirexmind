// app/components/Card.tsx
import Link from "next/link";
import Image from "next/image";
import React from "react";

interface CardProps {
  /** The URL path for navigation (e.g. "/sleep-stories") */
  href: string;
  /** Path to the main image (e.g. "/images/sleep-story-main.jpg") */
  mainImage: string;
  /** (Optional) Path to the profile image (e.g. "/images/sleep-story-profile.jpg") */
  profileImage?: string;
  /** The title text for the card */
  title: string;
  /** The description text for the card */
  description: string;
}

const Card: React.FC<CardProps> = ({
  href,
  mainImage,
  profileImage,
  title,
  description,
}) => {
  // Debug logs to verify image URLs
  console.log("Main Image:", mainImage);
  if (profileImage) {
    console.log("Profile Image:", profileImage);
  } else {
    console.log("No Profile Image provided");
  }

  return (
    <Link
      href={href}
      className="block hover:shadow-lg transition-shadow duration-200"
    >
      <div className="bg-white rounded-xl overflow-hidden">
        {/* Main image: occupies the upper portion */}
        <div className="relative w-full h-48">
          <Image
            src={mainImage}
            alt={title}
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        {/* Lower part with circular profile image (if provided) and text */}
        <div className="p-4 flex items-center">
          {profileImage && (
            <div className="relative w-12 h-12">
              <Image
                src={profileImage}
                alt={`${title} Profile`}
                fill
                className="object-cover rounded-full"
                sizes="48px"
              />
            </div>
          )}
          <div className={profileImage ? "ml-4" : ""}>
            <h2 className="text-lg font-semibold text-primary">{title}</h2>
            <p className="text-gray-500 text-sm">{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
