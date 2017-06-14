<!DOCTYPE html>
<html>
    <body>
        <!--not sure you can call jscript in php with echo function-->
        <!--might not be able to test until actual site deployment-->
        <script type="text/javascript">
            function clearLocalStorage() { localStorage.removeItem('lastSongName'); localStorage.removeItem('lastTime');
            }
        </script>
        <?php 
            $socket = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);]
                
            socket_bind ($socket, "DOTTED IP ADDRESS - FIGURE OUT", 20000);
            //not sure about dotted ip or port (last 2 paramters)
        
            socket_listen ($socket, $max_clients);
            //not sure about max_clients; could be inefficient
        
            $data = socket_read ($socket, 150);
            
            if ($data === false) {
                //client disconnected
                //not sure you can echo all that out; might need function created first
                echo "
                    <script type='text/javascript'> 
                        clearLocalStorage();
                    <script>
                    ";
            }
        ?>
    </body>
</html>