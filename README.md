# Blog Post

# Ans to the question no. 1

-> TypeScript শিখতে গেলে এর Interface এবং Type-এর কাজ প্রায় একই হলেও, এদের ব্যবহারের ক্ষেত্রে সামান্য পার্থক্য দেখা যায়। মূলত, কোডের স্ট্রাকচার ও পরিচ্ছন্নতা বজায় রাখার জন্য এগুলো ব্যবহার করা হয়।

-> একটি ইন্টারফেস মূলত একটি নকশা বা ডিজাইন। এটি একটি বস্তুর কাঠামোকে সংজ্ঞায়িত করে, নির্দিষ্ট করে যে এটিতে কোন উপাদানগুলি অবশ্যই থাকতে হবে। এই ইন্টারফেস ব্যবহার করে তৈরি করা যেকোনো বস্তুকে তখন এই পূর্ব-নির্ধারিত কাঠামোকে কঠোরভাবে মেনে চলতে হয়।

-> Types মানে কোনো একটি টাইপকে নতুন নামে define করা। এখানে শুধু object নয়—number, string, union, function—সব কিছুরই type তৈরি করা যায়। তাই Types একটু বেশি flexible।

-> মূল পার্থক্যগুলো:
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
-> টাইপস্ক্রিপ্ট শিখতে গেলে Interface এবং Type দুটোই অপরিহার্য। Interface প্রধানত অবজেক্টের কাঠামো বা ডিজাইন বর্ণনা করে, আর Type বিভিন্ন ডেটা টাইপের নামকরণ করতে পারে। কখন কোনটি ব্যবহার করতে হবে, সেই ধারণা থাকলে কোড আরও পরিচ্ছন্ন এবং সহজে বোধগম্য হয়। একজন শিক্ষানবিস হিসেবে এই দুটির মৌলিক পার্থক্য বুঝতে পারলেই অনেকখানি দ্বিধা দূর হয়ে যায়।


# Ans to the question no. 3

-> TypeScript-এ any, unknown, never—এই তিনটা special type আছে, যেগুলো কোডের আচরণ পরিষ্কারভাবে বোঝানোর জন্য ব্যবহার করা হয়।

-> any
কখনো exact type জানা না থাকলে বা দ্রুত কিছু test করতে চাইলে any ব্যবহার হয়।
সবচেয়ে বড় সমস্যা হলো TypeScript তখন আর কিছু check করে না।
মানে তুমি যাই করো, ভুল হলেও error দিবে না। এতে কোড risky হয়ে যায়।

Example
// any
let data: any="hello";
data=20;

-> unknown
unknown দেখতে any-এর মতো, কিন্তু অনেক safer। কারণ unknown টাইপের ভ্যালু ব্যবহার করার আগে অবশ্যই type check করতে হয়।
এটা সেই জায়গায় বেশি কাজে লাগে যেখানে external data বা API response আসতে পারে, আর টাইপ নিশ্চিত না।


// unknown
let value: unknown = "test";
if (typeof value === "string") {
  console.log(value.toUpperCase());
}

-> never
never মানে এমন কিছু যা কখনোই ঘটে না।
যেমন error throw করে, infinite loop-এ যায়, বা এমন জায়গা যেখানে আসলে পৌঁছানোর কথা না এই unreachable state দেখাতে never ব্যবহার হয়।


// never
function crash(): never {
  throw new Error("Something went wrong");
}

-> any flexible কিন্তু dangerous, unknown safe কারণ check লাগে, আর never সেই জায়গা দেখায় যেখানে function কখনোই শেষ হয় না বা return করে না। এই তিনটা type ঠিকমতো বুঝলে TypeScript অনেকটাই পরিষ্কার লাগে।
