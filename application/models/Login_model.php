<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Login_model extends CI_Model
{
    public function validation_login($username, $password)
    {
        return $this->db->get_where('admin', ['username' => $username, 'password' => md5($password)]);
    }
}


/* End of file Login_model.php and path \application\models\Login_model.php */
