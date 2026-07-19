#include <cs50.h>
#include <stdio.h>

int main(void)
{
    int height;

    do
    {
        height = get_int("Height: ");
    }
    while (height < 1 || height > 8);

for (int i = 1; i <= height; i++)
{
    // Print left spaces
    for (int j = 0; j < height - i; j++)
    {
        printf(" ");
    }

    // Print left hashes
    for (int j = 0; j < i; j++)
    {
        printf("#");
    }

    // Print gap
    printf("  ");

    // Print right hashes
    for (int j = 0; j < i; j++)
    {
        printf("#");
    }

    // New line
    printf("\n");
}
}