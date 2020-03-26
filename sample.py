from subprocess import Popen, PIPE, STDOUT

cmd = "./build/get-cors https://www.cosdna.com/eng/cosmetic_4fb4290408.html"

p = Popen(cmd, shell=True, stdout=PIPE, stderr=STDOUT)
output = p.stdout.read()

print(output)
