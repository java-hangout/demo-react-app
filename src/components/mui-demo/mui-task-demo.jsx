import { useState } from "react";
import { 
    Alert, 
    Button, 
    Dialog, 
    DialogTitle, 
    DialogContent, 
    DialogActions, 
    Card, 
    CardContent, 
    CardActions, 
    Typography 
} from "@mui/material";
import { MUIDemo } from "./mui-demo";

export function MUITaskDemo() {
    // State for Dialog
    const [openDialog, setOpenDialog] = useState(false);
    // State for Alert visibility
    const [showAlert, setShowAlert] = useState(false);

    const[msg, setMsg] = useState('');

    // Dialog handlers
    const handleOpenDialog = () => setOpenDialog(true);
    const handleCloseDialog = () => setOpenDialog(false);

    // Alert handler
    const handleShowAlert = () => {
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 3000); // Auto-hide after 3 seconds
    };
  function setCardContent(){
    setMsg ("This Test Card Message ...!!");
  }
    return (
        <div className="container-fluid d-flex flex-column align-items-center gap-4 p-4">
            <div className="w-50">
                <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={handleShowAlert}
                    className="mb-3"
                >
                    Show Alert
                </Button>
                {showAlert && (
                    <Alert 
                        severity="success" 
                        onClose={() => setShowAlert(false)}
                    >
                        This is a success alert — check it out!
                    </Alert>
                )}
            </div>

            
            <div className="w-50">
                <Button 
                    variant="contained" 
                    color="secondary" 
                    onClick={handleOpenDialog}
                >
                    Open Dialog
                </Button>
                <Dialog 
                    open={openDialog} 
                    onClose={handleCloseDialog}
                >
                    <DialogTitle>Sample Dialog</DialogTitle>
                    <DialogContent>
                        <Typography>
                            This is a simple dialog example. You can add any content here.
                        </Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseDialog} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={handleCloseDialog} color="primary">
                            OK
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>

          
            <Card className="w-50">
                <CardContent>
                    <Typography variant="h5" component="div">
                        Sample Card
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        This is a basic card component. You can add any content here,
                        such as text, images, or other elements.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={setCardContent} size="small" color="primary">
                        Learn More {msg}
                    </Button>
                    <Button size="small" color="error">
                        Delete
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}