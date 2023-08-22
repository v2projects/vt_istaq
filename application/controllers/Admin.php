<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Admin extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();

        if (empty($this->session->userdata('id_admin'))) {
            redirect('login');
        }

        $this->load->model('M_virtualtour');
    }


    public function index()
    {
        // $recordAdmin = $this->M_virtualtour->getAdmin();
        // $DATAadm = array('dataAdm' => $recordAdmin);

        $this->load->view('templates/header');
        $this->load->view('templates/sidebar');
        $this->load->view('templates/topbar');
        $this->load->view('admin/index');
        $this->load->view('templates/footer');
    }

    public function virtualtour()
    {
        $recordVT = $this->M_virtualtour->getVirtualTour();
        $DATA = array('data_vt' => $recordVT);

        $this->load->view('templates/header', $DATA);
        $this->load->view('templates/sidebar', $DATA);
        $this->load->view('templates/topbar', $DATA);
        $this->load->view('admin/virtualtour', $DATA);
        $this->load->view('templates/footer');
    }

    public function profiladmin()
    {
        $recordVT = $this->M_virtualtour->getAdmin();
        $DATAadm = array('data_adm' => $recordVT);

        $this->load->view('templates/header', $DATAadm);
        $this->load->view('templates/sidebar', $DATAadm);
        $this->load->view('templates/topbar', $DATAadm);
        $this->load->view('admin/profiladmin', $DATAadm);
        $this->load->view('templates/footer');
    }

    public function forminput()
    {
        $recordVT = $this->M_virtualtour->getVirtualTour();
        $DATA = array('data_vt' => $recordVT);


        $this->load->view('templates/header', $DATA);
        $this->load->view('templates/sidebar', $DATA);
        $this->load->view('templates/topbar', $DATA);
        $this->load->view('admin/form_input', $DATA);
        $this->load->view('templates/footer');
    }
    public function AksiInput()
    {
        $id_virtualtour = $this->input->post('id_virtualtour');
        $nama_vt = $this->input->post('nama');
        $url = $this->input->post('url');
        $deskripsi = $this->input->post('deskripsi');
        $created = $this->input->post('created');

        $ekstensi_diperbolehkan = array('png', 'jpg', 'zip', 'rar');
        $nama = $_FILES['file']['name'];
        $x = explode('.', $nama);

        $ekstensi = strtolower(end($x));
        $ukuran    = $_FILES['file']['size'];
        $file_tmp = $_FILES['file']['tmp_name'];

        if (in_array($ekstensi, $ekstensi_diperbolehkan) === true) {
            move_uploaded_file($file_tmp, './assets/vt/' . $nama);
            $data = [
                'id_virtualtour' => $id_virtualtour,
                'nama' => $nama_vt,
                'url' => $url,
                'file' => $nama,
                'deskripsi' => $deskripsi,
                'created' => $created,
                'thumnail' => ''
            ];
            $this->M_virtualtour->InsertDatavt($data);
        } else {
            $pesan = "err";
        }
        // echo json_encode(['pesan' => $pesan]);
        // echo json_encode($return);

        // $DataInsert = array(
        //     'id_virtualtour' => $id_virtualtour,
        //     'nama' => $nama,
        //     'url' => $url,
        //     'file' => $file,
        //     'deskripsi' => $deskripsi,
        //     'created' => $created
        // );

        redirect('Admin/virtualtour');
    }

    public function upload_thumb()
    {
        $id = $this->input->post('id_virtualtour');
        $ekstensi_diperbolehkan = array('png', 'jpg', 'jpeg');
        $nama = $_FILES['thumbnail']['name'];
        $x = explode('.', $nama);

        $ekstensi = strtolower(end($x));
        $ukuran    = $_FILES['thumbnail']['size'];
        $file_tmp = $_FILES['thumbnail']['tmp_name'];

        if (in_array($ekstensi, $ekstensi_diperbolehkan) === true) {
            move_uploaded_file($file_tmp, './assets/img/' . $nama);
            $this->db->where('id_virtualtour', $id);
            $this->db->update('virtualtour', ['thumnail' => $nama]);
            redirect('admin/virtualtour');
        } else {
            $pesan = "err";
        }
    }

    public function hapus_vt($id)
    {
        $this->db->where('id_virtualtour', $id);
        $this->db->delete('virtualtour');
        redirect('admin/virtualtour');
    }

    public function ekstrak_zip($id)
    {
        $row = $this->db->get_where('virtualtour', ['id_virtualtour' => $id])->row_array();
        $zip = new ZipArchive();
        $file = "./assets/vt/" . $row['file'];

        if ($zip->open($file) == true) {
            $this->db->where('id_virtualtour', $id);
            $this->db->update('virtualtour', ['ext' => 1]);

            $zip->extractTo("./assets/vt");
            $zip->close();
            redirect('Admin/virtualtour');
        } else {
            echo "gagal";
        }
    }

    public function formedit($id_virtualtour)
    {
        $recordVTedit = $this->M_virtualtour->getDataVTedit($id_virtualtour);
        $DATA = array('data_vt' => $recordVTedit);

        $this->load->view('templates/header', $DATA);
        $this->load->view('templates/sidebar', $DATA);
        $this->load->view('templates/topbar', $DATA);
        $this->load->view('admin/form_edit', $DATA);
        $this->load->view('templates/footer');
    }

    public function AksiEdit()
    {
        //p
        $id_virtualtour = $this->input->post('id_virtualtour');
        $nama = $this->input->post('nama');
        $url = $this->input->post('url');
        $file = $this->input->post('file');
        $deskripsi = $this->input->post('deskripsi');
        $created = $this->input->post('created');

        $DataUpdate = array(
            'id_virtualtour' => $id_virtualtour,
            'nama' => $nama,
            'url' => $url,
            'file' => $file,
            'deskripsi' => $deskripsi,
            'created' => $created
        );

        $this->M_virtualtour->EditDatavt($DataUpdate, $id_virtualtour);
        redirect('Admin/virtualtour');
    }

    public function form_delete($id_virtualtour)
    {
        $recordVTdelete = $this->M_virtualtour->getDataVTdelete($id_virtualtour);
        $DATA = array('data_vt' => $recordVTdelete);

        $this->load->view('templates/header', $DATA);
        $this->load->view('templates/sidebar', $DATA);
        $this->load->view('templates/topbar', $DATA);
        $this->load->view('admin/form_delete', $DATA);
        $this->load->view('templates/footer');
    }

    public function AksiDelete($id_virtualtour)
    {
        $this->M_virtualtour->DeleteDatavt($id_virtualtour);
        redirect('Admin/virtualtour');
    }
}
