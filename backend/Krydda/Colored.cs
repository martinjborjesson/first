namespace Krydda;

/// <summary>
/// Replaces Console.Write- and WriteLine to put some color on the tillvaro.
/// </summary>
public static class Colored
{
    private static void WithColors(ConsoleColor? fc, ConsoleColor? bc, Action action)
    {
        var prevFc = Console.ForegroundColor;
        var prevBc = Console.BackgroundColor;

        if (fc.HasValue) Console.ForegroundColor = fc.Value;
        if (bc.HasValue) Console.BackgroundColor = bc.Value;

        action();

        Console.ForegroundColor = prevFc;
        Console.BackgroundColor = prevBc;
    }

    public static void Write(string s, ConsoleColor fc) =>
        WithColors(fc, null, () => Console.Write(s));

    public static void Write(string s, ConsoleColor fc, ConsoleColor bc) =>
        WithColors(fc, bc, () => Console.Write(s));

    public static void WriteLine(string s, ConsoleColor fc) =>
        WithColors(fc, null, () => Console.WriteLine(s));

    public static void WriteLine(string s, ConsoleColor fc, ConsoleColor bc) =>
        WithColors(fc, bc, () => Console.WriteLine(s));
}