#include <cs50.h>
#include <stdio.h>

int main(void)
{
    long number = get_long("Number: ");
    long temp = number;

    int sum = 0;
    int count = 0;
    int first_digit = 0;
    int first_two_digits = 0;

    while (temp > 0)
    {
        int digit = temp % 10;

        if (count % 2 == 1)
        {
            int product = digit * 2;
            sum += product / 10;
            sum += product % 10;
        }
        else
        {
            sum += digit;
        }

        temp /= 10;
        count++;

        if (temp < 100 && temp >= 10)
        {
            first_two_digits = temp;
        }

        if (temp < 10 && temp > 0)
        {
            first_digit = temp;
        }
    }

    if (sum % 10 == 0)
    {
        if (count == 15 && (first_two_digits == 34 || first_two_digits == 37))
        {
            printf("AMEX\n");
        }
        else if (count == 16 && (first_two_digits >= 51 && first_two_digits <= 55))
        {
            printf("MASTERCARD\n");
        }
        else if ((count == 13 || count == 16) && first_digit == 4)
        {
            printf("VISA\n");
        }
        else
        {
            printf("INVALID\n");
        }
    }
    else
    {
        printf("INVALID\n");
    }
}
}