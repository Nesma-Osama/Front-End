"use client"

import { useTheme } from "@/components/theme-provider"

export default function ClientRoutePage()
{
    const theme=useTheme()
    return<h1>ClientRoutePage {theme.colors.primary}</h1>
}
// default use only in page 