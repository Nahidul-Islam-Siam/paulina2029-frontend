import { Facebook, Linkedin, Twitter, Share2 } from "lucide-react"

export default function SocialShare() {
  return (
    <div className="bg-[#01193605] py-4 px-4 mb-2 rounded-md shadow-md">
    <h2 className="text-2xl font-bold mb-4">Share this post</h2>
    {/* Social share buttons */}
    <div className="flex space-x-3">
      <button
        aria-label="Share on Facebook"
        className="h-10 w-10 flex items-center justify-center rounded-lg bg-[#33A86A] text-white hover:bg-green-100 transition-colors"
      >
        <Facebook className="h-5 w-5" />
      </button>
      <button
        aria-label="Share on LinkedIn"
        className="h-10 w-10 flex items-center justify-center rounded-lg bg-[#33A86A] text-white hover:bg-green-100 transition-colors"
      >
        <Linkedin className="h-5 w-5" />
      </button>
      <button
        aria-label="Share on Twitter"
        className="h-10 w-10 flex items-center justify-center rounded-lg bg-[#33A86A] text-white hover:bg-green-100 transition-colors"
      >
        <Twitter className="h-5 w-5" />
      </button>
      <button
        aria-label="Share via WhatsApp"
        className="h-10 w-10 flex items-center justify-center rounded-lg bg-[#33A86A] text-white hover:bg-green-100 transition-colors"
      >
        <Share2 className="h-5 w-5" />
      </button>
    </div>
    </div>
  )
}
