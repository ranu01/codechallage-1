## Introduction

The is Phase code challange. This challange contains students grading system,,,,speed detector,,net salary calculator.

## Getting Started

If you haven't already, fork and clone this lab into your local environment.
Remember to **fork** a copy into your GitHub account first, then **clone** from
that copy. Navigate into its directory in the terminal, then run `code .` to
open the files in Visual Studio Code.

Next, run `npm install` to install the dependencies then run the test suite with
the `npm test` command.

## Challange 1

Write a program that prompts the user to input student marks. The input should be between 0 and 100. Then output the correct grade:

A > 79, B - 60 to 79, C - 49 to 59, D - 40 to 49, E - less 40.

This program evaluates grade for each student.It output score.

## Challange 2

Write a program that takes as input the speed of a car e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.

## Challange NetSalary

This program evaluate net salary
if the range is up 24,000 rates* 10%
if the range is between 24,001 - 32,333 * 25%
if the rates is between 32,334 - 500,000 _ 30%
if the rates is btween 500,001 - 800,000 _ 32.5%
Above 800,000 \*35%

// Calculate net salary after PAYEE tax deduction
let netSalary = grossSalary - payee;

    // Deduct NHIF and NSSF deductions
    netSalary -= NHIF_DEDUCTION;
    netSalary -= NSSF_DEDUCTION;
