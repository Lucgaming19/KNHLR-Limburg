app = Proc.new do |env|
  current_pid = Process.pid
  signal      = "SIGKILL"
  Process.kill(signal, current_pid)
  ['200', {'Content-Type' => 'text/html'}, ['A barebones rack app.']]
end

run app