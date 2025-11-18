# Blog Post

# ans to the question no. 1

TypeScript শিখতে গেলে এর Interface এবং Type-এর কাজ প্রায় একই হলেও, এদের ব্যবহারের ক্ষেত্রে সামান্য পার্থক্য দেখা যায়। মূলত, কোডের স্ট্রাকচার ও পরিচ্ছন্নতা বজায় রাখার জন্য এগুলো ব্যবহার করা হয়।

একটি ইন্টারফেস মূলত একটি নকশা বা ডিজাইন। এটি একটি বস্তুর কাঠামোকে সংজ্ঞায়িত করে, নির্দিষ্ট করে যে এটিতে কোন উপাদানগুলি অবশ্যই থাকতে হবে। এই ইন্টারফেস ব্যবহার করে তৈরি করা যেকোনো বস্তুকে তখন এই পূর্ব-নির্ধারিত কাঠামোকে কঠোরভাবে মেনে চলতে হয়।

Types মানে কোনো একটি টাইপকে নতুন নামে define করা। এখানে শুধু object নয়—number, string, union, function—সব কিছুরই type তৈরি করা যায়। তাই Types একটু বেশি flexible।

মূল পার্থক্যগুলো:
Interface সাধারণত object-এর স্ট্রাকচার তৈরি করতে ব্যবহার করা হয়।
Types দিয়ে object ছাড়াও union, function signature—অনেক রকম টাইপ define করা যায়।
Interface সহজে extend করা যায়: interface A extends B {}
Interface বারবার declare করলে merging হয়, মানে সবগুলো একসাথে যুক্ত হয়ে যায়।
Types একবার declare করলে পরে আর merge হয় না।

Example
Interface Example:

interface User {
  name: string;
  age: number;
  id: number;
}

const person: User = {
  name: "MRM",
  age: 22,
  id:202;
};
Type Alias Example:

type Status = "success" | "error";

type Product = {
  title: string;
  price: number;
};

const laptop: Product = {
  title: "Laptop",
  price: 15000,
};
টাইপস্ক্রিপ্ট শিখতে গেলে Interface এবং Type দুটোই অপরিহার্য। Interface প্রধানত অবজেক্টের কাঠামো বা ডিজাইন বর্ণনা করে, আর Type বিভিন্ন ডেটা টাইপের নামকরণ করতে পারে। কখন কোনটি ব্যবহার করতে হবে, সেই ধারণা থাকলে কোড আরও পরিচ্ছন্ন এবং সহজে বোধগম্য হয়। একজন শিক্ষানবিস হিসেবে এই দুটির মৌলিক পার্থক্য বুঝতে পারলেই অনেকখানি দ্বিধা দূর হয়ে যায়।
