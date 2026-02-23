"use client";

import React from "react";

export default function CurrentYear() {
  return <span>{new Date().getFullYear()}</span>;
}
