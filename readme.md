<h1 align="center">Cipher CLI Tools</h1>

# Usage


| Name       | short   | Example                             | Description                      |
| ---------- | ------ | ---------------------------------- | -------------------------------- |
| `--config` _\*required_ | `-c` | `-c "C1-C1-R0-A"` | pattern `{XY(-)}n`|
| `--input` _default: stdin_ | `-i` | `-i "./input.txt"`                          |  path to input file        |
| `--output` _default: stdout_ | `-o` | `-o "./output.txt"`                          |  path to output file         |

# Config

- **`X` is a cipher mark:**
  - `C` is for Caesar cipher (with shift 1)
  - `A` is for Atbash cipher
  - `R` is for ROT-8 cipher
- **`Y` is flag of encoding or decoding (mandatory for Caesar cipher and ROT-8 cipher and should not be passed Atbash cipher)** 
  - `1` is for encoding
  - `0` is for decoding

# Installation

`npm install`

# Example

`node index -c "C1-C1-R0-A" -i "./input.txt" -o "./output.txt"`
