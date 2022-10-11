    
    // Declare second integer, double, and String variables.
    var i2 = 6
    var d2 = 6.0
    var s2 = "wat"
    // Read and save an integer, double, and String to your variables.
    i2 = parseInt(input_stdin_array[0])
    d2 = parseFloat(input_stdin_array[1])
    s2 = input_stdin_array[2]
    // Print the sum of both integer variables on a new line.
    process.stdout.write((i + i2).toString() + "\n")
    // Print the sum of the double variables on a new line.
    process.stdout.write((d + d2).toFixed(1) + "\n")
    // Concatenate and print the String variables on a new line
    // The 's' variable above should be printed first.
    process.stdout.write(s+s2)