"use client";

import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";

export default function Word() {
  // Example word data – in a real app this could come from an API
  const word = "Serendipity";
  const meaning = "The occurrence of events by chance in a happy or beneficial way.";
  const example = "Finding the perfect gift was pure serendipity.";

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>{word}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{meaning}</CardDescription>
        <p className="mt-2 italic">{example}</p>
      </CardContent>
    </Card>
  );
}
